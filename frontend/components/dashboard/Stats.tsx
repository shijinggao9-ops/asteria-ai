import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Projects",
    value: "12",
    sub: "+3 Today",
    icon: "📁",
  },
  {
    title: "Reports",
    value: "38",
    sub: "Generated",
    icon: "📄",
  },
  {
    title: "AI Runs",
    value: "186",
    sub: "Qwen3:8B",
    icon: "🤖",
  },
  {
    title: "Evidence",
    value: "91",
    sub: "Files",
    icon: "📂",
  },
];

export default function Stats() {
  return (
    <section className="mt-8 grid gap-5 md:grid-cols-4">

      {stats.map((item) => (

        <Card
          key={item.title}
          className="transition hover:-translate-y-1 hover:shadow-xl"
        >
          <CardContent className="p-6">

            <p className="text-3xl">
              {item.icon}
            </p>

            <p className="mt-5 text-sm text-slate-500">
              {item.title}
            </p>

            <h2 className="mt-2 text-4xl font-black">
              {item.value}
            </h2>

            <p className="mt-2 text-sm text-indigo-500">
              {item.sub}
            </p>

          </CardContent>

        </Card>

      ))}

    </section>
  );
}