import type { RizeScoreResult } from "@/lib/rizescore";
import { Info } from "lucide-react";

const BAND_COLORS: Record<RizeScoreResult["band"], { bg: string; fg: string; bandLabel: string }> = {
  Outstanding: { bg: "var(--brand-accent)", fg: "var(--brand-accent-fg)", bandLabel: "Outstanding" },
  Excellent: { bg: "var(--brand-success)", fg: "#FFFFFF", bandLabel: "Excellent" },
  Good: { bg: "var(--brand-cta-bright)", fg: "#FFFFFF", bandLabel: "Good" },
  Acceptable: { bg: "#9A6B16", fg: "#FFFFFF", bandLabel: "Acceptable" },
  "Below cutoff": { bg: "#94A3B8", fg: "#FFFFFF", bandLabel: "Below cutoff" },
};

export function RizeScoreBadge({
  score,
  size = "md",
  showLabel = true,
}: {
  score: RizeScoreResult;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}) {
  const colors = BAND_COLORS[score.band];
  const dim = size === "lg" ? 56 : size === "md" ? 44 : 32;
  const fontSize = size === "lg" ? 24 : size === "md" ? 18 : 13;
  const labelSize = size === "lg" ? "text-xs" : size === "md" ? "text-[11px]" : "text-[9px]";

  return (
    <span className="inline-flex items-center gap-2 align-middle" title={`RizeScore™ ${score.overall} of 100 — ${colors.bandLabel}`}>
      <span
        className="grid place-items-center display rounded-md font-extrabold leading-none tabular-nums shrink-0"
        style={{
          width: dim,
          height: dim,
          background: colors.bg,
          color: colors.fg,
          fontSize,
        }}
      >
        {score.overall}
      </span>
      {showLabel ? (
        <span className="leading-tight">
          <span className={`block font-semibold uppercase tracking-wider ${labelSize}`} style={{ color: "var(--brand-fg-soft)" }}>
            RizeScore™
          </span>
          <span className={`block font-semibold ${size === "sm" ? "text-[11px]" : "text-xs"}`} style={{ color: colors.bg }}>
            {colors.bandLabel}
          </span>
        </span>
      ) : null}
    </span>
  );
}

export function RizeScoreInline({ score }: { score: RizeScoreResult }) {
  return (
    <a
      href="/what-is-rizescore"
      className="inline-flex items-center gap-1.5 align-middle text-xs font-semibold rounded-md px-2 py-1"
      style={{ background: BAND_COLORS[score.band].bg, color: BAND_COLORS[score.band].fg }}
      title={`RizeScore™ ${score.overall}/100 — methodology`}
    >
      <span className="tabular-nums">{score.overall}</span>
      <Info size={11} style={{ opacity: 0.85 }} />
    </a>
  );
}
