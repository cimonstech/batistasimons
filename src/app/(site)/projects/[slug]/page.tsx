import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

import { getProject, projects } from "@/lib/projects";
import { ImageCarousel } from "@/components/ImageCarousel";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const techStack = project.techStack?.join(", ") || project.toolsUsed?.join(", ") || project.tags.join(", ");
  const categoryLabel = project.category === "web" ? "Web Development" : project.category === "ui" ? "UI Design" : "Creative Design";

  return {
    title: `${project.title} — ${project.subtitle} | Batista Simons Portfolio`,
    description: `${project.overview} Built with ${techStack}. ${categoryLabel} project by Batista Simons, a web developer and creative designer in Ghana.`,
    keywords: [
      project.title,
      project.subtitle,
      categoryLabel.toLowerCase(),
      ...project.tags,
      ...(project.techStack || []),
      ...(project.toolsUsed || []),
      "Batista Simons",
      "web developer Ghana",
      "project portfolio Ghana",
    ],
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.overview,
      type: "website",
      images: project.imageUrls && project.imageUrls.length > 0
        ? project.imageUrls.map((url) => ({
            url,
            width: 1200,
            height: 630,
            alt: `${project.title} - ${project.subtitle}`,
          }))
        : [
            {
              url: project.imageUrl,
              width: 1200,
              height: 630,
              alt: `${project.title} - ${project.subtitle}`,
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${project.subtitle}`,
      description: project.overview,
      images: [project.imageUrls?.[0] || project.imageUrl],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const stack = project.techStack ?? project.toolsUsed ?? project.tags ?? [];
  const caseStudy = project.caseStudy;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.overview,
    creator: {
      "@type": "Person",
      name: "Batista Simons",
      jobTitle: "Web Developer & Creative Designer",
    },
    keywords: project.tags.join(", "),
    ...(project.websiteUrl && {
      url: project.websiteUrl,
    }),
    ...(project.imageUrl && {
      image: project.imageUrl,
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-background-dark pb-40">
      <nav className="glass-effect sticky top-0 z-40 flex items-center justify-between border-b border-white/5 px-4 py-4">
        <div className="flex items-center gap-3">
          <Link
            href="/projects"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10"
            aria-label="Back to projects"
          >
            <span className="material-symbols-outlined text-white">
              arrow_back_ios_new
            </span>
          </Link>
          <div>
            <h1 className="text-sm font-medium uppercase tracking-widest text-slate-400">
              Case Study
            </h1>
            <h2 className="text-lg font-bold leading-tight text-white">
              {project.title} — {project.subtitle}
            </h2>
          </div>
        </div>
        <Link
          href="/contact"
          className="flex h-10 items-center justify-center rounded-full bg-white/5 px-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
        >
          Contact
        </Link>
      </nav>

      <main className="mx-auto max-w-2xl space-y-8 px-4 pt-6">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-transparent blur opacity-25"></div>
          {project.imageUrls && project.imageUrls.length > 0 ? (
            <div className="relative">
              <ImageCarousel images={project.imageUrls} alt={project.title} />
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md px-4 py-2.5 font-bold text-white transition-all hover:bg-white/20 hover:border-white/50 active:scale-95"
                >
                  <span className="material-symbols-outlined text-lg">language</span>
                  <span className="text-sm">View Website</span>
                </a>
              )}
            </div>
          ) : (
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-card-dark shadow-2xl">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, transparent 60%, rgba(18,20,22,0.8) 100%), url('${project.imageUrl}')`,
                }}
              />
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md px-4 py-2.5 font-bold text-white transition-all hover:bg-white/20 hover:border-white/50 active:scale-95"
                >
                  <span className="material-symbols-outlined text-lg">language</span>
                  <span className="text-sm">View Website</span>
                </a>
              )}
            </div>
          )}
        </div>

        {stack.length ? (
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5"
              >
                <span className="text-xs font-bold tracking-wide text-slate-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        ) : null}

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-lg">info</span>
            <h3 className="text-sm font-bold uppercase tracking-widest">
              Overview
            </h3>
          </div>
          <div className="rounded-2xl border border-white/5 bg-card-dark p-6 shadow-xl">
            <p className="font-light leading-relaxed text-slate-300">
              {caseStudy?.projectOverview ?? project.overview}
            </p>
          </div>
        </section>

        {caseStudy ? (
          <>
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-lg">
                  warning
                </span>
                <h3 className="text-sm font-bold uppercase tracking-widest">
                  The Challenge
                </h3>
              </div>
              <div className="rounded-2xl border border-white/5 bg-card-dark p-6 shadow-xl">
                <p className="font-light leading-relaxed text-slate-300">
                  {caseStudy.challenge}
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-lg">
                  lightbulb
                </span>
                <h3 className="text-sm font-bold uppercase tracking-widest">
                  The Solution
                </h3>
              </div>
              <div className="rounded-2xl border border-white/5 bg-card-dark p-6 shadow-xl">
                <p className="font-light leading-relaxed text-slate-300">
                  {caseStudy.solution}
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-lg">bolt</span>
                <h3 className="text-sm font-bold uppercase tracking-widest">
                  Key Features
                </h3>
              </div>
              <div className="rounded-2xl border border-white/5 bg-card-dark p-6 shadow-xl">
                <ul className="space-y-2 text-slate-300">
                  {caseStudy.keyFeatures.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-0.5 text-primary">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-lg">
                  trophy
                </span>
                <h3 className="text-sm font-bold uppercase tracking-widest">
                  Results
                </h3>
              </div>
              <div className="rounded-2xl border border-white/5 bg-card-dark p-6 shadow-xl">
                <ul className="space-y-2 text-slate-300">
                  {caseStudy.results.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="mt-0.5 text-primary">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </>
        ) : null}

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-lg">checklist</span>
            <h3 className="text-sm font-bold uppercase tracking-widest">
              Services Provided
            </h3>
          </div>
          <div className="rounded-2xl border border-white/5 bg-card-dark p-6 shadow-xl">
            <ul className="space-y-2 text-slate-300">
              {project.servicesProvided.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="mt-0.5 text-primary">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row">
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button flex flex-1 items-center justify-center gap-3 rounded-full border-2 border-primary bg-transparent py-4 font-bold text-primary transition-all hover:bg-primary hover:text-white active:scale-95"
            >
              <span className="material-symbols-outlined">language</span>
              View Website
              <span className="text-xs opacity-75">({project.websiteUrl.replace(/^https?:\/\//, '')})</span>
            </a>
          )}
          <Link
            href="/contact"
            className={`glow-button flex items-center justify-center gap-3 rounded-full bg-primary py-4 font-bold text-white transition-all active:scale-95 ${project.websiteUrl ? 'flex-1' : 'w-full'}`}
          >
            <span className="material-symbols-outlined">mail</span>
            {caseStudy?.cta ?? "Contact Me"}
          </Link>
        </div>
      </main>
      </div>
    </>
  );
}

