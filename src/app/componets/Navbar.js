
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">

      {/* Logo */}
      <Link
        href="/"
        className="text-xl font-bold text-blue-600"
      >
        MyApp
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-6">

        <Link
          href="/"
          className="text-gray-700 transition hover:text-blue-600"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="text-gray-700 transition hover:text-blue-600"
        >
          About
        </Link>

        <Link
          href="/contact"
          className="text-gray-700 transition hover:text-blue-600"
        >
          Contact
        </Link> 
      </div>

      {/* Login */}
      <div className="flex items-center gap-6">
        <Link
          href="/login"
          className="rounded-lg px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
        >
          Login
        </Link>

        {/* Sign Up */}
        <Link
          href="/signup"
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Sign Up
        </Link>

      </div>
    </nav>
  );
}

