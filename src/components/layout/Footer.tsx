import Link from "next/link";
import { Car, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-950 text-white border-t border-white/10 pt-8 pb-4">
            <div className="container px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Car className="w-6 h-6 text-white" />
                            <span className="font-bold text-xl tracking-tight">Cortex</span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                            Defining the future of independent automotive care. Precision, performance, and transparency.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/inventory" className="hover:text-white transition-colors">Inventory</Link></li>
                            <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-white mt-0.5" />
                                <span>123 Performance Dr,<br />Auto City, AC 90210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-white" />
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-white" />
                                <span>service@cortexauto.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-bold mb-6">Hours</h4>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            <li className="flex justify-between">
                                <span>Mon - Fri</span>
                                <span className="text-white">8:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span className="text-white">9:00 AM - 4:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-zinc-600">Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
                    <p>© {new Date().getFullYear()} Cortex Automotive. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
