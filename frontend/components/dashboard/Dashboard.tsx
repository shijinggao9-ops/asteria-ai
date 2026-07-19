import Hero from "./Hero";
import SearchBar from "./SearchBar";
import StatsGrid from "./StatsGrid";
import ProjectGrid from "./ProjectGrid";
import SidebarPanel from "./SidebarPanel";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200">
      <div className="mx-auto max-w-7xl px-8 py-10 space-y-8">

        <LanguageSwitcher />

        <Hero />

        <SearchBar />

        <StatsGrid />

        <section className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <ProjectGrid />
          </div>

          <div className="col-span-4">
            <SidebarPanel />
          </div>
        </section>

      </div>
    </main>
  );
}