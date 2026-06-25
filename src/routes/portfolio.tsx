import { createFileRoute } from "@tanstack/react-router";
import { portfolio } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Bridal Portfolio — Makeover by D" },
      { name: "description", content: "Selected bridal, reception and editorial work by Divya Yadhav — Lakmé certified artist." },
      { property: "og:title", content: "Bridal Portfolio — Makeover by D" },
      { property: "og:url", content: "/portfolio" },
      { property: "og:image", content: portfolio[0].src },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <section className="bg-cream pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <span className="text-[11px] tracking-luxury uppercase text-rose-gold">Portfolio</span>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-maroon-deep md:text-8xl">Her <em className="text-rose-gold">brides.</em></h1>
        </div>
      </section>
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            {portfolio.map((p, i) => (
              <Reveal key={p.src} delay={(i % 2) * 0.08}>
                <figure className={`group ${i % 3 === 0 ? "md:col-span-2" : ""}`}>
                  <div className={`overflow-hidden bg-cream ${i % 3 === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
                    <img src={p.src} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
                  </div>
                  <figcaption className="mt-5 flex items-baseline justify-between border-b border-border pb-5">
                    <div>
                      <p className="font-serif text-xl italic text-maroon-deep">{p.title}</p>
                      <p className="mt-1 text-xs text-ink/55">{p.credit}</p>
                    </div>
                    <span className="text-[10px] tracking-luxury uppercase text-rose-gold">{p.category}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}