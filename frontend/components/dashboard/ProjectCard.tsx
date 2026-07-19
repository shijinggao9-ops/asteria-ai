"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface Props {
  id: string;
  title: string;
  description: string;
  updated: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  updated,
}: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/workspace/${id}`)}
      className="
        cursor-pointer
        rounded-3xl
        border
        bg-white
        p-7
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-xl font-bold">

            {title}

          </h2>

          <p className="mt-2 text-slate-500">

            {description}

          </p>

        </div>

        <ArrowRight
          size={20}
          className="text-slate-400"
        />

      </div>

      <div className="mt-8 flex items-center justify-between">

        <span className="rounded-full bg-slate-100 px-4 py-1 text-sm">

          Business Research

        </span>

        <span className="text-sm text-slate-400">

          {updated}

        </span>

      </div>

    </div>
  );
}