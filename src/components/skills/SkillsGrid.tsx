import SkillCard from "./SkillCard";
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

// Mapping des icônes par clé
const iconMap: Record<string, IconType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  golang: SiGo,
  python: SiPython,
  react: SiReact,
  nextjs: SiNextdotjs,
  astro: SiAstro,
  tanstack: SiReactquery,
  tailwind: SiTailwindcss,
  nodedotjs: SiNodedotjs,
  gin: SiGin,
  echo: TbApi,
  reactNative: SiReact,
  expo: SiExpo,
  postgresql: SiPostgresql,
  supabase: SiSupabase,
  cloudinary: SiCloudinary,
  vite: SiVite,
  graphql: SiGraphql,
  postman: SiPostman,
  docker: SiDocker,
  githubActions: SiGithubactions,
  vercel: SiVercel,
  vitest: SiVitest,
  lighthouse: SiLighthouse,
};

// Mapping des couleurs par clé
const colorMap: Record<string, string> = {
  javascript: "#F0DB4F",
  typescript: "#007acc",
  golang: "#00acd7",
  python: "#ffcf3b",
  react: "#61DAFB",
  nextjs: "#fff",
  astro: "#e93dc9",
  tanstack: "#FF4154",
  tailwind: "#06B6D4",
  nodedotjs: "#539e43",
  gin: "#00acd7",
  echo: "#1E90FF",
  reactNative: "#61DAFB",
  expo: "#fff",
  postgresql: "#336791",
  supabase: "#3ECF8E",
  cloudinary: "#3448C5",
  vite: "#fff000",
  graphql: "#E10098",
  postman: "#FF6C37",
  docker: "#2496ED",
  githubActions: "#2088FF",
  vercel: "#fff",
  vitest: "#6E9F18",
  lighthouse: "#F44B21",
};

interface SkillData {
  key: string;
}

interface SkillsGridProps {
  skills: SkillData[];
  category: string;
  translations: Record<string, string>;
}

export default function SkillsGrid({
  skills,
  category,
  translations,
}: SkillsGridProps) {
  return (
    <>
      {skills.map((skill) => {
        const Icon = iconMap[skill.key];
        const color = colorMap[skill.key];
        const title =
          translations[`skills.list.${category}.${skill.key}`] || skill.key;

        if (!Icon) {
          console.warn(`Icon not found for key: ${skill.key}`);
          return null;
        }

        return (
          <SkillCard key={skill.key} title={title} Icon={Icon} color={color} />
        );
      })}
    </>
  );
}
