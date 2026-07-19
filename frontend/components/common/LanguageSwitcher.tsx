"use client";

import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex justify-end">
      <div className="flex items-center rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">

        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 text-sm transition ${
            language === "en"
              ? "bg-slate-900 text-white"
              : "text-slate-500 hover:bg-slate-100"
          }`}
        >
          EN
        </button>

        <button
          onClick={() => setLanguage("zh")}
          className={`px-4 py-2 text-sm transition ${
            language === "zh"
              ? "bg-slate-900 text-white"
              : "text-slate-500 hover:bg-slate-100"
          }`}
        >
          中文
        </button>

      </div>
    </div>
  );
}