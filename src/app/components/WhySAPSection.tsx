import { motion } from "motion/react";
import { Shield, TrendingUp, Globe2, Users, Lightbulb, Award, Cpu, Leaf } from "lucide-react";

const REASONS = [
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    desc: "12 years of consistent growth, successful project delivery, and expanding market presence across 5 active companies and multiple industries.",
  },
  {
    icon: Globe2,
    title: "Diversified Portfolio",
    desc: "Operating across construction, real estate, textiles, agriculture, and manufacturing — our diversification creates resilience and cross-sector synergies.",
  },
  {
    icon: Lightbulb,
    title: "Innovation at the Core",
    desc: "From AI and robotics to clean energy and aerospace, SAP GROUPS is investing in the technologies that will define the next 30 years of industry.",
  },
  {
    icon: Shield,
    title: "Uncompromising Integrity",
    desc: "We operate with full transparency, regulatory compliance, and a zero-tolerance policy for unethical conduct — at every level of the organization.",
  },
  {
    icon: Leaf,
    title: "Sustainability Commitment",
    desc: "Our ESG framework guides every business decision. We are committed to net-zero operations by 2040 and responsible stewardship of natural resources.",
  },
  {
    icon: Users,
    title: "People-First Culture",
    desc: "2,800+ professionals across our group are empowered to innovate, lead, and grow. We believe exceptional businesses are built by exceptional teams.",
  },
  {
    icon: Award,
    title: "Quality Without Compromise",
    desc: "ISO-certified processes, international quality benchmarks, and relentless attention to detail ensure that every SAP product and service exceeds expectations.",
  },
  {
    icon: Cpu,
    title: "Technology-Driven Future",
    desc: "We are systematically integrating AI, IoT, automation, and data analytics across all divisions to build smarter, leaner, and more competitive businesses.",
  },
];

export function WhySAPSection() {
  return (
    <section id="why" className="py-32 bg-[#0A2540] relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(14,116,144,0.15) 0%, transparent 70%)" }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: 'Manrope' }}>
              <span className="w-8 h-px bg-[#D4AF37]" />
              Why SAP GROUPS
            </span>
            <h2 className="text-white mb-6"
              style={{ fontFamily: 'Manrope', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              The Group That Thinks in Decades, Not Quarters
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed" style={{ fontFamily: 'Inter', fontSize: '1.05rem', lineHeight: 1.8 }}>
              SAP GROUPS is not a short-term play. We are building institutions — businesses designed to outlive trends,
              weather economic cycles, and compound value over generations. For investors, partners, customers, and talent,
              we represent the most compelling long-term opportunity in India's emerging conglomerate landscape.
            </p>

            {/* Quote */}
            <div className="relative pl-6 border-l-2 border-[#D4AF37]">
              <p className="text-white/70 italic text-lg leading-relaxed" style={{ fontFamily: 'Manrope', fontWeight: 300 }}>
                "We don't just want to build companies. We want to build the kind of companies that India will be proud of — companies that create jobs, push boundaries, and make the world better."
              </p>
              <p className="text-[#D4AF37] text-sm font-semibold mt-3" style={{ fontFamily: 'Manrope' }}>
                — Founder & Chairman, SAP GROUPS
              </p>
            </div>
          </motion.div>

          {/* Right: Reasons Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-2 gap-4"
          >
            {REASONS.map((r) => (
              <motion.div
                key={r.title}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="group p-5 rounded-xl bg-white/5 hover:bg-white/8 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 flex items-center justify-center mb-4 transition-colors">
                  <r.icon size={18} className="text-[#D4AF37]" />
                </div>
                <h4 className="text-white text-sm font-bold mb-2" style={{ fontFamily: 'Manrope' }}>{r.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: 'Inter' }}>{r.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
