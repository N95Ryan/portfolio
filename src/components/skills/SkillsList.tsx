import SkillCard from "./SkillCard";
import {
  SiTypescript,
  SiGo,
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
  SiBun,
  SiReactquery,
  SiVitest,
  SiCloudflare,
  SiLighthouse,
} from "react-icons/si";
import type { SkillIconComponent } from "./icons/types";
import PlaywrightIcon from "./icons/PlaywrightIcon";
import GoChiIcon from "./icons/GoChiIcon";
import ReduxToolkitIcon from "./icons/ReduxToolkitIcon";
import GitLabCiIcon from "./icons/GitLabCiIcon";
import GitHubIcon from "./icons/GitHubIcon";
import NextIntlIcon from "./icons/NextIntlIcon";
import RestApisIcon from "./icons/RestApisIcon";
import { defaultLang, translations } from "@i18n/translations";

type Lang = keyof typeof translations;
type SkillItemKey = keyof (typeof translations)[typeof defaultLang];

type SkillConfig = {
  icon: SkillIconComponent;
  color: string;
  multicolor?: boolean;
};

/** Icônes et couleurs par clé. L’ordre à l’écran = tableaux dans `src/data/skillDetails.ts`. */
const skillsMap: Record<string, SkillConfig> = {
  // javascript: { icon: SiJavascript, color: "#F0DB4F" },
  typescript: { icon: SiTypescript, color: "#007acc" },
  golang: { icon: SiGo, color: "#00acd7" },
  react: { icon: SiReact, color: "#61DAFB" },
  nextjs: { icon: SiNextdotjs, color: "#fff" },
  astro: { icon: SiAstro, color: "#e93dc9" },
  tanstack: { icon: SiReactquery, color: "#FF4154" },
  tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  chi: { icon: GoChiIcon, color: "#01933F", multicolor: true },
  gin: { icon: SiGin, color: "#00acd7" },
  reduxToolkit: { icon: ReduxToolkitIcon, color: "#764ABC" },
  nextIntl: { icon: NextIntlIcon, color: "#38BDF8" },
  nodedotjs: { icon: SiNodedotjs, color: "#539e43" },
  reactNative: { icon: SiReact, color: "#61DAFB" },
  expo: { icon: SiExpo, color: "#fff" },
  postgresql: { icon: SiPostgresql, color: "#336791" },
  supabase: { icon: SiSupabase, color: "#3ECF8E" },
  restApis: { icon: RestApisIcon, color: "#94A3B8" },
  vite: { icon: SiVite, color: "#fff000" },
  bun: { icon: SiBun, color: "#FBF0DF" },
  graphql: { icon: SiGraphql, color: "#E10098" },
  postman: { icon: SiPostman, color: "#FF6C37" },
  docker: { icon: SiDocker, color: "#2496ED" },
  cloudflare: { icon: SiCloudflare, color: "#F38020" },
  githubActions: { icon: GitHubIcon, color: "#fff" },
  gitlabCi: { icon: GitLabCiIcon, color: "#FC6D26" },
  vitest: { icon: SiVitest, color: "#6E9F18" },
  playwright: { icon: PlaywrightIcon, color: "#2EAD33", multicolor: true },
  lighthouse: { icon: SiLighthouse, color: "#F44B21" },
};

function skillLabel(lang: Lang, key: string): string {
  const itemKey = `skills.items.${key}` as SkillItemKey;
  const localized = translations[lang][itemKey];
  if (typeof localized === "string") {
    return localized;
  }
  const fallback = translations[defaultLang][itemKey];
  if (typeof fallback === "string") {
    return fallback;
  }
  return key;
}

interface SkillData {
  key: string;
}

interface SkillsListProps {
  skills: SkillData[];
  lang: Lang;
}

export default function SkillsList({ skills, lang }: SkillsListProps) {
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
            title={skillLabel(lang, skill.key)}
            Icon={skillConfig.icon}
            color={skillConfig.color}
            multicolor={skillConfig.multicolor}
          />
        );
      })}
    </>
  );
}
