import type { IconType } from "react-icons";

interface SkillIconProps {
  Icon: IconType;
  color: string;
}

export default function SkillIcon({ Icon, color }: SkillIconProps) {
  return <Icon style={{ color }} className="text-8xl" />;
}
