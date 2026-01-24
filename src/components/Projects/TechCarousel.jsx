"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import TechIcon from "../TechIcon.jsx";

export default function TechCarousel({ tech }) {
  const techRef = useRef(null);
  const isInView = useInView(techRef, { once: true });

  // Repeat if not enough to fill, 50 will handle silly screens, probably
  const repeated = tech.length < 50 ? Array(5).fill(tech).flat() : tech;
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true, watchDrag: false },
    [AutoScroll({ speed: 0.4, startOnInit: true, stopOnInteraction: false })],
  );

  return (
    <div className="mt-1 w-full " ref={techRef}>
      {/* Embla wrapper */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex flex-row gap-2">
          {repeated.map((techItem, idx) => (
            <div key={idx} className="flex-none">
              <TechIcon
                key={idx}
                tech={techItem}
                width="w-[15px]"
                height="h-[15px]"
                vertical={false}
                textSize="!text-[12px]"
                className="border border-primary rounded-[10px] py-1 px-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
