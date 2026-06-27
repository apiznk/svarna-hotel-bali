"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const FEATURED_DINING = {
  name: "Rock Bar, Bali",
  category: "WORLD FAMOUS SUNSET BAR",
  description: "Perched 14 meters above the Indian Ocean on natural limestone cliffs, Rock Bar is globally acclaimed as one of the world's most spectacular sunset, dining, and social venues. Accessible via a custom cliffside inclinator.",
  image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1200",
  link: "#"
};

const DINING_LIST = [
  {
    name: "Sami Sami",
    category: "CLIFFSIDE ITALIAN",
    description: "Sami Sami specializes in rustic Italian cuisine, served in an open-air pavilion on the cliff edge with dramatic coastal views.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600"
  },
  {
    name: "DAVA Steak & Seafood",
    category: "MODERN GRILL",
    description: "DAVA brings a chic steakhouse experience to SVARNA, serving premium meats and fresh seafood cooked to perfection.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600"
  },
  {
    name: "Kubu Beach Club",
    category: "BEACHSIDE DINING & TAPAS",
    description: "Nestled on a secluded white-sand cove, enjoy tropical drinks and wood-fired pizzas under bamboo shade.",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=600"
  }
];

export default function Dining() {
  return (
    <section id="dining" className="py-32 px-6 lg:px-16 bg-[#121212] text-brand-cream border-t border-[#2a2a2a]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-24 reveal">
          <span className="text-[10px] font-semibold tracking-[0.35em] text-brand-gold uppercase block mb-3">
            30+ Restaurants & Bars
          </span>
          <h2 className="text-4xl lg:text-5xl font-light tracking-wide text-white mb-6">
            World-Class Dining
          </h2>
          <div className="h-[1px] w-20 bg-brand-gold/30 mx-auto mb-6" />
          <p className="text-sm md:text-base text-brand-grey leading-relaxed font-serif">
            From cliffside bars over the ocean to traditional Balinese garden feasts and modern fine dining, explore a diverse gastronomic journey across the resort.
          </p>
        </div>

        {/* Feature: Rock Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 items-center reveal">
          <div className="lg:col-span-7 relative h-[320px] sm:h-[480px] overflow-hidden border border-[#2a2a2a]">
            <Image
              src={FEATURED_DINING.image}
              alt={FEATURED_DINING.name}
              fill
              className="object-cover transition-transform duration-[3000ms] hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-grey uppercase">
              {FEATURED_DINING.category}
            </span>
            <h3 className="text-3xl md:text-4xl font-light tracking-wide leading-tight text-white">
              {FEATURED_DINING.name}
            </h3>
            <p className="text-sm md:text-base text-brand-grey leading-relaxed font-serif">
              {FEATURED_DINING.description}
            </p>
            <div className="pt-2">
              <Link
                href={FEATURED_DINING.link}
                className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.25em] uppercase text-brand-gold border-b border-brand-gold/30 pb-1.5 hover:text-brand-cream hover:border-brand-cream transition-colors"
              >
                <span>Reserve a Table at Rock Bar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Remaining Dining List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {DINING_LIST.map((dining, idx) => (
            <div key={idx} className="group bg-[#1c1c1c] border border-[#2a2a2a] hover:border-brand-gold/20 transition-all duration-300">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={dining.image}
                  alt={dining.name}
                  fill
                  className="object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 space-y-4">
                <span className="text-[9px] font-bold tracking-[0.2em] text-brand-gold block">
                  {dining.category}
                </span>
                <h4 className="text-lg font-light tracking-wide text-white">
                  {dining.name}
                </h4>
                <p className="text-xs text-brand-grey leading-relaxed font-serif">
                  {dining.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
