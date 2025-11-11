import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col dark">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-mono font-bold tracking-tight mb-6">Contact</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions? We'd love to hear from you. Reach out anytime.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-border"></div>
        </div>

        {/* Contact Form */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {/* Form */}
            <div>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-muted text-foreground border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-muted text-foreground border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    placeholder="Your message..."
                    rows={6}
                    className="w-full px-4 py-3 bg-muted text-foreground border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="font-mono font-bold text-lg mb-3">Email</h3>
                <p className="text-sm text-muted-foreground">hello@ternos.dev</p>
              </div>

              <div>
                <h3 className="font-mono font-bold text-lg mb-3">Community</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Forums
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-mono font-bold text-lg mb-3">Social</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
