"use client";

import { motion } from "framer-motion";

const brands = [
    "BMW", "MERCEDES-BENZ", "PORSCHE", "AUDI", "LAMBORGHINI", "FERRARI", "RANGE ROVER", "MCLAREN", "ASTON MARTIN", "BENTLEY"
];

export function Brands() {
    return (
        <section className="py-10 bg-white text-black overflow-hidden border-y border-zinc-200">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-16 items-center"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                >
                    {[...brands, ...brands, ...brands].map((brand, index) => (
                        <div key={index} className="flex items-center gap-16">
                            <span className="text-4xl md:text-6xl font-black tracking-tighter opacity-80 select-none">
                                {brand}
                            </span>
                            {/* Separator */}
                            <div className="w-3 h-3 rounded-full bg-black/20" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
