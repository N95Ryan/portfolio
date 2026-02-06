import SkillIcon from "./SkillIcon";
import type { IconType } from "react-icons";

interface SkillCardProps {
  title: string;
  Icon: IconType;
  color: string;
}

export default function SkillCard({ title, Icon, color }: SkillCardProps) {
  return (
    <div className="group relative w-full sm:w-64 h-48">
      {/* Glow permanent léger qui s'intensifie */}
      <div
        className="absolute -inset-2 rounded-2xl opacity-30 group-hover:opacity-100 group-hover:-inset-4 transition-all duration-500 blur-2xl"
        style={{
          background: `radial-gradient(circle at center, ${color}80, ${color}40, transparent)`,
        }}
      />

      {/* Border gradient métallique visible */}
      <div 
        className="absolute inset-0 rounded-2xl p-[1.5px] transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, ${color}60, transparent 30%, transparent 70%, ${color}40)`,
        }}
      >
        <div className="h-full w-full rounded-2xl bg-gradient-to-br from-gray-800 to-black" />
      </div>

      {/* Main card */}
      <div
        className="
          absolute inset-[1.5px]
          bg-gradient-to-br from-gray-800 via-gray-900 to-black
          group-hover:from-gray-700 group-hover:via-gray-800 group-hover:to-gray-900
          p-6 rounded-2xl 
          flex flex-col items-center justify-center gap-5
          transition-all duration-500 ease-out
          group-hover:scale-[1.05] group-hover:-translate-y-3
          overflow-hidden
        "
        style={{
          boxShadow: `
            0 20px 50px -12px rgba(0, 0, 0, 0.8),
            0 0 30px ${color}20,
            inset 0 1px 0 0 rgba(255, 255, 255, 0.1),
            inset 0 0 20px rgba(255, 255, 255, 0.02)
          `,
        }}
      >
        {/* Grille de points subtile en fond permanent */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, ${color}30 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Reflet diagonal permanent */}
        <div 
          className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)`,
          }}
        />

        {/* Bande colorée top - TOUJOURS visible */}
        <div
          className="absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 transition-all duration-500"
          style={{
            background: `linear-gradient(90deg, transparent 10%, ${color}80, ${color}, ${color}80, transparent 90%)`,
            boxShadow: `0 0 15px ${color}80, 0 2px 10px ${color}40`,
          }}
        />

        {/* Ligne accent bas - visible */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-60 group-hover:opacity-100 transition-all duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
          }}
        />

        {/* Corners accent - permanents et visibles */}
        <div
          className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 rounded-tr-md opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
          style={{
            borderColor: color,
            boxShadow: `0 0 10px ${color}60`,
          }}
        />
        <div
          className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 rounded-bl-md opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
          style={{
            borderColor: color,
            boxShadow: `0 0 10px ${color}60`,
          }}
        />

        {/* Content avec glow permanent */}
        <div
          className="relative z-10 text-center text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white group-hover:scale-105 transition-all duration-500"
          style={{
            textShadow: `0 2px 10px rgba(0,0,0,0.8), 0 0 20px ${color}60, 0 0 40px ${color}30`,
          }}
        >
          {title}
        </div>

        {/* Icône avec glow coloré permanent */}
        <div
          className="relative z-10 transform transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-1"
          style={{
            filter: `drop-shadow(0 0 15px ${color}80) drop-shadow(0 0 30px ${color}40) drop-shadow(0 4px 8px rgba(0,0,0,0.6))`,
          }}
        >
          <SkillIcon Icon={Icon} color={color} />
        </div>

        {/* Reflet lumineux bas permanent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 opacity-30 group-hover:opacity-60 transition-all duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center bottom, ${color}50, ${color}20, transparent 70%)`,
          }}
        />
      </div>
    </div>
  );
}
