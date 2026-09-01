import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu, X, ChevronDown, Moon, Sun, Building2, Wheat, Factory, Home,
  Shirt, Cpu, Zap, HeartPulse, Plane, GraduationCap, Truck, DollarSign,
  Globe, ArrowRight
} from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Companies", href: "#companies", hasMega: true },
  { label: "Ventures", href: "#ventures" },
  { label: "Innovation", href: "#innovation" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Leadership", href: "#leadership" },
  { label: "Investors", href: "#investors" },
  { label: "News", href: "#news" },
  { label: "Careers", href: "#careers" },
];

const COMPANIES = [
  { name: "SAP Construction", icon: Building2, desc: "Premium civil & infrastructure projects", status: "Active" },
  { name: "SAP Real Estate", icon: Home, desc: "Luxury residential & commercial properties", status: "Active" },
  { name: "SAP Textiles", icon: Shirt, desc: "High-quality fabric manufacturing", status: "Active" },
  { name: "SAP Farms", icon: Wheat, desc: "Agri-tech & sustainable farming", status: "Active" },
  { name: "SAP Machine Works", icon: Factory, desc: "Industrial machinery & precision parts", status: "Active" },
];

const UPCOMING = [
  { name: "SAP AI", icon: Cpu, year: "2025" },
  { name: "SAP Robotics", icon: Factory, year: "2026" },
  { name: "SAP Energy", icon: Zap, year: "2026" },
  { name: "SAP Healthcare", icon: HeartPulse, year: "2027" },
  { name: "SAP Logistics", icon: Truck, year: "2027" },
  { name: "SAP Finance", icon: DollarSign, year: "2028" },
  { name: "SAP Education", icon: GraduationCap, year: "2028" },
  { name: "SAP Aerospace", icon: Plane, year: "2030" },
];

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Navigation({ darkMode, toggleDarkMode }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setMegaOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A2540]/95 backdrop-blur-xl shadow-2xl border-b border-[#D4AF37]/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#D4AF37] rotate-45 rounded-sm group-hover:rotate-[60deg] transition-transform duration-500" />
                <span className="relative text-[#0A2540] font-black text-sm z-10" style={{ fontFamily: 'Manrope' }}>S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold tracking-widest text-sm" style={{ fontFamily: 'Manrope' }}>SAP</span>
                <span className="text-[#D4AF37] font-light tracking-[0.3em] text-[10px]" style={{ fontFamily: 'Manrope' }}>GROUPS</span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.hasMega ? (
                  <div key={link.label} className="relative">
                    <button
                      onMouseEnter={() => setMegaOpen(true)}
                      onMouseLeave={() => setMegaOpen(false)}
                      onClick={() => scrollTo(link.href)}
                      className="flex items-center gap-1 px-3 py-2 text-white/80 hover:text-[#D4AF37] text-sm transition-colors duration-200 group"
                      style={{ fontFamily: 'Inter' }}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setMegaOpen(true)}
                          onMouseLeave={() => setMegaOpen(false)}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-[#0A2540]/98 backdrop-blur-xl rounded-2xl border border-[#D4AF37]/20 shadow-2xl overflow-hidden p-6"
                        >
                          <div className="mb-4">
                            <p className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-1">Active Companies</p>
                            <div className="grid grid-cols-2 gap-3">
                              {COMPANIES.map((c) => (
                                <button key={c.name} onClick={() => scrollTo("#companies")}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-left group">
                                  <div className="w-9 h-9 rounded-lg bg-[#0E7490]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors">
                                    <c.icon size={16} className="text-[#0E7490] group-hover:text-[#D4AF37] transition-colors" />
                                  </div>
                                  <div>
                                    <p className="text-white text-sm font-medium">{c.name}</p>
                                    <p className="text-white/50 text-xs mt-0.5">{c.desc}</p>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="border-t border-[#D4AF37]/10 pt-4">
                            <p className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-3">Upcoming Ventures</p>
                            <div className="flex flex-wrap gap-2">
                              {UPCOMING.map((v) => (
                                <button key={v.name} onClick={() => scrollTo("#ventures")}
                                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#D4AF37]/10 border border-white/10 hover:border-[#D4AF37]/30 text-white/60 hover:text-[#D4AF37] text-xs transition-all">
                                  <v.icon size={11} />
                                  {v.name}
                                  <span className="text-[#D4AF37]/50 text-[10px]">{v.year}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                          <button onClick={() => scrollTo("#companies")}
                            className="mt-4 flex items-center gap-2 text-[#D4AF37] text-xs font-medium hover:gap-3 transition-all">
                            View All Businesses <ArrowRight size={12} />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button key={link.label} onClick={() => scrollTo(link.href)}
                    className="px-3 py-2 text-white/80 hover:text-[#D4AF37] text-sm transition-colors duration-200"
                    style={{ fontFamily: 'Inter' }}>
                    {link.label}
                  </button>
                )
              )}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button onClick={toggleDarkMode}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-[#D4AF37] transition-all">
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button onClick={() => scrollTo("#contact")}
                className="hidden lg:flex items-center gap-2 px-5 py-2 bg-[#D4AF37] hover:bg-[#B8941F] text-[#0A2540] text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30"
                style={{ fontFamily: 'Manrope' }}>
                <Globe size={14} /> Contact Us
              </button>
              <button className="xl:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0A2540] flex flex-col"
          >
            <div className="h-[72px]" />
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(link.href)}
                    className="block w-full text-left text-white/80 hover:text-[#D4AF37] py-4 border-b border-white/10 text-lg transition-colors"
                    style={{ fontFamily: 'Manrope' }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
              <button onClick={() => scrollTo("#contact")}
                className="mt-8 w-full py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-xl text-lg"
                style={{ fontFamily: 'Manrope' }}>
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
