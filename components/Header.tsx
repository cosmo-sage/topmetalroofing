"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Metal Roofing", href: "/metal-roofing" },
  { label: "Residential", href: "/residential-roofing" },
  { label: "Commercial", href: "/commercial-roofing" },
  { label: "Roof Repair", href: "/roof-repair" },
  { label: "Service Areas", href: "#areas", dropdown: true },
];

const serviceAreas = [
  { label: "Baton Rouge", href: "/baton-rouge" },
  { label: "New Orleans", href: "/new-orleans" },
  { label: "Lafayette", href: "/lafayette" },
  { label: "Lake Charles", href: "/lake-charles" },
  { label: "Shreveport", href: "/shreveport" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
            <svg className="h-8 w-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
            </svg>
            Top Metal Roofing
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setAreasOpen(!areasOpen)}
                    className="flex items-center gap-1 text-sm font-medium hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {areasOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded bg-slate-800 shadow-xl py-2">
                      {serviceAreas.map((area) => (
                        <Link
                          key={area.href}
                          href={area.href}
                          onClick={() => setAreasOpen(false)}
                          className="block px-4 py-2 text-sm hover:bg-slate-700 hover:text-orange-400 transition-colors"
                        >
                          {area.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="text-sm font-medium hover:text-orange-400 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+12255551234" className="text-sm font-semibold text-orange-400 hover:text-orange-300">
              (225) 555-1234
            </a>
            <Link
              href="/#contact"
              className="rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold hover:bg-orange-700 transition-colors"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-700 py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setAreasOpen(!areasOpen)}
                      className="w-full text-left px-2 py-2 text-sm font-medium hover:text-orange-400"
                    >
                      {link.label}
                    </button>
                    {areasOpen && (
                      <div className="pl-4 flex flex-col gap-1">
                        {serviceAreas.map((area) => (
                          <Link
                            key={area.href}
                            href={area.href}
                            onClick={() => { setMobileOpen(false); setAreasOpen(false); }}
                            className="block px-2 py-1 text-sm hover:text-orange-400"
                          >
                            {area.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={() => setMobileOpen(false)}
                    className="px-2 py-2 text-sm font-medium hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a href="tel:+12255551234" className="px-2 py-2 text-sm font-semibold text-orange-400">
                (225) 555-1234
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}