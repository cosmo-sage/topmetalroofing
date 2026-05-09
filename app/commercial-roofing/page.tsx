import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Commercial Metal Roofing | Business Metal Roof Installation Louisiana",
  description:
    "Commercial metal roofing installation and repair across Louisiana. Standing seam, R-panel, and flat seam systems for offices, warehouses, retail, and industrial buildings.",
};

export default function CommercialRoofingPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Built for Business
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Commercial Metal Roofing
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                From small retail shops to large industrial facilities, we design and install metal roofing systems that protect your building, reduce your overhead, and keep operations running without roof-related interruptions.
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

      {/* Roof Types */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Commercial Metal Roof Systems
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl">
            We spec and install the right system for your building type, budget, and performance requirements.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Standing Seam",
                desc: "Premium choice for commercial buildings — clean lines, no exposed fasteners, excellent weather resistance. Ideal for office buildings, hotels, and high-end retail.",
              },
              {
                title: "R-Panel / Ribr Panel",
                desc: "Exposed fastener panel with trapezoidal ribs. Proven, cost-effective, and fast to install. Common on warehouses, industrial, and light commercial buildings.",
              },
              {
                title: "Flat Seam / Snap Lock",
                desc: "Flat panel systems with snap-lock or soldered seams. Used on low-slope roofs and architectural details on commercial and historic buildings.",
              },
            ].map((type) => (
              <div key={type.title} className="border border-slate-200 rounded-xl p-6 hover:border-orange-300 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Types */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            We Work On All Commercial Building Types
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "Office Buildings",
              "Warehouses",
              "Retail Centers",
              "Hotels",
              "Restaurants",
              "Industrial Facilities",
              "Churches",
              "Schools",
              "Medical Buildings",
              "Distribution Centers",
              "Agricultural",
              "Multi-Family",
            ].map((type) => (
              <div key={type} className="bg-white rounded-lg px-4 py-3 text-center text-sm font-medium text-slate-700 shadow-sm">
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Why Commercial Properties Choose Metal</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Minimal Disruption", desc: "We work around your operations. Fast installation with crews that understand commercial job site requirements." },
              { title: "Long-Term Savings", desc: "Higher upfront investment, dramatically lower lifetime cost. Less maintenance, longer life, reduced insurance premiums." },
              { title: "Energy Performance", desc: "Cool roof coatings and reflective metals reduce cooling loads significantly — real savings on commercial utility bills." },
              { title: "Low Slope Compatible", desc: "Metal performs on low-slope roofs where other materials fail. Standing seam and flat seam systems handle slopes down to 1/4:12." },
              { title: "HVAC Integration", desc: "Metal roofs accommodate rooftop equipment without the penetrations issues that plague built-up and single-ply systems." },
              { title: "Warranty Protection", desc: "Manufacturer warranties of 25-40 years standard. Workmanship guarantees back our installation quality." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="text-orange-500 mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-16 text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get a Commercial Roof Assessment</h2>
          <p className="text-orange-100 mb-8">We offer thorough on-site evaluations for commercial properties. Get a detailed scope and accurate proposal — no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-orange-700 px-6 py-3 font-semibold hover:bg-orange-50 transition-colors">
              Request Assessment
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