import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "TernOS – The Modern Operating System for the Future | Minimal, Fast & Elegant",
  description:
    "Discover TernOS — a next-generation operating system built for speed, simplicity, and modern design. Experience minimalist aesthetics, powerful performance, and a seamless user interface designed for the future.",
  
  keywords: [
    "TernOS",
    "modern operating system",
    "minimal OS",
    "lightweight OS",
    "futuristic OS design",
    "fast operating system",
    "Linux alternative",
    "modern desktop environment",
  ],

  authors: [{ name: "TernOS Team", url: "https://ternos.io" }],
  creator: "TernOS Team",
  publisher: "TernOS",

  themeColor: "#040404",
  colorScheme: "dark light",
  metadataBase: new URL("https://ternic.eu"),
  alternates: {
    canonical: "https://ternic.eu",
  },

  openGraph: {
    title: "TernOS – A Modern, Minimal & Powerful Operating System",
    description:
      "Experience the next evolution of computing with TernOS. Minimalist, fast, and beautifully crafted for the modern era.",
    url: "https://ternic.eu",
    siteName: "TernOS",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://ternic.eu/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TernOS – Modern Operating System",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TernOS – Modern Operating System",
    description:
      "TernOS is a next-gen OS designed for speed, elegance, and simplicity. Experience computing redefined.",
    creator: "@ternos",
    images: ["https://ternic.eu/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  category: "Technology",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <body className={`font-sans antialiased ${_inter.variable} ${_geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
