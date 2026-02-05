import type { ui } from '@i18n/ui';

export type UIKeys = keyof (typeof ui)['en'];
export type Lang = keyof typeof ui;
