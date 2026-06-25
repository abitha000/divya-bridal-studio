import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { brand, portfolio, services, testimonials } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Makeover by D — Lakmé Certified Bridal Makeup by Divya Yadhav" },
      {
        name: "description",
        content:
          "Editorial bridal makeup, hairstyling and draping by Lakmé-certified artist Divya Yadhav. Vellore · Hosur · destination weddings.",
      },
      { property: "og:title", content: "Makeover by D — Lakmé Certified Bridal Artistry" },
      {
        property: "og:description",
        content:
          "Editorial bridal makeup, hairstyling and draping by Divya Yadhav across South India and worldwide.",
      },
      { property: "og:image", content: portfolio[0].src },
      { property: "og:url", content: "/" },
      { name: "twitter:image", content: portfolio[0].src },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: brand.name,
          image: brand.logo,
          telephone: brand.phone,
          areaServed: brand.locations,
          founder: { "@type": "Person", name: brand.artist },
          sameAs: [brand.instagram],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-maroon-deep">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          src={portfolio[0].src}
          alt="South Indian muhurtham bride by Makeover by D"
          className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/40 via-transparent to-maroon-deep/80" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-20 md:px-10 md:pb-28">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-[11px] tracking-luxury uppercase text-rose-gold"
          >
            ⸻  Lakmé Certified Bridal Artist
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-ivory md:text-7xl lg:text-8xl"
          >
            The bride you remember<br />
            <span className="italic text-rose-gold">becoming.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="mt-8 max-w-md text-base leading-relaxed text-ivory/85"
          >
            Editorial bridal artistry by Divya Yadhav — built around your skin,
            your story, and the camera that will remember the day.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-ivory px-8 py-4 text-[11px] tracking-luxury uppercase text-maroon-deep transition-all hover:bg-rose-gold hover:text-ivory"
            >
              Reserve Your Date
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/portfolio"
              className="text-[11px] tracking-luxury uppercase text-ivory/80 underline underline-offset-8 hover:text-rose-gold"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-y border-border bg-cream py-6">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-12 gap-y-3 px-5 text-[10px] tracking-luxury uppercase text-ink/60 md:px-10">
          <span>Vellore</span>
          <span className="text-rose-gold">◆</span>
          <span>Hosur</span>
          <span className="text-rose-gold">◆</span>
          <span>Destination Brides</span>
          <span className="text-rose-gold">◆</span>
          <span>Lakmé Certified</span>
          <span className="text-rose-gold">◆</span>
          <span>HD Airbrush Specialist</span>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-ivory py-24 md:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-5">
            <img
              src={brand.portrait}
              alt="Divya Yadhav — bridal makeup artist"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.15} className="flex flex-col justify-center md:col-span-7">
            <span className="text-[11px] tracking-luxury uppercase text-rose-gold">The Artist</span>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-maroon-deep md:text-6xl">
              I believe a bride should feel <em className="text-rose-gold">entirely</em> herself —
              only softer, brighter, eternal.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/75">
              Divya Yadhav is a Lakmé-certified bridal artist working across
              Vellore, Hosur and on destination weddings around the world. Her
              practice blends classical South Indian bridal traditions with a
              modern, editorial finish — designed to photograph beautifully and
              wear comfortably from sunrise to sangeet.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 text-[11px] tracking-luxury uppercase text-maroon hover:text-rose-gold"
            >
              Read her story <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-cream py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <span className="text-[11px] tracking-luxury uppercase text-rose-gold">Atelier Services</span>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-maroon-deep md:text-6xl">
              Considered, ceremonial, <em>uncompromised.</em>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05} className="bg-cream">
                <div className="group h-full bg-cream p-10 transition-colors hover:bg-ivory">
                  <span className="text-[10px] tracking-luxury uppercase text-rose-gold">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-maroon-deep">{s.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">{s.summary}</p>
                  <p className="mt-6 text-[10px] tracking-luxury uppercase text-ink/50">
                    {s.duration}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-[11px] tracking-luxury uppercase text-maroon hover:text-rose-gold"
            >
              Full service menu <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO STRIP */}
      <section className="bg-ivory py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <span className="text-[11px] tracking-luxury uppercase text-rose-gold">Recent Work</span>
              <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-maroon-deep md:text-6xl">
                A glimpse of <em>her brides.</em>
              </h2>
            </Reveal>
            <Link
              to="/portfolio"
              className="text-[11px] tracking-luxury uppercase text-maroon hover:text-rose-gold"
            >
              View all →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {portfolio.slice(0, 6).map((p, i) => (
              <Reveal key={p.src} delay={i * 0.05}>
                <figure className="group overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden bg-cream">
                    <img
                      src={p.src}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-4 flex items-center justify-between">
                    <span className="font-serif italic text-maroon-deep">{p.title}</span>
                    <span className="text-[10px] tracking-luxury uppercase text-ink/50">
                      {p.category}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-maroon-deep py-24 text-ivory md:py-36">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
          <Reveal>
            <Sparkles className="mx-auto text-rose-gold" size={28} />
            <p className="mt-10 font-serif text-3xl italic leading-[1.3] md:text-4xl lg:text-5xl">
              “{testimonials[0].quote}”
            </p>
            <p className="mt-10 text-[11px] tracking-luxury uppercase text-rose-gold">
              {testimonials[0].name} — {testimonials[0].role}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-5 text-center md:px-10">
          <Reveal>
            <span className="text-[11px] tracking-luxury uppercase text-rose-gold">Reserve</span>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-[1.1] text-maroon-deep md:text-7xl">
              Dates are confirmed in the order they are received.
            </h2>
            <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-ink/70">
              Limited bookings per season to protect the quality of every wedding.
            </p>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-maroon px-9 py-4 text-[11px] tracking-luxury uppercase text-ivory transition-all hover:bg-maroon-deep"
            >
              Enquire about your date <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}