import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Changelog() {
  const releases = [
    {
      category: "Features",
      color: "from-blue-500 to-blue-600",
      items: [
        {
          version: "2.1.0",
          date: "November 2025",
          changes: [
            "Dark mode interface with automatic detection",
            "Multi-workspace support for power users",
            "Native ARM64 optimization",
          ],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col dark bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient">Changelog</h1>
            <p className="text-lg text-muted max-w-2xl">
              Track all updates, improvements, and fixes to TernOS. Stay informed about the latest developments.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-border/30"></div>

        {/* Changelog Categories */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16 space-y-20">
          {releases.map((section) => (
            <div key={section.category} className="space-y-8">
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${section.color}`}></div>
                <h2 className="text-2xl font-bold text-foreground">{section.category}</h2>
              </div>

              {/* Releases in Category */}
              <div className="space-y-8 ml-4">
                {section.items.map((release, idx) => (
                  <div key={`${section.category}-${idx}`} className="space-y-4">
                    {/* Version Header */}
                    <div className="flex items-baseline gap-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-mono text-accent font-semibold">v{release.version}</span>
                        <span className="text-xs text-muted font-medium">{release.date}</span>
                      </div>
                    </div>

                    {/* Changes List */}
                    <ul className="space-y-2 ml-0">
                      {release.changes.map((change, changeIdx) => (
                        <li key={changeIdx} className="flex gap-3 text-muted leading-relaxed">
                          <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                          <span className="text-foreground/90">{change}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Divider between releases */}
                    {idx < section.items.length - 1 && <div className="border-t border-border/20 mt-6 pt-6"></div>}
                  </div>
                ))}
              </div>

              {/* Divider between categories */}
              <div className="border-t border-border/30 pt-0"></div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16 border-t border-border/30">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Ready to experience the latest?</h3>
            <Link href="/download" className="btn-primary inline-block">
              Download TernOS →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
