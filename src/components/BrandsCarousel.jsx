'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import brands from '../utils/brandsList.js'

export default function BrandsCarousel() {
  const brandsRef = useRef(null)
  const isInView = useInView(brandsRef, { once: true })

  // Repeat if not enough to fill, 50 will handle silly screens, probably
  const repeated = brands.length < 50 ? Array(5).fill(brands).flat() : brands
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', dragFree: true, watchDrag: false }, [
    AutoScroll({ speed: 1, startOnInit: true, stopOnInteraction: false}),
  ])

  return (
    <div className="mt-12 mb-12 sm:mb-36">
      <h2 className="text-center !text-2xl font-bold mb-6">Brands We've Worked With</h2>

      {/* Embla wrapper */}
      <div
        ref={emblaRef}
        className="overflow-hidden py-8 bg-[rgba(18,18,18,0.56)] backdrop-blur-xl"
      >
        <div className="flex">
          {repeated.map((brand, idx) => (
            <div key={idx} className="flex-none px-6 sm:px-8">
              <a href={brand?.url || '#'} target="_blank" rel="noopener noreferrer">
                <img
                  src={brand?.logo?.url.replace('/api/media/file/', process.env.NEXT_PUBLIC_S3_ENDPOINT + '/forma-stack-assets/') || '/placeholder-logo.png'}
                  alt={`Brand logo ${idx}`}
                  className="h-14 max-h-10 w-36 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="main-gradient w-full h-[2px]"
        initial={{ width: 0 }}
        animate={isInView ? { width: '100%' } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
        ref={brandsRef}
      />
    </div>
  )
}
