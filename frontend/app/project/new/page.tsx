"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { saveProject } from "@/services/project.service";
import { Project } from "@/types/project";

export default function NewProject() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [type, setType] =
    useState<Project["researchType"]>("Case Analysis");

  function handleCreateProject() {
    if (!title.trim()) {
      alert("Please enter a project name.");
      return;
    }

    const project: Project = {
      id: crypto.randomUUID(),

      title,

      researchType: type,

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
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200">

      <div className="mx-auto max-w-5xl px-8 py-16">

        <div className="glass-card rounded-3xl p-12">

          <div className="mb-10">

            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">

              AI BUSINESS RESEARCH

            </p>

            <h1 className="mt-4 text-5xl font-black">

              Create New Project

            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-500">

              Start a new business research project.
              Asteria will automatically build your research workspace,
              evidence library and AI analysis environment.

            </p>

          </div>

          <div className="grid gap-10 lg:grid-cols-2">

            {/* Left */}

            <div className="space-y-6">

              <div>

                <label className="mb-2 block font-medium">

                  Project Name

                </label>

                <input
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-slate-500
                  "
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Starbucks Vietnam Expansion"
                />

              </div>

              <div>

                <label className="mb-2 block font-medium">

                  Research Type

                </label>

                <select
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    px-4
                    py-3
                    outline-none
                  "
                  value={type}
                  onChange={(e) =>
                    setType(
                      e.target.value as Project["researchType"]
                    )
                  }
                >
                  <option>Case Analysis</option>
                  <option>Business Competition</option>
                  <option>Thesis Research</option>
                  <option>Consulting Project</option>
                </select>

              </div>

              <button
                onClick={handleCreateProject}
                className="
                  mt-4
                  w-full
                  rounded-xl
                  bg-slate-900
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-slate-700
                "
              >
                Create Project
              </button>

            </div>

            {/* Right */}

            <div className="rounded-2xl bg-slate-50 p-8">

              <h2 className="text-xl font-bold">

                Your Workspace will include

              </h2>

              <div className="mt-8 space-y-5">

                <Feature
                  title="Research Brief"
                  desc="Define business background and objectives."
                />

                <Feature
                  title="Evidence Library"
                  desc="Upload PDF, Excel, PPT and annual reports."
                />

                <Feature
                  title="Research Plan"
                  desc="AI automatically generates research roadmap."
                />

                <Feature
                  title="AI Analysis"
                  desc="Generate consulting-grade reports with Local AI."
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

function Feature({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">

      <div className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-500" />

      <div>

        <h3 className="font-semibold">

          {title}

        </h3>

        <p className="mt-1 text-sm text-slate-500">

          {desc}

        </p>

      </div>

    </div>
  );
}