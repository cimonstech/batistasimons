import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center px-6">
      <p className="text-sm font-bold uppercase tracking-widest text-primary">
        404
      </p>
      <h1 className="mt-2 font-[var(--font-display)] text-4xl font-bold tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">
        The page you’re looking for doesn’t exist (or may have moved).
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/"
          className="glow-button inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 font-bold text-white"
        >
          Go Home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-full border border-border-dark bg-surface-dark px-6 py-4 font-bold text-white"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
}

