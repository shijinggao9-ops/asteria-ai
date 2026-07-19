import en from "./en";
import zh from "./zh";

export const locales = {
  en,
  zh,
};

export type Language = keyof typeof locales;
