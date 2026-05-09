import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Top Metal Roofing | Louisiana Metal Roof Installation & Repair",
  description:
    "Expert metal roofing installation and repair across Louisiana. Serving Baton Rouge, New Orleans, Lafayette, Lake Charles, and Shreveport.",
};

const services = [
  {
    title: "Residential Roofing",
    href: "/residential-roofing",
    desc: "Protect your home with a durable, long-lasting metal roof built to withstand Louisiana weather.",
    icon: "🏠",
  },
  {
    title: "Commercial Roofing",
    href: "/commercial-roofing",
    desc: "Scalable metal roofing solutions for offices, warehouses, retail, and industrial facilities.",
    icon: "🏢",
  },
  {
    title: "Metal Roofing",
    href: "/metal-roofing",
    desc: "Premium metal roofing systems — standing seam, corrugated, and stone-coated for any building.",
    icon: "🔩",
  },
  {
    title: "Roof Repair",
    href: "/roof-repair",
    desc: "Fast, reliable repairs for leaks, storm damage, and wear. Emergency service available.",
    icon: "🔧",
  },
];

const areas = [
  { name: "Baton Rouge", href: "/baton-rouge" },
  { name: "New Orleans", href: "/new-orleans" },
  { name: "Lafayette", href: "/lafayette" },
  { name: "Lake Charles", href: "/lake-charles" },
  { name: "Shreveport", href: "/shreveport" },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Satisfaction Rate" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-6">
                Trusted Louisiana Roofers
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Metal Roofing Built to Last a Lifetime
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Expert metal roofing installation and repair across Louisiana. From residential homes to commercial buildings — we deliver quality workmanship and honest pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 font-semibold hover:bg-orange-700 transition-colors"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:+12255551234"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 font-semibold hover:border-slate-400 transition-colors"
                >
                  Call (225) 555-1234
                </a>
              </div>
            </div>
            <div id="contact" className="flex justify-center lg:justify-end">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange-600 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-orange-100 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Metal Roofing Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From new installations to repairs and replacements, we handle every aspect of metal roofing for residential and commercial properties across Louisiana.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
              >
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2">
                  {svc.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Proudly Serving All of Louisiana
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We cover the major metropolitan areas and surrounding communities across the state.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-orange-600 transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose Top Metal Roofing?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Certified Installers", desc: "Factory-trained crews with years of hands-on experience. Every installation done right the first time." },
              { title: "Premium Materials", desc: "We use only high-grade metal roofing products from trusted manufacturers with industry-leading warranties." },
              { title: "Transparent Pricing", desc: "No hidden fees, no surprises. Detailed written estimates before any work begins." },
              { title: "Fast Turnaround", desc: "Most residential projects completed in 1-3 days. We respect your time and schedule." },
              { title: "Workmanship Guarantee", desc: "All labor backed by our craftsmanship warranty. If something goes wrong, we make it right." },
              { title: "Free Estimates", desc: "Thorough on-site evaluations at no charge. Get an accurate quote with no obligation." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="text-orange-500 text-xl mt-1">✓</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Upgrade Your Roof?</h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Get a free, no-obligation estimate today. Our team is ready to help you choose the best metal roofing solution for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-orange-700 px-6 py-3 font-semibold hover:bg-orange-50 transition-colors"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:+12255551234"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              Call (225) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}