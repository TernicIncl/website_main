import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Documentation() {
  const sections = [
    {
      title: "Getting Started",
      items: ["Installation", "First Steps", "Configuration"],
    },
    {
      title: "User Guide",
      items: ["File System", "Applications", "Settings"],
    },
    {
      title: "Development",
      items: ["API Reference", "Building Apps", "Contributing"],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col dark">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-mono font-bold tracking-tight mb-6">Documentation</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to know to use and develop for TernOS.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-border"></div>
        </div>

        {/* Documentation Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {sections.map((section) => (
              <div key={section.title} className="space-y-6">
                <h2 className="font-mono font-bold text-lg">{section.title}</h2>

                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Search Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
          <div className="max-w-2xl">
            <h2 className="font-mono font-bold text-2xl mb-8">Search Documentation</h2>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 bg-muted text-foreground border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
