export default function AIStatus() {
  return (
    <div
      className="
      rounded-3xl
      border
      bg-white
      p-6
      shadow-sm
      "
    >
      <h2 className="text-lg font-semibold">
        AI Status
      </h2>

      <div className="mt-6 flex items-center gap-3">

        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

        <span className="font-medium">
          Connected
        </span>

      </div>

      <div className="mt-6 space-y-4 text-sm">

        <div className="flex justify-between">

          <span className="text-slate-500">

            Provider

          </span>

          <span>

            Ollama

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">

            Model

          </span>

          <span>

            Qwen3:8B

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">

            Runtime

          </span>

          <span>

            Local

          </span>

        </div>

      </div>
    </div>
  );
}