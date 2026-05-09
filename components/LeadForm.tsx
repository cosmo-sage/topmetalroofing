"use client";

import { useState } from "react";

interface LeadFormProps {
  city?: string;
}

export default function LeadForm({ city }: LeadFormProps) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side only capture — log to console for now
    console.log("Lead captured:", { ...form, city, timestamp: new Date().toISOString() });
    setStatus("success");
    setForm({ name: "", phone: "", email: "", service: "" });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        {city ? `Get a Free Quote in ${city}` : "Get a Free Quote"}
      </h2>
      <p className="text-slate-600 mb-6 text-sm">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>

      {status === "success" ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Thanks!</h3>
          <p className="text-slate-600">We&apos;ve received your request and will contact you shortly.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-orange-600 font-medium hover:underline text-sm"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="(225) 555-1234"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
              Service Needed
            </label>
            <select
              id="service"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
            >
              <option value="">Select a service...</option>
              <option value="residential">Residential Roofing</option>
              <option value="commercial">Commercial Roofing</option>
              <option value="metal">Metal Roofing</option>
              <option value="repair">Roof Repair</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-orange-600 py-3 text-base font-semibold text-white hover:bg-orange-700 transition-colors"
          >
            Request Free Quote
          </button>

          <p className="text-xs text-slate-400 text-center">
            No obligation. Your information stays private.
          </p>
        </form>
      )}
    </div>
  );
}