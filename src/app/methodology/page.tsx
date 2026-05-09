import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our methodology",
  description:
    "How rizehvac researches HVAC contractors: data sources, ranking criteria, and what we exclude.",
};

export default function MethodologyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Our methodology</h1>
      <p className="mt-6 text-lg text-neutral-700">
        rizehvac ranks HVAC contractors using public review data, certification
        records, and licensing checks. Full methodology coming soon.
      </p>
    </main>
  );
}
