import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About rizehvac",
  description:
    "rizehvac is an independent HVAC contractor directory. Researched picks, no pay-for-placement.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">About rizehvac</h1>
      <p className="mt-6 text-lg text-neutral-700">
        We research HVAC contractors so homeowners don&apos;t have to. No
        pay-for-placement, no sponsored rankings. More on the team soon.
      </p>
    </main>
  );
}
