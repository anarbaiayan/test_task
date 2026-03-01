import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sitename.io"),
  title: "SITE NAME — Next-Gen Blockchain Infrastructure",
  description:
    "Experience lightning-fast transactions at 120K TPS with AI-powered security. Build scalable dApps on our Proof of Stake blockchain platform.",
  openGraph: {
    title: "SITE NAME — Next-Gen Blockchain Infrastructure",
    description:
      "Experience lightning-fast transactions at 120K TPS with AI-powered security. Build scalable dApps on our Proof of Stake blockchain platform.",
    type: "website",
    url: "https://sitename.io",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SITE NAME — Next-Gen Blockchain Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SITE NAME — Next-Gen Blockchain Infrastructure",
    description:
      "Experience lightning-fast transactions at 120K TPS with AI-powered security.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
