"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", icon: "home", label: "Home" },
  { href: "/projects", icon: "grid_view", label: "Projects" },
  { href: "/about", icon: "person", label: "About" },
  { href: "/contact", icon: "alternate_email", label: "Contact" },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-6 left-1/2 z-50 h-16 w-[92%] max-w-md -translate-x-1/2 rounded-2xl border border-border-dark/50 bg-surface-dark/95 px-2 shadow-2xl backdrop-blur-xl">
      <nav className="flex h-full items-center justify-around">
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 ${
                active ? "text-primary" : "text-slate-400"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[24px] ${
                  active ? "fill-1" : ""
                }`}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

