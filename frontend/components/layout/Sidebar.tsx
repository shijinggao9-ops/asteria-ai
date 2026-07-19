import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white min-h-[calc(100vh-64px)]">
      <div className="flex flex-col h-full">

        {/* Navigation */}
        <div className="p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Navigation
          </p>

          <div className="space-y-2">
            <Button
              variant="secondary"
              className="w-full justify-start"
            >
              🏠 Workspace
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              📂 Evidence
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              📊 Analysis
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              📄 Reports
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              ⚙️ Settings
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-6 border-t" />

        {/* AI Status */}
        <div className="p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
            AI Status
          </p>

          <Badge className="bg-green-600 hover:bg-green-600">
            ● Connected
          </Badge>

          <div className="mt-4 space-y-2 text-sm">
            <div>
              <span className="font-medium">
                Provider
              </span>

              <p className="text-slate-500">
                Ollama
              </p>
            </div>

            <div>
              <span className="font-medium">
                Model
              </span>

              <p className="text-slate-500">
                Qwen3:8B
              </p>
            </div>

            <div>
              <span className="font-medium">
                Mode
              </span>

              <p className="text-slate-500">
                Local
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto border-t p-6">
          <p className="text-xs text-slate-400">
            ASTERIA v2.0
          </p>

          <p className="mt-1 text-xs text-slate-500">
            AI Business Research Platform
          </p>
        </div>
      </div>
    </aside>
  );
}