import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "TernOS – Modern Operating System",
  description: "Experience the future of OS design. Minimalist, powerful, and elegantly crafted for the modern era.",
  // icons: {
  //   icon: [
  //     {
  //       // url: "/icon.svg",
  //       type: "image/svg+xml",
  //     },
  //   ],
  // },
  themeColor: "#040404",
  openGraph: {
    title: "TernOS",
    description: "Experience the future of OS design.",
    type: "website",
  },
}

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
