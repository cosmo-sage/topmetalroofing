import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Metal Roofing Shreveport LA | Installation & Repair",
  description:
    "Metal roofing services in Shreveport and Bossier City, Louisiana. Residential and commercial metal roof installation and repair serving the Ark-La-Tex region.",
};

export default function ShreveportPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Serving Shreveport-Bossier & the Ark-La-Tex
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Metal Roofing in Shreveport
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                In the Ark-La-Tex region, you need a roof that handles extreme heat in summer, ice storms in winter, and everything in between. Metal roofing delivers — and our Shreveport crew has the experience to install it right, on time, on budget.
              </p>
              <div className="flex gap-4">
                <a href="tel:+12255551234" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 font-semibold hover:border-slate-400 transition-colors">
                  Call (225) 555-1234
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <LeadForm city="Shreveport" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Metal Roofing Services in Shreveport
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Residential Metal Roofing", desc: "Shingle-style and standing seam metal roofs for homes across Shreveport, Bossier City, and surrounding communities.", href: "/residential-roofing" },
              { title: "Commercial Metal Roofing", desc: "Full-service commercial metal roofing for retail, office, industrial, and institutional properties in the Ark-La-Tex.", href: "/commercial-roofing" },
              { title: "Metal Roof Repair", desc: "Reliable repairs for all metal roof types. We diagnose the real problem and fix it right the first time.", href: "/roof-repair" },
              { title: "New Construction Roofing", desc: "Metal roof installation for new homes and commercial builds. We coordinate with your builder for seamless results.", href: "/metal-roofing" },
            ].map((svc) => (
              <div key={svc.title} className="border border-slate-200 rounded-xl p-6 hover:border-orange-300 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{svc.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{svc.desc}</p>
                <a href={svc.href} className="text-orange-600 font-medium text-sm hover:underline">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Also Serving Caddo, Bossier & DeSoto Parishes</h2>
          <div className="flex flex-wrap gap-3">
            {["Bossier City", "Benton", "Blanchard", "Greenwood", "Mansfield", "Springhill", "Haughton", "Princeton"].map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium">{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Why Shreveport Homeowners Trust Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Ark-La-Tex weather expertise — roofs built for all seasons",
              "Competitive pricing with transparent, detailed quotes",
              "Our own trained crew — no subcontractors",
              "Workmanship guarantee on every installation",
              "Quick scheduling — most projects completed in 1-3 days",
              "Free, no-obligation on-site estimates",
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