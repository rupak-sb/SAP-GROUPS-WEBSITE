import { motion } from "motion/react";
import { TrendingUp, BarChart3, Building, Globe2, ArrowRight, DollarSign, Shield, Award } from "lucide-react";

const HIGHLIGHTS = [
  { icon: TrendingUp, label: "Revenue CAGR (5Yr)", value: "31%", desc: "Consistent compounding growth" },
  { icon: DollarSign, label: "Annual Turnover", value: "₹850 Cr+", desc: "FY 2024 consolidated revenue" },
  { icon: Building, label: "Total Asset Base", value: "₹1,200 Cr+", desc: "Combined asset valuation" },
  { icon: Globe2, label: "Group Valuation", value: "₹3,500 Cr", desc: "Pre-IPO estimated enterprise value" },
  { icon: BarChart3, label: "EBITDA Margin", value: "18.4%", desc: "Healthy operational profitability" },
  { icon: Shield, label: "Debt-to-Equity", value: "0.42x", desc: "Conservative, well-managed leverage" },
];

const INVESTMENT_CASE = [
  {
    title: "Diversified Revenue Streams",
    desc: "No single business accounts for more than 35% of group revenue, providing natural resilience against sector-specific downturns.",
  },
  {
    title: "Strong Management Pedigree",
    desc: "Leadership team with collective experience at McKinsey, IIM, IIT, Tata Capital, and Deloitte — proven operators across business cycles.",
  },
  {
    title: "India's Growth Tailwinds",
    desc: "All five of SAP's active sectors — construction, real estate, textiles, agriculture, manufacturing — are beneficiaries of India's $5 trillion economy ambition.",
  },
  {
    title: "IPO-Ready Business Model",
    desc: "Audited financials, ESG compliance, independent board members, and institutional governance framework in place for a public market listing.",
  },
];

export function InvestorSection() {
  return (
    <section id="investors" className="py-32 bg-[#0A2540] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 80%, #D4AF37 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #0E7490 0%, transparent 50%)`,
        }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'Manrope' }}>
            <span className="w-8 h-px bg-[#D4AF37]" />
            Investor Relations
            <span className="w-8 h-px bg-[#D4AF37]" />
          </span>
          <h2 className="text-white mb-4"
            style={{ fontFamily: 'Manrope', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            A Compelling Investment<br />
            <span className="text-[#D4AF37]">in India's Future</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ fontFamily: 'Inter', fontSize: '1.05rem', lineHeight: 1.7 }}>
            SAP GROUPS presents a rare opportunity: a battle-tested conglomerate with a transparent track record,
            a high-growth pipeline, and a credible path to a public market listing.
          </p>
        </motion.div>

        {/* Financial Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 rounded-2xl p-5 text-center transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-3">
                <h.icon size={18} className="text-[#D4AF37]" />
              </div>
              <div className="text-[#D4AF37] font-black text-xl mb-1" style={{ fontFamily: 'Manrope' }}>{h.value}</div>
              <div className="text-white/60 text-xs font-semibold mb-1" style={{ fontFamily: 'Manrope' }}>{h.label}</div>
              <div className="text-white/30 text-[10px]" style={{ fontFamily: 'Inter' }}>{h.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Investment Case */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {INVESTMENT_CASE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10"
            >
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-1">
                <Award size={14} className="text-[#0A2540]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2" style={{ fontFamily: 'Manrope', fontSize: '1rem' }}>{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: 'Inter' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* IPO Journey Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-10 lg:p-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30"
        >
          <div className="max-w-2xl">
            <p className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'Manrope' }}>
              IPO Journey — Targeting 2027
            </p>
            <h3 className="text-white mb-4"
              style={{ fontFamily: 'Manrope', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, lineHeight: 1.2 }}>
              Join SAP GROUPS Before the Public Markets Do
            </h3>
            <p className="text-white/50 mb-8 leading-relaxed" style={{ fontFamily: 'Inter' }}>
              We are currently engaging with institutional investors, family offices, and strategic partners for our
              pre-IPO growth round. With a targeted listing on NSE/BSE in 2027, now is the ideal time to participate
              in SAP GROUPS' next chapter of value creation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-7 py-3.5 bg-[#D4AF37] text-[#0A2540] rounded-full font-bold hover:bg-[#F0D98A] transition-all hover:shadow-lg hover:shadow-[#D4AF37]/30"
                style={{ fontFamily: 'Manrope' }}>
                Request Investor Deck <ArrowRight size={16} />
              </button>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white border border-white/20 rounded-full font-semibold hover:bg-white/15 transition-all"
                style={{ fontFamily: 'Manrope' }}>
                Schedule Meeting
              </button>
            </div>
          </div>

          {/* Decorative */}
          <div className="absolute right-0 top-0 bottom-0 w-80 hidden lg:flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border-2 border-[#D4AF37]/20 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full border-2 border-[#D4AF37]/30 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center">
                  <TrendingUp size={32} className="text-[#D4AF37]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
