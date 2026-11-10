export type SkillItem = {
  key: string;
};

const languages: SkillItem[] = [
  { key: "golang" },
  { key: "typescript" },
];

const frontend: SkillItem[] = [
  { key: "react" },
  { key: "nextjs" },
  { key: "astro" },
  { key: "expo" },
  { key: "tailwind" },
  { key: "tanstack" },
  { key: "reduxToolkit" },
];

const backend: SkillItem[] = [
  { key: "chi" },
  { key: "gin" },
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
  { key: "cloudflare" },
  { key: "aws" },
  { key: "terraform" },
  { key: "render" },
  { key: "githubActions" },
  { key: "gitlabCi" },
];

const tools: SkillItem[] = [
  { key: "git" },
  { key: "vite" },
  { key: "bun" },
];

const aiTools: SkillItem[] = [
  { key: "claude" },
  { key: "cursor" },
];

export const skillsDetails = {
  languages,
  frontend,
  backend,
  database,
  testing,
  devops,
  tools,
  aiTools,
};
