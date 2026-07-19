import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    icon: "☕",
    title: "Starbucks Vietnam",
    type: "Market Entry Strategy",
    date: "Updated 2 hours ago",
  },
  {
    icon: "🚗",
    title: "Tesla India",
    type: "Competitor Analysis",
    date: "Yesterday",
  },
  {
    icon: "🍎",
    title: "Apple Vision Pro",
    type: "Business Model Analysis",
    date: "3 days ago",
  },
];

export default function RecentProjects() {
  return (
    <Card className="rounded-3xl border-0 shadow-sm">
      <CardContent className="p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Recent Projects
          </h2>

          <p className="text-sm text-slate-500">
            View All
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                flex
                cursor-pointer
                items-center
                justify-between
                rounded-2xl
                border
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-slate-300
                hover:shadow-lg
              "
            >
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                  {project.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {project.type}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {project.date}
                  </p>
                </div>
              </div>

              <ArrowRight
                className="
                  text-slate-400
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                "
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}