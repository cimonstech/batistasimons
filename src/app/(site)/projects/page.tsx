"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

type Category = "all" | "web" | "ui" | "creative";

export default function ProjectsPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const categories: { id: Category; label: string; icon?: string }[] = [
    { id: "all", label: "All" },
    { id: "web", label: "Web", icon: "language" },
    { id: "ui", label: "UI", icon: "palette" },
    { id: "creative", label: "Creative", icon: "brush" },
  ];

  return (
    <div className="mx-auto max-w-2xl pb-32">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-background-light/80 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/80">
        <div className="flex items-center justify-between p-4">
          <div
            onClick={() => router.back()}
            className="flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">
              arrow_back
            </span>
          </div>
          <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-tight">
            Selected Projects
          </h1>
          <div className="flex w-10 items-center justify-end">
            <button className="flex size-10 items-center justify-center rounded-lg transition-colors hover:bg-slate-200 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined text-2xl">
                grid_view
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="sticky top-[73px] z-40 border-b border-slate-200 bg-background-light/80 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/80">
        <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              }`}
            >
              {category.icon && (
                <span className="material-symbols-outlined text-lg">
                  {category.icon}
                </span>
              )}
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      <main className="space-y-6 p-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))
        ) : (
          <div className="py-12 text-center text-slate-400">
            No projects found in this category.
          </div>
        )}
      </main>
    </div>
  );
}

