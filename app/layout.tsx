import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omar Abdesslem's Portfolio",
  description: "Portfolio",
  alternates: {
    canonical: "https://omar-abdesslem.ch",
  },
  openGraph: {
    title: "Omar Abdesslem's Portfolio",
    description: "Portfolio",
    url: "https://omar-abdesslem.ch",
    siteName: "Omar Abdesslem",
    type: "website",
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
      <head>
        {/* Optional: Add JSON-LD manually */}
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Omar Abdesslem",
            url: "https://omar-abdesslem.ch",
            description: "Portfolio",
          })}
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
