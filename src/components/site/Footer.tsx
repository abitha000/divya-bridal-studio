import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin } from "lucide-react";
import { brand, navLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-maroon-deep text-ivory">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-4xl">
              Makeover <span className="italic text-rose-gold">by D</span>
            </h3>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
              Lakmé-certified bridal artistry by Divya Yadhav. Vellore · Hosur · available worldwide.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-ivory/30 p-3 transition-colors hover:bg-rose-gold hover:text-maroon-deep hover:border-rose-gold"
              >
                <Instagram size={18} />
              </a>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="rounded-full border border-ivory/30 p-3 transition-colors hover:bg-rose-gold hover:text-maroon-deep hover:border-rose-gold"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-luxury uppercase text-rose-gold">Explore</p>
            <ul className="mt-6 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-ivory/80 transition-colors hover:text-rose-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-luxury uppercase text-rose-gold">Studio</p>
            <ul className="mt-6 space-y-4 text-sm text-ivory/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-rose-gold" />
                <span>{brand.locations.join(" · ")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-rose-gold" />
                <a href={`tel:${brand.phoneRaw}`}>{brand.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram size={16} className="mt-0.5 text-rose-gold" />
                <a href={brand.instagram} target="_blank" rel="noreferrer">
                  {brand.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/15 pt-8 text-[11px] tracking-luxury uppercase text-ivory/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Makeover by D — Divya Yadhav</span>
          <span>Crafted with care · Lakmé Certified</span>
        </div>
      </div>
    </footer>
  );
}