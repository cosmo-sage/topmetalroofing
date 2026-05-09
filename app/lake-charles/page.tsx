import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Metal Roofing Lake Charles LA | Installation & Repair",
  description:
    "Metal roofing installation and repair in Lake Charles, Louisiana. Residential and commercial metal roofs serving Calcasieu Parish and the SW Louisiana region.",
};

export default function LakeCharlesPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Serving Lake Charles & Southwest Louisiana
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Metal Roofing in Lake Charles
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                From petrochemical facilities to lakefront homes, Lake Charles sees extreme weather year-round. Our metal roofing systems are built for high winds, heavy rain, and the intense sun of Southwest Louisiana. Quality installation, fair pricing, done right.
              </p>
              <div className="flex gap-4">
                <a href="tel:+12255551234" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 font-semibold hover:border-slate-400 transition-colors">
                  Call (225) 555-1234
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <LeadForm city="Lake Charles" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Metal Roofing Services in Lake Charles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Residential Metal Roofing", desc: "Energy-efficient metal roofs for homes in Lake Charles, Sulphur, and surrounding areas. Built to last 50+ years.", href: "/residential-roofing" },
              { title: "Commercial Metal Roofing", desc: "Industrial-grade metal roofing for warehouses, plants, retail, and commercial properties across SW Louisiana.", href: "/commercial-roofing" },
              { title: "Hurricane-Strengthened Roofs", desc: "Metal roofs rated for high-wind resistance — critical for the Lake Charles area hurricane corridor.", href: "/metal-roofing" },
              { title: "Roof Repair & Retrofit", desc: "From patching leaks to full system upgrades. Fast response, honest assessments, quality repairs.", href: "/roof-repair" },
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Also Serving Calcasieu & Allen Parishes</h2>
          <div className="flex flex-wrap gap-3">
            {["Sulphur", "Westlake", "Iowa", "Vinton", "DeQuincy", "Leesville", "Derry", "Fenton"].map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium">{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Why Lake Charles Clients Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Hurricane-rated systems — built for SW Louisiana weather extremes",
              "Deep local experience with petrochemical and industrial facilities",
              "Free estimates and detailed written quotes",
              "No subcontractors — our own trained crew on every job",
              "Workmanship guarantee and manufacturer warranties",
              "Emergency tarping and storm damage response available",
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