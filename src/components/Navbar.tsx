"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, ChevronDown, Sun, Moon } from "lucide-react";

const NAV_LINKS = [
  { label: "HOTELS", href: "#hotels" },
  { label: "DINING", href: "#dining" },
  { label: "SPA", href: "#spa" },
  { label: "EXPERIENCES", href: "#experience" },
  { label: "WEDDINGS", href: "#weddings" },
  { label: "OFFERS", href: "#offers" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 lg:px-12 py-4 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border text-foreground py-3"
            : "bg-gradient-to-b from-black/60 to-transparent text-white py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl md:text-2xl font-normal tracking-[0.25em] text-current transition-opacity hover:opacity-85"
          >
            SVARNA
          </Link>

          {/* Center Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-medium tracking-[0.2em] hover:opacity-75 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1 hover:opacity-75 transition-opacity focus:outline-none"
              aria-label="Toggle Theme Mode"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-brand-gold" />
              ) : (
                <Moon className="w-4 h-4 text-brand-charcoal" />
              )}
            </button>

            <button className="flex items-center space-x-1 text-xs tracking-wider hover:opacity-70 transition-opacity">
              <Globe className="w-4 h-4" />
              <span>EN</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <Link
              href="#booking"
              className="text-xs font-semibold tracking-[0.15em] px-6 py-2.5 bg-brand-gold text-brand-charcoal hover:bg-brand-gold/80 transition-colors"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center space-x-4 lg:hidden">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1 hover:opacity-75 transition-opacity focus:outline-none"
              aria-label="Toggle Theme Mode"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-brand-gold" />
              ) : (
                <Moon className="w-4 h-4 text-brand-charcoal" />
              )}
            </button>

            <Link
              href="#booking"
              className="text-[10px] font-semibold tracking-[0.15em] px-4 py-2 bg-brand-gold text-brand-charcoal hover:bg-brand-gold/80 transition-colors"
            >
              BOOK NOW
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 hover:opacity-80 transition-opacity focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-charcoal/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-80 bg-background p-8 border-l border-border transition-transform duration-500 ease-out transform lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1 text-foreground hover:opacity-75 focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-[0.2em] text-foreground hover:text-brand-gold transition-colors py-2 border-b border-border/10"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-6 flex flex-col space-y-4">
            <button className="flex items-center space-x-2 text-xs text-foreground tracking-widest hover:opacity-70 transition-opacity">
              <Globe className="w-4 h-4" />
              <span>ENGLISH (EN)</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
