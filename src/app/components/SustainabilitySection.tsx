import { motion } from "motion/react";
import { Leaf, Sun, Droplets, Wind, Recycle, Users, TreePine, Target } from "lucide-react";

const ESG_PILLARS = [
  {
    icon: TreePine,
    title: "Environmental",
    color: "#22C55E",
    initiatives: [
      { label: "Net-Zero Emissions Target", year: "2040" },
      { label: "100% Renewable Energy (Operations)", year: "2030" },
      { label: "Zero Waste to Landfill", year: "2035" },
      { label: "1M Trees Planted", year: "2026" },
    ],
  },
  {
    icon: Users,
    title: "Social",
    color: "#0E7490",
    initiatives: [
      { label: "10,000 Direct Jobs Created", year: "2027" },
      { label: "50,000 Farmers Supported", year: "2030" },
      { label: "Free Vocational Training Centers", year: "2025" },
      { label: "Rural Healthcare Clinics", year: "2026" },
    ],
  },
  {
    icon: Target,
    title: "Governance",
    color: "#D4AF37",
    initiatives: [
      { label: "50% Women in Leadership", year: "2028" },
      { label: "Annual ESG Audit & Reporting", year: "Ongoing" },
      { label: "ISO 14001 Certification (All Units)", year: "2025" },
      { label: "Zero Corruption Policy Enforcement", year: "Ongoing" },
    ],
  },
];

const METRICS = [
  { icon: Sun, label: "Solar Energy Installed", value: "2.4 MW", color: "#EAB308" },
  { icon: Droplets, label: "Water Recycled Annually", value: "18 Mn L", color: "#0E7490" },
  { icon: Recycle, label: "Waste Diverted from Landfill", value: "89%", color: "#22C55E" },
  { icon: Wind, label: "Carbon Offset Achieved", value: "1,200 T", color: "#8B5CF6" },
  { icon: Leaf, label: "Trees Planted (2024)", value: "85,000", color: "#22C55E" },
  { icon: Users, label: "Community Members Impacted", value: "42,000+", color: "#0A2540" },
];

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="py-32 bg-white dark:bg-[#040D1A] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Manrope' }}>
              <span className="w-8 h-px bg-[#D4AF37]" />
              Sustainability & ESG
            </span>
            <h2 className="text-[#0A2540] dark:text-white"
              style={{ fontFamily: 'Manrope', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Profit with<br />
              <span className="text-[#22C55E]">Purpose</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#4A6580] dark:text-white/50 leading-relaxed"
            style={{ fontFamily: 'Inter', fontSize: '1.05rem', lineHeight: 1.8 }}>
            At SAP GROUPS, sustainability is not a reporting exercise — it is a strategic imperative. We believe that businesses
            which disregard environmental and social responsibility are building on sand. Our ESG framework is woven into every
            business decision, every project, and every investment we make.
          </motion.p>
        </div>

        {/* ESG Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {ESG_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-[#F8FAFC] dark:bg-[#0A1628] rounded-2xl p-8 border border-transparent hover:border-opacity-40 transition-all duration-300"
              style={{ borderColor: `${pillar.color}40` }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${pillar.color}15` }}>
                <pillar.icon size={28} style={{ color: pillar.color }} />
              </div>
              <h3 className="text-[#0A2540] dark:text-white mb-5"
                style={{ fontFamily: 'Manrope', fontSize: '1.3rem', fontWeight: 800 }}>
                {pillar.title}
              </h3>
              <div className="space-y-3">
                {pillar.initiatives.map((init) => (
                  <div key={init.label} className="flex items-center justify-between gap-4 p-3 rounded-xl bg-white dark:bg-[#0A2540]/30">
                    <span className="text-[#4A6580] dark:text-white/50 text-sm" style={{ fontFamily: 'Inter' }}>
                      {init.label}
                    </span>
                    <span className="text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      style={{ color: pillar.color, backgroundColor: `${pillar.color}15`, fontFamily: 'Manrope' }}>
                      {init.year}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sustainability Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0A2540] rounded-3xl p-10 lg:p-14"
        >
          <div className="text-center mb-10">
            <h3 className="text-white mb-3" style={{ fontFamily: 'Manrope', fontSize: '1.8rem', fontWeight: 800 }}>
              2024 Sustainability Impact
            </h3>
            <p className="text-white/40" style={{ fontFamily: 'Inter' }}>
              Measurable progress toward our ESG commitments
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${m.color}20` }}>
                  <m.icon size={20} style={{ color: m.color }} />
                </div>
                <div className="text-[#D4AF37] font-black text-xl mb-1" style={{ fontFamily: 'Manrope' }}>
                  {m.value}
                </div>
                <div className="text-white/30 text-xs text-center leading-tight" style={{ fontFamily: 'Inter' }}>
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
