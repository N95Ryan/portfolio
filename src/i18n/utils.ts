import { translations, defaultLang } from './translations';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: keyof (typeof translations)[typeof defaultLang], params?: Record<string, string | number>): string | string[] {
    const value = translations[lang][key] || translations[defaultLang][key];
    
    // Si c'est un tableau, le retourner tel quel
    if (Array.isArray(value)) {
      return value;
    }
    
    // Sinon, convertir en string et appliquer les paramètres
    let text: string = String(value);
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{${param}}`, String(value));
      });
    }
    return text;
  };
}

export function useTranslatedPath(lang: keyof typeof translations) {
  return function translatePath(path: string, l: string = lang) {
    return l === defaultLang ? path : `/${l}${path}`;
  };
}
