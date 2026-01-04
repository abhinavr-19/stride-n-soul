'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, Feather, Shield, Wind } from 'lucide-react'

const specs = [
    {
        title: "Zero-G Foam",
        description: "Proprietary compound that returns 85% energy with every step. Feel the bounce.",
        icon: Zap,
        image: "/images/tex-foam.png"
    },
    {
        title: "Carbon Fiber Plate",
        description: "Embedded full-length plate for maximum propulsion and stability.",
        icon: Shield,
        image: "/images/tex-carbon.png"
    },
    {
        title: "Aero-Knit Upper",
        description: "3D printed mesh that adapts to your foot shape while allowing maximum airflow.",
        icon: Wind,
        image: "/images/tex-mesh.png"
    },
    {
        title: "Featherweight",
        description: "At just 180g, it's the lightest performance shoe in its class.",
        icon: Feather,
        image: "/images/tex-feather.png"
    },
]

export default function TechSpecs() {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    // Horizontal scroll: move the content container from x: 0 to x: -100% (or appropriate width)
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

    return (
        <section
            ref={targetRef}
            className="relative h-[300vh] bg-vapor text-charcoal"
            id="technology"
        >
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                {/* Section Title - Fixed */}
                <div className="absolute top-10 left-10 md:left-20 z-20">
                    <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">
                        Surgical <br /> Precision
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-10 pl-[20vw] pr-[20vw]">
                    {specs.map((spec, i) => (
                        <div
                            key={i}
                            className="relative h-[60vh] w-[80vw] md:w-[40vw] shrink-0 bg-charcoal text-vapor p-8 flex flex-col justify-end group overflow-hidden border border-charcoal/10"
                        >
                            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                                {/* Using img for mock, in real app Next/Image with fill */}
                                <img src={spec.image} alt={spec.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/50 to-transparent" />

                            <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <spec.icon className="w-12 h-12 text-lime mb-4" />
                                <h3 className="text-3xl font-display font-bold uppercase mb-2">{spec.title}</h3>
                                <p className="text-sm md:text-base text-vapor/80 max-w-sm">{spec.description}</p>
                            </div>

                            <div className="absolute top-4 right-4 text-6xl font-display font-bold text-transparent text-stroke opacity-10">
                                0{i + 1}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
