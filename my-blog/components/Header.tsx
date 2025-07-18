import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-indigo-800 shadow-xl">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              <Link href="/">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Insightful Blog
                </h1>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link
                href="/"
                className="text-white hover:text-blue-200 transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10 text-sm md:text-base"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-white hover:text-blue-200 transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10 text-sm md:text-base"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-blue-200 transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10 text-sm md:text-base"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile menu button (would need JS to implement functionality) */}
            <button className="md:hidden text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
