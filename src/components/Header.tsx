"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/perfect-customer-journey", label: "The Journey" },
    { href: "/work-with-me", label: "Work With Me" },
    { href: "/resources", label: "Resources" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-grey-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-black">
              Jamie Clarke
            </span>
            <span className="hidden sm:inline text-sm font-medium text-grey-text">
              | Making Marketing Easier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-grey-text hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/resources#guide"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Get The Free Guide
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-grey-text hover:text-black"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-grey-light bg-white">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-3 text-base font-medium text-grey-text hover:bg-grey-lighter hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/resources#guide"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Get The Free Guide
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
