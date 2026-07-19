import QuickAction from "./QuickAction";
import AIStatus from "./AIStatus";

export default function SidebarPanel() {
  return (
    <div className="space-y-6">

      <AIStatus />

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

          Quick Actions

        </h2>

        <div className="mt-5 space-y-4">

          <QuickAction
            title="New Research"
            description="Create a business project."
          />

          <QuickAction
            title="Upload Evidence"
            description="Import PDFs & Reports."
          />

          <QuickAction
            title="Generate Report"
            description="Create consulting slides."
          />

          <QuickAction
            title="Industry Analysis"
            description="Start AI analysis."
          />

        </div>

      </div>

    </div>
  );
}