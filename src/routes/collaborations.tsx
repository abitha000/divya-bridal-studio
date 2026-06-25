import { createFileRoute } from "@tanstack/react-router";
import { collaborations } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/collaborations")({
  head: () => ({
    meta: [
      { title: "Collaborations — Makeover by D" },
      { name: "description", content: "Photographers, studios, venues and brands Divya Yadhav has worked alongside." },
      { property: "og:url", content: "/collaborations" },
    ],
    links: [{ rel: "canonical", href: "/collaborations" }],
  }),
  component: CollabPage,
});

function CollabPage() {
  return (
    <>
      <section className="bg-cream pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <span className="text-[11px] tracking-luxury uppercase text-rose-gold">Collaborations</span>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-maroon-deep md:text-8xl">In good <em className="text-rose-gold">company.</em></h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75">Selected photographers, studios, venues and brand partners.</p>
        </div>
      </section>
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-px bg-border md:grid-cols-3">
            {collaborations.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 0.05} className="bg-ivory">
                <div className="flex h-full flex-col justify-between p-10 md:p-14 min-h-[220px]">
                  <span className="text-[10px] tracking-luxury uppercase text-rose-gold">0{i + 1}</span>
                  <div>
                    <h2 className="font-serif text-2xl text-maroon-deep md:text-3xl">{c.name}</h2>
                    <p className="mt-3 text-sm text-ink/65">{c.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-24 border-t border-border pt-16 text-center">
            <p className="mx-auto max-w-2xl font-serif text-3xl italic text-maroon-deep md:text-4xl">Brand or studio collaboration? I'd love to hear from you.</p>
            <a href="/contact" className="mt-10 inline-flex rounded-full bg-maroon px-8 py-4 text-[11px] tracking-luxury uppercase text-ivory hover:bg-maroon-deep">Get in touch</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}