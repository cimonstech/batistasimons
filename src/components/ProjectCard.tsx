import Link from "next/link";

import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <section className="group">
      <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl transition-all hover:border-primary/50 dark:border-slate-800 dark:bg-[#1e2538]">
        <div
          className="relative aspect-[16/9] w-full overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url("${project.imageUrl}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate text-xl font-bold tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {project.subtitle}
                </p>
              </div>
              {project.featured ? (
                <span className="shrink-0 rounded bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                  Featured
                </span>
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 p-5">
          <p className="text-sm text-slate-600 dark:text-[#8db6ce]">
            {project.listDescription}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 6).map((t) => (
              <span key={t} className="tech-badge rounded px-2.5 py-1 text-[11px] text-primary">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <Link
              href={`/projects/${project.slug}`}
              className="flex h-11 flex-1 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

