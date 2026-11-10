import type { ArticleLang } from "@lib/notion";

export function formatArticleDate(isoDate: string, lang: ArticleLang): string {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat(lang === "fr" ? "fr-CA" : "en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function blogListPath(lang: ArticleLang): string {
  return lang === "fr" ? "/fr/blog" : "/blog";
}

export function blogArticlePath(lang: ArticleLang, slug: string): string {
  return `${blogListPath(lang)}/${slug}`;
}
