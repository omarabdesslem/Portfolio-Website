import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omar Abdesslem's Portfolio",
  description: "Omar Abdesslem — Software Engineer and AI Enthusiast",
  keywords: ["Omar Abdesslem", "portfolio", "AI engineer", "ETH Zürich", "developer"],
  authors: [{ name: "Omar Abdesslem", url: "https://omar-abdesslem.ch" }],
  openGraph: {
    title: "Omar Abdesslem's Portfolio",
    description: "Software Engineer and AI Intern — ETH Zürich",
    url: "https://omar-abdesslem.ch",
    siteName: "Omar Abdesslem",
    type: "website",
  },
  metadataBase: new URL("https://omar-abdesslem.ch"),
  alternates: {
    canonical: "https://omar-abdesslem.ch",
  },
  verification: {
    google: "Kyi2izwqEC78hVNyP6sVt31wahToL7IJ92tfQWKADEE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
