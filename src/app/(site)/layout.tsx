import type { ReactNode } from "react";

import { BottomNav } from "@/components/BottomNav";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      {children}
      <BottomNav />
    </div>
  );
}

