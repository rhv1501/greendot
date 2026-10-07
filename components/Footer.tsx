import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#0E291C] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand & Proposition Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white font-mono font-bold text-xs tracking-tight shadow-md">
                  <span>GD</span>
                  <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#0E291C] animate-pulse"></span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-base font-bold tracking-tight text-white flex items-center gap-1">
                    GREEN<span className="h-2 w-2 rounded-full bg-emerald-400"></span>DOT
                  </span>
                  <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-300">
                    BUILD &amp; INTERIORS
                  </span>
                </div>
              </Link>
              
              <p className="text-xs leading-relaxed text-[#A1A8A3] max-w-sm mb-6 font-sans">
                Customized prefabricated construction and interior fit-outs in Chennai &amp; South India. We work backwards from your space requirement with defined scope, agreed project cost, and planned timeline.
              </p>

              <div className="flex items-center gap-4 text-xs font-mono text-[#A1A8A3]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <span>GREEN = Sustainable Solution</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#C85A32]"></span>
                  <span>DOT = Planned Timeline + Cost</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs font-mono">
              <span className="uppercase tracking-wider text-emerald-400 block mb-1">
                Operating Base
              </span>
              <p className="text-[#A1A8A3]">
                Chennai, Tamil Nadu • Serving Chennai &amp; South India
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
                Services
              </h3>
              <ul className="space-y-3 text-xs text-[#A1A8A3]">
                <li>
                  <Link href="/services/prefabricated-construction" className="hover:text-emerald-400 transition-colors">
                    Prefabricated Construction
                  </Link>
                </li>
                <li>
                  <Link href="/services/lgsf-construction" className="hover:text-emerald-400 transition-colors">
                    LGSF Construction
                  </Link>
                </li>
                <li>
                  <Link href="/services/puf-panel-systems" className="hover:text-emerald-400 transition-colors">
                    PUF Panel Systems
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial-interiors" className="hover:text-emerald-400 transition-colors">
                    Commercial Interiors
                  </Link>
                </li>
              </ul>
            </div>

            {/* Space Solutions */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
                Space Solutions
              </h3>
              <ul className="space-y-3 text-xs text-[#A1A8A3]">
                <li>
                  <Link href="/solutions/rooftop-projects" className="hover:text-emerald-400 transition-colors">
                    Rooftop Extensions
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/cafes-restaurants" className="hover:text-emerald-400 transition-colors">
                    Cafés &amp; Restaurants
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/farmhouses-hospitality" className="hover:text-emerald-400 transition-colors">
                    Farmhouses &amp; Cottages
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/commercial-spaces" className="hover:text-emerald-400 transition-colors">
                    Commercial Offices
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
                Company &amp; Process
              </h3>
              <ul className="space-y-3 text-xs text-[#A1A8A3]">
                <li>
                  <Link href="/about" className="hover:text-emerald-400 transition-colors">
                    About GreenDot
                  </Link>
                </li>
                <li>
                  <Link href="/process" className="hover:text-emerald-400 transition-colors">
                    5-Step Process
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-emerald-400 transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-emerald-400 transition-colors">
                    FAQ Bank
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors font-bold text-[#C85A32]">
                    Start a Project
                  </Link>
                </li>
              </ul>
            </div>

            {/* Regional Focus */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
                Regional Focus
              </h3>
              <ul className="space-y-3 text-xs text-[#A1A8A3]">
                <li>LGSF Construction Chennai</li>
                <li>Rooftop Prefab Rooms Chennai</li>
                <li>Insulated PUF Panel Shells</li>
                <li>Café Interior Contractor ECR</li>
                <li>Turnkey Office Fit-Out South India</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A1A8A3]">
          <p>© 2026 GreenDot Build &amp; Interiors. Founded by Hakash R. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors inline-flex items-center gap-1 font-mono text-[11px] text-[#A1A8A3]">
              <span>Start Project Requirement</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


