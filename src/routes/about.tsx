import { createFileRoute, Link } from "@tanstack/react-router";
import { brand } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Divya Yadhav — Makeover by D" },
      { name: "description", content: "Lakmé-certified bridal artist Divya Yadhav on her practice, training and philosophy." },
      { property: "og:title", content: "About Divya Yadhav — Makeover by D" },
      { property: "og:description", content: "The artist, the training, the philosophy." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: brand.portrait },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-cream pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <span className="text-[11px] tracking-luxury uppercase text-rose-gold">The Artist</span>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-maroon-deep md:text-8xl">
            Divya <em className="text-rose-gold">Yadhav.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75">
            Founder & lead artist of Makeover by D — a Lakmé-certified bridal atelier with a quiet, editorial point of view.
          </p>
        </div>
      </section>
      <section className="bg-ivory py-24 md:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-5">
            <img src={brand.portrait} alt="Divya Yadhav" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 space-y-8 text-ink/80 text-[17px] leading-[1.85]">
            <p>I grew up in a family where every wedding was a sensory archive — jasmine and sandalwood, the rustle of kanjivaram, the hush before the muhurtham. I started studying makeup because I wanted to honour that hush. To make brides feel held, not painted on.</p>
            <p>Today Makeover by D is the result of years of training, Lakmé certification, and hundreds of weddings across Vellore, Hosur, Bengaluru, Kerala and beyond. My approach is skin-first: hours of prep before a single product touches your face, custom-blended tones for your undertone, and a long-wear finish designed for South Indian heat and South Indian cameras.</p>
            <p>I take a limited number of brides each season. It is the only way I know to keep the work personal — to remember your mother's name, your sister's outfit, the exact pink of your reception flowers.</p>
            <div className="grid gap-8 border-t border-border pt-10 md:grid-cols-3">
              {[["7+","Years of practice"],["300+","Brides styled"],["Lakmé","Certified"]].map(([n,l]) => (
                <div key={l}>
                  <p className="font-serif text-5xl text-maroon">{n}</p>
                  <p className="mt-2 text-[11px] tracking-luxury uppercase text-ink/55">{l}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-3 rounded-full bg-maroon px-8 py-3.5 text-[11px] tracking-luxury uppercase text-ivory hover:bg-maroon-deep">
              Begin your enquiry →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}