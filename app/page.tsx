import Image from "next/image";

const NAV_LINKS = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#colors", label: "Colors" },
  { href: "#lifestyle", label: "Lifestyle" },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-full text-charcoal bg-cream antialiased">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur border-b border-charcoal/[.06] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight text-charcoal">HWA</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal-light">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-terracotta transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1 relative pt-24">
        <section className="relative px-6 py-24 md:py-36 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-terracotta/[.12] text-terracotta-dark text-xs font-medium tracking-wide uppercase mb-6">
              Warm Minimalist Design
            </span>
            <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight mb-6">
              Thoughtful essentials for <br />
              <span className="text-terracotta">everyday living.</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Carefully crafted pieces that bring calm and warmth to your home.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#colors"
                className="flex-1 sm:flex-none h-12 sm:h-auto px-8 rounded-full bg-charcoal text-cream font-medium hover:bg-terracotta transition-colors"
              >
                Shop Colors
              </a>
              <a
                href="#features"
                className="flex-1 sm:flex-none h-12 sm:h-auto px-8 rounded-full border border-charcoal/[.2] text-charcoal font-medium hover:bg-charcoal/[.04] transition-colors"
              >
                Details
              </a>
            </div>
          </div>
          <div className="mt-20 max-w-5xl mx-auto">
            <Image
              src="/images/hero-product.png"
              alt="Hero product"
              fill
              className="rounded-xl object-cover shadow-2xl border border-charcoal/[.08]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </section>

        <section id="features" className="px-6 py-24 md:py-36 bg-oatmeal">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Engineered for calm</h2>
              <p className="text-charcoal-light max-w-2xl mx-auto">Every detail considered, nothing superfluous.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/images/exploded-mechanism.png"
                  alt="Exploded mechanism"
                  fill
                  className="rounded-xl object-cover shadow-lg border border-charcoal/[.08]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Precision parts</h3>
                  <p className="text-charcoal-light leading-relaxed">
                    Clean assembly with tight tolerances. Built to last without visual noise.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quiet presence</h3>
                  <p className="text-charcoal-light leading-relaxed">
                    Soft edges and muted tones that recede into your space, never demanding attention.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Easy care</h3>
                  <p className="text-charcoal-light leading-relaxed">
                    Surfaces that wipe clean and age gracefully with use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="colors" className="px-6 py-24 md:py-36">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Color variations</h2>
              <p className="text-charcoal-light max-w-2xl mx-auto">Four earthy tones to match your home.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sage green</h3>
                  <p className="text-charcoal-light leading-relaxed">
                    A muted, grounding green that pairs naturally with wood and stone.
                  </p>
                </div>
                <div className="h-16 rounded-full bg-sage border border-charcoal/[.08]"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Warm oatmeal</h3>
                  <p className="text-charcoal-light leading-relaxed">
                    Soft, neutral cream that brightens any room without feeling stark.
                  </p>
                </div>
                <div className="h-16 rounded-full bg-oatmeal border border-charcoal/[.08]"></div>
              </div>
              <div className="relative">
                <Image
                  src="/images/color-variants.png"
                  alt="Color variants"
                  fill
                  className="rounded-xl object-cover shadow-lg border border-charcoal/[.08]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="lifestyle" className="px-6 py-24 md:py-36 bg-oatmeal">
          <div className="max-w-4xl mx-auto text-center">
            <Image
              src="/images/dog-lifestyle.png"
              alt="Dog lifestyle"
              fill
              className="rounded-2xl object-cover shadow-2xl border border-charcoal/[.08]"
              sizes="(max-width: 768px) 100vw, 40vw"
              style={{ aspectRatio: "4 / 3" }}
            />
            <div className="mt-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Made for life at home</h2>
              <p className="text-charcoal-light max-w-2xl mx-auto leading-relaxed">
                From quiet mornings to everyday moments, designed to belong.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-charcoal/[.08] bg-charcoal text-cream py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-semibold tracking-tight">HWA</div>
          <p className="text-sm text-charcoal-light/[.8]">Warm minimalist essentials.</p>
        </div>
      </footer>
    </div>
  );
}
