import { projects } from "@data/projects";
import type { Language } from "@types/index";

interface ProjectCardProps {
  projectId: string;
  lang: Language;
  buttonLabel: string;
}

const parseHexRgb = (color: string): [number, number, number] | null => {
  const hex = color.replace("#", "").trim();
  if (hex.length !== 6) return null;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  if ([r, g, b].some(Number.isNaN)) return null;
  return [r, g, b];
};

const darkenHexColor = (color: string): string => {
  const rgb = parseHexRgb(color);
  if (!rgb) return color;
  const darken = (val: number) => Math.max(0, Math.floor(val * 0.85));
  return `rgb(${darken(rgb[0])}, ${darken(rgb[1])}, ${darken(rgb[2])})`;
};

const isLightHexColor = (color: string): boolean => {
  const rgb = parseHexRgb(color);
  if (!rgb) return false;
  const [r, g, b] = rgb;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6;
};

export default function ProjectCard({
  projectId,
  lang,
  buttonLabel,
}: ProjectCardProps) {
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return null;
  }

  const projectName = project.name[lang];
  const projectDescription = project.description[lang];

  const bgColor = project.bgcolor || "#ffffff";
  const textColor = project.textColor || "#000000";
  const linkColor = project.linkColor || "#343a40";
  const linkTextColor =
    project.linkTextColor?.trim() ||
    (isLightHexColor(linkColor) ? "#343a40" : "#ffffff");
  const linkHoverColor = darkenHexColor(linkColor);

  return (
    <div className="w-full h-full group perspective-1000">
      <div
        className="relative rounded-3xl overflow-hidden transition-all duration-700 ease-out bg-gray-950/90 h-full flex flex-col min-h-[400px] translate-z-0 will-change-[transform,box-shadow] shadow-[0_1px_3px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.06),0_16px_48px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_20px_40px_rgba(0,0,0,0.12),0_32px_64px_rgba(0,0,0,0.08)]"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
          <img
            src={project.image}
            alt={projectName}
            className="w-full h-full object-cover transition-all duration-[800ms] ease-out group-hover:scale-[1.08] contrast-[1.02] saturate-[1.05] group-hover:contrast-[1.05] group-hover:saturate-[1.1] group-hover:brightness-105"
          />

          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[600ms] ease-out"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 0, 0, 0.97) 0%, rgba(20, 20, 30, 0.95) 50%, rgba(0, 0, 0, 0.97) 100%)",
            }}
          >
            <div className="transform scale-90 group-hover:scale-100 transition-transform duration-500">
              <p
                className="text-white text-center mx-4 sm:mx-6 text-xs sm:text-sm md:text-base leading-relaxed font-light tracking-wide px-2 sm:px-3 break-words overflow-wrap-anywhere"
                style={{
                  textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                {projectDescription}
              </p>
            </div>
          </div>

          <div
            className="absolute top-0 left-0 right-0 h-24 pointer-events-none opacity-60"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%)",
            }}
          />
        </div>

        <div
          className="flex flex-col p-4 sm:p-5 md:p-6 lg:p-7 project-card-content relative flex-grow"
          style={{
            backgroundColor: bgColor,
            color: textColor,
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.05) 50%, transparent 100%)",
            }}
          />

          <h2
            className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 project-card-title tracking-tight line-clamp-2 break-words"
            style={{
              color: textColor,
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            {projectName}
          </h2>

          <div className="mb-4 sm:mb-5 flex-grow min-h-[2.5rem] flex flex-wrap gap-1.5 sm:gap-2 items-start">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs sm:text-xs font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-flex items-center project-card-text tracking-wide whitespace-nowrap"
                style={{
                  color: textColor,
                  backgroundColor: `${textColor}12`,
                  border: `1px solid ${textColor}18`,
                  letterSpacing: "0.01em",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-end w-full mt-auto">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 transition-all duration-300 text-xs sm:text-sm font-medium rounded-xl overflow-hidden group/btn whitespace-nowrap bg-[var(--link-color)] text-[var(--link-text-color)] shadow-[0_2px_8px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] hover:bg-[var(--link-hover-color)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.08)] active:translate-y-0 active:scale-[0.98]"
              style={{
                color: linkTextColor,
                ["--link-color" as string]: linkColor,
                ["--link-hover-color" as string]: linkHoverColor,
                ["--link-text-color" as string]: linkTextColor,
                letterSpacing: "0.02em",
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                }}
              />
              <span className="relative">{buttonLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
