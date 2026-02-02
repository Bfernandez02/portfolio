"use client";

import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function DisplayImageCarousel({ images, id }) {
  const brandsRef = useRef(null);

  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
    watchDrag: false,
  });

  return (
    <div className="mt-1 " ref={brandsRef}>
      {/* Embla wrapper */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((image, idx) => (
            <div key={idx} className="flex-none px-2 lg:px-3">
              <Image
                src={`/projects/${id}/${image}`}
                alt={`Image ${idx + 1}`}
                width={1400}
                height={1200}
                className="object-cover rounded-[10px] h-[150px] w-[250px] lg:h-[200px] lg:w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
