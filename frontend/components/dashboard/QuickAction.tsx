import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function QuickAction({
  title,
  description,
}: Props) {
  return (
    <button
      className="
      w-full
      rounded-2xl
      border
      bg-white
      p-5
      text-left
      transition-all
      hover:-translate-y-1
      hover:shadow-lg
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>
        </div>

        <ArrowRight
          size={18}
          className="text-slate-400"
        />
      </div>
    </button>
  );
}