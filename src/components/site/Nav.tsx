import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, navLinks } from "@/lib/site-data";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-ivory/95 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl tracking-tight text-maroon-deep md:text-3xl">
            Makeover <span className="italic text-rose-gold">by D</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[11px] tracking-luxury uppercase text-ink/70 transition-colors hover:text-maroon"
              activeProps={{ className: "text-maroon" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-maroon px-6 py-2.5 text-[11px] tracking-luxury uppercase text-ivory transition-all hover:bg-maroon-deep"
          >
            Book Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-maroon-deep"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-border/60">
          <nav className="flex flex-col px-6 py-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-4 font-serif text-2xl text-maroon-deep"
                activeProps={{ className: "text-rose-gold italic" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-maroon px-8 py-3 text-center text-[11px] tracking-luxury uppercase text-ivory"
            >
              Book on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}