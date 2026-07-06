"use client";

import { useState } from "react";
import { site } from "@/config/site";

// NOTE: This form currently opens a pre-filled WhatsApp / email message.
// Swap `handleSubmit` for a POST to your form backend (e.g. Formspree,
// a Next.js route handler, or your CRM webhook) when ready.

export function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    city: "",
    teamSize: "",
    goal: "",
    contact: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = [
      "New team building enquiry:",
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `City: ${form.city}`,
      `Team size: ${form.teamSize}`,
      `Goal: ${form.goal}`,
      `Contact: ${form.contact}`,
    ].join("\n");
    const base = site.whatsappHref.split("?")[0];
    window.open(`${base}?text=${encodeURIComponent(message)}`, "_blank");
  }

  const inputClass =
    "w-full rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-medium text-white placeholder-white/60 focus:border-white focus:bg-white/15 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 rounded-2xl bg-white/10 p-6 backdrop-blur">
      <div className="grid gap-3 sm:grid-cols-2">
        <input required placeholder="Your name" value={form.name} onChange={update("name")} className={inputClass} />
        <input placeholder="Company" value={form.company} onChange={update("company")} className={inputClass} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <select required value={form.city} onChange={update("city")} className={inputClass}>
          <option value="" className="text-navy-900">City</option>
          {site.cities.map((c) => (
            <option key={c} value={c} className="text-navy-900">{c}</option>
          ))}
          <option value="Other" className="text-navy-900">Other</option>
        </select>
        <select required value={form.teamSize} onChange={update("teamSize")} className={inputClass}>
          <option value="" className="text-navy-900">Team size</option>
          {["Under 20", "20–50", "50–100", "100–300", "300+"].map((s) => (
            <option key={s} value={s} className="text-navy-900">{s}</option>
          ))}
        </select>
      </div>
      <input
        required
        placeholder="Phone or email"
        value={form.contact}
        onChange={update("contact")}
        className={inputClass}
      />
      <textarea
        placeholder="What's the occasion or goal? (offsite, engagement, leadership day...)"
        rows={3}
        value={form.goal}
        onChange={update("goal")}
        className={inputClass}
      />
      <button type="submit" className="btn-accent w-full">
        Get my custom proposal
      </button>
      <p className="text-center text-xs text-white/60">
        Sends your enquiry via WhatsApp — no spam, ever.
      </p>
    </form>
  );
}
