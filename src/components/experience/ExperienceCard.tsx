interface ExperienceCardProps {
  experience: {
    id: string;
    company: string;
    position: string;
    period: string;
    description: string[];
    technologies: string[];
    location?: string;
  };
  translations: {
    company: string;
    position: string;
    period: string;
    description: string;
    technologiesLabel: string;
  };
  side: "left" | "right";
}

export default function ExperienceCard({
  experience,
  translations,
}: ExperienceCardProps) {
  const technologiesString = experience.technologies.join(" - ");
  // Utiliser directement les descriptions de experience.ts (tableau) au lieu des traductions
  const descriptionText = experience.description.join(" ");

  return (
    <div className="bg-gray-800 hover:bg-opacity-50 p-6 rounded-lg w-full max-w-3xl">
      {/* Titre: Company - Role (Period) - utilise directement experience.period */}
      <h1 className="text-xl font-semibold text-white mb-3">
        {translations.company} - {translations.position}
      </h1>

      {/* Titre: Company - Role (Period) - utilise directement experience.period */}
      <p className="text-lg font-semibold text-indigo-400 mb-3">
        {experience.location} | {experience.period}
      </p>

      {/* Technologies utilisées */}
      <p className="text-white text-base mb-3">
        <span className="font-medium">{translations.technologiesLabel}: </span>
        {technologiesString}
      </p>

      {/* Description - utilise directement experience.description */}
      <p className="text-white text-base leading-relaxed">{descriptionText}</p>
    </div>
  );
}
