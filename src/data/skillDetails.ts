import {
  SiJavascript,
  SiTypescript,
  SiGo,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiNodedotjs,
  SiGin,
  SiExpo,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiPostman,
  SiGraphql,
  SiVite,
  SiCloudinary,
  SiReactquery,
  SiVitest,
  SiGithubactions,
  SiVercel,
  SiLighthouse,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import type { IconType } from "react-icons";

export type SkillItem = {
  key: string;
  icon: IconType;
  color: string;
};

const languages: SkillItem[] = [
  { key: "javascript", icon: SiJavascript, color: "#F0DB4F" },
  { key: "typescript", icon: SiTypescript, color: "#007acc" },
  { key: "golang", icon: SiGo, color: "#00acd7" },
  { key: "python", icon: SiPython, color: "#ffcf3b" },
];

const frameworks: SkillItem[] = [
  { key: "react", icon: SiReact, color: "#61DAFB" },
  { key: "nextjs", icon: SiNextdotjs, color: "#fff" },
  { key: "astro", icon: SiAstro, color: "#e93dc9" },
  { key: "tanstack", icon: SiReactquery, color: "#FF4154" },
  { key: "tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { key: "nodedotjs", icon: SiNodedotjs, color: "#539e43" },
  { key: "gin", icon: SiGin, color: "#00acd7" },
  { key: "echo", icon: TbApi, color: "#1E90FF" },
];

const databaseCloud: SkillItem[] = [
  { key: "postgresql", icon: SiPostgresql, color: "#336791" },
  { key: "supabase", icon: SiSupabase, color: "#3ECF8E" },
  { key: "cloudinary", icon: SiCloudinary, color: "#3448C5" },
];

const mobile: SkillItem[] = [
  { key: "reactNative", icon: SiReact, color: "#61DAFB" },
  { key: "expo", icon: SiExpo, color: "#fff" },
];

const tools: SkillItem[] = [
  { key: "vite", icon: SiVite, color: "#fff000" },
  { key: "graphql", icon: SiGraphql, color: "#E10098" },
  { key: "postman", icon: SiPostman, color: "#FF6C37" },
];

const devops: SkillItem[] = [
  { key: "docker", icon: SiDocker, color: "#2496ED" },
  { key: "githubActions", icon: SiGithubactions, color: "#2088FF" },
  { key: "vercel", icon: SiVercel, color: "#fff" },
];

const testing: SkillItem[] = [
  { key: "vitest", icon: SiVitest, color: "#6E9F18" },
  { key: "lighthouse", icon: SiLighthouse, color: "#F44B21" },
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
