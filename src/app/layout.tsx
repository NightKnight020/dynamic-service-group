import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dynamic Service Group | Global Consultancy",
  description:
    "Dynamic Service Group is a global consultancy partnering with industry leaders to drive innovation, optimize operations, and unlock growth across diverse sectors.",
  keywords: [
    "consulting",
    "global consultancy",
    "aviation consulting",
    "AI consulting",
    "blockchain consulting",
    "transportation consulting",
  ],
  openGraph: {
    title: "Dynamic Service Group | Global Consultancy",
    description:
      "Transforming Industries. Delivering Excellence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
