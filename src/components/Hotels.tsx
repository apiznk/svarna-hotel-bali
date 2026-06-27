"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HOTELS_DATA = [
  {
    id: "villas",
    num: "01",
    name: "SVARNA Villas Bali",
    description: "An exclusive cliff-top sanctuary offering private pool villas with stunning Indian Ocean views, personalized butler service, and ultimate seclusion.",
    image: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=800",
    link: "#",
    badge: "Cliff-top Villas"
  },
  {
    id: "segara",
    num: "02",
    name: "SVARNA Segara Bali",
    description: "A modern, cliffside indoor-outdoor oasis integrating indoor sophistication with outdoor sea breezes, featuring panoramic rooftop pools.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800",
    link: "#",
    badge: "Modern Luxury"
  },
  {
    id: "resort",
    num: "03",
    name: "SVARNA Resort Bali",
    description: "A classic Balinese sanctuary nested in pristine cliff gardens, offering spacious rooms, traditional architecture, and close proximity to the iconic spa.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    link: "#",
    badge: "Classic Elegance"
  },
  {
    id: "rimba",
    num: "04",
    name: "RIMBA by SVARNA Bali",
    description: "A lush, forest-canopy sanctuary surrounded by multiple tiered swimming pools, boasting spectacular sunset forest views, perfect for families and couples.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
    link: "#",
    badge: "Forest Sanctuary"
  }
];

export default function Hotels() {
  return (
    <section id="hotels" className="py-32 px-6 lg:px-16 bg-[#121212] text-brand-cream border-t border-[#2a2a2a]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-start reveal">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-semibold tracking-[0.35em] text-brand-gold uppercase block mb-3">
              One Resort, Four Destinations
            </span>
            <h2 className="text-4xl lg:text-5xl font-light tracking-wide text-white leading-tight">
              SVARNA Hotels
            </h2>
          </div>
          <div className="lg:col-span-2 hidden lg:block h-[1px] bg-brand-gold/30 mt-6" />
          <div className="lg:col-span-6">
            <p className="text-sm text-brand-grey leading-relaxed font-serif max-w-xl">
              Spanning a majestic 90-hectare estate on a cliff-top above Jimbaran Bay, discover our four award-winning luxury hotels sharing world-class dining, pools, and spa experiences.
            </p>
          </div>
        </div>

        {/* Hotels Masonry Columns Grid */}
        <div className="columns-1 md:columns-2 gap-x-12 [column-fill:_balance] box-border space-y-12">
          {HOTELS_DATA.map((hotel, index) => (
            <div
              key={hotel.id}
              className="break-inside-avoid flex flex-col bg-[#1c1c1c] border border-[#2a2a2a] hover:border-brand-gold/20 transition-all duration-700 overflow-hidden relative reveal mb-12"
            >
              {/* Massive watermark numerals */}
              <div className="absolute top-2 right-6 text-7xl lg:text-8xl font-light tracking-normal text-[#2a2a2a]/30 pointer-events-none font-serif select-none z-10">
                {hotel.num}
              </div>

              {/* Image Container */}
              <div className={`relative w-full overflow-hidden ${
                index === 0
                  ? "h-[250px] sm:h-[450px]"
                  : index === 1
                  ? "h-[250px] sm:h-[300px]"
                  : index === 2
                  ? "h-[250px] sm:h-[320px]"
                  : "h-[250px] sm:h-[420px]"
              }`}>
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-brand-gold text-brand-charcoal text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 z-20">
                  {hotel.badge}
                </div>
              </div>

              {/* Info Container */}
              <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-light tracking-wide text-white">
                    {hotel.name}
                  </h3>
                  <p className="text-xs lg:text-sm text-brand-grey leading-relaxed font-serif">
                    {hotel.description}
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href={hotel.link}
                    className="inline-flex items-center text-[10px] font-bold tracking-[0.25em] uppercase text-brand-gold hover:text-brand-cream transition-colors mt-auto"
                  >
                    <span className="mr-2">Explore Hotel</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
