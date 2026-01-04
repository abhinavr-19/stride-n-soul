'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function About() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 200])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center" id="about">
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y }}
            >
                <Image
                    src="/images/about_bg.png"
                    alt="Deconstructed Sneaker Art"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-b from-charcoal via-transparent to-charcoal" />
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-4xl px-6 text-center"
                style={{ opacity }}
            >
                <h2 className="text-8xl md:text-9xl font-display font-bold uppercase text-transparent stroke-text mb-8 tracking-tighter mix-blend-overlay">
                    OUR STORY
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold text-vapor mb-6">
                    CRAFTED FOR THE <span className="text-lime">UNBOUND</span>
                </h3>
                Born from the intersection of aerospace engineering and street culture.
                STRIDE & SOUL isn&apos;t just footwear; it&apos;s kinetic art designed to defy gravity.
                Every stitch is calculated, every sole is sculpted for zero-G comfort.
            </motion.div>
        </section>
    )
}
