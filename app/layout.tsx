import type { Metadata } from "next";
import { Oswald, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "STRIDE & SOUL | Defy Gravity",
  description: "Premium urban footwear for the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${interTight.variable}`}>
      <body className="antialiased bg-charcoal text-vapor selection:bg-lime selection:text-charcoal cursor-default">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
