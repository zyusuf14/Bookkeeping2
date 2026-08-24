"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* FIXED HEADER */}
      <header className="fixed left-0 top-0 z-50 flex h-[88px] w-full items-center justify-between border-b border-slate-200/70 bg-white px-5 md:h-[105px] md:px-10 lg:px-16">

        {/* LOGO */}
        <a href="/">
          <img
            src="/logo.jpg"
            alt="The Bookkeeping Corporation"
            className="h-[68px] w-auto object-contain md:h-[82px]"
          />
        </a>

        {/* MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
          className="relative flex h-11 w-11 items-center justify-center"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-[2px] w-7 bg-[#4B286D] transition-all duration-300 ${
                menuOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-[2px] w-7 bg-[#4B286D] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-[2px] w-7 bg-[#4B286D] transition-all duration-300 ${
                menuOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </header>

      {/* DROPDOWN MENU */}
      <div
        className={`fixed left-0 top-[88px] z-40 w-full overflow-hidden bg-white transition-all duration-500 md:top-[105px] ${
          menuOpen
            ? "max-h-[600px] border-b border-slate-200 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-8 md:px-10 md:py-10 lg:px-16">

          <nav className="mx-auto flex max-w-7xl flex-col">

            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="border-b border-slate-200 py-4 text-2xl font-semibold tracking-[-0.03em] text-[#4B286D] transition-all hover:pl-2 md:text-3xl"
            >
              Home
            </a>

            <a
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="border-b border-slate-200 py-4 text-2xl font-semibold tracking-[-0.03em] text-[#4B286D] transition-all hover:pl-2 md:text-3xl"
            >
              About Us
            </a>

            <a
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="border-b border-slate-200 py-4 text-2xl font-semibold tracking-[-0.03em] text-[#4B286D] transition-all hover:pl-2 md:text-3xl"
            >
              Our Services
            </a>
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="py-4 text-2xl font-semibold tracking-[-0.03em] text-[#4B286D] transition-all hover:pl-2 md:text-3xl"
            >
              Contact
            </a>

          </nav>
        </div>
      </div>
    </>
  );
}