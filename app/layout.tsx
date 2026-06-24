import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "../styles/globals.css";
import { brand } from "@/lib/content";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const title = `${brand.name} · ${brand.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${brand.name}`,
  },
  description: brand.oneLiner,
  applicationName: brand.fullName,
  openGraph: {
    title,
    description: brand.oneLiner,
    type: "website",
    siteName: brand.fullName,
    images: [{ url: "/brand/via-branding-poster.jpeg", width: 1600, height: 1000, alt: brand.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: brand.oneLiner,
    images: ["/brand/via-branding-poster.jpeg"],
  },
  icons: {
    icon: "/brand/green-logo.jpeg",
    apple: "/brand/green-logo.jpeg",
  },
};

export const viewport: Viewport = {
  themeColor: "#070a10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
