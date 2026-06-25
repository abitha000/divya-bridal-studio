import { useState } from "react";
import { brand } from "@/lib/site-data";

export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    occasion: "Muhurtham Bridal",
    location: "",
    notes: "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Divya,\n\nI'd like to enquire about a booking.\n\nName: ${form.name}\nPhone: ${form.phone}\nEvent date: ${form.date}\nOccasion: ${form.occasion}\nLocation: ${form.location}\n\nNotes: ${form.notes}`,
    );
    window.open(`https://wa.me/${brand.phoneRaw}?text=${msg}`, "_blank");
    setSent(true);
  };

  const field =
    "w-full border-0 border-b border-border bg-transparent py-3 text-base text-ink placeholder:text-ink/40 focus:border-maroon focus:outline-none transition-colors";
  const label = "text-[10px] tracking-luxury uppercase text-ink/60";

  return (
    <form onSubmit={submit} className="space-y-7">
      <div className="grid gap-7 md:grid-cols-2">
        <div>
          <label className={label}>Full name</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
        </div>
        <div>
          <label className={label}>Phone</label>
          <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={field} />
        </div>
        <div>
          <label className={label}>Event date</label>
          <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={field} />
        </div>
        <div>
          <label className={label}>Occasion</label>
          <select value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })} className={field}>
            <option>Muhurtham Bridal</option>
            <option>Reception</option>
            <option>Engagement / Sangeet</option>
            <option>Haldi / Mehendi</option>
            <option>Baby Shower</option>
            <option>Editorial / Shoot</option>
          </select>
        </div>
      </div>
      <div>
        <label className={label}>Location / venue</label>
        <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className={field} />
      </div>
      <div>
        <label className={label}>Tell us about your day</label>
        <textarea rows={4} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className={field} />
      </div>
      <button
        type="submit"
        className="group inline-flex items-center gap-3 rounded-full bg-maroon px-9 py-4 text-[11px] tracking-luxury uppercase text-ivory transition-all hover:bg-maroon-deep"
      >
        Send Enquiry via WhatsApp
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>
      {sent && (
        <p className="text-sm italic text-rose-gold">WhatsApp opened — Divya will respond personally within 24 hours.</p>
      )}
    </form>
  );
}