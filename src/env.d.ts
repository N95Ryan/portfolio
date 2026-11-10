/// <reference types="astro/client" />
/// <reference path="../worker-configuration.d.ts" />

interface Env {
  RESEND_TO_EMAIL?: string;
  RESEND_FROM_EMAIL?: string;
}
