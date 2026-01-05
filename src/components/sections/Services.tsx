"use client";

import { motion } from "framer-motion";
import { Wrench, Battery, Wind, Disc, Zap, Droplet, ThermometerSnowflake, CircleDashed, Eraser, Cog } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    { name: "Precision Maintenance", description: "Oil, filters, and fluid systems.", icon: Droplet, className: "md:col-span-1 md:row-span-1", image: "/images/service-maintenance.png" },
    { name: "Advanced Diagnostics", description: "Computer-aided troubleshooting for complex issues.", icon: Cog, className: "md:col-span-2 md:row-span-2 bg-white/5", image: "/images/service-diagnostics.png" },
    { name: "Brake Systems", description: "High-performance stopping power.", icon: Disc, className: "md:col-span-1 md:row-span-1", image: "/images/service-brakes.png" },
    { name: "Tire & Wheels", description: "Rotation, alignment, and replacement.", icon: CircleDashed, className: "md:col-span-1 md:row-span-1", image: "/images/service-wheels.png" },
    { name: "Electrical Architecture", description: "Battery, wiring, and sensor calibration.", icon: Zap, className: "md:col-span-1 md:row-span-2", image: "/images/service-electric.png" },
    { name: "Climate Control", description: "A/C recharge and heating systems.", icon: ThermometerSnowflake, className: "md:col-span-1 md:row-span-1", image: "/images/service-climate.png" },
    { name: "Detailing", description: "Aesthetic restoration.", icon: Wrench, className: "md:col-span-2 md:row-span-1", image: "/images/service-detailing.png" },
];

export function Services() {
    return (
        <section id="services" className="py-12 md:py-16 relative bg-zinc-950 text-white scroll-mt-15">
            <div className="container px-6">
                <div className="text-center mb-8">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 block"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tighter mb-4"
                    >
                        Engineered for Excellence.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-[160px]">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={cn(
                                "group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 transition-all duration-500 flex flex-col justify-between hover:scale-[1.02] hover:shadow-2xl hover:border-white/20",
                                service.className
                            )}
                        >
                            {/* Background Image - Always Visible */}
                            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                            </div>

                            <div className="relative z-10 w-full">
                                <div className="bg-white/10 w-fit p-2.5 rounded-xl mb-3 group-hover:bg-white text-black transition-colors duration-500 backdrop-blur-md">
                                    <service.icon className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-1 text-white leading-tight drop-shadow-lg">{service.name}</h3>
                                <p className="text-white/70 text-xs md:text-sm leading-snug group-hover:text-white transition-colors drop-shadow-md">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
