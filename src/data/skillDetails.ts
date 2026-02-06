export type SkillItem = {
  key: string;
};

const languages: SkillItem[] = [
  { key: "javascript" },
  { key: "typescript" },
  { key: "golang" },
  { key: "python" },
];

const frameworks: SkillItem[] = [
  { key: "react" },
  { key: "nextjs" },
  { key: "astro" },
  { key: "tanstack" },
  { key: "tailwind" },
  { key: "nodedotjs" },
  { key: "gin" },
  { key: "echo" },
];

const databaseCloud: SkillItem[] = [
  { key: "postgresql" },
  { key: "supabase" },
  { key: "cloudinary" },
];

const mobile: SkillItem[] = [
  { key: "reactNative" },
  { key: "expo" },
];

const tools: SkillItem[] = [
  { key: "vite" },
  { key: "graphql" },
  { key: "postman" },
];

const devops: SkillItem[] = [
  { key: "docker" },
  { key: "githubActions" },
  { key: "vercel" },
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
