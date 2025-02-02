import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omar Abdesslem's Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <meta name="title" content="Omar Abdesslem" />
        <meta name="description" content="Portfolio" />

        {/* Open Graph Metadata */}
        <meta property="og:site_name" content="Omar Abdesslem" />
        <meta property="og:title" content="Portfolio" />
        <meta property="og:url" content="https://omar-abdesslem.ch" />
        <meta property="og:type" content="website" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="Kyi2izwqEC78hVNyP6sVt31wahToL7IJ92tfQWKADEE" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Omar Abdesslem",
            "url": "https://omar-abdesslem.ch",
            "description": "Portfolio",
          })}
        </script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
