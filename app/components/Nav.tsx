"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Grow Bags Guide", href: "/tomato-grow-bags-vs-pots" },
  { label: "Watering Guide", href: "/tomato-watering-guide" },
  { label: "Seedlings Fix", href: "/leggy-tomato-seedlings-fix" },
  { label: "Full Sun Guide", href: "/do-tomatoes-need-full-sun" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-green-800 text-lg shrink-0">
          🍅 TomatoGrowGuide
        </Link>

        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex gap-5 text-sm font-medium text-gray-600">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-green-700 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden text-gray-600 hover:text-green-700 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="text-xl" aria-hidden="true">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-green-700 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
