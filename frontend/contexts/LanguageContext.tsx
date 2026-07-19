"use client";

import {
  createContext,
  useEffect,
  useState,
} from "react";

import { locales, Language } from "@/locales";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof locales.en;
}

export const LanguageContext =
  createContext<LanguageContextType>(
    {} as LanguageContextType
  );

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [language, setLanguage] =
    useState<Language>("en");

  useEffect(() => {

    const saved =
      localStorage.getItem(
        "asteria-language"
      ) as Language | null;

    if (saved) {

      setLanguage(saved);

    }

  }, []);

  function changeLanguage(
    lang: Language
  ) {

    setLanguage(lang);

    localStorage.setItem(
      "asteria-language",
      lang
    );

  }

  return (

    <LanguageContext.Provider
      value={{

        language,

        setLanguage: changeLanguage,

        t: locales[language],

      }}
    >

      {children}

    </LanguageContext.Provider>

  );

}
