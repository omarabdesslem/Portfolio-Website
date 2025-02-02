import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Omar Abdesslem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="Kyi2izwqEC78hVNyP6sVt31wahToL7IJ92tfQWKADEE"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
