import { Badge } from "@/components/ui/badge";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 items-center justify-between px-8">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            ASTERIA
          </h1>

          <p className="text-sm text-slate-500">
            AI Business Research Platform
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Badge
            className="bg-green-600 hover:bg-green-600"
          >
            ● Local AI
          </Badge>

          <div className="text-right">
            <p className="text-base font-medium">
              Qwen3:8B
            </p>

            <p className="text-xs text-slate-500">
              Connected
            </p>
          </div>

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-slate-200
              font-semibold
            "
          >
            A
          </div>
        </div>
      </div>
    </header>
  );
}