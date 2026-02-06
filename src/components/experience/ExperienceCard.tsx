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
  };
  side: "left" | "right";
}

export default function ExperienceCard({
  experience,
  translations,
  side,
}: ExperienceCardProps) {
  const technologiesString = experience.technologies.join(" - ");
  // Utiliser les traductions au lieu des descriptions de experience.ts
  const descriptionText = translations.description;

  // Classes d'animation selon le côté (uniquement sur desktop md:)
  const animationClasses =
    side === "left" ? "md:animate-fade-in-left" : "md:animate-fade-in-right";

  return (
    <div
      className={`
        ${animationClasses}
        bg-gradient-to-br from-gray-800 to-gray-900 
        hover:from-gray-700 hover:to-gray-800
        p-4 sm:p-5 md:p-6 rounded-lg w-full max-w-3xl 
         hover:border-indigo-500
        shadow-xl hover:shadow-2xl
        transition-all duration-500 ease-out
        hover:scale-105
        backdrop-blur-sm
      `}
      style={{
        boxShadow:
          "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(99, 102, 241, 0.1)",
      }}
    >
      {/* Titre: Company - Role */}
      <h1 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {translations.company} - {translations.position}
      </h1>

      {/* Location et période */}
      <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2 sm:mb-3">
        {experience.location} | {experience.period}
      </p>

      {/* Technologies utilisées */}
      <p className="text-gray-300 text-sm sm:text-base mb-2 sm:mb-3">
        Stack : <span className="font-medium text-indigo-300"></span>
        <span className="block sm:inline mt-1 sm:mt-0">
          {technologiesString}
        </span>
      </p>

      {/* Description */}
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
        {descriptionText}
      </p>
    </div>
  );
}
