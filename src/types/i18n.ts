import type { translations } from '@i18n/translations';

export type UIKeys = keyof (typeof translations)['en'];
export type Lang = keyof typeof translations;
