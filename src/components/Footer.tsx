import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold">
              Jamie Clarke
            </Link>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Making marketing easier for owner-led businesses.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Pages
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About" },
                { href: "/perfect-customer-journey", label: "The Journey" },
                { href: "/work-with-me", label: "Work With Me" },
                { href: "/resources", label: "Resources" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/work-with-me#membership"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Marketing Portal Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/work-with-me#blueprint"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  The Blueprint
                </Link>
              </li>
              <li>
                <Link
                  href="/work-with-me#implementation"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Blueprint + Implementation
                </Link>
              </li>
              <li>
                <Link
                  href="/work-with-me#agency"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Agency Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:jamie@jamieclarke.online"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  jamie@jamieclarke.online
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Jamie Clarke Online. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
