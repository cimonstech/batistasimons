import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Batista Simons | Web Developer & Creative Designer in Ghana",
  description:
    "Learn more about Batista Simons, a web developer and creative designer based in Accra, Ghana, with extensive experience in frontend development, backend development, WordPress, React.js, Next.js, PHP, MySQL, and modern visual design with Figma, Photoshop, and Illustrator.",
  keywords: [
    "about Batista Simons",
    "web developer Accra",
    "creative designer Ghana",
    "frontend backend developer Ghana",
    "WordPress expert Ghana",
    "React.js developer Ghana",
    "Next.js developer Ghana",
    "PHP developer Ghana",
    "UI/UX designer Ghana",
    "Figma designer Ghana",
    "web developer portfolio Ghana",
  ],
  openGraph: {
    title: "About Batista Simons | Web Developer & Creative Designer in Ghana",
    description:
      "Learn more about Batista Simons, a web developer and creative designer based in Accra, Ghana, with experience in frontend, backend, and WordPress development.",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-background-light pb-32 text-slate-900 dark:bg-background-dark dark:text-white">
      <header className="sticky top-0 z-50 border-b border-primary/10 bg-background-light/80 backdrop-blur-md dark:bg-background-dark/80">
        <div className="mx-auto flex max-w-2xl items-center justify-between p-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <span className="material-symbols-outlined text-primary">
              person
            </span>
          </div>
          <h2 className="flex-1 pr-10 text-center text-lg font-bold leading-tight tracking-tight">
            About &amp; Experience
          </h2>
        </div>
      </header>

      <main className="mx-auto max-w-2xl">
        <section className="flex flex-col items-center p-6">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-primary/20 blur opacity-25"></div>
            <div className="profile-image-ring relative size-56 rounded-full border-2 border-primary/30 bg-surface-dark p-1 overflow-hidden shadow-2xl">
              <Image
                alt={site.name}
                src="/1740128683157.jpg"
                width={224}
                height={224}
                className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-300"
                priority
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              {site.name}
            </h1>
            <p className="mt-1 font-medium text-primary">
              Web Developer &amp; Creative Designer
            </p>
            <div className="mt-2 flex items-center justify-center gap-1 text-sm text-text-muted">
              <span className="material-symbols-outlined text-sm">
                location_on
              </span>
              <span>{site.location}</span>
            </div>
          </div>
        </section>

        <section className="space-y-8 px-6 py-4">
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
              <span className="h-[2px] w-8 bg-primary"></span> Bio
            </h3>
            <p className="text-[15px] leading-relaxed text-text-muted">
              I’m Batista Simons, a web developer and creative designer based in
              Accra, Ghana. I specialize in building and maintaining WordPress
              websites while also creating strong visual designs that support
              brand identity and user experience.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              I’ve worked with businesses, organizations, and international
              clients, delivering websites, branding, and digital content that
              are both functional and visually engaging.
            </p>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
              <span className="h-[2px] w-8 bg-primary"></span> Skills &amp; Tools
            </h3>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/5 bg-card-dark p-6 shadow-xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                  Web Development
                </span>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">WordPress</span>
                  <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">PHP</span>
                  <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">JavaScript</span>
                  <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">React.js</span>
                  <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">MySQL</span>
                  <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">WooCommerce</span>
                  <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">Next.js</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-card-dark p-6 shadow-xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                  Creative Design &amp; UI
                </span>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">Figma</span>
                  <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">Photoshop</span>
                  <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">Illustrator</span>
                  <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-primary">Elementor</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-card-dark p-6 shadow-xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                  Other Skills
                </span>
                <p className="mt-2 text-text-muted">
                  SEO, Google Analytics, Digital Marketing, Content Strategy
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
              <span className="h-[2px] w-8 bg-primary"></span> Experience
            </h3>
            <div className="timeline-line relative space-y-10 pl-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 size-4 rounded-full bg-primary border-4 border-background-dark shadow-[0_0_10px_rgba(51,119,255,0.4)]"></div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    Present
                  </span>
                  <h4 className="mt-1 text-lg font-bold leading-tight text-white">
                    Web Development &amp; IT Support
                  </h4>
                  <p className="text-sm font-medium text-text-muted">
                    Pesben Group Ltd.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 size-4 rounded-full bg-primary/40 border-4 border-background-dark"></div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
                    Remote
                  </span>
                  <h4 className="mt-1 text-lg font-bold leading-tight text-white">
                    Content &amp; Creative Design
                  </h4>
                  <p className="text-sm font-medium text-text-muted">
                    STEP
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 size-4 rounded-full bg-primary/40 border-4 border-background-dark"></div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
                    Freelance
                  </span>
                  <h4 className="mt-1 text-lg font-bold leading-tight text-white">
                    Web &amp; Creative Projects
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2 text-sm text-text-muted">
                    <span>Marina Mall - Spintex</span>
                    <span>•</span>
                    <Link href="/projects/impact-logistics" className="text-primary hover:underline">Impact Logistics</Link>
                    <span>•</span>
                    <span>JIT - Accra</span>
                    <span>•</span>
                    <Link href="/projects/talk2me-foundation" className="text-primary hover:underline">Talk2me Foundation</Link>
                    <span>•</span>
                    <Link href="/projects/ventech-gadgets" className="text-primary hover:underline">Ventech Gadgets</Link>
                    <span>•</span>
                    <Link href="/projects/juicelux-international" className="text-primary hover:underline">JuiceLux International</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

