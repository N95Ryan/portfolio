import { projects } from "@data/projects";
import type { Language } from "@types/index";

interface ProjectCardProps {
  projectId: string;
  lang: Language;
  buttonLabel: string;
}

export default function ProjectCard({
  projectId,
  lang,
  buttonLabel,
}: ProjectCardProps) {
  // Récupérer les données du projet depuis projects.ts
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return null;
  }

  // Utiliser les données multilingues directement depuis projects.ts
  const projectName = project.name[lang];
  const projectDescription = project.description[lang];
  const projectTechnologies = project.technologies;

  // Utiliser les couleurs directement depuis projects.ts
  const bgColor = project.bgcolor || "#ffffff";
  const textColor = project.textColor || "#000000";
  const linkColor = project.linkColor || "#343a40";
  const linkTextColor = project.linkTextColor || "#ffffff";

  // Calculer une couleur hover légèrement plus foncée
  const getHoverColor = (color: string): string => {
    // Convertir hex en RGB
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Assombrir de 15%
    const darken = (val: number) => Math.max(0, Math.floor(val * 0.85));

    return `rgb(${darken(r)}, ${darken(g)}, ${darken(b)})`;
  };

  return (
    <div className="w-full h-full group perspective-1000">
      <div
        className="relative rounded-3xl overflow-hidden transition-all duration-700 ease-out backdrop-blur-sm h-full flex flex-col min-h-[400px]"
        style={{
          boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.05), 0 8px 24px rgba(0, 0, 0, 0.06), 0 16px 48px rgba(0, 0, 0, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          transform: "translateZ(0)",
          willChange: "transform, box-shadow",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px) translateZ(0)";
          e.currentTarget.style.boxShadow =
            "0 4px 6px rgba(0, 0, 0, 0.07), 0 20px 40px rgba(0, 0, 0, 0.12), 0 32px 64px rgba(0, 0, 0, 0.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) translateZ(0)";
          e.currentTarget.style.boxShadow =
            "0 1px 3px rgba(0, 0, 0, 0.05), 0 8px 24px rgba(0, 0, 0, 0.06), 0 16px 48px rgba(0, 0, 0, 0.03)";
        }}
      >
        {/* Image Container with Parallax Effect */}
        <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
          <img
            src={project.image}
            alt={projectName}
            className="w-full h-full object-cover transition-all duration-[800ms] ease-out group-hover:scale-[1.08]"
            style={{
              filter: "contrast(1.02) saturate(1.05)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter =
                "contrast(1.05) saturate(1.1) brightness(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "contrast(1.02) saturate(1.05)";
            }}
          />

          {/* Sophisticated Gradient Overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[600ms] ease-out backdrop-blur-[2px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 0, 0, 0.94) 0%, rgba(20, 20, 30, 0.92) 50%, rgba(0, 0, 0, 0.94) 100%)",
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

          {/* Subtle top gradient for depth */}
          <div
            className="absolute top-0 left-0 right-0 h-24 pointer-events-none opacity-60"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Content Container with refined spacing */}
        <div
          className="flex flex-col p-4 sm:p-5 md:p-6 lg:p-7 project-card-content relative flex-grow"
          style={{
            backgroundColor: bgColor,
            color: textColor,
          }}
        >
          {/* Subtle inner shadow for depth */}
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

          {/* Refined technology badge */}
          <div className="mb-4 sm:mb-5 flex-grow min-h-[2.5rem] flex items-start">
            <span
              className="text-xs sm:text-xs font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-flex items-center gap-1.5 project-card-text tracking-wide break-words"
              style={{
                color: textColor,
                backgroundColor: `${textColor}12`,
                border: `1px solid ${textColor}18`,
                letterSpacing: "0.01em",
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {projectTechnologies}
            </span>
          </div>

          {/* Premium button with micro-interactions */}
          <div className="flex justify-end w-full mt-auto">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 transition-all duration-300 text-xs sm:text-sm font-medium rounded-xl overflow-hidden group/btn whitespace-nowrap"
              style={{
                backgroundColor: linkColor,
                color: linkTextColor,
                boxShadow:
                  "0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  getHoverColor(linkColor);
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = linkColor;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(0.98)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1)";
              }}
            >
              {/* Subtle shine effect */}
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
