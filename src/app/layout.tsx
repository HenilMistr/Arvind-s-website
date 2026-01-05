import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cortex - Premium Automotive Care",
  description: "Excellence in automotive care. Professional diagnostics, repairs, and detailing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased min-h-screen flex flex-col bg-zinc-950 text-white`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="py-6 text-center text-zinc-600 text-xs border-t border-white/5">
          © {new Date().getFullYear()} Cortex. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
