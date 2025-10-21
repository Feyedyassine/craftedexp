import type { Metadata } from "next";
import { Cormorant, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Crafted Experiences | Bespoke Travel & Event Agency Tunisia",
  description:
    "Crafted Experiences designs bespoke events, corporate travel, and luxury experiences in Tunisia & abroad. Custom-made with creativity, detail & care.",
  openGraph: {
    type: "website",
    url: "https://crafted-experiences.com/",
    title: "Crafted Experiences | Bespoke Travel & Event Agency",
    description:
      "Bespoke events, corporate travel & luxury experiences in Tunisia & beyond.",
    images: [
      {
        url: "https://crafted-experiences.com/images/crafted.png",
        width: 1200,
        height: 630,
        alt: "Crafted Experiences Event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crafted Experiences | Bespoke Travel & Event Agency",
    description:
      "Bespoke events, corporate travel & luxury experiences in Tunisia & beyond.",
    images: ["https://crafted-experiences.com/images/crafted.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
