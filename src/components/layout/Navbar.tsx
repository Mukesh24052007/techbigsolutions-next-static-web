"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/70 py-3"
          : "bg-white/80 backdrop-blur-md border-b border-slate-100 py-3.5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="TechBigSolutions"
            className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
          />
        </Link>

        {/* Desktop Navigation — Centered with Sleek Underline Indicator */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-sm lg:text-base font-semibold transition-colors flex flex-col items-center ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>{link.name}</span>
                {isActive ? (
                  <span className="w-5 h-0.5 bg-slate-900 rounded-full mt-0.5 transition-all" />
                ) : (
                  <span className="w-0 h-0.5 bg-transparent rounded-full mt-0.5" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions (Secondary Hotline / Contact + High-Contrast Pill CTA) */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Direct Contact Hotline — secondary subtle action matching reference */}
          <a
            href="tel:8122196279"
            className="hidden lg:inline-flex items-center gap-2 text-sm lg:text-base font-semibold text-slate-600 hover:text-brand-blue transition-colors"
            title="Direct Enterprise Desk: 8122196279"
          >
            <Phone className="w-4 h-4 text-action-orange" />
            <span>81221 96279</span>
          </a>

          {/* High-Contrast Pill CTA Button */}
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="hidden sm:inline-flex items-center justify-center bg-[#191b22] hover:bg-brand-blue text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm lg:text-base font-semibold shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>Get Started</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-5 pt-4 pb-7 space-y-3 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-slate-900" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="tel:8122196279"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200"
            >
              <Phone className="w-4 h-4 text-action-orange" />
              <span>Call: 81221 96279</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full bg-[#191b22] hover:bg-brand-blue text-white py-3 rounded-full font-bold text-center flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
