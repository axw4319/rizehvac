"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

type Variant = "vertical" | "horizontal-bar";

export function MatchForm({ variant = "vertical" }: { variant?: Variant }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    const zip = String(fd.get("zip") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const issue = String(fd.get("issue") ?? "").trim();
    if (!/^\d{5}$/.test(zip)) errs.zip = "Enter a valid 5-digit ZIP";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errs.email = "Enter a valid email";
    if (!issue) errs.issue = "Pick an issue";

    if (Object.keys(errs).length) {
      setErrors(errs);
      setSubmitting(false);
      return;
    }

    // TODO: wire to /api/match endpoint or 3rd-party form provider once Aaron decides.
    // For now: log to client + show success state.
    if (typeof window !== "undefined") {
      console.info("[rizehvac] match form submission", { zip, email, issue });
    }
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 600);
  }

  if (submitted) {
    return (
      <div
        className="rounded-xl shadow-2xl p-6 md:p-7 text-center"
        style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-success)", color: "var(--brand-fg)" }}
      >
        <div className="grid place-items-center mx-auto rounded-full mb-4" style={{ width: 56, height: 56, background: "var(--brand-success)" }}>
          <Check size={28} style={{ color: "#FFFFFF" }} strokeWidth={2.5} />
        </div>
        <h3 className="display text-2xl mb-2">Got it. Check your email in 24 hours.</h3>
        <p className="text-sm" style={{ color: "var(--brand-fg-soft)" }}>
          We&apos;ll match you with our top 3 Dallas HVAC contractors for your ZIP and issue. Each will email you a written quote within 24 hours. No spam, no obligation.
        </p>
        <p className="text-xs mt-4" style={{ color: "var(--brand-fg-soft)" }}>
          Need same-day help? Call us at <a href="tel:2144142500" style={{ color: "var(--brand-cta)" }} className="underline font-semibold">(214) 414-2500</a>.
        </p>
      </div>
    );
  }

  if (variant === "horizontal-bar") {
    return (
      <form
        onSubmit={handleSubmit}
        className="rounded-xl shadow-2xl flex flex-col md:flex-row items-stretch overflow-hidden"
        style={{ background: "var(--brand-fg-inverse)" }}
      >
        <label htmlFor="match-zip" className="sr-only">ZIP code</label>
        <input
          id="match-zip"
          name="zip"
          type="text"
          inputMode="numeric"
          maxLength={5}
          required
          aria-invalid={!!errors.zip}
          placeholder="ZIP code"
          className="flex-1 px-4 py-4 text-base outline-none border-b md:border-b-0 md:border-r"
          style={{ borderColor: "var(--brand-border)", color: "var(--brand-fg)", background: "var(--brand-fg-inverse)" }}
        />
        <label htmlFor="match-email" className="sr-only">Email</label>
        <input
          id="match-email"
          name="email"
          type="email"
          required
          placeholder="Email"
          className="flex-1 px-4 py-4 text-base outline-none border-b md:border-b-0 md:border-r"
          style={{ borderColor: "var(--brand-border)", color: "var(--brand-fg)", background: "var(--brand-fg-inverse)" }}
        />
        <label htmlFor="match-issue" className="sr-only">Service type</label>
        <select
          id="match-issue"
          name="issue"
          required
          defaultValue=""
          className="flex-1 px-4 py-4 text-base outline-none appearance-none font-semibold"
          style={{ background: "var(--brand-accent-bright)", color: "var(--brand-fg-inverse)" }}
        >
          <option value="" disabled>Select your service</option>
          <option>AC repair</option>
          <option>AC replacement</option>
          <option>Heating</option>
          <option>Tune-up / maintenance</option>
          <option>New install</option>
        </select>
        <button
          type="submit"
          disabled={submitting}
          className="display text-xl px-7 py-4 inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70"
          style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}
        >
          {submitting ? "Matching..." : <>Let&apos;s Go! <ArrowRight size={18} /></>}
        </button>
      </form>
    );
  }

  // Vertical card variant
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl shadow-2xl p-5 md:p-6"
      style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-border)" }}
    >
      <div className="flex items-center gap-2 mb-2">
        <ShieldCheck size={18} style={{ color: "var(--brand-accent)" }} />
        <div className="text-xs uppercase font-semibold tracking-wider" style={{ color: "var(--brand-fg-soft)" }}>
          Get matched in 60 seconds
        </div>
      </div>
      <h3 className="display text-3xl mb-1" style={{ color: "var(--brand-fg)" }}>
        Free quotes from our top 3
      </h3>
      <p className="text-sm mb-5" style={{ color: "var(--brand-fg-soft)" }}>
        We&apos;ll send your ZIP and issue to the three closest contractors on this list. Each emails you a written quote within 24 hours.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label htmlFor="vform-zip" className="sr-only">ZIP code</label>
          <input
            id="vform-zip"
            name="zip"
            type="text"
            inputMode="numeric"
            maxLength={5}
            required
            aria-invalid={!!errors.zip}
            placeholder="ZIP code"
            className="w-full rounded-md border-2 px-3.5 py-3 text-base"
            style={{ borderColor: errors.zip ? "var(--brand-danger)" : "var(--brand-border-strong)", background: "var(--brand-surface)" }}
          />
          {errors.zip ? <p className="text-xs mt-1" style={{ color: "var(--brand-danger)" }}>{errors.zip}</p> : null}
        </div>
        <div>
          <label htmlFor="vform-issue" className="sr-only">Service type</label>
          <select
            id="vform-issue"
            name="issue"
            required
            defaultValue=""
            aria-invalid={!!errors.issue}
            className="w-full rounded-md border-2 px-3.5 py-3 text-base appearance-none"
            style={{ borderColor: errors.issue ? "var(--brand-danger)" : "var(--brand-border-strong)", background: "var(--brand-surface)" }}
          >
            <option value="" disabled>What&apos;s the issue?</option>
            <option>AC not cooling</option>
            <option>No heat</option>
            <option>Loud noises</option>
            <option>Replacement</option>
            <option>Tune-up</option>
          </select>
          {errors.issue ? <p className="text-xs mt-1" style={{ color: "var(--brand-danger)" }}>{errors.issue}</p> : null}
        </div>
      </div>
      <label htmlFor="vform-email" className="sr-only">Email</label>
      <input
        id="vform-email"
        name="email"
        type="email"
        required
        aria-invalid={!!errors.email}
        placeholder="Email for your quote"
        className="w-full rounded-md border-2 px-3.5 py-3 text-base mb-1"
        style={{ borderColor: errors.email ? "var(--brand-danger)" : "var(--brand-border-strong)", background: "var(--brand-surface)" }}
      />
      {errors.email ? <p className="text-xs mb-2" style={{ color: "var(--brand-danger)" }}>{errors.email}</p> : null}
      <button
        type="submit"
        disabled={submitting}
        className="display w-full rounded-md py-3.5 mt-3 text-lg font-extrabold inline-flex items-center justify-center gap-2 tracking-wider disabled:opacity-70"
        style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}
      >
        {submitting ? "Matching..." : <>Match me with 3 contractors <ArrowRight size={18} /></>}
      </button>
      <p className="text-xs mt-4 pt-4 border-t" style={{ borderColor: "var(--brand-border)", color: "var(--brand-fg-soft)" }}>
        No spam · Unsubscribe anytime · Same fee for every contractor on the list (rank is never for sale)
      </p>
    </form>
  );
}
