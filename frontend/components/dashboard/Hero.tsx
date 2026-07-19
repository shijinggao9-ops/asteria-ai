"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { saveProject } from "@/services/project.service";
import { Project } from "@/types/project";
import { useLanguage } from "@/hooks/useLanguage";
export default function Hero() {
  const { t, language, setLanguage } = useLanguage();
  const router = useRouter();

  return (

    <section className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">

      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative z-10 flex items-center justify-between">

        <div>

          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">

              {language === "zh"
                ? "AI 商业研究"
                : "AI BUSINESS RESEARCH"}

          </p>

          <h1 className="mt-5 text-6xl font-black tracking-tight">

            ASTERIA

          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">

            {t.dashboard.heroSubtitle}

          </p>

          <Button

            className="mt-8 rounded-xl px-8 h-12"

            onClick={() => {
 
  const project: Project = {
    id: crypto.randomUUID(),

    title: "Untitled Project",

    researchType: "Case Analysis",

    status: "Draft",

    description: "",

    objective: "",

    outputs: [],

    plan: [],

    materials: [],

    report: "",

    createdAt: new Date().toISOString(),

    updatedAt: new Date().toISOString(),
  };

  saveProject(project);

  router.push(`/workspace/${project.id}`);
}}

          >

            {t.dashboard.newResearch}

          </Button>

        </div>

        {/* AI Status */}

        <div className="rounded-3xl border bg-slate-50 px-8 py-6 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"/>

            <span className="font-semibold">

              Local AI Online

            </span>

          </div>

          <div className="mt-5 space-y-2 text-sm">

            <p>

              Model

              <span className="float-right font-medium">

                Qwen3:8B

              </span>

            </p>

            <p>

              Provider

              <span className="float-right">

                Ollama

              </span>

            </p>

            <p>

              Status

              <span className="float-right text-green-600">

                Connected

              </span>

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}
