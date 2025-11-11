import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Features() {
  const features = [
    {
      title: "Clean Architecture",
      description: "Built from ground zero with simplicity as the foundation.",
      image: "/architecture-blueprint-technical-design.jpg",
    },
    {
      title: "Lightning Fast",
      description: "Optimized kernel and minimal overhead for true responsiveness.",
      image: "/fast-speed-technology-bolt-lightning.jpg",
    },
    {
      title: "Feather Light",
      description: "Minimal footprint, maximum compatibility with any hardware.",
      image: "/lightweight-minimalist-clean-sparse.jpg",
    },
    {
      title: "Intuitive Design",
      description: "Learn it instantly. Consistent patterns throughout the system.",
      image: "/intuitive-interface-user-experience-clean.jpg",
    },
    {
      title: "Developer APIs",
      description: "Well-documented, powerful APIs for building extensions.",
      image: "/code-programming-development-technical.jpg",
    },
    {
      title: "Privacy First",
      description: "Complete transparency. No telemetry, zero data collection.",
      image: "/privacy-security-encryption-lock.jpg",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col dark bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">Features</span>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mt-4 mb-6">Powerful by Design</h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl font-light">
              Every feature contributes to our core mission. Excellence through simplicity and thoughtful engineering.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="border-t border-border/30 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card-minimal group">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-40 object-cover rounded-lg mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
