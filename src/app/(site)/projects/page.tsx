"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

type Category = "all" | "web" | "ui" | "creative";

const CREATIVE_GALLERY_IMAGES = [
  "https://files.agrotalenthub.com/batista/Artboard%201.webp",
  "https://files.agrotalenthub.com/batista/Artboard%202.webp",
  "https://files.agrotalenthub.com/batista/Artboard%203.webp",
  "https://files.agrotalenthub.com/batista/Artboard%204.webp",
  "https://files.agrotalenthub.com/batista/Artboard%205.webp",
  "https://files.agrotalenthub.com/batista/Artboard%206.webp",
  "https://files.agrotalenthub.com/batista/Artboard%207.webp",
];

function getCategoryFromUrl(searchParams: ReturnType<typeof useSearchParams>): Category {
  const c = searchParams.get("category");
  if (c && ["all", "web", "ui", "creative"].includes(c)) return c as Category;
  return "all";
}

function ProjectsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = getCategoryFromUrl(searchParams);

  const setCategory = (category: Category) => {
    const url = category === "all" ? "/projects" : `/projects?category=${category}`;
    router.replace(url, { scroll: false });
  };

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
              onClick={() => setCategory(category.id)}
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
        {activeCategory === "creative" && (
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
              Creative work
            </h2>
            <div className="grid grid-cols-3 gap-1 sm:gap-2">
              {CREATIVE_GALLERY_IMAGES.map((src, index) => (
                <a
                  key={index}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-800"
                >
                  <Image
                    src={src}
                    alt={`Artboard ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 33vw, 200px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
        {activeCategory === "creative" && filteredProjects.length > 0 && (
          <h2 className="pt-4 text-sm font-bold uppercase tracking-widest text-primary">
            Projects
          </h2>
        )}
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))
        ) : activeCategory !== "creative" ? (
          <div className="py-12 text-center text-slate-400">
            No projects found in this category.
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-2xl pb-32 flex min-h-[50vh] items-center justify-center">
          <p className="text-slate-400">Loading…</p>
        </div>
      }
    >
      <ProjectsPageContent />
    </Suspense>
  );
}

