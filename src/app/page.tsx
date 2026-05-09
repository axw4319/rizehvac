import { HomePage } from "@/components/v2/HomePage";
import {
  generateFAQPageSchema,
  generateHowToSchema,
  generateOrganizationSchema,
} from "@/lib/schema";

const HOMEPAGE_BUYERS_GUIDE: { q: string; a: string }[] = [
  { q: "How do I choose an HVAC contractor?", a: "Verify the state contractor license is active, confirm at least one technician is NATE-certified, check BBB rating and complaint history, get three written quotes for the same scope, confirm warranty terms cover both parts and labor, insist on a Manual J load calculation before sizing, and verify they pull permits. Following these 7 steps consistently shortlists the contractors worth hiring in any US metro." },
  { q: "Is NATE certification important for HVAC contractors?", a: "Yes. NATE (North American Technician Excellence) is the gold-standard HVAC certification. NATE-certified technicians install equipment correctly the first time, which is the single biggest predictor of system lifespan. You can verify a technician's NATE certification at NATEx.org." },
  { q: "How many HVAC quotes should I get?", a: "Get three written quotes for the same scope of work. Quotes for the same job often vary by 30-40% in any given metro. The cheapest is rarely the right pick, but the most expensive almost never is either. Pick the middle quote from a contractor with the strongest credentials." },
  { q: "What HVAC warranty terms should I expect?", a: "Manufacturer warranties (Trane, Carrier, Lennox) cover parts only. The contractor's labor warranty is what matters most. 10 years on both parts and labor is the gold standard, 5-year labor warranties are acceptable, and anything less than 2 years labor is a red flag." },
  { q: "Why does Manual J load calculation matter?", a: "Oversized AC units cycle on and off too quickly, fail to remove humidity, and shorten compressor life. A proper Manual J load calculation accounts for square footage, insulation, window orientation, and climate zone. If your HVAC quote doesn't reference Manual J, ask why." },
  { q: "Do HVAC contractors need permits?", a: "Yes. Any HVAC replacement requires a county or city permit. A contractor who suggests skipping the permit to save money is hiding from inspection. Permitted installs also protect your home insurance claim. Permit fees are typically $200-$400 in most US metros." },
];

const HOWTO_STEPS = [
  { name: "Verify the state contractor license is active", text: "Search the state's contractor licensing database (Texas TDLR for Dallas, Arizona ROC for Tucson, California CSLB) by company name. The license must be active, in the right classification, and have no pending disciplinary actions. If a contractor can't provide a license number, walk away." },
  { name: "Confirm at least one technician is NATE-certified", text: "NATE (North American Technician Excellence) is the gold-standard certification for HVAC techs. Look for the NATE patch on uniforms, ask for certification numbers, or verify at NATEx.org. NATE-certified techs install equipment correctly the first time." },
  { name: "Check BBB rating and complaint history", text: "BBB-accredited businesses with A+ ratings and fewer than 3 complaints in the past 3 years are the safest. Read the actual complaints — pay attention to patterns, not isolated incidents." },
  { name: "Get three written quotes for the same scope", text: "Quotes for the same job often vary by 30-40%. Pick the middle quote from a contractor with strong credentials. Ask each contractor to itemize: equipment cost, labor, permit, removal of old unit, and warranty terms." },
  { name: "Confirm warranty terms cover both parts AND labor", text: "Manufacturer warranties cover parts only. The contractor's labor warranty is what matters. 10 years on parts and labor is the gold standard. Less than 2 years labor is a red flag." },
  { name: "Insist on a Manual J load calculation before sizing", text: "Oversized AC units cycle on and off too quickly, fail to remove humidity, and shorten compressor life. A proper Manual J load calculation accounts for square footage, insulation, window orientation, and climate zone. If your quote doesn't reference Manual J, ask why." },
  { name: "Verify they pull permits — and don't ask you to skip them", text: "Any HVAC replacement requires a county or city permit. A contractor who suggests skipping the permit to save money is hiding from inspection. Permitted installs also protect your home insurance claim. Permit fees are typically $200-$400 in most metros." },
];

export default function Home() {
  const orgSchema = generateOrganizationSchema();
  const faq = generateFAQPageSchema(HOMEPAGE_BUYERS_GUIDE);
  const howTo = generateHowToSchema({
    name: "How to choose an HVAC contractor",
    description: "A 7-step process for shortlisting trustworthy HVAC contractors in any US metro.",
    pageUrl: "/",
    totalTime: "PT30M",
    steps: HOWTO_STEPS,
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <HomePage />
    </>
  );
}
