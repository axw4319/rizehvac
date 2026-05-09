import { HomePage } from "@/components/v2/HomePage";
import { generateOrganizationSchema } from "@/lib/schema";

export default function Home() {
  const orgSchema = generateOrganizationSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <HomePage />
    </>
  );
}
