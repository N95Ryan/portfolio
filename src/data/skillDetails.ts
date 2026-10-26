export type SkillItem = {
  key: string;
};

const languages: SkillItem[] = [
  // { key: "javascript" },
  { key: "typescript" },
  { key: "golang" },
];

const frameworks: SkillItem[] = [
  { key: "react" },
  { key: "nextjs" },
  { key: "astro" },
  { key: "tanstack" },
  { key: "tailwind" },
  { key: "reduxToolkit" },
  { key: "chi" },
  { key: "gin" },
  // { key: "nextIntl" },
  // { key: "nodedotjs" },
];
const databaseCloud: SkillItem[] = [
  { key: "restApis" },
  { key: "postgresql" },
  { key: "supabase" },
];

const mobile: SkillItem[] = [
  { key: "reactNative" },
  { key: "expo" },
];

const tools: SkillItem[] = [
  { key: "vite" },
  { key: "bun" },
  { key: "graphql" },
  { key: "postman" },
];

const devops: SkillItem[] = [
  { key: "docker" },
  { key: "cloudflare" },
  { key: "githubActions" },
  { key: "gitlabCi" },
];

const testing: SkillItem[] = [
  { key: "vitest" },
  { key: "playwright" },
  { key: "lighthouse" },
];

export const skillsDetails = {
  languages,
  frameworks,
  mobile,
  tools,
  databaseCloud,
  testing,
  devops,
};

export default skillsDetails;
