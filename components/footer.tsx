import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background/50 backdrop-blur mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-base mb-4">TernOS</h3>
            <p className="text-sm text-muted leading-relaxed max-w-xs font-light">
              The modern operating system for the contemporary era.
            </p>
          </div>

          {[
            {
              title: "Product",
              links: [
                { label: "Features", href: "/features" },
                { label: "Download", href: "/download" },
                { label: "Changelog", href: "/changelog" },
              ],
            },
            {
              title: "Resources",
              links: [
                { label: "Documentation", href: "/docs" },
                { label: "Support", href: "#" },
                { label: "FAQ", href: "#" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy", href: "#" },
                { label: "Terms", href: "#" },
                { label: "License", href: "#" },
              ],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-sm mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-accent transition-colors duration-200 font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted font-light">© 2025 TernOS. All rights reserved.</p>
            <div className="flex gap-6">
              {[
                { label: "GitHub", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Discord", href: "#" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-muted hover:text-accent transition-colors duration-200 font-light"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
