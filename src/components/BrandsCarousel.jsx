"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import brands from "../utils/brandsList.js";

export default function BrandsCarousel() {
  const brandsRef = useRef(null);
  const isInView = useInView(brandsRef, { once: true });

  // Repeat if not enough to fill, 50 will handle silly screens, probably
  const repeated = brands.length < 50 ? Array(5).fill(brands).flat() : brands;
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true, watchDrag: false },
    [AutoScroll({ speed: 1, startOnInit: true, stopOnInteraction: false })],
  );

  return (
    <div className="mt-1 " ref={brandsRef}>
      {/* Embla wrapper */}
      <div
        ref={emblaRef}
        className="overflow-hidden"
      >
        <div className="flex">
          {repeated.map((brand, idx) => (
            <div key={idx} className="flex-none px-2 lg:px-3">
              <a
                href={brand?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={brand?.logo}
                  alt={`Brand logo ${idx}`}
                  className="h-10 w-26 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
