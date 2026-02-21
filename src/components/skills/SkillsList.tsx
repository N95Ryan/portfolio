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
  SiCypress,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import type { IconType } from "react-icons";

// Mapping centralisé des icônes, couleurs et noms d'affichage
const skillsMap: Record<
  string,
  { icon: IconType; color: string; name: string }
> = {
  javascript: { icon: SiJavascript, color: "#F0DB4F", name: "JavaScript" },
  typescript: { icon: SiTypescript, color: "#007acc", name: "TypeScript" },
  golang: { icon: SiGo, color: "#00acd7", name: "Go" },
  python: { icon: SiPython, color: "#ffcf3b", name: "Python" },
  react: { icon: SiReact, color: "#61DAFB", name: "React" },
  nextjs: { icon: SiNextdotjs, color: "#fff", name: "Next.js" },
  astro: { icon: SiAstro, color: "#e93dc9", name: "Astro" },
  tanstack: { icon: SiReactquery, color: "#FF4154", name: "TanStack" },
  tailwind: { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
  nodedotjs: { icon: SiNodedotjs, color: "#539e43", name: "Node.js" },
  gin: { icon: SiGin, color: "#00acd7", name: "Gin" },
  echo: { icon: TbApi, color: "#1E90FF", name: "Echo" },
  reactNative: { icon: SiReact, color: "#61DAFB", name: "React Native" },
  expo: { icon: SiExpo, color: "#fff", name: "Expo" },
  postgresql: { icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
  supabase: { icon: SiSupabase, color: "#3ECF8E", name: "Supabase" },
  cloudinary: { icon: SiCloudinary, color: "#3448C5", name: "Cloudinary" },
  vite: { icon: SiVite, color: "#fff000", name: "Vite" },
  graphql: { icon: SiGraphql, color: "#E10098", name: "GraphQL" },
  postman: { icon: SiPostman, color: "#FF6C37", name: "Postman" },
  docker: { icon: SiDocker, color: "#2496ED", name: "Docker" },
  githubActions: {
    icon: SiGithubactions,
    color: "#2088FF",
    name: "GitHub Actions",
  },
  vercel: { icon: SiVercel, color: "#fff", name: "Vercel" },
  vitest: { icon: SiVitest, color: "#6E9F18", name: "Vitest" },
  playwright: { icon: SiCypress, color: "#2EAD33", name: "Playwright" },
  lighthouse: { icon: SiLighthouse, color: "#F44B21", name: "Lighthouse" },
};

interface SkillData {
  key: string;
}

interface SkillsListProps {
  skills: SkillData[];
}

export default function SkillsList({ skills }: SkillsListProps) {
  return (
    <>
      {skills.map((skill) => {
        const skillConfig = skillsMap[skill.key];

        if (!skillConfig) {
          console.warn(`Skill config not found for key: ${skill.key}`);
          return null;
        }

        return (
          <SkillCard
            key={skill.key}
            title={skillConfig.name}
            Icon={skillConfig.icon}
            color={skillConfig.color}
          />
        );
      })}
    </>
  );
}
