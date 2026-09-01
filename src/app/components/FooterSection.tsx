import { motion } from "motion/react";
import { Twitter, Linkedin, Youtube, Instagram, Facebook, ArrowRight, Mail } from "lucide-react";

const FOOTER_LINKS = {
  "Quick Links": [
    { label: "About SAP GROUPS", href: "#about" },
    { label: "Our Companies", href: "#companies" },
    { label: "Upcoming Ventures", href: "#ventures" },
  ],
  "Businesses": [
    { label: "SAP Construction", href: "#companies" },
    { label: "SAP Real Estate", href: "#companies" },
    { label: "SAP Textiles", href: "#companies" },
    
  ],
  /*
  "Investor & Media": [
    { label: "Investor Relations", href: "#investors" },
    { label: "News & Press Releases", href: "#news" },
    { label: "Awards & Recognition", href: "#awards" },
    { label: "Corporate Governance", href: "#investors" },
    { label: "Annual Reports", href: "#investors" },
    { label: "Request Investor Deck", href: "#contact" },
  ],
  "Careers & Legal": [
    { label: "Open Positions", href: "#careers" },
    { label: "Life at SAP GROUPS", href: "#careers" },
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
  */
};

const SOCIAL = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "X (Twitter)", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export function FooterSection() {
  return (
    <footer className="bg-[#040D1A] border-t border-[#D4AF37]/10">
      {/* Newsletter Band */}
      <div className="border-b border-[#D4AF37]/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Manrope' }}>
                Stay Ahead with SAP GROUPS Insights
              </h4>
              <p className="text-white/40 text-sm" style={{ fontFamily: 'Inter' }}>
                Monthly updates on our ventures, industry trends, and investment opportunities.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-72">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37]/50 transition-colors text-sm"
                  style={{ fontFamily: 'Inter' }}
                />
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#0A2540] rounded-xl font-bold text-sm hover:bg-[#F0D98A] transition-all hover:shadow-lg hover:shadow-[#D4AF37]/20"
                style={{ fontFamily: 'Manrope' }}>
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#D4AF37] rotate-45 rounded-sm" />
                <span className="relative text-[#0A2540] font-black text-sm z-10" style={{ fontFamily: 'Manrope' }}>S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold tracking-widest text-sm" style={{ fontFamily: 'Manrope' }}>SAP</span>
                <span className="text-[#D4AF37] font-light tracking-[0.3em] text-[10px]" style={{ fontFamily: 'Manrope' }}>GROUPS</span>
              </div>
            </button>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs" style={{ fontFamily: 'Inter' }}>
              Building Tomorrow. Transforming Industries. A diversified business conglomerate creating long-term value through innovation, integrity, and excellence since 2012.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/30 flex items-center justify-center text-white/40 hover:text-[#D4AF37] transition-all duration-300">
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h5 className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-5"
                style={{ fontFamily: 'Manrope' }}>
                {heading}
              </h5>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button onClick={() => scrollTo(link.href)}
                      className="text-white/40 hover:text-[#D4AF37] text-sm transition-colors duration-200"
                      style={{ fontFamily: 'Inter' }}>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D4AF37]/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs" style={{ fontFamily: 'Inter' }}>
              © {new Date().getFullYear()} SAP GROUPS. All rights reserved. CIN: U45200MH2012PLC230000 · GST: 27AAACS1234A1Z5
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Use", "Cookie Policy", "Sitemap"].map((item) => (
                <button key={item} className="text-white/30 hover:text-[#D4AF37] text-xs transition-colors"
                  style={{ fontFamily: 'Inter' }}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
