'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useStore } from '@/lib/store'
import Link from 'next/link'

export default function Navbar() {
    const { toggleCart, items } = useStore()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-charcoal/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="z-50 text-2xl font-display font-bold tracking-tighter uppercase italic mix-blend-difference text-vapor">
                        Stride <span className="text-lime">&</span> Soul
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider uppercase opacity-80">
                        {['Collections', 'About', 'Technology', 'Drops'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-lime transition-colors">
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-6 z-50">
                        <button
                            onClick={toggleCart}
                            className="relative group p-2"
                        >
                            <ShoppingBag className="w-6 h-6 text-vapor group-hover:text-lime transition-colors" />
                            {items.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-lime text-charcoal text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    {items.length}
                                </span>
                            )}
                        </button>
                        <button
                            className="md:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {['Collections', 'About', 'Technology', 'Drops'].map((item, i) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-4xl font-display font-bold uppercase hover:text-lime transition-colors text-stroke hover:text-vapor hover:fill-current"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
