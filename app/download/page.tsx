import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Download() {
  const versions = [
    {
      name: "Stable",
      version: "2.1.0",
      description: "Production-ready, fully tested release",
      size: "425 MB",
      releaseDate: "Jan 15, 2025",
      badge: "recommended",
    },
    {
      name: "Beta",
      version: "2.2.0-beta.1",
      description: "Early access to upcoming features",
      size: "438 MB",
      releaseDate: "Jan 12, 2025",
      badge: "new",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col dark">
      <Navigation />

      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">Download</span>
            <h1 className="text-6xl md:text-7xl font-mono font-bold tracking-tight mt-3 mb-6">Get Started Now</h1>
            <p className="text-lg text-muted leading-relaxed">
              Choose your version and join thousands of users experiencing pure computing.
            </p>
          </div>
        </section>

        <div className="border-t border-border/50 max-w-7xl mx-auto mx-auto px-4 sm:px-6 lg:px-8"></div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="space-y-6">
            {versions.map((v) => (
              <div key={v.version} className="card-minimal group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-mono font-bold text-lg">{v.name}</h3>
                      <span
                        className={`text-xs font-mono px-2.5 py-1 rounded uppercase tracking-wider ${
                          v.badge === "recommended" ? "bg-accent/10 text-accent" : "bg-accent-soft text-accent"
                        }`}
                      >
                        {v.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted">{v.description}</p>
                  </div>
                  <button className="btn-primary ml-4">Download</button>
                </div>

                <div className="flex gap-6 text-xs text-muted font-mono pt-4 border-t border-border">
                  <span>
                    <span className="text-accent">v</span>
                    {v.version}
                  </span>
                  <span>{v.size}</span>
                  <span>{v.releaseDate}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-20 border-t border-border/50">
            <h2 className="font-mono font-bold text-3xl mb-12">System Requirements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Minimum",
                  specs: [
                    { label: "RAM", value: "512 MB" },
                    { label: "Storage", value: "2 GB" },
                    { label: "Processor", value: "1 GHz" },
                  ],
                },
                {
                  title: "Recommended",
                  specs: [
                    { label: "RAM", value: "2+ GB" },
                    { label: "Storage", value: "10+ GB" },
                    { label: "Processor", value: "2+ GHz" },
                  ],
                },
              ].map((req) => (
                <div key={req.title} className="card-minimal">
                  <h3 className="font-mono font-bold text-lg mb-6">{req.title}</h3>
                  <div className="space-y-4">
                    {req.specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between text-sm">
                        <span className="text-muted">{spec.label}</span>
                        <span className="font-mono text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
