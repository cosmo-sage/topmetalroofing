import Link from "next/link";

const serviceLinks = [
  { label: "Residential Roofing", href: "/residential-roofing" },
  { label: "Commercial Roofing", href: "/commercial-roofing" },
  { label: "Metal Roofing", href: "/metal-roofing" },
  { label: "Roof Repair", href: "/roof-repair" },
];

const areaLinks = [
  { label: "Baton Rouge", href: "/baton-rouge" },
  { label: "New Orleans", href: "/new-orleans" },
  { label: "Lafayette", href: "/lafayette" },
  { label: "Lake Charles", href: "/lake-charles" },
  { label: "Shreveport", href: "/shreveport" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-white text-xl font-bold mb-4">
              <svg className="h-8 w-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
              </svg>
              Top Metal Roofing
            </div>
            <p className="text-sm text-slate-400">
              Serving Louisiana with expert metal roofing installation and repair. Quality craftsmanship, honest pricing.
            </p>
            <div className="mt-4">
              <a href="tel:+12255551234" className="text-orange-400 font-semibold hover:text-orange-300">
                (225) 555-1234
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-orange-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-semibold mb-3">Service Areas</h3>
            <ul className="space-y-2">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-orange-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+12255551234" className="hover:text-orange-400">(225) 555-1234</a>
              </li>
              <li>
                <a href="mailto:info@topmetalroofing.com" className="hover:text-orange-400">info@topmetalroofing.com</a>
              </li>
              <li className="text-slate-400">
                Louisiana, USA<br />
                (Placeholder Address)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-700 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Top Metal Roofing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}