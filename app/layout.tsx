import type { Metadata, Viewport } from "next";
import "./globals.css";

const description =
  "Research and engineering projects by Omar Abdesslem: computer vision for proton therapy, efficient ML systems, and cybersecurity log analysis.";

export const metadata: Metadata = {
  metadataBase: new URL("https://omar-abdesslem.ch"),
  title: {
    default: "Omar Abdesslem — Computer vision, ML systems & cybersecurity",
    template: "%s | Omar Abdesslem",
  },
  description,
  keywords: [
    "Omar Abdesslem",
    "machine learning",
    "computer vision",
    "efficient ML systems",
    "cybersecurity",
    "efficient computing",
    "ETH Zürich",
    "Paul Scherrer Institute",
    "AI engineering",
  ],
  authors: [{ name: "Omar Abdesslem", url: "https://omar-abdesslem.ch" }],
  openGraph: {
    title: "Omar Abdesslem — Computer vision, ML systems & cybersecurity",
    description,
    siteName: "Omar Abdesslem",
    locale: "en_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Abdesslem — Computer vision, ML systems & cybersecurity",
    description,
    images: ["/opengraph-image"],
  },
  verification: {
    google: "Kyi2izwqEC78hVNyP6sVt31wahToL7IJ92tfQWKADEE",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
