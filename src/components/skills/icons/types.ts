import type { ComponentType, CSSProperties } from "react";

export type SkillIconProps = {
  className?: string;
  style?: CSSProperties;
};

export type SkillIconComponent = ComponentType<SkillIconProps>;
