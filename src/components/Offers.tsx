"use client";

import Image from "next/image";
import Link from "next/link";
import { Tag } from "lucide-react";

const OFFERS = [
  {
    title: "SVARNA Villas Exclusive Escape",
    category: "ROMANTIC GETAWAY",
    description: "Indulge in a 3-night stay at SVARNA Villas with private floating breakfast, custom romantic candlelit cliffside dinner, and premium ocean wellness spa treatments.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600",
    validity: "Valid until Dec 20, 2026",
    link: "#"
  },
  {
    title: "Aquatonic Wellness Retreat",
    category: "SPA & WELLNESS",
    description: "Rejuvenate your body with our signature 2-hour Aquatonic Pool session, customized Balinese full-body massage, and health-boosting organic lunch at the Spa Cafe.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600",
    validity: "Valid Year-Round",
    link: "#"
  },
  {
    title: "Lush RIMBA Family Fun",
    category: "FAMILY PACKAGES",
    description: "Create unforgettable family memories at RIMBA. Includes daily complimentary kids club activities, resort credit worth IDR 1,500,000, and free access to slides/pools.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600",
    validity: "Valid until Jan 15, 2027",
    link: "#"
  }
];

export default function Offers() {
  return (
    <section id="offers" className="py-32 px-6 lg:px-16 bg-[#121212] text-brand-cream border-t border-[#2a2a2a]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <span className="text-[10px] font-semibold tracking-[0.35em] text-brand-gold uppercase block mb-3">
            Exclusive Packages
          </span>
          <h2 className="text-4xl lg:text-5xl font-light tracking-wide text-white mb-6">
            Special Offers
          </h2>
          <div className="h-[1px] w-20 bg-brand-gold/30 mx-auto" />
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {OFFERS.map((offer, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-[#1c1c1c] border border-[#2a2a2a] hover:border-brand-gold/20 transition-all duration-300 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Info Area */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-brand-gold block">
                    {offer.category}
                  </span>
                  <h3 className="text-xl font-light tracking-wide text-white leading-snug group-hover:text-brand-gold transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-brand-grey leading-relaxed font-serif">
                    {offer.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2a2a2a] flex items-center justify-between">
                  <span className="text-[9px] font-semibold tracking-wide text-brand-grey flex items-center">
                    <Tag className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                    {offer.validity}
                  </span>
                  <Link
                    href={offer.link}
                    className="text-[10px] font-bold tracking-[0.25em] text-brand-gold hover:text-brand-cream transition-colors"
                  >
                    VIEW OFFER
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
