"use client";

import { useState } from "react";
import Image from "next/image";

interface Typology {
  id: string;
  name: string;
  location: string;
  system: string;
  area: string;
  image: string;
  description: string;
}

const TYPOLOGIES: Typology[] = [
  {
    id: "rooftop",
    name: "Rooftop Extension",
    location: "Chennai, TN",
    system: "LGSF Framework + Insulated PUF Envelope",
    area: "600 sq.ft.",
    image: "/images/hero_rooftop.jpg",
    description: "Lightweight rooftop workspace addition engineered to rest over existing column points without heavy masonry load."
  },
  {
    id: "cafe",
    name: "Garden Café Shell",
    location: "Chennai, TN",
    system: "LGSF Steel Structure + Glazed Facade",
    area: "1,200 sq.ft.",
    image: "/images/hero_cafe.jpg",
    description: "Fast-track hospitality prefab shell delivered cleanly to minimize pre-opening rental burn."
  },
  {
    id: "farmhouse",
    name: "Coastal Farmhouse",
    location: "East Coast Road, TN",
    system: "Heavy Framing + Fibre Cement Weatherboards",
    area: "2,200 sq.ft.",
    image: "/images/hero_farmhouse.jpg",
    description: "Weather-resilient coastal retreat designed for salt-air durability and monsoon rainfall protection."
  }
];

export default function HeroVisual() {
  const [selectedId, setSelectedId] = useState<string>("rooftop");
  const current = TYPOLOGIES.find((t) => t.id === selectedId) || TYPOLOGIES[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Photography Viewport */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#EAEAEA] bg-[#F4F4F2]">
        <Image
          src={current.image}
          alt={current.name}
          fill
          className="object-cover object-center transition-opacity duration-300"
          priority
        />
        
        {/* Minimal Bottom Info Bar */}
        <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm border-t border-[#EAEAEA] p-4 flex items-center justify-between text-xs">
          <div>
            <span className="font-semibold text-[#1A1A1A] block">{current.name}</span>
            <span className="text-[#666666] font-mono text-[11px]">{current.system}</span>
          </div>
          <span className="font-mono text-[11px] text-[#666666] bg-[#F4F4F2] px-2.5 py-1 rounded">
            {current.location}
          </span>
        </div>
      </div>

      {/* Typology Switcher Buttons */}
      <div className="grid grid-cols-3 gap-2">
        {TYPOLOGIES.map((typology) => {
          const isSelected = typology.id === selectedId;
          return (
            <button
              key={typology.id}
              onClick={() => setSelectedId(typology.id)}
              className={`rounded-md py-2 px-3 text-xs font-medium text-left transition-all ${
                isSelected
                  ? "bg-[#152C22] text-white shadow-none"
                  : "bg-white border border-[#EAEAEA] text-[#666666] hover:text-[#1A1A1A] hover:border-[#D6D6D6]"
              }`}
            >
              {typology.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}


