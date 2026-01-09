"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Import usePathname, useRouter
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { name: "Services", href: "/#services" },
    { name: "Inventory", href: "/inventory" },
    { name: "About", href: "/#about" },
    { name: "Contact / Location", href: "/#book" },
];

import { useScrollTo } from "@/hooks/useScrollTo";

// ... (imports)

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const scrollToSection = useScrollTo();
    const pathname = usePathname(); // Get current path
    const router = useRouter(); // Get router

    // Check if we are on the homepage
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Enhanced Link Handler
    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        if (href.startsWith("/#")) {
            const targetId = href.replace("/#", "");
            if (isHomePage) {
                // If on homepage, just scroll
                scrollToSection(e, `#${targetId}`);
            } else {
                // If not on homepage, navigate then scroll (handled by useEffect in page or native behavior)
                // For simplicity, just push to the full URL with hash
                router.push(href);
            }
        } else {
            // Standard page navigation (e.g. /inventory)
            router.push(href);
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                // Force dark background if NOT on homepage OR if scrolled
                (!isHomePage || scrolled)
                    ? "bg-zinc-950/90 backdrop-blur-md border-white/5 py-2 shadow-sm"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between h-16 relative">
                {/* Logo - Left */}
                <Link href="/" className="flex items-center gap-3 z-50">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <img
                            src="/images/logo.jpg"
                            alt="Cortex Logo"
                            className="w-full h-full object-cover filter invert mix-blend-screen"
                        />
                    </div>
                    <span className="font-bold text-2xl tracking-tight text-white">Cortex</span>
                </Link>

                {/* Nav Links - Absolute Center */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 pointer-events-none">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavigation(e, link.href)}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors pointer-events-auto cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA - Right */}
                <div className="hidden md:block relative z-50">
                    <a
                        href="/#book"
                        onClick={(e) => handleNavigation(e, "/#book")}
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
                            className="absolute inset-0 bg-zinc-950 border-b border-white/10 p-6 pt-24 md:hidden flex flex-col gap-6 h-screen z-40"
                        >
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavigation(e, link.href)}
                                    className="text-2xl font-bold text-white/90"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/#book"
                                onClick={(e) => handleNavigation(e, "/#book")}
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
