import { createFileRoute, Link } from "@tanstack/react-router";
import { services, brand } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Packages — Makeover by D" },
      { name: "description", content: "Muhurtham bridal, reception, engagement, sangeet, haldi, baby shower and editorial makeup packages by Divya Yadhav." },
      { property: "og:title", content: "Services & Packages — Makeover by D" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-cream pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <span className="text-[11px] tracking-luxury uppercase text-rose-gold">Services</span>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-maroon-deep md:text-8xl">The <em className="text-rose-gold">menu.</em></h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75">Each package is fully bespoke. Trials, on-location travel and multi-day weddings are accommodated on request.</p>
        </div>
      </section>
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-px bg-border md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.08} className="bg-ivory">
                <article className="h-full p-10 md:p-14">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] tracking-luxury uppercase text-rose-gold">0{i + 1}</span>
                    <span className="text-[10px] tracking-luxury uppercase text-ink/50">{s.duration}</span>
                  </div>
                  <h2 className="mt-6 font-serif text-3xl text-maroon-deep md:text-4xl">{s.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-ink/70">{s.summary}</p>
                  <ul className="mt-8 space-y-3 text-sm text-ink/80">
                    {s.details.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span className="mt-2 h-[1px] w-4 shrink-0 bg-rose-gold" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-20 border-t border-border pt-12 text-center">
            <p className="font-serif text-2xl italic text-maroon-deep md:text-3xl">Pricing is shared privately upon enquiry.</p>
            <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="mt-10 inline-flex rounded-full bg-maroon px-8 py-4 text-[11px] tracking-luxury uppercase text-ivory hover:bg-maroon-deep">
              Request the price guide
            </a>
            <p className="mt-6 text-[11px] tracking-luxury uppercase text-ink/50">or <Link to="/contact" className="underline underline-offset-4">use the enquiry form</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}