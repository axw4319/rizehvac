import { HomePage } from "@/components/v2/HomePage";
import { generateFAQPageSchema, generateOrganizationSchema } from "@/lib/schema";

const HOMEPAGE_BUYERS_GUIDE: { q: string; a: string }[] = [
  { q: "How do I choose an HVAC contractor?", a: "Verify the state contractor license is active, confirm at least one technician is NATE-certified, check BBB rating and complaint history, get three written quotes for the same scope, confirm warranty terms cover both parts and labor, insist on a Manual J load calculation before sizing, and verify they pull permits. Following these 7 steps consistently shortlists the contractors worth hiring in any US metro." },
  { q: "Is NATE certification important for HVAC contractors?", a: "Yes. NATE (North American Technician Excellence) is the gold-standard HVAC certification. NATE-certified technicians install equipment correctly the first time, which is the single biggest predictor of system lifespan. You can verify a technician's NATE certification at NATEx.org." },
  { q: "How many HVAC quotes should I get?", a: "Get three written quotes for the same scope of work. Quotes for the same job often vary by 30-40% in any given metro. The cheapest is rarely the right pick, but the most expensive almost never is either. Pick the middle quote from a contractor with the strongest credentials." },
  { q: "What HVAC warranty terms should I expect?", a: "Manufacturer warranties (Trane, Carrier, Lennox) cover parts only. The contractor's labor warranty is what matters most. 10 years on both parts and labor is the gold standard, 5-year labor warranties are acceptable, and anything less than 2 years labor is a red flag." },
  { q: "Why does Manual J load calculation matter?", a: "Oversized AC units cycle on and off too quickly, fail to remove humidity, and shorten compressor life. A proper Manual J load calculation accounts for square footage, insulation, window orientation, and climate zone. If your HVAC quote doesn't reference Manual J, ask why." },
  { q: "Do HVAC contractors need permits?", a: "Yes. Any HVAC replacement requires a county or city permit. A contractor who suggests skipping the permit to save money is hiding from inspection. Permitted installs also protect your home insurance claim. Permit fees are typically $200-$400 in most US metros." },
];

export default function Home() {
  const orgSchema = generateOrganizationSchema();
  const faq = generateFAQPageSchema(HOMEPAGE_BUYERS_GUIDE);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <HomePage />
    </>
  );
}
