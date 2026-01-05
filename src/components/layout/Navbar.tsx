"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Car } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact / Location", href: "#book" },
];

import { useScrollTo } from "@/hooks/useScrollTo";

// ... (imports)

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const scrollToSection = useScrollTo();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Wrapper to close menu on click
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        setMobileMenuOpen(false);
        scrollToSection(e, href);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-25 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-zinc-950/80 backdrop-blur-md border-white/5 py-2 shadow-sm"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container px-6 flex items-center justify-between h-16 relative">
                {/* Logo - Left */}
                <Link href="/" className="flex items-center gap-2 z-50" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                    <Car className="w-6 h-6 text-white" />
                    <span className="font-bold text-lg tracking-tight text-white">Cortex</span>
                </Link>

                {/* Nav Links - Absolute Center */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 pointer-events-none">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors pointer-events-auto cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA - Right */}
                <div className="hidden md:block relative z-50">
                    <a
                        href="#book"
                        onClick={(e) => scrollToSection(e, "#book")}
                        className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-gray-200 transition-all hover:scale-105 inline-block cursor-pointer uppercase tracking-wide"
                    >
                        Book Appointment
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute inset-0 bg-zinc-950 border-b border-white/10 p-6 pt-24 md:hidden flex flex-col gap-6 h-screen"
                        >
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-2xl font-bold text-white/90"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#book"
                                onClick={(e) => scrollToSection(e, "#book")}
                                className="bg-white text-black text-center py-4 rounded-xl font-bold text-lg mt-4"
                            >
                                Book Appointment
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
