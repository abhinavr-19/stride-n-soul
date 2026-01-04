'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion'
import { products } from '@/lib/products'
import Image from 'next/image'
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react'
import { useStore } from '@/lib/store'
import { toast } from 'sonner'

export default function ProductCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)
    // Use x motion value to control position programmatically if needed, 
    // but for simple drag + buttons, usage of standard animate controls or just scroll effects works.
    // Simplifying: Buttons will scroll the container using standard localized scrolling or animating the motion value component?
    // Let's stick to Framer Motion drag. To move it with arrows, we need a motionValue or useAnimate.
    // Let's use `useMotionValue` for the x position.

    const x = useMotionValue(0)
    const [maxDrag, setMaxDrag] = useState(0)

    useEffect(() => {
        const updateWidth = () => {
            if (carouselRef.current && containerRef.current) {
                const scrollWidth = carouselRef.current.scrollWidth
                const overflowWidth = containerRef.current.offsetWidth
                const w = scrollWidth - overflowWidth
                setWidth(w)
                setMaxDrag(-w)
            }
        }

        // Initial measurement
        updateWidth()
        // Wait a tick for layout
        setTimeout(updateWidth, 100)

        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    const slide = (direction: 'left' | 'right') => {
        const current = x.get()
        const moveAmount = containerRef.current ? containerRef.current.offsetWidth / 2 : 300

        let target = direction === 'left' ? current + moveAmount : current - moveAmount

        // Clamp
        if (target > 0) target = 0
        if (target < -width) target = -width

        animate(x, target, { type: "spring", bounce: 0, duration: 0.8 })
    }

    return (
        <section className="py-32 bg-charcoal overflow-hidden relative group" id="collections">
            <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
                <h2 className="text-6xl md:text-8xl font-display font-bold uppercase text-vapor leading-[0.8]">
                    Trending <br /> <span className="text-lime">Drops</span>
                </h2>
            </div>

            <div
                ref={containerRef}
                className="w-full overflow-hidden pl-6 md:pl-20 relative"
            >
                <motion.div
                    ref={carouselRef}
                    drag="x"
                    dragConstraints={{ left: -width, right: 0 }}
                    style={{ x }}
                    whileTap={{ cursor: 'grabbing' }}
                    className="flex gap-8 w-max cursor-grab active:cursor-grabbing pb-12 pr-20" // pr-20 padding-right to ensuring last item isn't flush
                >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    {products.map((product) => (
                        <ProductCard key={`${product.id}-duplicate`} product={product} />
                    ))}
                </motion.div>

                {/* Gradients to hide edges nicely */}
                <div className="absolute top-0 right-0 h-full w-20 bg-linear-to-l from-charcoal to-transparent pointer-events-none z-10 hidden md:block" />
            </div>

            {/* Controls (Below Carousel) */}
            <div className="container mx-auto px-6 mt-8 flex justify-center gap-4">
                <button
                    onClick={() => slide('left')}
                    className="w-14 h-14 rounded-full border border-vapor/20 text-vapor flex items-center justify-center hover:bg-vapor hover:text-charcoal transition-all active:scale-95"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={() => slide('right')}
                    className="w-14 h-14 rounded-full border border-vapor/20 text-vapor flex items-center justify-center hover:bg-vapor hover:text-charcoal transition-all active:scale-95"
                >
                    <ChevronRight />
                </button>
            </div>

            {/* Mobile Arrows Overlay (Optional, but user asked for arrows generally) */}
            <div className="md:hidden flex justify-end gap-4 px-6 mt-4">
                <button
                    onClick={() => slide('left')}
                    className="w-10 h-10 rounded-full border border-vapor/20 text-vapor flex items-center justify-center active:bg-vapor active:text-charcoal"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={() => slide('right')}
                    className="w-10 h-10 rounded-full border border-vapor/20 text-vapor flex items-center justify-center active:bg-vapor active:text-charcoal"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    )
}

function ProductCard({ product }: { product: any }) {
    const { addItem, toggleCart } = useStore()

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        addItem(product.id)
        toggleCart()
        toast.success(`Added ${product.name} to cart`)
    }

    return (
        <motion.div
            className="group relative min-w-[280px] md:min-w-[400px] aspect-3/4 bg-neutral-900 overflow-hidden shrink-0"
        >
            <div className="absolute inset-0 bg-vapor/5 group-hover:bg-lime transition-colors duration-500" />

            {/* Image */}
            <div className="absolute inset-0 p-8 flex items-center justify-center">
                <div className="relative w-full h-full"> {/* Wrapper for Next/Image fill */}
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover md:object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                </div>
            </div>

            {/* Content Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-xs text-vapor/60 mb-1 font-bold tracking-widest uppercase group-hover:text-charcoal/60 transition-colors">
                            {product.category}
                        </p>
                        <h3 className="text-2xl font-display font-bold text-vapor uppercase leading-none group-hover:text-charcoal transition-colors">
                            {product.name}
                        </h3>
                        <p className="text-lg font-mono text-lime group-hover:text-charcoal font-bold mt-2 transition-colors">
                            ${product.price}
                        </p>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="w-12 h-12 bg-vapor text-charcoal rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
                    >
                        <Plus />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}
