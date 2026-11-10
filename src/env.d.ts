/// <reference types="astro/client" />
/// <reference path="../worker-configuration.d.ts" />

interface Env {
  RESEND_TO_EMAIL?: string;
  RESEND_FROM_EMAIL?: string;
  NOTION_TOKEN?: string;
  NOTION_DATA_SOURCE_ID?: string;
}

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
