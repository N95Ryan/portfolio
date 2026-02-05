import SkillIcon from "./SkillIcon";
import type { IconType } from "react-icons";

interface SkillCardProps {
  title: string;
  Icon: IconType;
  color: string;
}

export default function SkillCard({ title, Icon, color }: SkillCardProps) {
  return (
    <div className="bg-gray-800 hover:bg-opacity-50 p-4 text-white rounded-xl flex flex-col items-center space-y-2 w-full sm:w-64 h-48">
      <div className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
        {title}
      </div>
      <div className="text-white">
        <SkillIcon Icon={Icon} color={color} />
      </div>
    </div>
  );
}
