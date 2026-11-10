import { Client, isFullPage, type PageObjectResponse } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { marked } from "marked";
import { env as cloudflareEnv } from "cloudflare:workers";

export type ArticleLang = "en" | "fr";

export type Article = {
  id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  date: string;
  lang: ArticleLang;
  translationKey: string;
};

export type ArticleWithContent = Article & {
  html: string;
};

type RichTextProperty = {
  type: "rich_text";
  rich_text: Array<{ plain_text: string }>;
};

type TitleProperty = {
  type: "title";
  title: Array<{ plain_text: string }>;
};

type SelectProperty = {
  type: "select";
  select: { name: string } | null;
};

type MultiSelectProperty = {
  type: "multi_select";
  multi_select: Array<{ name: string }>;
};

type CheckboxProperty = {
  type: "checkbox";
  checkbox: boolean;
};

type DateProperty = {
  type: "date";
  date: { start: string; end?: string | null } | null;
};

function getNotionClient(): Client {
  const token = cloudflareEnv.NOTION_TOKEN;
  if (!token) {
    throw new Error("NOTION_TOKEN manquante");
  }
  return new Client({ auth: token, notionVersion: "2025-09-03" });
}

let resolvedDataSourceId: string | null = null;

async function resolveDataSourceId(): Promise<string> {
  if (resolvedDataSourceId) {
    return resolvedDataSourceId;
  }

  const configuredId = cloudflareEnv.NOTION_DATA_SOURCE_ID;
  if (!configuredId) {
    throw new Error("NOTION_DATA_SOURCE_ID manquante");
  }

  const notion = getNotionClient();

  try {
    await notion.dataSources.retrieve({ data_source_id: configuredId });
    resolvedDataSourceId = configuredId;
    return configuredId;
  } catch (error) {
    const isNotFound =
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code?: string }).code === "object_not_found";
    if (!isNotFound) {
      throw error;
    }
  }

  const database = await notion.databases.retrieve({ database_id: configuredId });
  const dataSourceId = database.data_sources?.[0]?.id;
  if (!dataSourceId) {
    throw new Error(
      "NOTION_DATA_SOURCE_ID invalide : aucune data source trouvée pour cet identifiant",
    );
  }

  resolvedDataSourceId = dataSourceId;
  return dataSourceId;
}

function richTextValue(
  property: PageObjectResponse["properties"][string] | undefined,
): string {
  if (!property || property.type !== "rich_text") {
    return "";
  }
  const rich = property as RichTextProperty;
  return rich.rich_text.map((item) => item.plain_text).join("");
}

function titleValue(
  property: PageObjectResponse["properties"][string] | undefined,
): string {
  if (!property || property.type !== "title") {
    return "";
  }
  const title = property as TitleProperty;
  return title.title.map((item) => item.plain_text).join("");
}

function isArticleLang(value: string): value is ArticleLang {
  return value === "en" || value === "fr";
}

function mapPageToArticle(page: PageObjectResponse): Article | null {
  const props = page.properties;

  const title = titleValue(props.Title);
  const slug = richTextValue(props.Slug).trim();
  if (!title || !slug) {
    return null;
  }

  const langRaw = props.Lang?.type === "select" ? (props.Lang as SelectProperty).select?.name ?? "" : "";
  if (!isArticleLang(langRaw)) {
    return null;
  }

  const published =
    props.Published?.type === "checkbox"
      ? (props.Published as CheckboxProperty).checkbox
      : false;
  if (!published) {
    return null;
  }

  const tags =
    props.Tags?.type === "multi_select"
      ? (props.Tags as MultiSelectProperty).multi_select.map((tag) => tag.name)
      : [];

  const dateProp =
    props.Date?.type === "date" ? (props.Date as DateProperty).date : null;
  const date = dateProp?.start ?? page.created_time;

  return {
    id: page.id,
    title,
    slug,
    description: richTextValue(props.Description),
    tags,
    date,
    lang: langRaw,
    translationKey: richTextValue(props.TranslationKey).trim(),
  };
}

async function queryAllPublishedPages(
  filter: NonNullable<Parameters<Client["dataSources"]["query"]>[0]>["filter"],
  sorts?: NonNullable<Parameters<Client["dataSources"]["query"]>[0]>["sorts"],
): Promise<PageObjectResponse[]> {
  const notion = getNotionClient();
  const dataSourceId = await resolveDataSourceId();
  const pages: PageObjectResponse[] = [];
  let startCursor: string | undefined;

  do {
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter,
      sorts,
      start_cursor: startCursor,
      page_size: 100,
    });

    for (const result of response.results) {
      if (isFullPage(result)) {
        pages.push(result);
      }
    }

    startCursor = response.has_more
      ? (response.next_cursor ?? undefined)
      : undefined;
  } while (startCursor);

  return pages;
}

export async function getPublishedArticles(lang: ArticleLang): Promise<Article[]> {
  const pages = await queryAllPublishedPages(
    {
      and: [
        { property: "Published", checkbox: { equals: true } },
        { property: "Lang", select: { equals: lang } },
      ],
    },
    [{ property: "Date", direction: "descending" }],
  );

  return pages
    .map((page) => mapPageToArticle(page))
    .filter((article): article is Article => article !== null);
}

async function pageToHtml(pageId: string): Promise<string> {
  const notion = getNotionClient();
  const n2m = new NotionToMarkdown({ notionClient: notion });
  n2m.setCustomTransformer("image", async () => "");
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdBlocks);
  return await marked.parse(mdString.parent);
}

export async function getArticleBySlug(
  lang: ArticleLang,
  slug: string,
): Promise<ArticleWithContent | null> {
  const pages = await queryAllPublishedPages({
    and: [
      { property: "Published", checkbox: { equals: true } },
      { property: "Lang", select: { equals: lang } },
      { property: "Slug", rich_text: { equals: slug } },
    ],
  });

  const page = pages.find((candidate) => {
    const article = mapPageToArticle(candidate);
    return article?.slug === slug;
  });

  if (!page) {
    return null;
  }

  const article = mapPageToArticle(page);
  if (!article) {
    return null;
  }

  const html = await pageToHtml(page.id);
  return { ...article, html };
}

export async function getAlternate(
  translationKey: string,
  lang: ArticleLang,
): Promise<string | null> {
  const key = translationKey.trim();
  if (!key) {
    return null;
  }

  const targetLang: ArticleLang = lang === "en" ? "fr" : "en";
  const pages = await queryAllPublishedPages({
    and: [
      { property: "Published", checkbox: { equals: true } },
      { property: "Lang", select: { equals: targetLang } },
      { property: "TranslationKey", rich_text: { equals: key } },
    ],
  });

  for (const page of pages) {
    const article = mapPageToArticle(page);
    if (article && article.translationKey === key) {
      return article.slug;
    }
  }

  return null;
}
