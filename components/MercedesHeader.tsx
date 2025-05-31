"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function MercedesHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-95 shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* <Link href="/" className="flex items-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="23"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M24 4C35.05 4 44 12.95 44 24C44 35.05 35.05 44 24 44C12.95 44 4 35.05 4 24C4 12.95 12.95 4 24 4ZM24 8C15.18 8 8 15.18 8 24C8 32.82 15.18 40 24 40C32.82 40 40 32.82 40 24C40 15.18 32.82 8 24 8Z"
                  fill="currentColor"
                />
                <path
                  d="M24 12L28 24H20L24 12ZM24 36L20 24H28L24 36Z"
                  fill="currentColor"
                />
              </svg>
              <span className="ml-2 text-xl font-semibold tracking-wider">
                MERCEDES-BENZ
              </span>
            </Link> */}
            <Link href="/" className="flex items-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black"
              >
                {/* Outer circle */}
                <circle
                  cx="24"
                  cy="24"
                  r="23"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                
                {/* Inner circle for the star background */}
                <circle
                  cx="24"
                  cy="24"
                  r="18"
                  fill="currentColor"
                />
                
                {/* Three-pointed star (tristar) */}
                <g fill="white">
                  {/* Top point */}
                  <path d="M24 8 L26.5 22 L21.5 22 Z" />
                  
                  {/* Bottom left point */}
                  <path d="M10.1 35.9 L22 21.5 L24.5 26.5 Z" />
                  
                  {/* Bottom right point */}
                  <path d="M37.9 35.9 L26 21.5 L23.5 26.5 Z" />
                  
                  {/* Center circle to connect the star points */}
                  <circle cx="24" cy="24" r="2.5" />
                </g>
              </svg>
              <span className="ml-2 text-xl font-semibold tracking-wider">
                MERCEDES-BENZ
              </span>
            </Link>
          </div>

          {/* <nav className="hidden md:flex space-x-8">
            {["Models", "Build", "Shop", "Experience", "Services"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-black hover:text-gray-600 font-medium tracking-wide transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </nav> */}

          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-flex px-6 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300 font-medium">
              Test Drive
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Models", "Build", "Shop", "Experience", "Services"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="block px-3 py-2 text-black font-medium"
                >
                  {item}
                </Link>
              )
            )}
            <button className="w-full mt-4 px-6 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300 font-medium">
              Test Drive
            </button>
          </div>
        </div>
      )}
    </header>
  );
}