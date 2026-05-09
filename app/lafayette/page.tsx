import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Metal Roofing Lafayette LA | Installation & Repair",
  description:
    "Metal roofing services in Lafayette, Louisiana. Residential and commercial metal roof installation, repair, and replacement in Acadiana and surrounding parishes.",
};

export default function LafayettePage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Serving Lafayette & Acadiana
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Metal Roofing in Lafayette
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                In Acadiana, your roof takes a beating from heat, humidity, and severe weather. Metal roofing stands up to it all — and looks great doing it. Whether you&apos;re in the heart of Lafayette or out in St. Martin Parish, we&apos;ve got you covered.
              </p>
              <div className="flex gap-4">
                <a href="tel:+12255551234" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 font-semibold hover:border-slate-400 transition-colors">
                  Call (225) 555-1234
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <LeadForm city="Lafayette" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Lafayette Metal Roofing Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Residential Metal Roofing", desc: "Stylish, durable metal roofs for homes across the Lafayette metro. Standing seam, ribbed panel, and stone-coated options.", href: "/residential-roofing" },
              { title: "Commercial Metal Roofing", desc: "Full-service commercial metal roofing — new installs, replacements, and ongoing maintenance for businesses.", href: "/commercial-roofing" },
              { title: "Metal Roof Repair", desc: "Quick, reliable repairs for leaks, storm damage, and wear. We respond fast to protect your home or business.", href: "/roof-repair" },
              { title: "Metal Roof Replacement", desc: "Complete teardown and installation of your new metal roof. We handle everything from permits to final cleanup.", href: "/metal-roofing" },
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Also Serving Surrounding Parishes</h2>
          <div className="flex flex-wrap gap-3">
            {["Opelousas", "Breaux Bridge", "St. Martinville", "Youngsville", "Broussard", "Carencro", "Scott", "Rayne", "Abbeville"].map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium">{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Why Lafayette Homeowners Trust Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Acadiana-local crew with years of experience in south Louisiana weather",
              "Premium materials built for heat, humidity, and storm resistance",
              "Free written estimates with no obligation",
              "Workmanship backed by our guarantee",
              "Transparent pricing — no surprise fees",
              "Quick scheduling — most installs within 1-2 weeks",
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