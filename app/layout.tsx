import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omar Abdesslem's Portfolio",
  description:
    "My full portfolio. I like building things that work ! Master's student at ETH Zürich",
  keywords: [
    "Omar Abdesslem",
    "portfolio",
    "AI engineer",
    "ETH Zürich",
    "machine learning",
    "deep learning",
    "design",
    "sustainable code"
  ],
  authors: [{ name: "Omar Abdesslem", url: "https://omar-abdesslem.ch" }],
  openGraph: {
    title: "Omar Abdesslem's Portfolio",
    description:
      "My full portfolio. I like building things that work !",
    url: "https://omar-abdesslem.ch",
    siteName: "Omar Abdesslem",
    type: "website",
    images: [
      {
        url: "https://omar-abdesslem.ch/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Omar Abdesslem — Portfolio",
      },
    ],
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
