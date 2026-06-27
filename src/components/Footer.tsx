"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card text-foreground py-24 px-6 lg:px-16 border-t border-border">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20 reveal">
        {/* Brand & Newsletter */}
        <div className="lg:col-span-2 space-y-8">
          <Link href="/" className="font-serif text-3xl font-normal tracking-[0.25em] text-foreground transition-opacity hover:opacity-85 block">
            SVARNA
          </Link>
          <p className="text-xs text-brand-grey leading-relaxed max-w-sm font-serif">
            Experience world-class hospitality across Indonesia. Subscribe to our newsletter to receive exclusive updates, offers, and travel inspirations from SVARNA.
          </p>
          {/* Newsletter Form */}
          <form className="relative max-w-sm flex items-center border-b border-border pb-3">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent border-none text-xs text-foreground placeholder-brand-grey/50 focus:outline-none w-full pr-10"
              required
            />
            <button
              type="submit"
              className="absolute right-0 hover:opacity-75 transition-opacity"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-4 h-4 text-brand-gold" />
            </button>
          </form>
        </div>

        {/* Column 1: Properties */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase">
            Properties
          </h4>
          <ul className="space-y-3 text-xs text-brand-grey">
            <li>
              <Link href="#" className="hover:text-foreground transition-colors">
                SVARNA Villas Bali
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition-colors">
                SVARNA Segara Bali
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition-colors">
                SVARNA Resort Bali
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition-colors">
                RIMBA by SVARNA Bali
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition-colors">
                SVARNA Komodo Waecicu Beach
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Sitemap */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase">
            Explore
          </h4>
          <ul className="space-y-3 text-xs text-brand-grey">
            <li>
              <Link href="#" className="hover:text-foreground transition-colors">
                World-Class Spa
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition-colors">
                Dining & Rock Bar
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition-colors">
                Weddings & Events
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition-colors">
                SVARNA Farm
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition-colors">
                Resort Map & Guide
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Info */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase">
            SVARNA Bali
          </h4>
          <p className="text-xs text-brand-grey leading-relaxed font-serif">
            Karang Mas Estate, Jalan Karang Mas Sejahtera, Jimbaran, Bali 80364, Indonesia
          </p>
          <div className="space-y-1 text-xs text-brand-grey">
            <span className="block">T: +62 361 702222</span>
            <span className="block">E: info@svarnaresort.com</span>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 pt-2">
            <Link href="#" className="hover:text-foreground text-brand-grey transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </Link>
            <Link href="#" className="hover:text-foreground text-brand-grey transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </Link>
            <Link href="#" className="hover:text-foreground text-brand-grey transition-colors" aria-label="YouTube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
            </Link>
            <Link href="#" className="hover:text-foreground text-brand-grey transition-colors" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-[10px] text-brand-grey space-y-4 md:space-y-0">
        <div>
          <span>© {new Date().getFullYear()} SVARNA Bali. All rights reserved.</span>
        </div>
        <div className="flex space-x-6">
          <Link href="#" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Terms & Conditions
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
