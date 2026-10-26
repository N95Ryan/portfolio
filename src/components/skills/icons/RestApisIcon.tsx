import type { SkillIconProps } from "./types";

/** Generic REST / HTTP API icon (no official REST brand mark). */
export default function RestApisIcon({ className, style }: SkillIconProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7h16M4 12h10M4 17h14" />
      <path d="M18 10v6l3-3-3-3z" />
    </svg>
  );
}
