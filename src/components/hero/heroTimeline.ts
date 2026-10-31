const TAGLINE_STAGGER_MS = 80;
const TAGLINE_DURATION_MS = 500;
const PARAGRAPH_AFTER_TAGLINE_MS = 35;
const PARAGRAPH_DURATION_MS = 600;
const FRAME_AFTER_PARAGRAPH_START_MS = 550;
const FRAME_DURATION_MS = 320;
const LINE_STAGGER_MS = 85;
const LINE_DURATION_MS = 340;
const FOOTNOTE_AFTER_LAST_LINE_MS = 30;
const FOOTNOTE_DURATION_MS = 320;
const BUTTONS_AFTER_FOOTNOTE_MS = 15;
const TERMINAL_LINE_COUNT = 4;

function subtitleStaggerMs(charCount: number): number {
  return charCount > 1 ? Math.floor(800 / (charCount - 1)) : 0;
}

function lastCharDelayMs(
  charCount: number,
  baseDelayMs: number,
  staggerMs = subtitleStaggerMs(charCount),
): number {
  if (charCount === 0) return baseDelayMs;
  return baseDelayMs + (charCount - 1) * staggerMs;
}

export type HeroTimeline = {
  line1CharBaseDelayMs: number;
  line1StaggerMs: number;
  line2CharBaseDelayMs: number;
  line2StaggerMs: number;
  taglineDelaysMs: number[];
  paragraphDelayMs: number;
  frameDelayMs: number;
  lineStartDelayMs: number;
  lineStaggerMs: number;
  explanationDelayMs: number;
  buttonsDelayMs: number;
};

export function buildHeroTimeline(jobTitleLine1: string, jobStackLine2: string): HeroTimeline {
  const line1CharBaseDelayMs = 50;
  const line1StaggerMs = subtitleStaggerMs(jobTitleLine1.length);
  const line1LastDelayMs = lastCharDelayMs(
    jobTitleLine1.length,
    line1CharBaseDelayMs,
  );
  const line2CharBaseDelayMs = line1LastDelayMs + 150;
  const line2StaggerMs =
    jobStackLine2.length > 1
      ? Math.min(
          subtitleStaggerMs(jobStackLine2.length),
          Math.floor(350 / (jobStackLine2.length - 1)),
        )
      : 0;
  const line2LastDelayMs = lastCharDelayMs(
    jobStackLine2.length,
    line2CharBaseDelayMs,
    line2StaggerMs,
  );

  const taglineBaseMs = line2LastDelayMs + 40;
  const taglineDelaysMs = [0, 1, 2, 3, 4].map(
    (i) => taglineBaseMs + i * TAGLINE_STAGGER_MS,
  );
  const taglineEndMs =
    taglineDelaysMs[taglineDelaysMs.length - 1] + TAGLINE_DURATION_MS;

  const paragraphDelayMs = taglineEndMs + PARAGRAPH_AFTER_TAGLINE_MS;
  const frameDelayMs =
    paragraphDelayMs + FRAME_AFTER_PARAGRAPH_START_MS;
  const lineStartDelayMs = frameDelayMs + FRAME_DURATION_MS;
  const lastLineStartMs =
    lineStartDelayMs + (TERMINAL_LINE_COUNT - 1) * LINE_STAGGER_MS;
  const explanationDelayMs = lastLineStartMs + LINE_DURATION_MS + FOOTNOTE_AFTER_LAST_LINE_MS;
  const buttonsDelayMs =
    explanationDelayMs + FOOTNOTE_DURATION_MS + BUTTONS_AFTER_FOOTNOTE_MS;

  return {
    line1CharBaseDelayMs,
    line1StaggerMs,
    line2CharBaseDelayMs,
    line2StaggerMs,
    taglineDelaysMs,
    paragraphDelayMs,
    frameDelayMs,
    lineStartDelayMs,
    lineStaggerMs: LINE_STAGGER_MS,
    explanationDelayMs,
    buttonsDelayMs,
  };
}
