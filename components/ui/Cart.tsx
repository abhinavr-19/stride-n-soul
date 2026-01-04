'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, Trash2, ArrowRight } from 'lucide-react'
import { useStore } from '@/lib/store'
import { products } from '@/lib/products'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Cart() {
    const { isOpen, toggleCart, items, removeItem } = useStore()
    const [cartProducts, setCartProducts] = useState<any[]>([])

    // Hydrate cart items from product list based on IDs
    useEffect(() => {
        const filtered = items.map(id => products.find(p => p.id === id)).filter(Boolean)
        setCartProducts(filtered)
    }, [items])

    const total = cartProducts.reduce((acc, curr) => acc + curr.price, 0)

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-charcoal border-l border-vapor/10 z-70 flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-vapor/10 flex items-center justify-between">
                            <h2 className="text-2xl font-display font-bold uppercase text-vapor tracking-wider">
                                Your <span className="text-lime">Stash</span>
                            </h2>
                            <button
                                onClick={toggleCart}
                                className="p-2 hover:bg-vapor/10 rounded-full transition-colors text-vapor"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                            {cartProducts.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-vapor/40 space-y-4">
                                    <p className="text-lg font-mono">Cart is empty</p>
                                    <button onClick={toggleCart} className="text-lime hover:underline text-sm uppercase tracking-widest">
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                cartProducts.map((item, idx) => (
                                    <motion.div
                                        key={`${item.id}-${idx}`}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex gap-4 bg-vapor/5 p-4 rounded-lg group"
                                    >
                                        <div className="relative w-20 h-20 bg-vapor/10 rounded flex items-center justify-center shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-bold text-vapor uppercase leading-none">{item.name}</h3>
                                                <p className="text-xs text-lime mt-1 font-mono">${item.price}</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-3 bg-black/20 rounded-full px-2 py-1">
                                                    <button className="p-1 hover:text-lime text-vapor/60 transition-colors"><Minus className="w-3 h-3" /></button>
                                                    <span className="text-xs font-mono text-vapor">1</span>
                                                    <button className="p-1 hover:text-lime text-vapor/60 transition-colors"><Plus className="w-3 h-3" /></button>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-vapor/40 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartProducts.length > 0 && (
                            <div className="p-6 border-t border-vapor/10 bg-charcoal">
                                <div className="flex items-center justify-between mb-6 text-vapor">
                                    <span className="text-sm uppercase tracking-widest opacity-60">Subtotal</span>
                                    <span className="text-2xl font-mono font-bold">${total}</span>
                                </div>
                                <button className="w-full py-4 bg-lime text-charcoal font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 group">
                                    Checkout
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
