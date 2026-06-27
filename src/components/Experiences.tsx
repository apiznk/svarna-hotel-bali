"use client";

import { useState } from "react";
import Image from "next/image";

const EXPERIENCE_TABS = [
  {
    id: "spa",
    title: "SVARNA SPA",
    heading: "The Ultimate Spa Experience in Bali",
    description: "Home to the world's largest Aquatonic Thalassotherapy Pool and the exclusive Spa on the Rocks, SVARNA Spa offers a range of luxurious, custom wellness therapies overlooking the Indian Ocean.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
    features: ["Aquatonic Pool", "Spa on the Rocks", "Balinese Massage", "Thalassotherapy"]
  },
  {
    id: "farm",
    title: "SVARNA FARM",
    heading: "Eco-Friendly Farm-to-Table Journey",
    description: "An organic farm spanning 2 hectares of lush land, cultivating local herbs, vegetables, and flowers. Guests can participate in planting workshops, farm-to-table cooking classes, and morning harvest tours.",
    image: "https://images.unsplash.com/photo-1537953773315-2213cdab67c7?q=80&w=800",
    features: ["Organic Harvesting", "Cooking Classes", "Herbal Medicine Workshop", "Farm Tours"]
  },
  {
    id: "pools",
    title: "POOLS & BEACHES",
    heading: "14 Pools & Private White Sand Beach",
    description: "Relax at the legendary Ocean Beach Pool, chill in Rimba Cabanas, or escape to Kubu Beach—our exclusive white-sand beach tucked at the foot of towering limestone cliffs.",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=800",
    features: ["Ocean Beach Pool", "Kubu Beach Club", "Aquatonic Pool", "Rimba Pools"]
  },
  {
    id: "culture",
    title: "BALINESE CULTURE",
    heading: "Lively Cultural Journeys & Rituals",
    description: "Experience the soulful spirit of Bali. Indulge in traditional Balinese dance performances, explore estate temples, or dine in the open-air theater at Kampoeng Bali.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
    features: ["Kampoeng Bali dinner", "Dance Performances", "Temple Offerings", "Traditional Music"]
  }
];

export default function Experiences() {
  const [activeTab, setActiveTab] = useState("spa");

  const currentTab = EXPERIENCE_TABS.find((t) => t.id === activeTab) || EXPERIENCE_TABS[0];

  return (
    <section id="experience" className="py-32 px-6 lg:px-16 bg-card text-foreground border-t border-border relative">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <span className="text-[10px] font-semibold tracking-[0.35em] text-brand-gold uppercase block mb-3">
            Wellness & Activities
          </span>
          <h2 className="text-4xl lg:text-5xl font-light tracking-wide text-foreground mb-6">
            Curated Experiences
          </h2>
          <div className="h-[1px] w-20 bg-brand-gold/30 mx-auto" />
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center border-b border-border mb-16 reveal">
          {EXPERIENCE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-5 text-xs font-semibold tracking-[0.25em] transition-all relative ${
                activeTab === tab.id
                  ? "text-brand-gold font-bold"
                  : "text-brand-grey hover:text-foreground"
              }`}
            >
              {tab.title}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold animate-slide-in" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
          {/* Text Info */}
          <div className="space-y-8 animate-fade-in">
            <span className="text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase">
              {currentTab.title}
            </span>
            <h3 className="text-3xl md:text-4xl font-light tracking-wide leading-tight text-foreground">
              {currentTab.heading}
            </h3>
            <p className="text-sm md:text-base text-brand-grey leading-relaxed font-serif">
              {currentTab.description}
            </p>

            {/* Feature Badges */}
            <div className="pt-4 grid grid-cols-2 gap-6">
              {currentTab.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-none" />
                  <span className="text-[11px] font-semibold tracking-wider text-foreground/80">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Display */}
          <div className="relative h-[320px] sm:h-[480px] overflow-hidden border border-border">
            <Image
              src={currentTab.image}
              alt={currentTab.title}
              fill
              className="object-cover transition-transform duration-[2000ms] hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
