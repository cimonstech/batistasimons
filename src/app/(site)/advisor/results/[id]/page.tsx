"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ResultsData {
  websiteType: string;
  techStack: string[];
  whyThisWorks: string;
  timeline: string;
  hosting: string;
  bandwidth: string;
  security: string;
  nextStep: string;
}

const COLORS = ["#3377ff", "#00d2ff", "#8a9baa", "#2e4d6b"];

export default function ResultsPage() {
  const params = useParams();
  const id = params.id as string;
  const [results, setResults] = useState<ResultsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showEmailForm, setShowEmailForm] = useState(true);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve results from localStorage
    const storedResults = localStorage.getItem(`advisor_results_${id}`);
    if (storedResults) {
      setResults(JSON.parse(storedResults));
      setLoading(false);
      // Check if email was already sent
      const emailSentFlag = localStorage.getItem(`advisor_email_sent_${id}`);
      if (emailSentFlag === "true") {
        setShowEmailForm(false);
        setEmailSent(true);
      }
    } else {
      setError("Results not found. Please start over.");
      setLoading(false);
    }
  }, [id]);

  const handleSendEmail = async () => {
    if (!email || !phone) {
      setError("Please provide both email and phone number");
      return;
    }

    setSending(true);
    setError(null);

    try {
      const response = await fetch("/api/send-advisor-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resultsId: id,
          userEmail: email,
          userPhone: phone,
          results: results,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setEmailSent(true);
      setShowEmailForm(false);
      localStorage.setItem(`advisor_email_sent_${id}`, "true");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send email");
    } finally {
      setSending(false);
    }
  };

  const skipEmail = () => {
    setShowEmailForm(false);
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-2xl pb-32">
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-slate-400">Loading results...</p>
        </div>
      </div>
    );
  }

  if (error && !results) {
    return (
      <div className="mx-auto max-w-2xl pb-32">
        <div className="flex min-h-screen flex-col items-center justify-center space-y-4 p-4">
          <p className="text-red-400">{error}</p>
          <Link
            href="/advisor"
            className="rounded-full bg-primary px-6 py-3 font-bold text-white"
          >
            Start Over
          </Link>
        </div>
      </div>
    );
  }

  if (!results) return null;

  // Prepare chart data
  const timelineData = [
    { name: "Planning", value: 20 },
    { name: "Development", value: 50 },
    { name: "Testing", value: 20 },
    { name: "Launch", value: 10 },
  ];

  const techStackData = results.techStack.map((tech, index) => ({
    name: tech,
    value: 100 / results.techStack.length,
  }));

  // Email Form Modal
  if (showEmailForm) {
    return (
      <div className="mx-auto max-w-2xl pb-32">
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl border border-primary/50 bg-surface-dark p-6">
            <h2 className="mb-4 text-xl font-bold text-white">
              Get Your Results via Email
            </h2>
            <p className="mb-6 text-sm text-slate-400">
              Enter your email and phone number to receive your project recommendations and allow us to contact you.
            </p>

            {error && (
              <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                <p className="text-sm text-red-200">{error}</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-white/10 bg-card-dark p-3 text-white placeholder-slate-500 focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+233 XX XXX XXXX"
                  className="w-full rounded-lg border border-white/10 bg-card-dark p-3 text-white placeholder-slate-500 focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={skipEmail}
                  className="flex-1 rounded-full border-2 border-white/20 bg-transparent py-3 font-bold text-white transition-all hover:border-white/40"
                >
                  Skip
                </button>
                <button
                  onClick={handleSendEmail}
                  disabled={sending || !email || !phone}
                  className={`flex-1 rounded-full py-3 font-bold text-white transition-all ${
                    sending || !email || !phone
                      ? "cursor-not-allowed bg-slate-600 opacity-50"
                      : "bg-primary glow-button"
                  }`}
                >
                  {sending ? "Sending..." : "Send Results"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl pb-32">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-background-light/80 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/80">
        <div className="flex items-center justify-between p-4">
          <Link
            href="/advisor"
            className="flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </Link>
          <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-tight">
            Your Project Recommendation
          </h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="space-y-6 p-4">
        {emailSent && (
          <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-4">
            <p className="text-sm text-green-200">
              ✓ Results have been sent to your email!
            </p>
          </div>
        )}

        <div className="rounded-2xl border border-primary/50 bg-surface-dark p-6">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-2xl">lightbulb</span>
            <h2 className="text-xl font-bold">Recommended Website Type</h2>
          </div>
          <p className="text-lg text-white">{results.websiteType}</p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-card-dark p-6 shadow-xl">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-2xl">code</span>
            <h2 className="text-xl font-bold">Suggested Technology</h2>
          </div>
          <div className="mb-6">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={techStackData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {techStackData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 text-slate-300">
            {results.techStack.map((tech, idx) => (
              <div key={idx} className="flex gap-2">
                <span className="mt-0.5 text-primary">•</span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
          {results.whyThisWorks && (
            <div className="mt-4 rounded-lg bg-white/5 p-4">
              <p className="mb-2 text-sm font-medium text-primary">
                Why this works:
              </p>
              <p className="text-sm text-slate-300">{results.whyThisWorks}</p>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-white/5 bg-card-dark p-6 shadow-xl">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-2xl">schedule</span>
            <h2 className="text-xl font-bold">Estimated Timeline</h2>
          </div>
          <p className="mb-6 text-lg text-white">{results.timeline}</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e4d6b" />
              <XAxis dataKey="name" stroke="#8a9baa" />
              <YAxis stroke="#8a9baa" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2225",
                  border: "1px solid #2e4d6b",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="value" fill="#3377ff" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-2xl border border-white/5 bg-card-dark p-6 shadow-xl">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-2xl">storage</span>
            <h2 className="text-xl font-bold">Hosting Recommendation</h2>
          </div>
          <p className="text-slate-300">{results.hosting}</p>
          {results.bandwidth && (
            <p className="mt-2 text-sm text-slate-400">
              <strong>Bandwidth Needs:</strong> {results.bandwidth}
            </p>
          )}
        </div>

        <div className="rounded-2xl border border-white/5 bg-card-dark p-6 shadow-xl">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-2xl">security</span>
            <h2 className="text-xl font-bold">SSL & Security</h2>
          </div>
          <p className="text-slate-300">{results.security}</p>
        </div>

        <div className="rounded-2xl border border-primary/50 bg-surface-dark p-6">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-2xl">arrow_forward</span>
            <h2 className="text-xl font-bold">Next Step</h2>
          </div>
          <p className="mb-4 text-lg text-white">{results.nextStep}</p>
          <Link
            href="/contact"
            className="glow-button flex w-full items-center justify-center gap-3 rounded-full bg-primary py-4 font-bold text-white transition-all active:scale-95"
          >
            <span className="material-symbols-outlined">mail</span>
            Book a Free Consultation
          </Link>
        </div>

        <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
          <p className="text-sm text-yellow-200">
            <strong>Disclaimer:</strong> This is an advisory estimate based on
            the information provided, not a final quotation. Actual project
            requirements, timeline, and costs may vary. Please contact us for
            a detailed consultation and accurate quote.
          </p>
        </div>

          <div className="rounded-lg border border-white/10 bg-card-dark p-4">
            <p className="mb-2 text-xs text-slate-400">
              Share this page:
            </p>
            <p className="break-all font-mono text-xs text-primary">
              {typeof window !== "undefined" ? window.location.href : ""}
            </p>
          </div>
      </main>
    </div>
  );
}
