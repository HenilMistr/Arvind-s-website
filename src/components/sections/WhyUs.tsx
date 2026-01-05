"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Trophy, Clock, Shield } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: Trophy,
        title: "Master Certified",
        description: "Technicians trained directly by manufacturers."
    },
    {
        icon: Clock,
        title: "Rapid Turnaround",
        description: "Efficiency without compromising precision."
    },
    {
        icon: Shield,
        title: "Warranty Backed",
        description: "24-month / 24,000-mile warranty on all repairs."
    },
    {
        icon: CheckCircle2,
        title: "OEM Parts Only",
        description: "We use only genuine parts for factory-grade performance."
    }
];

export function WhyUs() {
    return (
        <section id="about" className="py-24 bg-zinc-950 text-white overflow-hidden">
            <div className="container px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content & Grid */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
                        >
                            Why Cortex?
                        </motion.h2>
                        <p className="text-zinc-400 text-lg mb-12 max-w-md">
                            We don't just fix cars; we restore performance. Experience the difference of true automotive craftsmanship.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col gap-3"
                                >
                                    <div className="bg-blue-600/10 w-fit p-3 rounded-xl text-blue-500">
                                        <feature.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold">{feature.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats Row Removed as requested */}
                    </div>

                    {/* Right: Rhombus Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full hidden lg:block"
                    >
                        {/* Rhombus Clip Path */}
                        <div className="absolute inset-0 bg-zinc-800" style={{ clipPath: "polygon(20% 0%, 100% 0, 80% 100%, 0% 100%)" }}>
                            <Image
                                src="/images/service-diagnostics.png"
                                alt="Mechanic at work"
                                fill
                                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent mix-blend-overlay" />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
