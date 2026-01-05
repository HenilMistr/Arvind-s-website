"use client";

import { useParams } from "next/navigation";
import { cars } from "@/data/cars";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Gauge, Zap, Cog, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CarDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const car = cars.find(c => c.id === id);

    // Mock extra specs for now
    const specs = [
        { label: "VIN", value: "******8921" },
        { label: "Fuel", value: car?.fuelType },
        { label: "Body", value: "Coupe/Sedan" },
        { label: "Drivetrain", value: "AWD/RWD" },
        { label: "Engine", value: "3.0L Twin Turbo" },
        { label: "Ext. Color", value: car?.color },
    ];

    if (!car) {
        return <div className="min-h-screen pt-32 text-center text-white">Car not found.</div>;
    }

    return (
        <div className="min-h-screen bg-zinc-950 pt-24 pb-20">
            <div className="container px-6 mx-auto">
                <Link href="/inventory" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={18} />
                    Back to Inventory
                </Link>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Gallery (Single Image for MVP) */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="aspect-[4/3] relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 flex items-center justify-center"
                        >
                            <div className="text-center opacity-30">
                                <div className="w-20 h-20 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
                                    <span className="text-3xl font-bold">C</span>
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest">Image Coming Soon</span>
                            </div>

                            <div className="absolute top-4 left-4 bg-white text-black px-4 py-1 rounded-full text-sm font-bold">
                                {car.status}
                            </div>
                        </motion.div>
                        {/* Thumbnails (Mock) */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square bg-zinc-900 rounded-xl border border-white/5" />
                            ))}
                        </div>
                    </div>

                    {/* Right: Info & Form */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="mb-2 text-zinc-400 font-medium">{car.year} {car.make}</div>
                            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase leading-none">{car.model}</h1>

                            <div className="text-3xl font-bold text-white mb-8">
                                Price Temporary Purposes
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="bg-zinc-900 border border-white/5 p-4 rounded-xl text-center">
                                    <Gauge className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                                    <div className="text-sm font-bold text-white">{car.mileage.toLocaleString()}</div>
                                    <div className="text-xs text-zinc-500">Miles</div>
                                </div>
                                <div className="bg-zinc-900 border border-white/5 p-4 rounded-xl text-center">
                                    <Cog className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                                    <div className="text-sm font-bold text-white">{car.transmission}</div>
                                    <div className="text-xs text-zinc-500">Trans</div>
                                </div>
                                <div className="bg-zinc-900 border border-white/5 p-4 rounded-xl text-center">
                                    <Zap className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                                    <div className="text-sm font-bold text-white">{car.fuelType}</div>
                                    <div className="text-xs text-zinc-500">Fuel</div>
                                </div>
                            </div>

                            {/* Specs Grid */}
                            <h3 className="font-bold text-lg mb-4 text-white">Specifications</h3>
                            <div className="grid grid-cols-2 gap-y-3 gap-x-8 mb-8">
                                {specs.map((spec, i) => (
                                    <div key={i} className="flex justify-between border-b border-white/5 pb-2 text-sm">
                                        <span className="text-zinc-500">{spec.label}</span>
                                        <span className="text-white font-medium">{spec.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Features */}
                            <h3 className="font-bold text-lg mb-4 text-white">Features</h3>
                            <div className="flex flex-wrap gap-2 mb-10">
                                {car.features.map(feat => (
                                    <span key={feat} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-300">
                                        {feat}
                                    </span>
                                ))}
                            </div>

                            {/* CTA Form */}
                            <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10">
                                <h3 className="font-bold text-white mb-4">Interested in this car?</h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Name" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30" />
                                        <input type="tel" placeholder="Phone" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30" />
                                    </div>
                                    <button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors">
                                        Schedule Test Drive
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
