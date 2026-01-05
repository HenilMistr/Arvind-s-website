"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useScrollTo } from "@/hooks/useScrollTo";

export function Hero() {
    const scrollToSection = useScrollTo();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Luxury Auto Workshop"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background/90" />
            </div>

            <div className="container px-6 relative z-10 text-center flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-6 uppercase"
                >
                    Cortex
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
                >
                    Experience the pinnacle of auto maintenance. Precision diagnostics,
                    expert repairs, and a seamless service experience.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full"
                >
                    <a
                        href="#book"
                        onClick={(e) => scrollToSection(e, "#book")}
                        className="group bg-white text-black text-lg px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center cursor-pointer"
                    >
                        Book Service
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#services"
                        onClick={(e) => scrollToSection(e, "#services")}
                        className="text-white font-medium px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition-colors w-full sm:w-auto block backdrop-blur-sm cursor-pointer"
                    >
                        View Services
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/80">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 to-white" />
            </motion.div>
        </section>
    );
}
