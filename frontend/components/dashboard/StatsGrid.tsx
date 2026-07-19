import {
  FolderOpen,
  FileText,
  Database,
  BrainCircuit,
} from "lucide-react";

const stats = [
  {
    title: "Projects",
    value: "12",
    icon: FolderOpen,
  },
  {
    title: "Reports",
    value: "36",
    icon: FileText,
  },
  {
    title: "Evidence",
    value: "148",
    icon: Database,
  },
  {
    title: "AI Runs",
    value: "293",
    icon: BrainCircuit,
  },
];

export default function StatsGrid() {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              rounded-3xl
              border
              bg-white
              p-6
              shadow-sm
              transition-all
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">

                  {item.title}

                </p>

                <h2 className="mt-2 text-4xl font-bold">

                  {item.value}

                </h2>

              </div>

              <div
                className="
                  rounded-2xl
                  bg-slate-100
                  p-4
                "
              >
                <Icon size={24} />
              </div>

            </div>
          </div>
        );
      })}
    </section>
  );
}