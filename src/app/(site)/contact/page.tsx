"use client";

import { site } from "@/lib/site";

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${site.phoneE164.replace("+", "")}`;

  return (
    <div className="min-h-screen bg-background-light pb-32 text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-background-light/80 px-4 py-4 backdrop-blur-md dark:border-white/5 dark:bg-background-dark/80">
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.history.back()}
            className="rounded-full p-2 transition-colors hover:bg-slate-200 dark:hover:bg-white/10 -ml-2"
          >
            <span className="material-symbols-outlined text-2xl">
              arrow_back_ios_new
            </span>
          </button>
          <h1 className="text-xl font-bold tracking-tight">Contact</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
          <span className="text-xs font-medium uppercase tracking-widest text-emerald-500">
            Available
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-6">
        <section className="mb-8">
          <h2 className="mb-2 text-4xl font-bold leading-none tracking-tight">
            Let’s build <br />
            <span className="text-primary">extraordinary.</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Have a project in mind? Reach out and let's start a conversation.
          </p>
        </section>

        <section className="mb-10 rounded-xl border border-slate-200 bg-white p-6 shadow-xl dark:border-white/5 dark:bg-surface-dark">
          <form className="space-y-5" action={`mailto:${site.email}`} method="post">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Your Name
              </label>
              <input
                className="w-full rounded-lg border border-slate-200 bg-slate-100 p-4 outline-none placeholder:opacity-50 transition-all focus:border-primary focus:ring-2 focus:ring-primary dark:border-border-dark dark:bg-background-dark"
                placeholder="John Doe"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Work Email
              </label>
              <input
                className="w-full rounded-lg border border-slate-200 bg-slate-100 p-4 outline-none placeholder:opacity-50 transition-all focus:border-primary focus:ring-2 focus:ring-primary dark:border-border-dark dark:bg-background-dark"
                placeholder="john@company.com"
                type="email"
                name="email"
              />
            </div>
            <button
              className="glow-button flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 font-bold text-white transition-transform active:scale-95"
              type="submit"
            >
              <span>Send Message</span>
              <span className="material-symbols-outlined text-xl">send</span>
            </button>
          </form>
        </section>

        <a
          className="glow-button flex items-center justify-between gap-4 rounded-full bg-primary p-5 font-bold text-white transition-all active:scale-[0.98]"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-white/20">
              <span className="material-symbols-outlined">chat_bubble</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium opacity-80">Instant Reply</span>
              <span>Chat on WhatsApp</span>
            </div>
          </div>
          <span className="material-symbols-outlined">bolt</span>
        </a>

        <div className="mt-8 rounded-2xl border border-border-dark/50 bg-surface-dark/50 p-6 text-slate-300">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
            Contact Details
          </h3>
          <div className="mt-4 space-y-2">
            <p>
              <span className="text-text-muted">Email:</span> {site.email}
            </p>
            <p>
              <span className="text-text-muted">Phone:</span> {site.phoneDisplay}
            </p>
            <p>
              <span className="text-text-muted">LinkedIn:</span>{" "}
              <a className="text-white underline" href={site.linkedinUrl} target="_blank" rel="noreferrer">
                linkedin.com/in/batista-simons
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

