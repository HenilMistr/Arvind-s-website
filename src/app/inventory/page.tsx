"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cars } from "@/data/cars";
import { Car, Gauge, Filter, Image as ImageIcon, Search, X } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

export default function InventoryPage() {
    // ---- Filters State ----
    const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<number>(500000);
    const [minYear, setMinYear] = useState<number>(2015);
    const [selectedTransmission, setSelectedTransmission] = useState<string[]>([]);

    // Mobile Filter Toggle
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    // ---- Derived Data ----
    const uniqueMakes = Array.from(new Set(cars.map(c => c.make)));
    const uniqueTransmissions = Array.from(new Set(cars.map(c => c.transmission)));

    // ---- Filter Logic ----
    const filteredCars = useMemo(() => {
        return cars.filter(car => {
            const matchMake = selectedMakes.length === 0 || selectedMakes.includes(car.make);
            const matchPrice = car.price <= priceRange;
            const matchYear = car.year >= minYear;
            const matchTrans = selectedTransmission.length === 0 || selectedTransmission.includes(car.transmission);

            return matchMake && matchPrice && matchYear && matchTrans;
        });
    }, [selectedMakes, priceRange, minYear, selectedTransmission]);

    // ---- Handlers ----
    const toggleMake = (make: string) => {
        setSelectedMakes(prev =>
            prev.includes(make) ? prev.filter(m => m !== make) : [...prev, make]
        );
    };

    const toggleTrans = (trans: string) => {
        setSelectedTransmission(prev =>
            prev.includes(trans) ? prev.filter(t => t !== trans) : [...prev, trans]
        );
    };

    const clearFilters = () => {
        setSelectedMakes([]);
        setPriceRange(500000);
        setMinYear(2015);
        setSelectedTransmission([]);
    };

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 md:px-6 bg-zinc-950">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* ---- Mobile Filter Toggle ---- */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setShowMobileFilters(!showMobileFilters)}
                            className="w-full flex items-center justify-between bg-zinc-900 border border-white/10 px-5 py-3 rounded-xl text-white font-bold hover:bg-zinc-800 transition-colors"
                        >
                            <span className="flex items-center gap-2"><Filter size={18} /> {showMobileFilters ? "Hide Filters" : "Show Filters"}</span>
                            {showMobileFilters ? <X size={18} /> : (
                                <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-zinc-300">
                                    {selectedMakes.length + selectedTransmission.length} Active
                                </span>
                            )}
                        </button>
                    </div>

                    {/* ---- Sidebar Filters ---- */}
                    <aside className={cn(
                        "lg:w-1/4 space-y-8 bg-zinc-900/50 p-6 rounded-2xl border border-white/5 h-fit lg:sticky lg:top-24 transition-all duration-300",
                        showMobileFilters ? "block" : "hidden lg:block"
                    )}>
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                <Filter size={18} /> Filters
                            </h2>
                            <button onClick={clearFilters} className="text-xs text-zinc-500 hover:text-white transition-colors">
                                Reset All
                            </button>
                        </div>

                        {/* Price Range */}
                        <div>
                            <label className="text-xs text-zinc-500 uppercase tracking-wider mb-2 block">
                                Max Price: <span className="text-white">${priceRange.toLocaleString()}</span>
                            </label>
                            <input
                                type="range"
                                min={50000} max={500000} step={10000}
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                            />
                        </div>

                        {/* Year Range */}
                        <div>
                            <label className="text-xs text-zinc-500 uppercase tracking-wider mb-2 block">
                                Min Year: <span className="text-white">{minYear}</span>
                            </label>
                            <input
                                type="range"
                                min={2010} max={2024} step={1}
                                value={minYear}
                                onChange={(e) => setMinYear(Number(e.target.value))}
                                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                            />
                        </div>

                        {/* Make Filter (Checkbox) */}
                        <div>
                            <label className="text-xs text-zinc-500 uppercase tracking-wider mb-3 block">Make</label>
                            <div className="space-y-2">
                                {uniqueMakes.map(make => (
                                    <label key={make} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={cn(
                                            "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                                            selectedMakes.includes(make)
                                                ? "bg-white border-white"
                                                : "border-white/20 group-hover:border-white/50"
                                        )}>
                                            {selectedMakes.includes(make) && <CheckIcon />}
                                        </div>
                                        <span className={cn(
                                            "text-sm transition-colors",
                                            selectedMakes.includes(make) ? "text-white" : "text-zinc-400 group-hover:text-zinc-300"
                                        )}>{make}</span>
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={selectedMakes.includes(make)}
                                            onChange={() => toggleMake(make)}
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Transmission Filter */}
                        <div>
                            <label className="text-xs text-zinc-500 uppercase tracking-wider mb-3 block">Transmission</label>
                            <div className="space-y-2">
                                {uniqueTransmissions.map(trans => (
                                    <label key={trans} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={cn(
                                            "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                                            selectedTransmission.includes(trans)
                                                ? "bg-white border-white"
                                                : "border-white/20 group-hover:border-white/50"
                                        )}>
                                            {selectedTransmission.includes(trans) && <CheckIcon />}
                                        </div>
                                        <span className={cn(
                                            "text-sm transition-colors",
                                            selectedTransmission.includes(trans) ? "text-white" : "text-zinc-400 group-hover:text-zinc-300"
                                        )}>{trans}</span>
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={selectedTransmission.includes(trans)}
                                            onChange={() => toggleTrans(trans)}
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* ---- Main Content: Grid ---- */}
                    <div className="lg:w-3/4">
                        <div className="mb-6 flex justify-between items-end">
                            <div>
                                <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Inventory</h1>
                                <p className="text-zinc-500 text-sm mt-1">
                                    Showing {filteredCars.length} of {cars.length} vehicles
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            <AnimatePresence mode="popLayout">
                                {filteredCars.map((car) => (
                                    <motion.div
                                        key={car.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                        className="group bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col"
                                    >
                                        {/* Placeholder Image Area */}
                                        <Link href={`/inventory/${car.id}`} className="relative h-48 bg-zinc-800 flex items-center justify-center overflow-hidden group/image">
                                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
                                            <div className="relative z-10 text-center opacity-40 group-hover/image:opacity-60 transition-opacity transform group-hover/image:scale-105 duration-500">
                                                <ImageIcon size={32} className="mx-auto mb-2" />
                                                <span className="text-[10px] font-bold uppercase tracking-widest block">Photos Coming Soon</span>
                                            </div>

                                            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-white border border-white/10 z-20">
                                                {car.status}
                                            </div>
                                        </Link>

                                        {/* Content */}
                                        <div className="p-5 flex-grow flex flex-col">
                                            <div className="mb-auto">
                                                <div className="flex justify-between items-start mb-1">
                                                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                                                        {car.make} {car.model}
                                                    </h3>
                                                </div>
                                                <div className="flex items-center gap-2 mb-4">
                                                    <span className="text-[10px] font-bold bg-white/10 text-zinc-300 px-1.5 py-0.5 rounded">{car.year}</span>
                                                    <span className="text-[10px] text-zinc-600 font-mono">VIN: ...8921</span>
                                                </div>

                                                <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400 mb-4">
                                                    <div className="flex items-center gap-1.5">
                                                        <Gauge size={12} className="text-blue-500/70" />
                                                        {car.mileage.toLocaleString()} mi
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <Car size={12} className="text-blue-500/70" />
                                                        {car.transmission}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                                                <div className="text-sm font-bold text-white uppercase tracking-wider">
                                                    Price Temporary Purposes
                                                </div>
                                                <Link
                                                    href={`/inventory/${car.id}`}
                                                    className="px-3 py-1.5 rounded-lg bg-white text-black text-xs font-bold hover:bg-gray-200 transition-colors"
                                                >
                                                    Details
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredCars.length === 0 && (
                            <div className="py-20 text-center text-zinc-500 bg-white/5 rounded-2xl border border-white/5 border-dashed">
                                <Search size={32} className="mx-auto mb-3 opacity-50" />
                                <h3 className="text-lg font-bold text-white">No vehicles found</h3>
                                <p className="text-sm">Try adjusting your filters to see more results.</p>
                                <button onClick={clearFilters} className="mt-4 text-sm text-blue-400 hover:text-blue-300 font-medium">
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Simple Helper Component for Icon
function CheckIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5 text-black">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}
