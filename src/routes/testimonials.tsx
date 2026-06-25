import { createFileRoute } from "@tanstack/react-router";
import { testimonials } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Bride Stories & Testimonials — Makeover by D" },
      { name: "description", content: "Words from brides who chose Divya Yadhav for their wedding day artistry." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <section className="bg-cream pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <span className="text-[11px] tracking-luxury uppercase text-rose-gold">Words From Brides</span>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-maroon-deep md:text-8xl">In their own <em className="text-rose-gold">voice.</em></h1>
        </div>
      </section>
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-border px-5 md:grid-cols-2 md:px-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08} className="bg-ivory">
              <blockquote className="h-full p-10 md:p-14">
                <span className="font-serif text-6xl leading-none text-rose-gold">“</span>
                <p className="mt-2 font-serif text-2xl italic leading-[1.4] text-maroon-deep">{t.quote}</p>
                <footer className="mt-8 border-t border-border pt-6">
                  <p className="font-serif text-lg text-maroon">{t.name}</p>
                  <p className="mt-1 text-[10px] tracking-luxury uppercase text-ink/55">{t.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}