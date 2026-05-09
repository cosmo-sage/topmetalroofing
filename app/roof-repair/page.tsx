import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Roof Repair Louisiana | Metal Roof Leak & Storm Damage Repair",
  description:
    "Metal roof repair across Louisiana. Fast response for leaks, storm damage, rust, and loose panels. Emergency tarping available. Serving residential and commercial properties.",
};

const repairTypes = [
  {
    issue: "Leak Repair",
    desc: "We track down the source — often not where the water shows up — and fix it permanently. Replaced flashings, resealed joints, patched holes.",
    icon: "💧",
  },
  {
    issue: "Storm Damage",
    desc: "Wind-lifted panels, dented metal, displaced fasteners. We assess the damage and make it right, working with your insurance carrier when applicable.",
    icon: "🌪️",
  },
  {
    issue: "Rust & Corrosion",
    desc: "Early rust is manageable — we treat and seal affected areas. Advanced corrosion may require panel replacement. We give you an honest assessment.",
    icon: "🔩",
  },
  {
    issue: "Loose / Missing Fasteners",
    desc: "Exposed-fastener roofs lose screws over time. We inspect, replace fasteners with premium sealing washers, and check for any underlying movement.",
    icon: "🔧",
  },
  {
    issue: "Flashing Replacement",
    desc: "Valley flashing, chimney flashing, vent pipe boots — these are the most common leak points. We replace deteriorated flashings with quality materials.",
    icon: "⚡",
  },
  {
    issue: "Emergency Tarping",
    desc: "Storm just hit and you have damage? We offer emergency tarping to stop further water intrusion while we schedule a full repair.",
    icon: "🛡️",
  },
];

export default function RoofRepairPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Fast. Reliable. Honest.
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Metal Roof Repair
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Metal roofs are durable, but they still need attention when damaged. Whether it&apos;s storm damage, a leak that appeared out of nowhere, or age-related wear — we diagnose the real problem and fix it right. No upselling, no unnecessary work.
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

      {/* Repair Types */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What We Repair
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl">
            We handle all types of metal roof repair — on both residential and commercial properties. Here&apos;s a summary of our most common repair services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairTypes.map((type) => (
              <div key={type.issue} className="border border-slate-200 rounded-xl p-6 hover:border-orange-300 transition-colors">
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{type.issue}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-orange-50 border-t border-b border-orange-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Signs Your Metal Roof Needs Attention
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Water stains on ceilings or walls",
              "Visible rust or corrosion spots",
              "Loose or missing panels after a storm",
              "Increased energy bills (possible air leaks)",
              "Mold or mildew near roof penetrations",
              "Sagging or deformed roof sections",
              "Loose exposed fasteners or popped screws",
              "Deteriorated sealants around flashings",
            ].map((sign) => (
              <div key={sign} className="flex gap-3">
                <span className="text-orange-600 font-bold">→</span>
                <span className="text-slate-700 text-sm">{sign}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm mt-6">
            Don&apos;t wait until a small problem becomes a big one. If you see any of these signs, give us a call — repairs are far less expensive than replacements.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Repair Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Contact Us", desc: "Call or submit the form. We respond quickly, often same-day for urgent repairs." },
              { step: "2", title: "Inspection", desc: "We inspect the roof, document the damage, and identify the true root cause — not just the symptom." },
              { step: "3", title: "Quote", desc: "We give you a clear, detailed quote with no hidden fees. If insurance is involved, we help you navigate the process." },
              { step: "4", title: "Repair", desc: "We complete the repair efficiently, using quality materials. Most repairs done in a single day." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-lg">{item.step}</div>
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
          <h2 className="text-3xl font-bold mb-4">Have a Roof Problem?</h2>
          <p className="text-slate-400 mb-8">Don&apos;t let a small leak turn into a big repair bill. Call us and we&apos;ll diagnose the issue and give you an honest answer — even if you don&apos;t end up needing us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 font-semibold hover:bg-orange-700 transition-colors">
              Request Repair
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