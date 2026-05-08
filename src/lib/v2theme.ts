import type { CSSProperties } from "react";

export const V2_THEME = {
  bg: "#FAFAF7",
  surface: "#FFFFFF",
  fg: "#0E1420",
  fgSoft: "#3A4254",
  muted: "#F1ECE2",
  mutedFg: "#5A5447",
  border: "#E2DCCD",
  borderStrong: "#D4CCB9",
  accent: "#0E5340",
  accentSoft: "#D8EAE2",
  accentFg: "#FFFFFF",
  cta: "#D4451E",
  ctaFg: "#FFFFFF",
  rating: "#C28A2A",
  success: "#0F6B4F",
  danger: "#A5462C",
};

export const v2Vars: CSSProperties = {
  "--brand-bg": V2_THEME.bg,
  "--brand-surface": V2_THEME.surface,
  "--brand-fg": V2_THEME.fg,
  "--brand-fg-soft": V2_THEME.fgSoft,
  "--brand-muted": V2_THEME.muted,
  "--brand-muted-fg": V2_THEME.mutedFg,
  "--brand-border": V2_THEME.border,
  "--brand-border-strong": V2_THEME.borderStrong,
  "--brand-accent": V2_THEME.accent,
  "--brand-accent-soft": V2_THEME.accentSoft,
  "--brand-accent-fg": V2_THEME.accentFg,
  "--brand-cta": V2_THEME.cta,
  "--brand-cta-fg": V2_THEME.ctaFg,
  "--brand-rating": V2_THEME.rating,
  "--brand-success": V2_THEME.success,
  "--brand-danger": V2_THEME.danger,
} as CSSProperties;
