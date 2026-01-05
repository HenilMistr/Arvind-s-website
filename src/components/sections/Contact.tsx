"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
    return (
        <section id="book" className="py-20 relative bg-zinc-950 border-t border-white/5 text-white">
            <div className="container px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Brand & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                            Visit Cortex.
                        </h2>
                        <p className="text-lg text-zinc-400 mb-8 font-light">
                            We invite you to experience a new standard of automotive care.
                            Schedule your private consultation today.
                        </p>

                        <div id="location" className="space-y-6 border-l border-white/10 pl-8 scroll-mt-15">
                            <div className="space-y-2">
                                <h3 className="text-white text-sm font-semibold flex items-center gap-2">
                                    <Phone size={14} /> Direct Line
                                </h3>
                                <p className="text-zinc-400 text-sm">647-918-1295</p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-white text-sm font-semibold flex items-center gap-2">
                                    <MapPin size={14} /> Location
                                </h3>
                                <p className="text-zinc-400 text-sm mb-4">1530 Drew Rd, Mississauga, ON L5S 1W8</p>
                                {/* Google Maps Embed */}
                                <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6666687458!2d-79.67000000000002!3d43.70000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3dc7a0000001%3A0x0!2zMTVzMCBEcmV3IFJkLCBNaXNzaXNhdWdhLCBPTiBMJVMgMVc4!5e0!3m2!1sen!2sca!4v1600000000000!5m2!1sen!2sca"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(80%)" }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                    {/* White Pin Overlay */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full mt-[10px] pointer-events-none drop-shadow-2xl">
                                        <MapPin size={48} className="text-white fill-black animate-bounce" />
                                        <div className="w-4 h-1 bg-black/50 blur-[2px] rounded-full mx-auto mt-[-5px]" />
                                    </div>
                                    <a
                                        href="https://maps.google.com/?q=1530+Drew+Rd,+Mississauga,+ON"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 z-10"
                                        aria-label="Open in Google Maps"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-white text-sm font-semibold flex items-center gap-2">
                                    <Clock size={14} /> Efficiency Hours
                                </h3>
                                <p className="text-zinc-400 text-sm">Mon-Fri: 8am - 6pm</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Premium Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-white/10"
                    >
                        <form className="space-y-8">
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="group space-y-2">
                                    <label className="text-xs uppercase tracking-wider text-zinc-500 group-focus-within:text-white transition-colors">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-white/20 py-2 outline-none text-white focus:border-white transition-colors"
                                        placeholder="Enter full name"
                                    />
                                </div>
                                <div className="group space-y-2">
                                    <label className="text-xs uppercase tracking-wider text-zinc-500 group-focus-within:text-white transition-colors">Contact</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-transparent border-b border-white/20 py-2 outline-none text-white focus:border-white transition-colors"
                                        placeholder="Phone number"
                                    />
                                </div>
                            </div>

                            <div className="group space-y-2">
                                <label className="text-xs uppercase tracking-wider text-zinc-500 group-focus-within:text-white transition-colors">Service Prerference</label>
                                <select
                                    className="w-full bg-transparent border-b border-white/20 py-2 outline-none text-white focus:border-white transition-colors [&>option]:bg-zinc-900"
                                >
                                    <option>Precision Maintenance</option>
                                    <option>Advanced Diagnostic</option>
                                    <option>Detailing Specification</option>
                                    <option>Other / Consultation</option>
                                </select>
                            </div>

                            <div className="group space-y-2">
                                <label className="text-xs uppercase tracking-wider text-zinc-500 group-focus-within:text-white transition-colors">Notes</label>
                                <textarea
                                    rows={2}
                                    className="w-full bg-transparent border-b border-white/20 py-2 outline-none text-white focus:border-white transition-colors resize-none"
                                    placeholder="Describe your request..."
                                />
                            </div>

                            <button className="w-full bg-white text-black font-bold py-4 rounded-full hover:bg-gray-200 transition-all hover:scale-[1.02] active:scale-[0.98]">
                                Confirm Appointment
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
