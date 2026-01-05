'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function DropCounter() {
    // Set drop date to 3 days from now for demo
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 3);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <section className="relative py-24 bg-charcoal text-vapor flex flex-col items-center justify-center text-center overflow-hidden border-t border-vapor/10" id="drops">

            {/* Background Big Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <span className="text-[20vw] md:text-[30vw] font-display font-bold leading-none">NEXT</span>
            </div>

            <div className="z-10 container mx-auto px-4">
                <p className="text-sm font-bold tracking-[0.2em] uppercase mb-8">Next Drop In</p>

                <div className="flex justify-center gap-4 md:gap-12 font-display font-bold text-6xl md:text-9xl tracking-tighter tabular-nums leading-none">
                    <TimeBlock value={timeLeft.days} label="Days" />
                    <span className="text-lime/60">:</span>
                    <TimeBlock value={timeLeft.hours} label="Hrs" />
                    <span className="text-lime/60 hidden md:inline">:</span>
                    <div className="hidden md:block">
                        <TimeBlock value={timeLeft.minutes} label="Mins" />
                    </div>
                    <span className="text-lime/60 hidden md:inline">:</span>
                    <div className="hidden md:block">
                        <TimeBlock value={timeLeft.seconds} label="Secs" />
                    </div>
                </div>

                {/* Mobile layout adjustment */}
                <div className="flex md:hidden justify-center gap-4 mt-4 font-display font-bold text-6xl tracking-tighter tabular-nums leading-none">
                    <TimeBlock value={timeLeft.minutes} label="Mins" />
                    <span className="text-lime/60">:</span>
                    <TimeBlock value={timeLeft.seconds} label="Secs" />
                </div>

                <motion.button
                    className="mt-16 group relative inline-flex items-center gap-3 px-8 py-4 bg-vapor text-charcoal font-bold uppercase tracking-widest text-sm overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="relative z-10">Notify Me</span>
                    <ArrowUpRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="absolute inset-0 bg-lime translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-lime z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-exclusion" />
                </motion.button>
            </div>
        </section>
    )
}

function TimeBlock({ value, label }: { value: number, label: string }) {
    return (
        <div className="flex flex-col items-center">
            <span>{value < 10 ? `0${value}` : value}</span>
            <span className="text-xs md:text-sm tracking-widest text-vapor/40 font-sans font-normal mt-2 md:mt-4">{label}</span>
        </div>
    )
}
