/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
  readonly RESEND_TO_EMAIL?: string;
  readonly RESEND_FROM_EMAIL?: string;
  readonly TURNSTILE_SECRET_KEY: string;
  readonly PUBLIC_TURNSTILE_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
