import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "Ameer Global Trading & Shipping | Your Bridge to Global Trade",
  description: "China-based sourcing, purchasing, quality inspection, and international shipping.",
  icons: {
    icon: "/ameer.png",
    shortcut: "/ameer.png",
    apple: "/ameer.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/ameer.png" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
