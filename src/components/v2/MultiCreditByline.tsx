import { ShieldCheck } from "lucide-react";
import { TUCSON_EDITORIAL_CREDITS } from "@/data/tucson-reviews";

const AVATAR_GRADIENTS: Record<string, string> = {
  JM: "linear-gradient(135deg, #0E5340 0%, #2E8C6F 100%)",
  LP: "linear-gradient(135deg, #743A2E 0%, #C28A2A 100%)",
  CM: "linear-gradient(135deg, #1A2944 0%, #3F5A85 100%)",
};

function Person({
  role,
  name,
  title,
  initials,
}: {
  role: string;
  name: string;
  title: string;
  initials: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="grid place-items-center rounded-full text-white text-xs font-semibold flex-shrink-0"
        style={{ width: 38, height: 38, background: AVATAR_GRADIENTS[initials] || "#3A4254" }}
      >
        {initials}
      </div>
      <div className="leading-tight">
        <div className="text-[11px] uppercase tracking-wider font-semibold" style={{ color: "var(--brand-mutedFg, #5A5447)" }}>
          {role}
        </div>
        <div className="text-sm font-semibold" style={{ color: "var(--brand-fg)" }}>{name}</div>
        <div className="text-xs" style={{ color: "var(--brand-fg-soft)" }}>{title}</div>
      </div>
    </div>
  );
}

export function MultiCreditByline() {
  const c = TUCSON_EDITORIAL_CREDITS;
  return (
    <section className="border-b" style={{ borderColor: "var(--brand-border)", background: "var(--brand-surface)" }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-7 flex-1">
          <Person role="Written by" name={c.author.name} title={c.author.title} initials={c.author.initials} />
          <Person role="Edited by" name={c.editor.name} title={c.editor.title} initials={c.editor.initials} />
          <Person role="Fact-checked by" name={c.factChecker.name} title={c.factChecker.title} initials={c.factChecker.initials} />
        </div>
        <div className="flex flex-col items-end text-right gap-1 flex-shrink-0">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "var(--brand-accent-soft)", color: "var(--brand-accent)" }}>
            <ShieldCheck size={13} />
            Independent · No paid placements
          </div>
          <div className="text-xs" style={{ color: "var(--brand-fg-soft)" }}>
            <a href="#methodology" className="underline">Read our methodology</a> · <a href="#" className="underline">Editorial standards</a>
          </div>
        </div>
      </div>
    </section>
  );
}
