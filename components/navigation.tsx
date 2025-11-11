"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/40 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          TernOS
        </Link>

        <div className="flex items-center gap-1">
          {[
            { href: "/features", label: "Features" },
            { href: "/download", label: "Download" },
            { href: "/info", label: "Info" },
            { href: "/changelog", label: "Changelog" },
            { href: "/docs", label: "Docs" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive(href) ? "text-accent bg-accent/10" : "text-muted hover:text-foreground hover:bg-border/20"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
