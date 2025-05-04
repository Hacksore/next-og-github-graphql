import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitHub OG Image Generator",
  description: "Generate beautiful Open Graph images using your GitHub contribution data",
  openGraph: {
    title: "GitHub OG Image Generator",
    description: "Generate beautiful Open Graph images using your GitHub contribution data",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "GitHub Contribution Graph",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub OG Image Generator",
    description: "Generate beautiful Open Graph images using your GitHub contribution data",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
