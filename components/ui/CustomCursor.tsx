'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useUIStore } from '@/lib/store'

export default function CustomCursor() {
    const { cursorVariant } = useUIStore()
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const [isMobile, setIsMobile] = useState(false)

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorX = useSpring(mouseX, springConfig)
    const cursorY = useSpring(mouseY, springConfig)

    useEffect(() => {
        // Hide default cursor
        document.body.style.cursor = 'none'

        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16)
            mouseY.set(e.clientY - 16)
        }

        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches)
        }

        checkMobile();
        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('resize', checkMobile)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('resize', checkMobile)
            document.body.style.cursor = 'auto'
        }
    }, [mouseX, mouseY])

    if (isMobile) return null;

    const variants = {
        default: {
            height: 32,
            width: 32,
            backgroundColor: "transparent",
            border: "1px solid #ccff00", // Lime
        },
        text: {
            height: 64,
            width: 64,
            backgroundColor: "#ccff00",
            mixBlendMode: "difference" as const,
            border: "none",
        },
        view: {
            height: 80,
            width: 80,
            backgroundColor: "#ccff00",
            mixBlendMode: "difference" as const,
            border: "none",
        },
        link: {
            height: 48,
            width: 48,
            backgroundColor: "transparent",
            border: "1px solid #f3f3f3"
        }
    }

    return (
        <motion.div
            className="fixed top-0 left-0 z-100 rounded-full pointer-events-none flex items-center justify-center isolate"
            style={{
                x: cursorX,
                y: cursorY,
            }}
            variants={variants}
            animate={cursorVariant}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
            {cursorVariant === 'view' && (
                <span className="text-black text-xs font-bold uppercase">View</span>
            )}
        </motion.div>
    )
}
