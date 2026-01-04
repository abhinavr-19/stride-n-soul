import type { Metadata } from "next";
import { Oswald, Inter_Tight } from "next/font/google";
import "./globals.css";

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
          {children}
      </body>
    </html>
  );
}
