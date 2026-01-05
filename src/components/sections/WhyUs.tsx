"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Timer } from "lucide-react";

const features = [
    {
        name: "Certified Perfection",
        description: "Our master technicians are certified to handle the world's most exclusive marques with surgical precision.",
        icon: ShieldCheck,
    },
    {
        name: "Concierge Service",
        description: "From pickup to delivery, experience a seamless service tailored to your schedule and standards.",
        icon: UserCheck,
    },
    {
        name: "Transparent Efficiency",
        description: "Real-time updates and honest diagnostics. We respect your time and your intelligence.",
        icon: Timer,
    },
];

export function WhyUs() {
    return (
        <section id="about" className="py-24 bg-zinc-950 relative z-10 text-white scroll-mt-20">
            <div className="container px-6">
                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center space-y-4"
                        >
                            <div className="p-4 rounded-full bg-white/10 text-white mb-2">
                                <feature.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight">{feature.name}</h3>
                            <p className="text-zinc-400 leading-relaxed max-w-xs">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
