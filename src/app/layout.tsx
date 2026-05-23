import type { Metadata } from "next";
import { Libre_Bodoni, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopCountdownBanner from "@/components/TopCountdownBanner";

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  variable: "--font-libre-bodoni",
  display: "swap",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tenniskompass.de"),
  title: {
    default: "Tenniskompass | Ratgeber für Tennis-Eltern in Deutschland",
    template: "%s | Tenniskompass",
  },
  description:
    "Der unabhängige Ratgeber für Tennis-Eltern in Deutschland. Vom ersten Schläger bis zum Mannschaftsspiel – klar erklärt, ohne Marketingfloskeln.",
  keywords: ["Tennis Eltern", "Kindertennisschläger", "Tennisverein Deutschland", "Medenspiele", "Liga.nu", "Tennisschuhe Kinder"],
  authors: [{ name: "Tenniskompass" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://tenniskompass.de",
    siteName: "Tenniskompass",
    title: "Tenniskompass | Ratgeber für Tennis-Eltern",
    description: "Unabhängige Ratgeber für Tennis-Eltern in Deutschland.",
    images: [{ url: "/bilder/og-default.svg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${libreBodoni.variable} ${publicSans.variable}`}
    >
      <body className="min-h-dvh flex flex-col bg-tennis-bg">
        <TopCountdownBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
