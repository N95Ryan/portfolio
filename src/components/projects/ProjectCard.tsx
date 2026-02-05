import { projects } from "@data/projects";

interface ProjectCardProps {
  projectId: string;
  image: string;
  translations: {
    name: string;
    description: string;
    technologies: string;
    buttonLabel: string;
  };
}

export default function ProjectCard({
  projectId,
  image,
  translations,
}: ProjectCardProps) {
  // Récupérer les données du projet depuis projects.ts
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return null;
  }

  const {
    name: projectName,
    description: projectDescription,
    technologies: projectTechnologies,
    buttonLabel,
  } = translations;

  // Utiliser les couleurs directement depuis projects.ts
  const bgColor = project.bgcolor || "#ffffff";
  const textColor = project.textColor || "#000000";

  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="relative h-40 md:h-48 lg:h-56 group rounded-t-xl overflow-hidden">
        <img
          src={image}
          alt={projectName}
          className="w-full h-full object-cover transition duration-500 ease-in-out transform group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-t-xl bg-black bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white text-center mx-4 text-xs lg:text-sm">
            {projectDescription}
          </p>
        </div>
      </div>
      <div
        className="flex flex-col items-start p-3 rounded-b-xl project-card-content"
        style={{
          backgroundColor: bgColor,
          color: textColor,
          minHeight: "14px",
          height: "auto",
        }}
      >
        <h2
          className="text-base md:text-lg lg:text-xl font-bold mb-1 project-card-title"
          style={{
            color: textColor,
          }}
        >
          {projectName}
        </h2>
        <p
          className="text-xs md:text-sm mb-1 project-card-text"
          style={{
            color: textColor,
          }}
        >
          {projectTechnologies}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-2 bg-[#343a40] hover:bg-[#212529] transition text-white self-end text-xs md:text-sm font-semibold rounded-lg mt-6 md:mt-0"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );
}
