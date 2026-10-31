import SkillIcon from "./SkillIcon";
import type { SkillIconComponent } from "./icons/types";

interface SkillCardProps {
  title: string;
  Icon: SkillIconComponent;
  color: string;
  multicolor?: boolean;
}

export default function SkillCard({
  title,
  Icon,
  color,
  multicolor,
}: SkillCardProps) {
  return (
    <div
      className="
        bg-gradient-to-br from-gray-800 to-gray-950
        hover:from-gray-700 hover:to-gray-900
        p-4 text-white rounded-xl 
        flex flex-col items-center justify-center space-y-2 
        w-full sm:w-64 h-48
        shadow-xl hover:shadow-2xl
        transition-all duration-500 ease-out
        hover:scale-105
      "
      style={{
        boxShadow:
          "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(99, 102, 241, 0.1)",
      }}
    >
      <div className="text-white text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {title}
      </div>
      <div className="text-white">
        <SkillIcon Icon={Icon} color={color} multicolor={multicolor} />
      </div>
    </div>
  );
}
