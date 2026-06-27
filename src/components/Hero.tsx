"use client";

import { useRef } from "react";
import { Calendar, Users, ChevronDown } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative h-screen w-full bg-background text-foreground flex flex-col justify-between overflow-hidden">
      {/* Split Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 w-full h-full">
        {/* Left Panel: Brand Spec & Typography */}
        <div className="lg:col-span-5 flex flex-col justify-start pt-36 lg:pt-48 px-8 lg:px-16 pb-12 border-r border-border relative z-20">
          <div className="space-y-8 max-w-sm">
            {/* Giant Title */}
            <div className="space-y-1">
              <span className="text-xs tracking-[0.4em] uppercase text-brand-grey block">
                The New Sanctuary
              </span>
              <h1 className="text-5xl md:text-7xl font-light tracking-wide leading-tight text-foreground">
                SVARNA<br />BALI
              </h1>
            </div>

            {/* Narrative description */}
            <p className="text-sm text-brand-grey leading-relaxed font-serif">
              Perched high above Jimbaran's limestone cliffs where raw natural stone meets the endless Indian Ocean. An architectural testament to Balinese craft and quiet luxury.
            </p>

            {/* Scroll Indicator badge */}
            <div className="pt-6">
              <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase border-b border-brand-gold/30 pb-1.5 animate-pulse">
                SCROLL TO DISCOVER ↓
              </span>
            </div>
          </div>
        </div>

        {/* Right Panel: Large framed video block */}
        <div className="lg:col-span-7 relative h-full w-full bg-black/40 border-t lg:border-t-0 border-border overflow-hidden">
          {/* Video element */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-1000"
            src="/images/main-bg.mp4"
            poster="/images/bali-aerial-poster.webp"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
      </div>

      {/* Floating Booking Widget at the Bottom */}
      <div
        id="booking"
        className="w-full z-20 px-8 lg:px-16 py-5 bg-background border-t border-border"
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          {/* Check-In */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[9px] font-semibold tracking-widest text-brand-grey uppercase">
              Check In
            </label>
            <div className="relative flex items-center border border-border p-3 hover:border-brand-gold/40 transition-colors cursor-pointer bg-card">
              <Calendar className="w-3.5 h-3.5 text-brand-gold mr-3" />
              <span className="text-[11px] text-foreground/80">Select Date</span>
              <ChevronDown className="absolute right-3 w-3.5 h-3.5 text-brand-grey/50" />
            </div>
          </div>

          {/* Check-Out */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[9px] font-semibold tracking-widest text-brand-grey uppercase">
              Check Out
            </label>
            <div className="relative flex items-center border border-border p-3 hover:border-brand-gold/40 transition-colors cursor-pointer bg-card">
              <Calendar className="w-3.5 h-3.5 text-brand-gold mr-3" />
              <span className="text-[11px] text-foreground/80">Select Date</span>
              <ChevronDown className="absolute right-3 w-3.5 h-3.5 text-brand-grey/50" />
            </div>
          </div>

          {/* Guests */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[9px] font-semibold tracking-widest text-brand-grey uppercase">
              Guests
            </label>
            <div className="relative flex items-center border border-border p-3 hover:border-brand-gold/40 transition-colors cursor-pointer bg-card">
              <Users className="w-3.5 h-3.5 text-brand-gold mr-3" />
              <span className="text-[11px] text-foreground/80">2 Adults, 0 Children</span>
              <ChevronDown className="absolute right-3 w-3.5 h-3.5 text-brand-grey/50" />
            </div>
          </div>

          {/* CTA Check Rates */}
          <div>
            <button className="w-full bg-brand-gold hover:opacity-90 text-brand-charcoal text-xs font-bold tracking-[0.2em] py-3.5 transition-colors duration-300">
              CHECK AVAILABILITY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
