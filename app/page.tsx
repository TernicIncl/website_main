import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col dark bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-32 min-h-[600px] flex flex-col justify-center">
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
            <img
              src="/modern-dark-tech-interface-abstract-design.jpg"
              alt="Hero background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="space-y-8 max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur w-fit">
              <span className="text-xs font-semibold text-accent">✦ Soon Available</span>
            </div>

            <div>
              <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-6 text-gradient">TernOS</h1>
              <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl font-light">
                The modern operating system. Crafted for clarity, built for performance. Experience design without
                compromise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href="/download" className="btn-primary text-center">
                Download Now
              </Link>
              <Link href="/features" className="btn-secondary text-center">
                Explore Features →
              </Link>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-border/30 max-w-7xl mx-auto"></div>

        {/* Highlights Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Minimal",
                title: "Pure Elegance",
                description: "Every pixel intentional. No cruft, no compromise. Just pristine design.",
                image: "/minimalist-design-interface-clean-aesthetic.jpg",
              },
              {
                label: "Fast",
                title: "Lightning Speed",
                description: "Boot in seconds, respond instantly. Optimized from the kernel up.",
                image: "/high-speed-technology-motion-blur.jpg",
              },
              {
                label: "Open",
                title: "Transparent",
                description: "Community-driven. Open source. Zero telemetry, complete privacy.",
                image: "/open-source-community-collaboration.jpg",
              },
            ].map((item) => (
              <div key={item.label} className="card-minimal group overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded-lg mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="text-xs font-mono text-accent uppercase tracking-widest">{item.label}</span>
                <h3 className="text-lg font-bold mt-3 mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-t border-border/30 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "0+", label: "Users Worldwide" },
              { value: "99.9%", label: "Uptime" },
              { value: "12ms", label: "Boot Time" },
              { value: "4.9★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-xs text-muted uppercase tracking-wide font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
