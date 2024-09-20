export const locales = ["es", "en"] as const;

export const defaultLocale: Locale = "es";

export type Locale = (typeof locales)[number];
