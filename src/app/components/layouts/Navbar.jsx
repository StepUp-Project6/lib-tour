// src/app/components/layouts/Navbar.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const pathname = usePathname();

  // Check if current path matches any of the about pages
  const isAboutActive =
    pathname === "/about-library" || pathname === "/about-credit";

  return (
    <nav className="bg-white shadow-lg fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[89px] items-center">
          {/* Left side - Logo & Text */}
          <Link href="/">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 ">
                  <Image
                    src="/images/stepup-logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                </div>
                <span className="ml-2 text-xl font-bold text-black">
                  LibTour
                </span>
              </div>
            </div>
          </Link>

          {/* Middle - Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className={`flex items-center transition ${
                  isAboutActive
                    ? "text-gray-500"
                    : "text-black hover:text-gray-500"
                }`}
              >
                Tentang
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isAboutOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isAboutOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                  <Link
                    href="/about/library"
                    className={`block px-4 py-2 ${
                      pathname === "/about-library"
                        ? "text-gray-500"
                        : "text-black hover:text-gray-500"
                    }`}
                    onClick={() => setIsAboutOpen(false)}
                  >
                    Perpustakaan
                  </Link>
                  <Link
                    href="/about/credit"
                    className={`block px-4 py-2 ${
                      pathname === "/about-credit"
                        ? "text-gray-500"
                        : "text-black hover:text-gray-500"
                    }`}
                    onClick={() => setIsAboutOpen(false)}
                  >
                    Credit
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/layout"
              className={`transition ${
                pathname === "/layout"
                  ? "text-gray-500"
                  : "text-black hover:text-gray-500"
              }`}
            >
              Layout
            </Link>
            <Link
              href="/location"
              className={`transition ${
                pathname === "/location"
                  ? "text-gray-500"
                  : "text-black hover:text-gray-500"
              }`}
            >
              Lokasi
            </Link>
          </div>

          {/* Right side - Contact Button */}
          <div className="hidden md:block border">
            <Link
              href="/contact"
              className={`border px-4 py-2 rounded-lg transition ${
                pathname === "/contact"
                  ? "bg-primary text-white"
                  : "bg-white border-2 border-gray-950 text-black hover:bg-primary hover:border-white hover:text-white  hover:shadow-lg  hover:shadow-primary hover:text-shadow-lg transition-all duration-500 ease-in-out"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-black hover:text-gray-500">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
      </div>
    </nav>
  );
};

export default Navbar;
