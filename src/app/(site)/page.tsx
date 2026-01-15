import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Batista Simons | Web Developer & Creative Designer in Ghana",
  description:
    "Batista Simons is a web developer and creative designer in Ghana, building modern websites, e-commerce platforms, and digital solutions for businesses and organizations. Specializing in WordPress, PHP, JavaScript, React.js, MySQL, WooCommerce, and modern visual design with Figma, Photoshop, and Illustrator.",
  keywords: [
    "Batista Simons",
    "web developer Ghana",
    "creative designer Ghana",
    "website developer Accra",
    "WordPress developer Ghana",
    "frontend developer Ghana",
    "backend developer Ghana",
    "software developer Ghana",
    "e-commerce developer Ghana",
    "React.js developer Ghana",
    "Next.js developer Ghana",
    "PHP developer Ghana",
    "UI/UX designer Ghana",
    "Figma designer Ghana",
  ],
  openGraph: {
    title: "Batista Simons | Web Developer & Creative Designer in Ghana",
    description:
      "Web developer and creative designer in Ghana, building modern websites, e-commerce platforms, and digital solutions for businesses and organizations.",
    type: "website",
  },
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Batista Simons",
    jobTitle: "Web Developer & Creative Designer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    email: site.email,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://batistasimons.com",
    sameAs: [site.linkedinUrl],
    knowsAbout: [
      "Web Development",
      "WordPress",
      "PHP",
      "JavaScript",
      "React.js",
      "Next.js",
      "MySQL",
      "WooCommerce",
      "UI/UX Design",
      "Figma",
      "Photoshop",
      "Illustrator",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Web Development & Design",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
              Creative
            </a>
            <span className="material-symbols-outlined text-white">menu</span>
          </div>
        </div>
      </nav>

      <header className="relative">
        <div
          className="mx-auto max-w-2xl px-4 pt-12"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(51, 119, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 210, 255, 0.1) 0%, transparent 50%)",
          }}
        >
          <div className="relative z-10 mx-auto flex max-w-2xl flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                Available for hire
              </span>
            </div>

            <div className="relative flex items-start justify-between gap-4">
              <div className="flex-1 pr-4">
                <h1 className="text-[1.8rem] md:text-4xl font-bold leading-[1.1] tracking-tight text-white">
                  I build and design{" "}
                  <span className="text-primary">digital experiences</span> that
                  work.
                </h1>
              </div>
              <div className="shrink-0 relative z-20 flex-shrink-0 profile-image-ring">
                <div className="size-[115px] md:size-48 rounded-full border-2 border-primary/30 bg-surface-dark p-1 overflow-hidden">
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
            
            <div className="mt-3 md:hidden">
              <p className="w-full text-sm font-normal text-slate-400">
                {site.subheadline}
              </p>
            </div>
            
            <div className="mt-3 hidden md:block">
              <p className="w-full md:max-w-sm text-base font-normal text-slate-400">
                {site.subheadline}
              </p>
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
                className="shiny-border-button flex items-center justify-center gap-2 rounded-full bg-transparent px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-primary/10"
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
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-slate-300">Skills:</span>
                <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">WordPress</span>
                <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">PHP</span>
                <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">JavaScript</span>
                <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">React.js</span>
                <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">MySQL</span>
                <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">WooCommerce</span>
                <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">Next.js</span>
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
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-slate-300">Tools:</span>
                <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">Figma</span>
                <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">Photoshop</span>
                <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">Illustrator</span>
                <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">Elementor</span>
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
                Ongoing maintenance, security updates, performance optimization,
                and SEO services to keep your website running smoothly and
                ranking well in search engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="py-12">
          <div className="mx-auto mb-6 flex max-w-2xl items-center justify-between px-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Featured Work
            </h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-primary hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 px-4">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="mx-auto max-w-2xl px-4">
          <div className="rounded-2xl border-2 border-primary/50 bg-surface-dark p-8 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white">
              Ready to start your project?
            </h2>
            <p className="mb-6 text-slate-400">
              Let's discuss how I can help bring your digital vision to life.
            </p>
            <Link
              href="/contact"
              className="glow-button inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white transition-all active:scale-95"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
