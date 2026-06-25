import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Phone, MapPin } from "lucide-react";
import { brand } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { BookingForm } from "@/components/site/BookingForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Your Date — Makeover by D" },
      { name: "description", content: "Enquire about bridal bookings with Divya Yadhav. Vellore, Hosur and destination weddings worldwide." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-cream pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <span className="text-[11px] tracking-luxury uppercase text-rose-gold">Reserve Your Date</span>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-maroon-deep md:text-8xl">Let's <em className="text-rose-gold">begin.</em></h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75">Share a few details and I'll personally respond within 24 hours with availability, the price guide, and next steps.</p>
        </div>
      </section>
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-7"><BookingForm /></Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <div className="bg-cream p-10 md:p-12">
              <h2 className="font-serif text-3xl text-maroon-deep">Direct lines</h2>
              <ul className="mt-8 space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <Phone size={18} className="mt-1 text-rose-gold" />
                  <div>
                    <p className="text-[10px] tracking-luxury uppercase text-ink/50">WhatsApp / Phone</p>
                    <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="font-serif text-xl text-maroon">{brand.phone}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Instagram size={18} className="mt-1 text-rose-gold" />
                  <div>
                    <p className="text-[10px] tracking-luxury uppercase text-ink/50">Instagram</p>
                    <a href={brand.instagram} target="_blank" rel="noreferrer" className="font-serif text-xl text-maroon">{brand.instagramHandle}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={18} className="mt-1 text-rose-gold" />
                  <div>
                    <p className="text-[10px] tracking-luxury uppercase text-ink/50">Based in</p>
                    <p className="font-serif text-xl text-maroon">Vellore · Hosur</p>
                    <p className="mt-1 text-xs text-ink/60">Destination weddings worldwide</p>
                  </div>
                </li>
              </ul>
              <div className="mt-10 border-t border-border pt-8">
                <p className="text-[10px] tracking-luxury uppercase text-ink/50">Studio area</p>
                <div className="mt-4 aspect-[4/3] w-full overflow-hidden">
                  <iframe title="Vellore studio location" src="https://www.google.com/maps?q=Vellore,+Tamil+Nadu&output=embed" className="h-full w-full border-0 grayscale-[40%]" loading="lazy" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}