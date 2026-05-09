import type { CSSProperties } from "react";

export const V2_THEME = {
  // Core surfaces — Tundra-inspired deep navy
  bg: "#FAFAF7",
  bgInverse: "#0A1F3E",
  bgInverseDeep: "#061327",
  surface: "#FFFFFF",
  surfaceInverse: "#0F2A4F",

  // Foreground
  fg: "#0A1F3E",
  fgSoft: "#3A4254",
  fgInverse: "#FFFFFF",
  fgInverseSoft: "rgba(255, 255, 255, 0.78)",

  muted: "#F1ECE2",
  mutedFg: "#5A5447",
  border: "#E2DCCD",
  borderStrong: "#D4CCB9",
  borderInverse: "rgba(255, 255, 255, 0.14)",

  // Accents
  accent: "#1E5BB8",          // Tundra mid blue
  accentSoft: "#D8E5F5",
  accentBright: "#3FA9F5",    // Tundra bright blue (highlight)
  accentDark: "#0A1F3E",
  accentFg: "#FFFFFF",

  // CTA — Tundra orange
  cta: "#F97316",
  ctaHover: "#EA580C",
  ctaDeep: "#C2410C",
  ctaFg: "#FFFFFF",

  rating: "#FBBF24",
  success: "#10B981",
  danger: "#DC2626",
};

export const v2Vars: CSSProperties = {
  "--brand-bg": V2_THEME.bg,
  "--brand-bg-inverse": V2_THEME.bgInverse,
  "--brand-bg-inverse-deep": V2_THEME.bgInverseDeep,
  "--brand-surface": V2_THEME.surface,
  "--brand-surface-inverse": V2_THEME.surfaceInverse,
  "--brand-fg": V2_THEME.fg,
  "--brand-fg-soft": V2_THEME.fgSoft,
  "--brand-fg-inverse": V2_THEME.fgInverse,
  "--brand-fg-inverse-soft": V2_THEME.fgInverseSoft,
  "--brand-muted": V2_THEME.muted,
  "--brand-muted-fg": V2_THEME.mutedFg,
  "--brand-border": V2_THEME.border,
  "--brand-border-strong": V2_THEME.borderStrong,
  "--brand-border-inverse": V2_THEME.borderInverse,
  "--brand-accent": V2_THEME.accent,
  "--brand-accent-soft": V2_THEME.accentSoft,
  "--brand-accent-bright": V2_THEME.accentBright,
  "--brand-accent-dark": V2_THEME.accentDark,
  "--brand-accent-fg": V2_THEME.accentFg,
  "--brand-cta": V2_THEME.cta,
  "--brand-cta-hover": V2_THEME.ctaHover,
  "--brand-cta-deep": V2_THEME.ctaDeep,
  "--brand-cta-fg": V2_THEME.ctaFg,
  "--brand-rating": V2_THEME.rating,
  "--brand-success": V2_THEME.success,
  "--brand-danger": V2_THEME.danger,
} as CSSProperties;
