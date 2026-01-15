"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${site.phoneE164.replace("+", "")}`;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {submitStatus.type && (
            <div
              className={`mb-5 rounded-lg border p-4 ${
                submitStatus.type === "success"
                  ? "border-green-500/30 bg-green-500/10 text-green-200"
                  : "border-red-500/30 bg-red-500/10 text-red-200"
              }`}
            >
              <p className="text-sm">{submitStatus.message}</p>
            </div>
          )}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Your Name
              </label>
              <input
                className="w-full rounded-lg border border-slate-200 bg-slate-100 p-4 outline-none placeholder:opacity-50 transition-all focus:border-primary focus:ring-2 focus:ring-primary dark:border-border-dark dark:bg-background-dark dark:text-white"
                placeholder="Mike Cimons"
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Email
              </label>
              <input
                className="w-full rounded-lg border border-slate-200 bg-slate-100 p-4 outline-none placeholder:opacity-50 transition-all focus:border-primary focus:ring-2 focus:ring-primary dark:border-border-dark dark:bg-background-dark dark:text-white"
                placeholder="mike@batistasimons.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Message
              </label>
              <textarea
                className="min-h-[120px] w-full rounded-lg border border-slate-200 bg-slate-100 p-4 outline-none placeholder:opacity-50 transition-all focus:border-primary focus:ring-2 focus:ring-primary dark:border-border-dark dark:bg-background-dark dark:text-white"
                placeholder="Type your message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button
              className="glow-button flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 font-bold text-white transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin">sync</span>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-xl">send</span>
                </>
              )}
            </button>
          </form>
        </section>

        <a
          className="flex items-center justify-between gap-4 rounded-full bg-[#25D366] p-5 font-bold text-white transition-all active:scale-[0.98] shadow-lg shadow-[#25D366]/30 hover:bg-[#20BA5A]"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium opacity-80">Instant Reply</span>
              <span>Chat on WhatsApp</span>
            </div>
          </div>
          <span className="material-symbols-outlined">arrow_forward</span>
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

