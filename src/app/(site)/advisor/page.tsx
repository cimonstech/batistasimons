"use client";

import { useState } from "react";
import Link from "next/link";

type ProjectGoal = "blog" | "business" | "ecommerce" | "custom" | "unsure";
type ContentVolume = "small" | "medium" | "large";
type Timeline = "asap" | "2-4weeks" | "1-3months" | "norush";

interface FormData {
  projectGoal: ProjectGoal | "";
  features: string[];
  contentVolume: ContentVolume | "";
  description: string;
  timeline: Timeline | "";
}

const PROJECT_GOALS = [
  { value: "blog", label: "Share content or ideas (blog, stories, articles)" },
  { value: "business", label: "Promote a business or brand" },
  { value: "ecommerce", label: "Sell products online" },
  { value: "custom", label: "Build a custom web application" },
  { value: "unsure", label: "I'm not sure yet" },
] as const;

const FEATURES = [
  "Contact form",
  "Online payments",
  "User accounts",
  "Admin dashboard",
  "Blog or news updates",
  "WhatsApp integration",
];

const CONTENT_VOLUMES = [
  { value: "small", label: "Very small (1–5 pages)" },
  { value: "medium", label: "Medium (5–15 pages)" },
  { value: "large", label: "Large / ongoing content" },
] as const;

const TIMELINES = [
  { value: "asap", label: "ASAP" },
  { value: "2-4weeks", label: "2–4 weeks" },
  { value: "1-3months", label: "1–3 months" },
  { value: "norush", label: "No rush" },
] as const;

export default function AdvisorPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    projectGoal: "",
    features: [],
    contentVolume: "",
    description: "",
    timeline: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalSteps = 5;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/advisor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to get advisor recommendations");
      }

      const data = await response.json();
      
      // Generate unique ID and store results
      const uniqueId = crypto.randomUUID();
      localStorage.setItem(`advisor_results_${uniqueId}`, JSON.stringify(data));
      
      // Redirect to results page
      window.location.href = `/advisor/results/${uniqueId}`;
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setIsLoading(false);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.projectGoal !== "";
      case 2:
        return true; // Features are optional
      case 3:
        return formData.contentVolume !== "";
      case 4:
        return formData.description.trim().length > 0;
      case 5:
        return formData.timeline !== "";
      default:
        return false;
    }
  };


  return (
    <div className="mx-auto max-w-2xl pb-32">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-background-light/80 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/80">
        <div className="flex items-center justify-between p-4">
          <Link
            href="/"
            className="flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </Link>
          <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-tight">
            Website Project Advisor
          </h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="space-y-6 p-4">
        <div className="rounded-2xl border border-primary/50 bg-surface-dark p-6">
          <p className="text-center text-slate-300">
            Describe your idea, and I'll help you understand the best way to build it.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-slate-400">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {error && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
            <p className="text-sm text-red-200">{error}</p>
          </div>
        )}

        {/* Step 1: Project Goal */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">
              What do you want to do?
            </h2>
            <div className="space-y-3">
              {PROJECT_GOALS.map((goal) => (
                <label
                  key={goal.value}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-all ${
                    formData.projectGoal === goal.value
                      ? "border-primary bg-primary/10"
                      : "border-white/10 bg-card-dark hover:border-white/20"
                  }`}
                >
                  <input
                    type="radio"
                    name="projectGoal"
                    value={goal.value}
                    checked={formData.projectGoal === goal.value}
                    onChange={(e) =>
                      setFormData({ ...formData, projectGoal: e.target.value as ProjectGoal })
                    }
                    className="mt-1"
                  />
                  <span className="text-slate-300">{goal.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Features */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">
              What should your website be able to do?
            </h2>
            <p className="text-sm text-slate-400">Select all that apply</p>
            <div className="space-y-3">
              {FEATURES.map((feature) => (
                <label
                  key={feature}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all ${
                    formData.features.includes(feature)
                      ? "border-primary bg-primary/10"
                      : "border-white/10 bg-card-dark hover:border-white/20"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.features.includes(feature)}
                    onChange={() => handleFeatureToggle(feature)}
                    className="rounded"
                  />
                  <span className="text-slate-300">{feature}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Content Volume */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">
              How much content do you expect?
            </h2>
            <div className="space-y-3">
              {CONTENT_VOLUMES.map((volume) => (
                <label
                  key={volume.value}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-all ${
                    formData.contentVolume === volume.value
                      ? "border-primary bg-primary/10"
                      : "border-white/10 bg-card-dark hover:border-white/20"
                  }`}
                >
                  <input
                    type="radio"
                    name="contentVolume"
                    value={volume.value}
                    checked={formData.contentVolume === volume.value}
                    onChange={(e) =>
                      setFormData({ ...formData, contentVolume: e.target.value as ContentVolume })
                    }
                    className="mt-1"
                  />
                  <span className="text-slate-300">{volume.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Description */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">
              Describe your idea in your own words
            </h2>
            <p className="text-sm text-slate-400">
              You don't need technical terms. Just explain what you want.
            </p>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Tell us about your project idea, goals, target audience, and any specific requirements..."
              className="min-h-[200px] w-full rounded-xl border-2 border-white/10 bg-card-dark p-4 text-slate-300 placeholder-slate-500 focus:border-primary focus:outline-none"
            />
          </div>
        )}

        {/* Step 5: Timeline */}
        {currentStep === 5 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">
              When do you want it ready?
            </h2>
            <div className="space-y-3">
              {TIMELINES.map((timeline) => (
                <label
                  key={timeline.value}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-all ${
                    formData.timeline === timeline.value
                      ? "border-primary bg-primary/10"
                      : "border-white/10 bg-card-dark hover:border-white/20"
                  }`}
                >
                  <input
                    type="radio"
                    name="timeline"
                    value={timeline.value}
                    checked={formData.timeline === timeline.value}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value as Timeline })
                    }
                    className="mt-1"
                  />
                  <span className="text-slate-300">{timeline.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="flex-1 rounded-full border-2 border-white/20 bg-transparent py-4 font-bold text-white transition-all hover:border-white/40 active:scale-95"
            >
              Back
            </button>
          )}
          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex-1 rounded-full py-4 font-bold text-white transition-all active:scale-95 ${
                canProceed()
                  ? "bg-primary glow-button"
                  : "cursor-not-allowed bg-slate-600 opacity-50"
              }`}
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isLoading || !canProceed()}
              className={`flex-1 rounded-full py-4 font-bold text-white transition-all active:scale-95 ${
                isLoading || !canProceed()
                  ? "cursor-not-allowed bg-slate-600 opacity-50"
                  : "bg-primary glow-button"
              }`}
            >
              {isLoading ? "Analyzing..." : "Get Recommendations"}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
