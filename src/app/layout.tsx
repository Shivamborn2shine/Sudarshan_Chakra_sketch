import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Caveat, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PaperCanvas } from "@/components/brand/PaperCanvas";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://blackthrone.tech"),
  title: "BLACKTHRONE — WE BUILD THE WAY. | White Sketchbook Flagship",
  description:
    "Every solution begins as a sketch. We take unstructured challenges, test them on paper, and engineer technology people actually use. Discover OneScan360 and Loopa.",
  keywords: [
    "BlackThrone",
    "WE BUILD THE WAY",
    "OneScan360",
    "Loopa",
    "QR Customer Engagement",
    "Digital Loyalty Cards",
    "Business Automation",
    "Sudarshan Chakra",
    "Bengaluru Tech Studio",
  ],
  authors: [{ name: "BlackThrone Technologies" }],
  openGraph: {
    title: "BLACKTHRONE — WE BUILD THE WAY.",
    description:
      "Every solution begins as a sketch. We bring it to life. Official flagship platform of BlackThrone, OneScan360, and Loopa.",
    url: "https://blackthrone.tech",
    siteName: "BlackThrone",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
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
      className={`${spaceGrotesk.variable} ${caveat.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-paper text-graphite-900 font-body antialiased flex flex-col justify-between">
        <PaperCanvas>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </PaperCanvas>
      </body>
    </html>
  );
}

