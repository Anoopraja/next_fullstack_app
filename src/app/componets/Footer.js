
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-blue-500"
            >
              MyApp
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              A simple and modern platform built to provide a better
              experience for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>

            <p className="text-sm text-gray-400">
              Have a question or suggestion?
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium transition hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-800 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MyApp. All rights reserved.</p>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

