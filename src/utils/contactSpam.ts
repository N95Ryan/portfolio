const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const MIN_NAME_LENGTH = 2;
const MIN_SUBJECT_LENGTH = 3;
const MIN_MESSAGE_LENGTH = 10;
const MAX_FIELD_LENGTH = 5000;

export function isHoneypotTriggered(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
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

  if (
    name.length > MAX_FIELD_LENGTH ||
    subject.length > MAX_FIELD_LENGTH ||
    message.length > MAX_FIELD_LENGTH
  ) {
    return "Un ou plusieurs champs dépassent la longueur maximale";
  }

  return null;
}

export async function verifyTurnstileToken(
  token: string,
  secretKey: string,
  remoteIp?: string,
): Promise<boolean> {
  const formData = new FormData();
  formData.append("secret", secretKey);
  formData.append("response", token);
  if (remoteIp) {
    formData.append("remoteip", remoteIp);
  }

  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return false;
  }

  const data = (await response.json()) as { success?: boolean };
  return data.success === true;
}
