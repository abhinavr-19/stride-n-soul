'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { products } from '@/lib/products'
import { useUIStore } from '@/lib/store'
import HeroScene from './3d/HeroScene'

export default function Hero() {
    const containerRef = useRef(null)
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const y2 = useTransform(scrollY, [0, 500], [0, -100])
    const { setCursorVariant } = useUIStore()

    // Using the first product (Red Shoe) as Hero
    const heroProduct = products[0]

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal"
            onMouseEnter={() => setCursorVariant('default')}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/5 rounded-full blur-[120px]" />
            </div>

            {/* Big Text Behind */}
            <motion.div
                className="absolute z-10 w-full text-center pointer-events-none select-none"
                style={{ y: y2 }}
            >
                <h1 className="text-[12vw] md:text-[20vw] leading-none font-display font-bold uppercase text-transparent text-stroke opacity-20 whitespace-nowrap">
                    Defy Gravity
                </h1>
            </motion.div>

            {/* Floating Shoe (3D Interactive) */}
            <motion.div
                className="relative z-20 w-full md:w-[60%] px-4 max-w-4xl aspect-4/3"
                style={{ y: y1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div
                    className="w-full h-full relative"
                    onMouseEnter={() => setCursorVariant('view')}
                    onMouseLeave={() => setCursorVariant('default')}
                >
                    <HeroScene imagePath={heroProduct.image} />
                </div>
            </motion.div>

            {/* Foreground Text Overlay (Mix Blend) */}
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-4xl md:text-7xl font-sans font-bold uppercase tracking-tighter text-vapor mix-blend-difference mt-[30vh]"
                >
                    {heroProduct.name}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-sm md:text-base text-vapor/60 mt-4 uppercase tracking-widest"
                >
                    {heroProduct.category} Collection
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-10 md:left-20 z-30 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-vapor/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className="h-px w-12 bg-vapor/40" />
                Scroll to Explore
            </motion.div>
        </section>
    )
}
