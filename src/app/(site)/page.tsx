import Image from "next/image";
import Link from "next/link";

import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="pb-32">
      <nav className="sticky top-0 z-50 w-full border-b border-border-dark/30 bg-background-dark/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-2xl items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Image
              src="/batista.simons.logo.white.webp"
              alt="Batista Simons Logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <h2 className="text-lg font-bold tracking-tight text-white">
              Batista's Portfolio
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={site.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-primary/40 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary"
            >
              CV
            </a>
            <span className="material-symbols-outlined text-white">menu</span>
          </div>
        </div>
      </nav>

      <header className="relative">
        <div className="overflow-hidden rounded-b-[2.5rem] bg-background-dark px-4 pb-12 pt-6">
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
            <div className="absolute -left-24 -top-24 size-96 rounded-full bg-primary/30 blur-[100px]" />
            <div className="absolute -right-24 top-1/2 size-80 rounded-full bg-accent/20 blur-[80px]" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
              <span className="size-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                Available for hire
              </span>
            </div>

            <div className="relative flex items-start justify-between gap-4">
              <div className="flex-1 pr-4">
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white">
                  I build and design{" "}
                  <span className="text-primary">digital experiences</span> that
                  work.
                </h1>
                <p className="mt-3 w-full md:max-w-sm text-base font-normal text-slate-400 relative z-0">
                  {site.subheadline}
                </p>
              </div>
              <div className="shrink-0 relative z-20 flex-shrink-0">
                <div className="profile-image-ring size-48 rounded-full border-2 border-primary/30 bg-surface-dark p-1 overflow-hidden">
                  <Image
                    alt="Batista Simons"
                    src="/1740128683157.jpg"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-300"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <Link
                href="/projects"
                className="flex-1 min-w-[140px] flex cursor-pointer items-center justify-center rounded-full h-14 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20"
              >
                View Projects
              </Link>
              <a
                href={site.cvPath}
                className="flex size-14 items-center justify-center rounded-full border border-border-dark bg-surface-dark text-white"
              >
                <span className="material-symbols-outlined">north_east</span>
              </a>
            </div>

            <div className="mt-6">
              <Link
                href="/advisor"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-primary/50 bg-transparent px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-primary/10 hover:border-primary"
              >
                <span className="material-symbols-outlined">lightbulb</span>
                Not sure what you need? Get project guidance
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="mx-auto mb-6 flex max-w-2xl items-center justify-between px-4">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            What I Do
          </h2>
          <div className="mx-4 h-px flex-1 bg-border-dark/50" />
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 px-4">
          <div className="relative overflow-hidden rounded-2xl border-2 border-primary/50 bg-surface-dark p-6">
            <div className="absolute right-0 top-0 p-3 opacity-20">
              <span className="material-symbols-outlined text-4xl">
                code
              </span>
            </div>
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-white">
              <span className="material-symbols-outlined">language</span>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">Web Development</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                I build and maintain responsive web applications and WordPress
                websites powered by HTML, CSS, JavaScript, PHP, MySQL, React,
                Node.js, and Next.js, focusing on performance optimization,
                user experience, and scalable development.
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-lg">
                    code
                  </span>
                </div>
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-lg">
                    data_object
                  </span>
                </div>
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-lg">
                    storage
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border-dark/50 bg-surface-dark/50 p-6 transition-all hover:border-primary/50">
            <div className="flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors">
              <span className="material-symbols-outlined">palette</span>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <h3 className="text-lg font-bold text-white">
                Creative Design &amp; UI
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                I create visually compelling designs and user interfaces using
                Figma, Photoshop, Illustrator, and Elementor, ensuring strong
                brand consistency across all digital touchpoints.
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-lg">
                    palette
                  </span>
                </div>
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-lg">
                    brush
                  </span>
                </div>
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-lg">
                    auto_awesome
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border-dark/50 bg-surface-dark/50 p-6 transition-all hover:border-primary/50">
            <div className="flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <h3 className="text-lg font-bold text-white">
                Website Support &amp; SEO
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                I provide ongoing website support, content updates, bug fixes,
                and SEO-friendly improvements to help businesses stay visible
                and functional online.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-dark py-12 overflow-hidden">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Featured Work
          </h2>
          <p className="text-sm text-slate-400">
            Selected web development and creative design projects focused on
            functionality, clarity, and strong visual identity.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl space-y-6 px-4">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}

          <div className="pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary"
            >
              View All Projects <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-2xl px-4">
          <div className="rounded-3xl border border-border-dark/50 bg-surface-dark p-8 shadow-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Looking for a web developer with strong creative design skills?
              <br />
              Let’s work together.
            </h2>
            <div className="mt-6">
              <Link
                href="/contact"
                className="glow-button inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 font-bold text-white"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

