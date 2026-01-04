'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { products } from '@/lib/products'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import { useStore } from '@/lib/store'
import { toast } from 'sonner'

export default function ProductCarousel() {
    const scrollRef = useRef(null)

    return (
        <section className="py-32 bg-charcoal overflow-hidden" id="collections">
            <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
                <h2 className="text-6xl md:text-8xl font-display font-bold uppercase text-vapor leading-[0.8]">
                    Trending <br /> <span className="text-lime">Drops</span>
                </h2>
                <p className="hidden md:block text-vapor/60 max-w-xs text-sm">
                    Exclusive releases available for a limited time. Secure your pair before they vanish.
                </p>
            </div>

            <motion.div
                className="cursor-grab active:cursor-grabbing pl-6 md:pl-20"
                whileTap={{ cursor: 'grabbing' }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -1000 }} // Needs dynamic calculation in real app
                    className="flex gap-8"
                >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    {/* Duplicate for basic infinite feel logic placeholder */}
                    {products.map((product) => (
                        <ProductCard key={`${product.id}-duplicate`} product={product} />
                    ))}
                </motion.div>
            </motion.div>
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
