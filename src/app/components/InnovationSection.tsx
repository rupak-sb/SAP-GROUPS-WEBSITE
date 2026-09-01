import { motion } from "motion/react";
import { FlaskConical, Cpu, Zap, Shield, ArrowRight } from "lucide-react";

const LABS = [
  {
    icon: Cpu,
    name: "SAP Digital Lab",
    focus: "AI, Machine Learning & Data Science",
    desc: "Building the AI backbone for the SAP ecosystem — developing proprietary models for demand forecasting, predictive maintenance, computer vision, and intelligent process automation.",
    projects: ["Enterprise AI Platform", "Predictive Analytics Engine", "Computer Vision for Construction QC", "NLP for Customer Intelligence"],
    color: "#0E7490",
  },
  {
    icon: FlaskConical,
    name: "SAP Green Innovation Lab",
    focus: "Clean Energy & Sustainable Technology",
    desc: "Pioneering sustainable material science, green building technologies, precision agriculture solutions, and clean energy integration across all SAP operations.",
    projects: ["Eco-Building Materials R&D", "Solar + Storage Integration", "Precision Irrigation Systems", "Carbon Capture Pilot Projects"],
    color: "#22C55E",
  },
  {
    icon: Zap,
    name: "SAP Advanced Manufacturing Lab",
    focus: "Robotics, Automation & Smart Factory",
    desc: "Developing next-generation automation solutions for construction, textiles, and industrial manufacturing — from autonomous quality inspection to robotic assembly systems.",
    projects: ["Industrial Robot Prototypes", "Smart Factory Systems", "Automated QC Systems", "Industry 4.0 Integration"],
    color: "#D4AF37",
  },
  {
    icon: Shield,
    name: "SAP Futures Lab",
    focus: "Healthcare Tech, Aerospace & Deep Future",
    desc: "Our horizon lab exploring high-potential frontier technologies — medical diagnostics AI, drone systems, aerospace components, and space-tech that will power SAP's ventures beyond 2030.",
    projects: ["Medical AI Diagnostics", "UAV & Drone Platforms", "Aerospace Components Prototypes", "Blockchain Supply Chain"],
    color: "#8B5CF6",
  },
];

export function InnovationSection() {
  return (
    <section id="innovation" className="py-32 bg-[#0A2540] relative overflow-hidden">
      <div className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1781330175070-6ec7e25f57aa?w=1920&h=900&fit=crop&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540] via-[#0A2540]/90 to-[#0A2540]" />

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
            Innovation Labs
            <span className="w-8 h-px bg-[#D4AF37]" />
          </span>
          <h2 className="text-white mb-4"
            style={{ fontFamily: 'Manrope', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Where Tomorrow<br />
            <span className="text-[#D4AF37]">Is Being Built Today</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ fontFamily: 'Inter', fontSize: '1.05rem', lineHeight: 1.7 }}>
            SAP Innovation Labs is our internal R&D engine — four specialized facilities working on breakthrough technologies
            that will fuel our next generation of businesses and strengthen our existing portfolio.
          </p>
        </motion.div>

        {/* Labs Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {LABS.map((lab, i) => (
            <motion.div
              key={lab.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-[#D4AF37]/30 rounded-2xl p-8 transition-all duration-400 backdrop-blur-sm"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${lab.color}20` }}>
                  <lab.icon size={26} style={{ color: lab.color }} />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ fontFamily: 'Manrope', color: lab.color }}>
                    {lab.focus}
                  </p>
                  <h3 className="text-white" style={{ fontFamily: 'Manrope', fontSize: '1.3rem', fontWeight: 800 }}>
                    {lab.name}
                  </h3>
                </div>
              </div>

              <p className="text-white/40 leading-relaxed mb-6" style={{ fontFamily: 'Inter' }}>
                {lab.desc}
              </p>

              <div className="space-y-2">
                <p className="text-[#D4AF37]/60 text-xs font-semibold tracking-wider uppercase mb-3" style={{ fontFamily: 'Manrope' }}>
                  Active Projects
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {lab.projects.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-xs text-white/40" style={{ fontFamily: 'Inter' }}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: lab.color, opacity: 0.6 }} />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden"
        >
          {[
            { value: "4", label: "Innovation Labs" },
            { value: "₹120 Cr+", label: "R&D Investment Planned" },
            { value: "25+", label: "Active Research Projects" },
            { value: "60+", label: "Scientists & Engineers" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#0A1628]/80 px-6 py-8 text-center">
              <div className="text-[#D4AF37] font-black mb-2"
                style={{ fontFamily: 'Manrope', fontSize: '1.8rem' }}>
                {stat.value}
              </div>
              <div className="text-white/40 text-xs tracking-wider uppercase" style={{ fontFamily: 'Inter' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
