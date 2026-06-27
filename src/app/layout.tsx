import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "5-Star Bali Resort | 4 Hotels, 14 Pools, Rock Bar & Spa | SVARNA Bali",
  description: "Experience the ultimate luxury resort estate in Jimbaran, Bali. Spanning 90 hectares, SVARNA Bali features 4 award-winning hotels, 14 swimming pools, 30+ dining venues including Rock Bar, and a world-class wellness spa.",
  keywords: "SVARNA Bali, Luxury Resort Bali, Rock Bar Bali, Jimbaran Hotels, Bali 5 Star Hotel, SVARNA Villas, SVARNA Segara, RIMBA by SVARNA",
  openGraph: {
    title: "SVARNA Bali | Luxury Resort, Villas, Spa & Rock Bar",
    description: "Experience the ultimate luxury resort estate in Jimbaran, Bali. Spanning 90 hectares, SVARNA Bali features 4 award-winning hotels, 14 swimming pools, 30+ dining venues including Rock Bar, and a world-class wellness spa.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-charcoal">{children}</body>
    </html>
  );
}
