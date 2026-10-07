"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { trackAnalyticsEvent } from "@/lib/analytics";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "Solutions", href: "/solutions" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md text-[#111827]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Brand Mark with Distinct GreenDot Influence */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#153E2B] text-white font-mono font-bold text-xs tracking-tight shadow-md group-hover:bg-[#0E291C] transition-all">
            <span>GD</span>
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#059669] ring-2 ring-white animate-pulse"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-base font-bold tracking-tight text-[#111827] group-hover:text-[#153E2B] transition-colors flex items-center gap-1">
              GREEN<span className="h-2 w-2 rounded-full bg-[#059669]"></span>DOT
            </span>
            <span className="text-[9px] font-mono tracking-widest uppercase text-[#6B7280]">
              BUILD &amp; INTERIORS
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex lg:items-center lg:gap-8 text-xs font-mono font-bold uppercase tracking-wider text-[#4B5563]">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-[#153E2B] ${
                  isActive ? "text-[#153E2B] font-extrabold border-b-2 border-[#153E2B] pb-1" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action CTA Button */}
        <div className="hidden lg:flex lg:items-center">
          <Link
            href="/contact"
            onClick={() => trackAnalyticsEvent({ name: "cta_click", properties: { location: "header", label: "start_project" } })}
            className="inline-flex items-center gap-2 rounded-xl bg-[#C85A32] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#b54f2a] shadow-md font-mono"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-[#111827] hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-6 lg:hidden shadow-xl">
          <div className="flex flex-col gap-4 text-sm font-medium text-[#111827]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#4B5563] hover:text-[#153E2B] font-mono text-xs font-bold uppercase transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C85A32] px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md font-mono"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}



