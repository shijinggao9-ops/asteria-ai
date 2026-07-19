import { Card, CardContent } from "@/components/ui/card";

const activities = [
  {
    icon: "🤖",
    title: "AI Analysis Finished",
    time: "2 min ago",
  },
  {
    icon: "📄",
    title: "Report Generated",
    time: "8 min ago",
  },
  {
    icon: "📂",
    title: "Evidence Uploaded",
    time: "20 min ago",
  },
  {
    icon: "🧠",
    title: "Research Plan Created",
    time: "1 hour ago",
  },
  {
    icon: "📊",
    title: "Industry Analysis Ready",
    time: "Today",
  },
];

export default function Activity() {
  return (
    <Card className="rounded-3xl border-0 shadow-sm h-full">
      <CardContent className="p-8">

        <h2 className="mb-8 text-2xl font-bold">
          Activity
        </h2>

        <div className="space-y-6">

          {activities.map((item) => (

            <div
              key={item.title}
              className="flex items-start gap-4"
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl">
                {item.icon}
              </div>

              <div className="flex-1">

                <p className="font-medium">
                  {item.title}
                </p>

                <p className="text-sm text-slate-500">
                  {item.time}
                </p>

              </div>

            </div>

          ))}

        </div>

      </CardContent>
    </Card>
  );
}