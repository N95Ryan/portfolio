export type SkillItem = {
  key: string;
};

const languages: SkillItem[] = [
  { key: "golang" },
  { key: "typescript" },
  { key: "javascript" },
];

const frontend: SkillItem[] = [
  { key: "react" },
  { key: "nextjs" },
  { key: "astro" },
  { key: "tailwind" },
  { key: "tanstack" },
  { key: "reduxToolkit" },
];

const mobile: SkillItem[] = [
  { key: "reactNative" },
  { key: "expo" },
];

const backend: SkillItem[] = [
  { key: "gin" },
  { key: "chi" },
  { key: "restApis" },
  { key: "graphql" },
];

const database: SkillItem[] = [
  { key: "postgresql" },
  { key: "supabase" },
];

const testing: SkillItem[] = [
  { key: "vitest" },
  { key: "playwright" },
  { key: "lighthouse" },
  { key: "postman" },
];

const devops: SkillItem[] = [
  { key: "docker" },
  { key: "aws" },
  { key: "terraform" },
  { key: "cloudflare" },
  { key: "render" },
  { key: "githubActions" },
  { key: "gitlabCi" },
];

const tools: SkillItem[] = [
  { key: "git" },
  { key: "vite" },
  { key: "bun" },
];

export const skillsDetails = {
  languages,
  frontend,
  mobile,
  backend,
  database,
  testing,
  devops,
  tools,
};
