import Header from "./Header";
import Sidebar from "./Sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* 顶部导航 */}
      <Header />

      {/* 主体 */}
      <div className="flex">
        {/* 左侧导航 */}
        <Sidebar />

        {/* 工作区 */}
        <main className="flex-1 p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}