'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
    const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"])

    return (
        <section ref={containerRef} className="py-20 md:py-32 bg-charcoal overflow-hidden text-vapor relative z-10 border-t border-vapor/5">
            <div className="flex flex-col gap-4 md:gap-8 opacity-20 pointer-events-none select-none">
                <motion.div style={{ x: x1 }} className="whitespace-nowrap flex gap-8">
                    <span className="text-6xl md:text-9xl font-display font-bold uppercase stroke-text text-transparent">
                        DEFY GRAVITY // WALK ON AIR // STRIDE & SOUL // DEFY GRAVITY // WALK ON AIR //
                    </span>
                    <span className="text-6xl md:text-9xl font-display font-bold uppercase stroke-text text-transparent">
                        DEFY GRAVITY // WALK ON AIR // STRIDE & SOUL // DEFY GRAVITY // WALK ON AIR //
                    </span>
                </motion.div>

                <motion.div style={{ x: x2 }} className="whitespace-nowrap flex gap-8">
                    <span className="text-6xl md:text-9xl font-display font-bold uppercase text-vapor/20">
                        INNOVATION MEETS STREET // FUTURE READY // INNOVATION MEETS STREET //
                    </span>
                    <span className="text-6xl md:text-9xl font-display font-bold uppercase text-vapor/20">
                        INNOVATION MEETS STREET // FUTURE READY // INNOVATION MEETS STREET //
                    </span>
                </motion.div>
            </div>
        </section>
    )
}
