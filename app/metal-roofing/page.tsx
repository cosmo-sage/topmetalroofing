import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Metal Roofing Systems | Standing Seam, R-Panel & Stone-Coated Louisiana",
  description:
    "Complete metal roofing systems for residential and commercial properties in Louisiana. Standing seam, corrugated, R-panel, and stone-coated metal roofs. Expert installation.",
};

const materials = [
  { name: "Steel (Galvalume)", desc: "The most common metal roofing material — zinc-coated steel with excellent corrosion resistance and strength-to-weight ratio. 50+ year lifespan.", icon: "🔩" },
  { name: "Aluminum", desc: "Naturally corrosion-resistant, lightweight, and ideal for coastal areas. Slightly higher cost but outperforms in salt-air environments.", icon: "⚪" },
  { name: "Copper", desc: "Premium choice — beautiful, virtually maintenance-free, and lasts 100+ years. Develops a natural patina over time. Used for accents and high-end installs.", icon: "🟤" },
  { name: "Zinc", desc: "Self-healing corrosion resistance and a distinctive appearance. Long life, low maintenance. Higher upfront cost, premium result.", icon: "🔲" },
];

const profiles = [
  { name: "Standing Seam", desc: "Vertical leg panels with hidden clips. The premium choice for both residential and commercial. Clean look, superior weather resistance, no exposed fasteners to leak.", img: "continuous-vertical-ribs" },
  { name: "R-Panel / Corrugated", desc: "Trapezoidal or wavy ribs with exposed fasteners. Proven, affordable, fast to install. Best for agricultural, commercial, and utilitarian applications.", img: "trapezoidal-ribs" },
  { name: "Stone-Coated Steel", desc: "Steel panels with a stone chip coating that looks like tile or shingles. Get the durability of metal with the appearance of traditional roofing materials.", img: "stone-coated" },
];

export default function MetalRoofingPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Full-Service Metal Roofing
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Metal Roofing Systems
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Metal roofing comes in many forms — and the right system depends on your building, budget, and aesthetic goals. We help you navigate the options and install a roof that performs for decades.
              </p>
              <div className="flex gap-4">
                <a href="tel:+12255551234" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 font-semibold hover:border-slate-400 transition-colors">
                  Call (225) 555-1234
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <LeadForm city="" />
            </div>
          </div>
        </div>
      </section>

      {/* Metal Materials */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Metal Roofing Materials</h2>
          <p className="text-slate-600 mb-10 max-w-2xl">We work with four primary metal roofing materials. Each has distinct performance characteristics and price points.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((m) => (
              <div key={m.name} className="border border-slate-200 rounded-xl p-6 hover:border-orange-300 transition-colors">
                <div className="text-3xl mb-4">{m.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{m.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Panel Profiles */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Panel Profiles & Styles</h2>
          <p className="text-slate-600 mb-10 max-w-2xl">The panel profile determines both the look of your roof and its performance characteristics. We spec each project for the right profile.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {profiles.map((p) => (
              <div key={p.name} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{p.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Options */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Color & Finish Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Standard Colors</h3>
              <div className="grid grid-cols-3 gap-4">
                {["Charcoal", "Black", "Slate Gray", "White", "Tan / Clay", "Bronze / Brown"].map((color) => (
                  <div key={color} className="bg-slate-900 text-white rounded-lg px-3 py-2 text-sm font-medium text-center">
                    {color}
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-sm mt-4">Kynar 500 finish standard — 30-year fade and chalk resistance.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Premium & Specialty</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• <strong>Metallic finishes</strong> — shimmer variants that catch light</li>
                <li>• <strong>Matte finishes</strong> — no sheen, distinctive appearance</li>
                <li>• <strong>Stone-coated</strong> — embedded stone chips in a range of colors</li>
                <li>• <strong>Weathered/patina metals</strong> — for copper and zinc (natural aging)</li>
              </ul>
              <p className="text-slate-500 text-sm mt-4">Custom colors available for large projects. Contact us for options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Metal */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Metal Roofing?</h2>
            <p className="text-slate-400 max-w-xl mx-auto">No other roofing material delivers this combination of longevity, performance, and value.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: "50+ yrs", label: "Expected lifespan" },
              { stat: "Class 4", label: "Impact resistance" },
              { stat: "140 mph", label: "Wind rating" },
              { stat: "25-40yr", label: "Material warranty" },
              { stat: "10-25%", label: "Cooling cost reduction" },
              { stat: "100%", label: "Recyclable material" },
            ].map((item) => (
              <div key={item.label} className="bg-slate-800 rounded-xl p-6">
                <div className="text-3xl font-bold text-orange-500 mb-1">{item.stat}</div>
                <div className="text-slate-400 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-16 text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which System Is Right?</h2>
          <p className="text-orange-100 mb-8">We spec metal roofs every day. Give us a call and we&apos;ll help you figure out the best system for your building — no pressure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-orange-700 px-6 py-3 font-semibold hover:bg-orange-50 transition-colors">
              Get a Free Consultation
            </a>
            <a href="tel:+12255551234" className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors">
              Call (225) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}