import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Metal Roofing Baton Rouge LA | Installation & Repair",
  description:
    "Expert metal roofing in Baton Rouge, Louisiana. Residential and commercial metal roof installation, repair, and replacement. Serving the capital region.",
};

export default function BatonRougePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Serving Baton Rouge & Surrounding Areas
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Metal Roofing in Baton Rouge
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                From the neighborhoods of Garden District to the commercial corridors along Airline Highway — we install and repair metal roofs that stand up to Louisiana heat, rain, and storms. Trusted local crew, no subcontractors.
              </p>
              <div className="flex gap-4">
                <a
                  href="tel:+12255551234"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 font-semibold hover:border-slate-400 transition-colors"
                >
                  Call (225) 555-1234
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <LeadForm city="Baton Rouge" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Metal Roofing Services in Baton Rouge
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Residential Metal Roofing",
                desc: "Shingle-style, standing seam, and corrugated metal roofs for homes across the Baton Rouge metro area. Energy-efficient, weather-resistant, and built to last 50+ years.",
                href: "/residential-roofing",
              },
              {
                title: "Commercial Metal Roofing",
                desc: "Large-scale flat seam, R-panel, and standing seam systems for office buildings, warehouses, retail centers, and industrial facilities.",
                href: "/commercial-roofing",
              },
              {
                title: "Metal Roof Repair",
                desc: "Fast repairs for leaks, loose panels, storm damage, and rust. Emergency tarping available. We respond quickly to protect your property.",
                href: "/roof-repair",
              },
              {
                title: "Full Roof Replacement",
                desc: "Complete metal roof tear-off and replacement. We handle permits, disposal, and installation from start to finish.",
                href: "/metal-roofing",
              },
            ].map((svc) => (
              <div key={svc.title} className="border border-slate-200 rounded-xl p-6 hover:border-orange-300 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{svc.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{svc.desc}</p>
                <a href={svc.href} className="text-orange-600 font-medium text-sm hover:underline">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Also Serving East Baton Rouge Parish</h2>
          <div className="flex flex-wrap gap-3">
            {["Zachary", "Denham Springs", "Baker", "Central", "St. Gabriel", "Port Allen", "Brusly"].map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Why Baton Rouge Residents Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Licensed, bonded, and insured Louisiana contractors",
              "Local Baton Rouge crew — no out-of-town subcontractors",
              "Free on-site estimates and written quotes",
              "Workmanship backed by our craftsmanship guarantee",
              "Competitive pricing with no hidden fees",
              "Fast scheduling — most projects within 1-2 weeks",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <span className="text-orange-500 mt-1">✓</span>
                <span className="text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}