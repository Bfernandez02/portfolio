"use client";

import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const TWEEN_FACTOR_BASE = 0.15;

export default function DisplayImageCarousel({ images, id }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
  });

  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const setTweenNodes = useCallback((api) => {
    tweenNodes.current = api
      .slideNodes()
      .map((node) => node.querySelector(".parallax-layer"));
  }, []);

  const setTweenFactor = useCallback((api) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback((api) => {
    const engine = api.internalEngine();
    const scrollProgress = api.scrollProgress();
    const snaps = api.scrollSnapList();

    snaps.forEach((snap, snapIndex) => {
      let diffToTarget = snap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          if (loopItem.index === snapIndex && loopItem.target() !== 0) {
            diffToTarget =
              loopItem.target() > 0
                ? snap + (1 - scrollProgress)
                : snap - (1 + scrollProgress);
          }
        });
      }

      const translate = diffToTarget * -tweenFactor.current * 100;

      const tweenNode = tweenNodes.current[snapIndex];
      if (!tweenNode) return;

      tweenNode.style.transform = `translateX(${translate}%)`;
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reinit", setTweenNodes)
      .on("reinit", setTweenFactor)
      .on("scroll", tweenParallax);
  }, [emblaApi, tweenParallax]);

  return (
    <div className="relative mt-6">
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((image, idx) => (
            <div key={idx} className="flex-[0_0_80%] px-4">
              <div className="overflow-hidden rounded-xl">
                <div className="parallax-layer">
                  <Image
                    src={`/projects/${id}/${image}`}
                    alt={`Image ${idx + 1}`}
                    width={1400}
                    height={900}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-3 rounded-full hover:bg-black"
      >
        ‹
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-3 rounded-full hover:bg-black"
      >
        ›
      </button>
    </div>
  );
}
