"use client";

import { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";

import { getProjects } from "@/services/project.service";

import { Project } from "@/types/project";

import { useLanguage } from "@/hooks/useLanguage";

export default function ProjectGrid() {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {

    setProjects(getProjects());

  }, []);

  return (

    <section>

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-2xl font-bold">

          {t.dashboard.recentProjects}

        </h2>

      </div>

      <div className="space-y-5">

        {

          projects.length === 0 ? (

            <div className="rounded-xl border bg-white p-8 text-center text-slate-500">

              {t.dashboard.viewAll}

            </div>

          ) : (

            projects.map((project) => (

              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.researchType}
                updated={new Date(project.updatedAt).toLocaleString()}

              />

            ))

          )

        }

      </div>

    </section>

  );

}