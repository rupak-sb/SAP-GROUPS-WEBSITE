import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Star, Users, TrendingUp } from "lucide-react";

const OPENINGS = [
  { title: "Vice President — Business Development", dept: "Corporate Strategy", location: "Mumbai", type: "Full-time", level: "VP Level" },
  { title: "Lead AI/ML Engineer", dept: "SAP AI (Innovation Labs)", location: "Pune", type: "Full-time", level: "Senior" },
  { title: "Project Manager — Infrastructure", dept: "SAP Construction", location: "Pune / Site-Based", type: "Full-time", level: "Mid-Senior" },
  { title: "Head of Sustainability & ESG", dept: "Corporate Affairs", location: "Mumbai", type: "Full-time", level: "Director" },
  { title: "Senior Finance Analyst", dept: "Finance & Accounts", location: "Mumbai", type: "Full-time", level: "Senior" },
  { title: "General Manager — Textile Operations", dept: "SAP Textiles", location: "Surat", type: "Full-time", level: "GM Level" },
  { title: "Agri-Tech Specialist", dept: "SAP Farms", location: "Nashik / Nagpur", type: "Full-time", level: "Specialist" },
  { title: "Regional Sales Director", dept: "SAP Real Estate", location: "Pune / Mumbai", type: "Full-time", level: "Director" },
];

const CULTURE = [
  { icon: TrendingUp, title: "Rapid Growth", desc: "Clear career trajectories with structured mentorship, accelerated promotions, and cross-divisional opportunities." },
  { icon: Heart, title: "People-First Benefits", desc: "Health insurance for family, flexible work arrangements, performance bonuses, ESOP eligibility, and wellness programs." },
  { icon: Star, title: "Work That Matters", desc: "Every role at SAP GROUPS contributes to building something meaningful — businesses that impact millions of lives across India." },
  { icon: Users, title: "Inclusive Culture", desc: "A diverse team where every voice is heard, every idea is evaluated on merit, and every employee is empowered to lead." },
];

const DEPT_COLORS: Record<string, string> = {
  "Corporate Strategy": "#D4AF37",
  "SAP AI (Innovation Labs)": "#0E7490",
  "SAP Construction": "#6B7280",
  "Corporate Affairs": "#22C55E",
  "Finance & Accounts": "#8B5CF6",
  "SAP Textiles": "#F97316",
  "SAP Farms": "#84CC16",
  "SAP Real Estate": "#EC4899",
};

export function CareersSection() {
  return (
    <section id="careers" className="py-32 bg-[#0A2540] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #D4AF37 0%, transparent 60%)`,
        }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Manrope' }}>
              <span className="w-8 h-px bg-[#D4AF37]" />
              Careers
            </span>
            <h2 className="text-white mb-6"
              style={{ fontFamily: 'Manrope', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Build Your Career.<br />
              <span className="text-[#D4AF37]">Build India.</span>
            </h2>
            <p className="text-white/50 leading-relaxed" style={{ fontFamily: 'Inter', fontSize: '1.05rem', lineHeight: 1.8 }}>
              At SAP GROUPS, you don't just work for a company — you help shape an institution. We are looking for bold, capable,
              and purpose-driven professionals who want to build India's most important businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {CULTURE.map((c) => (
              <div key={c.title} className="p-5 bg-white/5 rounded-xl border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-3">
                  <c.icon size={18} className="text-[#D4AF37]" />
                </div>
                <h4 className="text-white text-sm font-bold mb-1.5" style={{ fontFamily: 'Manrope' }}>{c.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: 'Inter' }}>{c.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-white" style={{ fontFamily: 'Manrope', fontSize: '1.5rem', fontWeight: 700 }}>
              Open Positions <span className="text-[#D4AF37]">({OPENINGS.length})</span>
            </h3>
          </div>
          <div className="space-y-3">
            {OPENINGS.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-[#D4AF37]/30 rounded-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase size={16} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1" style={{ fontFamily: 'Manrope' }}>{job.title}</h4>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ color: DEPT_COLORS[job.dept] || "#D4AF37", backgroundColor: `${DEPT_COLORS[job.dept] || "#D4AF37"}15`, fontFamily: 'Manrope' }}>
                        {job.dept}
                      </span>
                      <span className="text-white/40 text-xs flex items-center gap-1" style={{ fontFamily: 'Inter' }}>
                        <MapPin size={10} /> {job.location}
                      </span>
                      <span className="text-white/40 text-xs flex items-center gap-1" style={{ fontFamily: 'Inter' }}>
                        <Clock size={10} /> {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href="mailto:rupakprashanthan@gmail.com?subject=Application%20-%20SAP%20GROUPS"
                  className="flex-shrink-0 flex items-center gap-2 px-5 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0A2540] border border-[#D4AF37]/30 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{ fontFamily: 'Manrope' }}>
                  Apply Now <ArrowRight size={13} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
