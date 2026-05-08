export type BrandId = "editorial" | "utility";

export type Brand = {
  id: BrandId;
  name: string;
  tagline: string;
  description: string;
  fonts: {
    heading: string;
    body: string;
  };
  colors: {
    bg: string;
    fg: string;
    muted: string;
    mutedFg: string;
    accent: string;
    accentFg: string;
    border: string;
    surface: string;
    rating: string;
    success: string;
    danger: string;
  };
  voice: string;
};

export const BRANDS: Record<BrandId, Brand> = {
  editorial: {
    id: "editorial",
    name: "Editorial-Trust",
    tagline: "Researched recommendations for HVAC homeowners.",
    description:
      "Forbes/CNET-style listicle. Serif headlines, calm neutrals, photography-led, journalist-byline trust signals. Reads like a magazine review.",
    fonts: {
      heading: "var(--font-serif)",
      body: "var(--font-sans)",
    },
    colors: {
      bg: "#FAF8F4",
      fg: "#1A1814",
      muted: "#EFEAE0",
      mutedFg: "#5C544A",
      accent: "#0F4C3A",
      accentFg: "#FFFFFF",
      border: "#E0D8C8",
      surface: "#FFFFFF",
      rating: "#C8842B",
      success: "#0F6B4F",
      danger: "#A5462C",
    },
    voice:
      "We spent 40 hours analyzing 60 Tucson HVAC contractors. Here are the 10 worth your time.",
  },
  utility: {
    id: "utility",
    name: "Service-Utility",
    tagline: "Find a trusted HVAC pro in your neighborhood.",
    description:
      "Service-first, high-contrast, mobile-led. Big phone numbers, instant CTAs, dense data. Built for someone whose AC is broken right now.",
    fonts: {
      heading: "var(--font-sans)",
      body: "var(--font-sans)",
    },
    colors: {
      bg: "#FFFFFF",
      fg: "#0B1220",
      muted: "#F1F5F9",
      mutedFg: "#475569",
      accent: "#DC2626",
      accentFg: "#FFFFFF",
      border: "#E2E8F0",
      surface: "#FFFFFF",
      rating: "#F59E0B",
      success: "#16A34A",
      danger: "#DC2626",
    },
    voice:
      "AC out? Get same-day quotes from 10 vetted Tucson HVAC contractors. Free, no obligation.",
  },
};

export function brandStyleVars(brand: Brand): React.CSSProperties {
  return {
    "--brand-bg": brand.colors.bg,
    "--brand-fg": brand.colors.fg,
    "--brand-muted": brand.colors.muted,
    "--brand-muted-fg": brand.colors.mutedFg,
    "--brand-accent": brand.colors.accent,
    "--brand-accent-fg": brand.colors.accentFg,
    "--brand-border": brand.colors.border,
    "--brand-surface": brand.colors.surface,
    "--brand-rating": brand.colors.rating,
    "--brand-success": brand.colors.success,
    "--brand-danger": brand.colors.danger,
    "--brand-font-heading": brand.fonts.heading,
    "--brand-font-body": brand.fonts.body,
  } as React.CSSProperties;
}
