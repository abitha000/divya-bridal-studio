import logoUrl from "@/assets/brand/makeover-by-d-logo.jpg";
import divyaUrl from "@/assets/brand/divya.jpg";
import heroUrl from "@/assets/brand/hero-bride.jpg";
import p1Url from "@/assets/portfolio/p1.jpg";
import p2Url from "@/assets/portfolio/p2.jpg";
import p3Url from "@/assets/portfolio/p3.jpg";
import p4Url from "@/assets/portfolio/p4.jpg";
import p5Url from "@/assets/portfolio/p5.jpg";
import p6Url from "@/assets/portfolio/p6.jpg";
import p7Url from "@/assets/portfolio/p7.jpg";

export const brand = {
  name: "Makeover by D",
  artist: "Divya Yadhav",
  initials: "DY",
  phone: "+91 6380462679",
  phoneRaw: "916380462679",
  whatsapp: "https://wa.me/916380462679?text=Hi%20Divya%2C%20I%27d%20like%20to%20book%20a%20bridal%20consultation.",
  instagram: "https://instagram.com/makeover_by_d_",
  instagramHandle: "@makeover_by_d_",
  email: "bookings@makeoverbyd.com",
  locations: ["Vellore", "Hosur", "Available worldwide"],
  tagline: "Lakmé certified bridal artistry",
  logo: logoUrl,
  portrait: divyaUrl,
  hero: heroUrl,
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/collaborations", label: "Collaborations" },
  { to: "/contact", label: "Contact" },
] as const;

export const portfolio = [
  { src: p1Url, title: "Muhurtham — South Indian Bride", category: "Bridal", credit: "Kanjivaram & temple jewellery" },
  { src: p2Url, title: "Soft Glam Reception", category: "Reception", credit: "Photography: The Shutter" },
  { src: p3Url, title: "Editorial Glow", category: "Editorial", credit: "Photography: The Shutter" },
  { src: p4Url, title: "Candlelit Engagement", category: "Engagement", credit: "Photography: The Shutter" },
  { src: p5Url, title: "Kerala Onam Editorial", category: "Editorial", credit: "Camera: @swetha" },
  { src: p6Url, title: "editorial shoot", category: "Bridal", credit: "Captured: Dineshjothi Studios" },
  { src: p7Url, title: "Sangeet Close-up", category: "Sangeet", credit: "Captured: Dineshjothi Studios" },
];

export const services = [
  {
    title: "Muhurtham Bridal",
    summary: "The defining ceremony — radiant, long-wearing, photograph-ready.",
    details: [
      "HD airbrush base, custom-blended foundation",
      "Traditional eye, hand-set lashes, kohl",
      "Saree draping & temple-jewellery styling",
      "Touch-up kit included for the ceremony",
    ],
    duration: "4–5 hrs",
  },
  {
    title: "Reception",
    summary: "Soft, luminous glam built to last the celebration.",
    details: [
      "Dewy skin, contoured silhouette",
      "Smokey or rose-gold eye",
      "Hollywood waves or sleek bun",
      "Lehenga / gown draping",
    ],
    duration: "3–4 hrs",
  },
  {
    title: "Engagement & Sangeet",
    summary: "Modern, sculpted glamour for the moments in between.",
    details: [
      "Skin-prep & lash application",
      "Statement lip or fresh nude",
      "Hairstyling — braids, curls, sleek looks",
      "Outfit & jewellery styling support",
    ],
    duration: "3 hrs",
  },
  {
    title: "Haldi & Mehendi",
    summary: "Effortless, sun-kissed beauty for daylight rituals.",
    details: [
      "Lightweight base, fresh florals",
      "Soft braids & natural styling",
      "Smudge-resistant finish",
    ],
    duration: "2 hrs",
  },
  {
    title: "Baby Shower / Seemantham",
    summary: "Gentle, glowing, mother-to-be artistry.",
    details: [
      "Hydrating, sensitive-skin base",
      "Soft eye, rosy lip",
      "Saree drape & floral hair",
    ],
    duration: "2 hrs",
  },
  {
    title: "Editorial & Pre-Wedding Shoots",
    summary: "Concept-driven makeup for the camera.",
    details: [
      "Mood-board led, 1–3 looks per session",
      "Camera-ready highlights & contour",
      "On-location available",
    ],
    duration: "On request",
  },
];

export const testimonials = [
  {
    name: "Sneha R.",
    role: "Muhurtham bride · Hosur",
    quote:
      "Divya understood my vision the moment we met. My makeup stayed flawless from the muhurtham right through the reception — and I felt entirely myself.",
  },
  {
    name: "Ananya S.",
    role: "Reception · Vellore",
    quote:
      "Soft, luminous and completely modern. The skin work was breathtaking — every photograph still looks editorial months later.",
  },
  {
    name: "Jessica J.",
    role: "Editorial shoot",
    quote:
      "She is meticulous and instinctive in equal measure. The most calming presence on a hectic shoot day.",
  },
  {
    name: "Priya M.",
    role: "Mother of the bride",
    quote:
      "My daughter looked like the most exquisite version of herself. The entire family was in tears.",
  },
  {
    name: "Lakshmi K.",
    role: "Sangeet · Bengaluru",
    quote:
      "I have sensitive skin and was nervous about heavy makeup. Divya's prep ritual is something else — comfortable all night.",
  },
  {
    name: "Meera V.",
    role: "Destination bride · Goa",
    quote:
      "She travelled with us, styled three looks across three days, and stayed unflappable. A true professional.",
  },
];

export const collaborations = [
  { name: "The Shutter Photography", role: "Bridal & editorial photography" },
  { name: "Dineshjothi Studios", role: "Wedding photography" },
  { name: "Entertainer Since 96", role: "Event production" },
  { name: "Simran Artistry", role: "Hair partner" },
  { name: "Lakmé Academy", role: "Certifying institution" },
  { name: "Kerala & Tamil Nadu venues", role: "On-location partner" },
];
