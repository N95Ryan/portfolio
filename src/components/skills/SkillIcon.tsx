import type { SkillIconComponent } from "./icons/types";

interface SkillIconProps {
  Icon: SkillIconComponent;
  color: string;
  multicolor?: boolean;
}

const iconSizeClass = "h-24 w-24 shrink-0";

export default function SkillIcon({ Icon, color, multicolor }: SkillIconProps) {
  if (multicolor) {
    return <Icon className={iconSizeClass} />;
  }

  return (
    <Icon
      style={{ color, width: "6rem", height: "6rem" }}
      className={iconSizeClass}
    />
  );
}
