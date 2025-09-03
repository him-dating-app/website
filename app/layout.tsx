import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://himapp.uk'),
  title: "Him? - A Safe Space for Women to Date Smarter",
  description: "Join a trusted community built for women. Share real experiences, get alerts about potential dates, and connect with others who prioritise safety.",
  keywords: "dating safety, women dating app, safe dating, community dating, UK dating app",
  authors: [{ name: "Him? Team" }],
  openGraph: {
    title: "Him? - A Safe Space for Women to Date Smarter",
    description: "Join a trusted community built for women. Share real experiences, get alerts about potential dates, and connect with others who prioritise safety.",
    url: "https://himapp.uk",
    siteName: "Him?",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Him? - Safe Dating for Women",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Him? - A Safe Space for Women to Date Smarter",
    description: "Join a trusted community built for women.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}