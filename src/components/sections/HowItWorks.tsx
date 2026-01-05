"use client";

import { motion } from "framer-motion";
import { Calendar, Activity, Wrench, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: Calendar,
        title: "Book Consultation",
        description: "Schedule your appointment online or by phone. We discuss your concerns and set a time."
    },
    {
        icon: Activity,
        title: "Precision Diagnostics",
        description: "We use advanced scanners and physical inspection to pinpoint the exact issue."
    },
    {
        icon: Wrench,
        title: "Expert Execution",
        description: "Our certified technicians perform repairs using OEM parts and factory procedures."
    },
    {
        icon: CheckCircle,
        title: "Quality Delivery",
        description: "Final quality check, test drive, and detailed handover of your pristine vehicle."
    }
];

export function HowItWorks() {
    return (
        <section className="py-20 bg-zinc-950 text-white border-t border-white/5">
            <div className="container px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tighter mb-4"
                    >
                        The Process.
                    </motion.h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        A seamless, transparent journey from issue to resolution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/50 group-hover:bg-white/5 transition-all duration-500 shadow-xl">
                                <step.icon className="w-10 h-10 text-white/70 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
