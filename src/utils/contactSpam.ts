export const FIELD_LIMITS = {
  name: 100,
  email: 254,
  subject: 200,
  message: 2000,
} as const;

const MIN_NAME_LENGTH = 2;
const MIN_SUBJECT_LENGTH = 3;
const MIN_MESSAGE_LENGTH = 10;
const MIN_MESSAGE_WORDS = 2;
const MIN_SUBMIT_DELAY_MS = 3000;
const MIN_VOWEL_RATIO = 0.18;
const GIBBERISH_MIN_LENGTH = 20;

export function isHoneypotTriggered(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

function countWords(value: string): number {
  return (value.trim().match(/\b[a-zA-ZÀ-ÿ0-9'-]+\b/g) ?? []).length;
}

function vowelRatio(value: string): number {
  const letters = value.match(/[a-zA-ZàâäéèêëïîôùûüæœÀÂÄÉÈÊËÏÎÔÙÛÜÆŒ]/g);
  if (!letters?.length) {
    return 1;
  }

  const vowels = letters.filter((char) =>
    /[aeiouyàâäéèêëïîôùûüæœAEIOUYÀÂÄÉÈÊËÏÎÔÙÛÜÆŒ]/.test(char),
  ).length;

  return vowels / letters.length;
}

function looksLikeGibberish(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length < GIBBERISH_MIN_LENGTH) {
    return false;
  }

  return vowelRatio(trimmed) < MIN_VOWEL_RATIO;
}

export function validateSubmissionTiming(formLoadedAt: unknown): string | null {
  if (typeof formLoadedAt !== "number" || !Number.isFinite(formLoadedAt)) {
    return "Soumission invalide";
  }

  if (Date.now() - formLoadedAt < MIN_SUBMIT_DELAY_MS) {
    return "Soumission trop rapide";
  }

  return null;
}

export function validateContactContent(
  name: string,
  subject: string,
  message: string,
): string | null {
  if (name.trim().length < MIN_NAME_LENGTH) {
    return "Le nom est trop court";
  }

  if (subject.trim().length < MIN_SUBJECT_LENGTH) {
    return "Le sujet est trop court";
  }

  if (message.trim().length < MIN_MESSAGE_LENGTH) {
    return "Le message est trop court";
  }

  if (name.length > FIELD_LIMITS.name) {
    return "Le nom est trop long";
  }

  if (subject.length > FIELD_LIMITS.subject) {
    return "Le sujet est trop long";
  }

  if (message.length > FIELD_LIMITS.message) {
    return "Le message est trop long";
  }

  if (countWords(message) < MIN_MESSAGE_WORDS) {
    return "Le message doit contenir au moins deux mots";
  }

  if ([name, subject, message].some(looksLikeGibberish)) {
    return "Contenu invalide";
  }

  return null;
}
