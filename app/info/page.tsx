import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Information() {
  return (
    <div className="min-h-screen flex flex-col dark">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div>
            <h1 className="text-5xl md:text-6xl font-mono font-bold tracking-tight mb-6">About TernOS</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover the philosophy, vision, and story behind TernOS.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-border"></div>
        </div>

        {/* Featured Image */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative w-full h-96 rounded-lg overflow-hidden border border-border">
            <img src="/minimalist-operating-system-interface.jpg" alt="TernOS Interface" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Content */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          <article className="space-y-4">
            <h2 className="text-2xl font-mono font-bold">The Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              TernOS was born from a simple belief: operating systems should be elegant, efficient, and accessible to
              everyone. We envisioned a platform that strips away unnecessary complexity while maintaining powerful
              capabilities. In today's digital landscape, where bloated software dominates, TernOS stands as a beacon of
              minimalism and purpose. Every line of code, every interface element, and every design decision serves a
              function—nothing more, nothing less.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-mono font-bold">Design Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our design philosophy centers on clarity and functionality. We believe that the best design is
              invisible—it gets out of your way and lets you focus on what matters. TernOS embraces minimalism not as a
              limitation, but as a liberation. By removing visual clutter and unnecessary features, we've created an
              operating system that feels responsive, modern, and intuitive. Every pixel has a purpose, and every
              interaction tells a story of thoughtful engineering.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-mono font-bold">Technology & Innovation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Built on cutting-edge technology, TernOS combines modern programming practices with efficient resource
              management. Our kernel is optimized for speed without sacrificing stability, while our application
              ecosystem encourages developers to think differently about what's possible. We've invested heavily in open
              standards and interoperability, ensuring that TernOS can seamlessly integrate with your existing
              workflows. Innovation at TernOS isn't about adding more features—it's about finding smarter, more elegant
              solutions to real problems.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-mono font-bold">Community & Future</h2>
            <p className="text-muted-foreground leading-relaxed">
              TernOS thrives because of our passionate community of developers, designers, and users who share our
              vision. We're committed to fostering an open dialogue, welcoming feedback, and continuously improving the
              platform. Looking forward, we're exploring new frontiers in operating system design while staying true to
              our core principles. The future of TernOS is a collaborative journey, where every contributor shapes the
              direction of this innovative platform. Together, we're building more than an OS—we're building a movement
              toward better technology.
            </p>
          </article>
        </section>

        {/* Image Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative w-full h-96 rounded-lg overflow-hidden border border-border">
            <img src="/modern-tech-workspace-minimalist-design.jpg" alt="TernOS Workspace" className="w-full h-full object-cover" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
