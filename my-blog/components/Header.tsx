"use client";

import React, { useState } from "react";
import Link from "next/link";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-700 to-purple-800 shadow-lg sticky top-0 z-50 mb-8">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <h1 className="text-2xl font-bold text-white tracking-tight hidden sm:block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200 text-4xl">
                  Insights
                </span>
                <span className="text-white text-2xl"> Blog</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="text-white hover:bg-white/10 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center group"
            >
              <span className="mr-2">🏠</span>
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                Home
              </span>
            </Link>

            <Link
              href="/about"
              className="text-white hover:bg-white/10 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center group"
            >
              <span className="mr-2">ℹ️</span>
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                About
              </span>
            </Link>

            <Link
              href="/contact"
              className="text-white hover:bg-white/10 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center group"
            >
              <span className="mr-2">✉️</span>
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                Contact
              </span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <button className="text-white hover:text-white focus:outline-none">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-white focus:outline-none p-1 rounded-md hover:bg-white/10"
            >
              {mobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pt-2 pb-4 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="flex items-center">
                <span className="mr-3">🏠</span> Home
              </span>
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="flex items-center">
                <span className="mr-3">ℹ️</span> About
              </span>
            </Link>

            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="flex items-center">
                <span className="mr-3">✉️</span> Contact
              </span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
