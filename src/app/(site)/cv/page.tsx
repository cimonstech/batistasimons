import Link from "next/link";

import { site } from "@/lib/site";

export const metadata = {
  title: "CV",
};

export default function CvPage() {
  return (
    <div className="mx-auto max-w-2xl pb-32">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-background-dark/80 px-4 py-5 backdrop-blur-lg">
        <h1 className="text-lg font-bold tracking-tight text-white">CV</h1>
      </header>

      <main className="space-y-6 px-4 py-8">
        <section className="rounded-3xl border border-border-dark/50 bg-surface-dark p-8 shadow-2xl">
          <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-white">
            Download CV
          </h2>
          <p className="mt-3 text-slate-300">
            Download my CV to learn more about my experience, skills, and background.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-bold text-white"
            >
              <span className="material-symbols-outlined">download</span>
              Download PDF
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-border-dark bg-surface-dark px-6 py-4 font-bold text-white"
            >
              Back Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

