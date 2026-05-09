import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Metal Roofing New Orleans LA | Installation & Repair",
  description:
    "Metal roofing installation and repair in New Orleans, Louisiana. Residential and commercial metal roofs built for Gulf Coast weather. Serving Orleans and Jefferson Parish.",
};

export default function NewOrleansPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Serving the Greater New Orleans Area
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Metal Roofing in New Orleans
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                From French Quarter historic homes to Warehouse District commercial buildings — metal roofing built to handle heavy rain, high humidity, and Gulf Coast storms. We know New Orleans buildings, and we know what holds up here.
              </p>
              <div className="flex gap-4">
                <a href="tel:+12255551234" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 font-semibold hover:border-slate-400 transition-colors">
                  Call (225) 555-1234
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <LeadForm city="New Orleans" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Metal Roofing Services in New Orleans
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Residential Metal Roofing", desc: "Durable metal roofs for homes across NOLA — from Gentilly to Kenner, Metairie to Algiers. hurricane-rated options available.", href: "/residential-roofing" },
              { title: "Commercial Metal Roofing", desc: "Standing seam, R-panel, and flat seam systems for offices, restaurants, hotels, and warehouses throughout the metro.", href: "/commercial-roofing" },
              { title: "Storm Damage Repair", desc: "Fast response to wind and water damage. We work with insurance claims and offer emergency tarping to prevent further damage.", href: "/roof-repair" },
              { title: "Historic Home Roofing", desc: "Metal roofs that respect historic character while providing modern durability and energy efficiency for older properties.", href: "/metal-roofing" },
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Also Serving Jefferson, St. Tammany & St. Bernard</h2>
          <div className="flex flex-wrap gap-3">
            {["Metairie", "Kenner", "Covington", "Mandeville", "Slidell", "Chalmette", "Gretna", "Harvey", "Marrero"].map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium">{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Why New Orleans Clients Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Gulf Coast weather specialists — our roofs are built for heavy rain and high winds",
              "Local New Orleans crew — we know the neighborhoods and building styles",
              "Free estimates with no pressure sales tactics",
              "Insurance claim assistance — we can help you navigate the process",
              "Workmanship guarantee on all installations",
              "Fast scheduling — emergency repairs available",
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