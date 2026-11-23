import type { Metadata, Viewport } from "next";
import "./globals.css";

const description =
  "Omar Abdesslem explores machine learning, computer vision, and efficient computing. Selected projects, research, and engineering work from ETH Zürich and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL("https://omar-abdesslem.ch"),
  title: {
    default: "Omar Abdesslem — Machine Learning & Computer Vision",
    template: "%s | Omar Abdesslem",
  },
  description,
  keywords: [
    "Omar Abdesslem",
    "machine learning",
    "computer vision",
    "efficient computing",
    "ETH Zürich",
    "Paul Scherrer Institute",
    "AI engineering",
  ],
  authors: [{ name: "Omar Abdesslem", url: "https://omar-abdesslem.ch" }],
  openGraph: {
    title: "Omar Abdesslem — Machine Learning & Computer Vision",
    description,
    siteName: "Omar Abdesslem",
    locale: "en_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Abdesslem — Machine Learning & Computer Vision",
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
  themeColor: "#f8faf9",
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
