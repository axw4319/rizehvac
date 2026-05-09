import type { Metadata } from "next";
import { Inter, Source_Serif_4, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rizehvac.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "rizehvac — researched HVAC contractor picks",
    template: "%s | rizehvac",
  },
  description:
    "Find a vetted HVAC contractor in your city. Researched recommendations, real reviews, transparent pricing.",
  applicationName: "rizehvac",
  // TODO: generate /public/og.png (1200x630). Until then we point at the placeholder.
  openGraph: {
    type: "website",
    siteName: "rizehvac",
    url: SITE_URL,
    title: "rizehvac — researched HVAC contractor picks",
    description:
      "Find a vetted HVAC contractor in your city. Researched recommendations, real reviews, transparent pricing.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "rizehvac",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "rizehvac — researched HVAC contractor picks",
    description:
      "Find a vetted HVAC contractor in your city. Researched recommendations, real reviews, transparent pricing.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
