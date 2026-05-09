import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Residential Metal Roofing | Home Metal Roof Installation Louisiana",
  description:
    "Residential metal roofing installation across Louisiana. Standing seam, shingle-style, and corrugated metal roofs for homes. Durable, energy-efficient, built to last 50+ years.",
};

export default function ResidentialRoofingPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Expert Residential Metal Roofing
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Residential Metal Roofing
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Your home deserves a roof that handles Louisiana weather without constant repairs. Metal roofing gives you lasting protection, energy savings, and serious curb appeal — all backed by some of the longest warranties in the industry.
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

      {/* Metal Types */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Metal Roofing Options for Your Home
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl">
            We install several types of residential metal roofing — each with distinct benefits. We help you choose what fits your home, budget, and aesthetic.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Standing Seam",
                desc: "The premium choice — clean vertical ribs with hidden fasteners. Sleek, modern, and the most weather-resistant option available. Available in galvalume, aluminum, and copper.",
                best: true,
              },
              {
                title: "Metal Shingles",
                desc: "Metal engineered to look like asphalt shingles or slate. Get the durability of metal with the traditional look homeowners want. 50-year warranty standard.",
                best: false,
              },
              {
                title: "Corrugated / R-Panel",
                desc: "The value leader — wavy profile panels with exposed fasteners. Proven performance at an accessible price point. Great for homes, barns, and sheds.",
                best: false,
              },
            ].map((type) => (
              <div key={type.title} className={`rounded-xl p-6 border-2 ${type.best ? "border-orange-500 bg-orange-50" : "border-slate-200 bg-white"}`}>
                {type.best && <span className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2 block">Most Popular</span>}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Homeowners Choose Metal
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "50+ Year Lifespan", desc: "Metal roofs typically last 2-3x longer than asphalt shingles. Once installed, you likely won&apos;t need to replace it in your lifetime." },
              { title: "Energy Efficiency", desc: "Metal reflects solar heat, reducing cooling costs 10-25%. Cool pigment coatings make an even bigger difference in Louisiana heat." },
              { title: "Severe Weather Rated", desc: "Class 4 impact resistance and wind ratings up to 140 mph. Our roofs are built for hurricanes, hail, and everything in between." },
              { title: "Low Maintenance", desc: "No shingles to replace, no rot, no moss. Occasional cleaning and fastener checks are all most metal roofs need for decades." },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: benefit.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            Our Installation Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Free Consultation", desc: "We visit your home, assess the roof, discuss your goals and budget, and give you a detailed written estimate." },
              { step: "2", title: "Material Selection", desc: "Choose your metal type, color, and profile. We source from top manufacturers and handle all procurement." },
              { step: "3", title: "Professional Install", desc: "Our trained crew completes the installation — typically 1-3 days for a residential home. We protect your property throughout." },
              { step: "4", title: "Final Inspection", desc: "We do a thorough walkthrough with you, confirm everything meets our standard, and hand over your warranty documentation." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-lg"> {item.step}</div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Install a Metal Roof?</h2>
          <p className="text-slate-400 mb-8">Get a free, no-obligation estimate for your home. We&apos;ll come out, assess your roof, and give you an accurate price with no pressure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 font-semibold hover:bg-orange-700 transition-colors">
              Get Free Estimate
            </a>
            <a href="tel:+12255551234" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 font-semibold hover:border-slate-400 transition-colors">
              Call (225) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}