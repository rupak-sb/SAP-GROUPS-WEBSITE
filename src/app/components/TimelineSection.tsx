import { motion } from "motion/react";

const MILESTONES = [
  {
    year: "2012",
    title: "SAP Construction Founded",
    desc: "Shri Arjun Pratap Singh establishes SAP Construction with a seed capital of ₹1.2 Cr and a 12-member team. First contract awarded: a government road development project in Maharashtra.",
    badge: "Foundation",
  },
  {
    year: "2014",
    title: "SAP Real Estate Launched",
    desc: "Expanding into residential real estate, SAP launches its first premium residential project — Sapphire Heights, a 120-unit apartment complex in Pune. Project sold out in 45 days.",
    badge: "Expansion",
  },
  {
    year: "2015",
    title: "SAP Textiles Established",
    desc: "Venturing into textile manufacturing, SAP acquires a 40,000 sq ft facility in Surat. Within 18 months, SAP Textiles achieves exports to 6 countries and secures pan-India distribution.",
    badge: "Diversification",
  },
  {
    year: "2016",
    title: "SAP Farms: Agriculture Division",
    desc: "Launching precision agriculture operations on 1,200 acres in rural Maharashtra and MP. SAP Farms pioneers soil-health monitoring and drone-based crop surveillance in its operating regions.",
    badge: "Green Initiative",
  },
  {
    year: "2018",
    title: "SAP Machine Works Inaugurated",
    desc: "A state-of-the-art 80,000 sq ft industrial manufacturing facility is inaugurated, housing CNC machining centers, structural fabrication bays, and quality testing laboratories.",
    badge: "Manufacturing",
  },
  {
    year: "2020",
    title: "₹100 Cr Revenue Milestone",
    desc: "SAP GROUPS crosses ₹100 Cr in consolidated annual revenue despite global disruptions. The group's diversified portfolio proves its resilience during one of the most challenging economic periods.",
    badge: "Milestone",
  },
  {
    year: "2022",
    title: "Group Rebranding & ESG Commitment",
    desc: "SAP GROUPS undergoes a strategic rebrand and formalizes its ESG framework, committing to net-zero operations by 2040 and publishing its first annual sustainability report.",
    badge: "Governance",
  },
  {
    year: "2024",
    title: "SAP Innovation Labs Launched",
    desc: "Four specialized innovation labs are established, with 60+ researchers working on AI, robotics, green technology, and frontier tech that will power the group's next generation of ventures.",
    badge: "Innovation",
  },
  {
    year: "2025",
    title: "IPO Preparation & Global Expansion",
    desc: "SAP GROUPS begins formal preparation for a public market listing, engages top-tier investment banks, and announces international partnerships. The group targets presence in 5 countries by 2028.",
    badge: "Future",
  },
];

const BADGE_COLORS: Record<string, string> = {
  Foundation: "#D4AF37",
  Expansion: "#0E7490",
  Diversification: "#8B5CF6",
  "Green Initiative": "#22C55E",
  Manufacturing: "#6B7280",
  Milestone: "#D4AF37",
  Governance: "#0E7490",
  Innovation: "#F97316",
  Future: "#EC4899",
};

export function TimelineSection() {
  return (
    <section id="timeline" className="py-32 bg-[#F8FAFC] dark:bg-[#0A1628] overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
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
            Our Journey
            <span className="w-8 h-px bg-[#D4AF37]" />
          </span>
          <h2 className="text-[#0A2540] dark:text-white mb-4"
            style={{ fontFamily: 'Manrope', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            A Decade of Milestones
          </h2>
          <p className="text-[#4A6580] dark:text-white/50 max-w-xl mx-auto" style={{ fontFamily: 'Inter', lineHeight: 1.7 }}>
            From a single construction company to a multi-industry conglomerate in just 12 years — the SAP GROUPS story.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-[#D4AF37]/20" />

          <div className="space-y-12">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className={`relative flex items-start gap-6 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={`w-[calc(50%-2rem)] ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className={`inline-flex items-center gap-2 mb-3 ${i % 2 === 0 ? "flex-row-reverse" : ""}`}>
                    <span className="text-[#0A2540] dark:text-white font-black"
                      style={{ fontFamily: 'Manrope', fontSize: '1.5rem' }}>
                      {m.year}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        color: BADGE_COLORS[m.badge],
                        backgroundColor: `${BADGE_COLORS[m.badge]}18`,
                        fontFamily: 'Manrope',
                      }}>
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="text-[#0A2540] dark:text-white mb-2"
                    style={{ fontFamily: 'Manrope', fontSize: '1.05rem', fontWeight: 700 }}>
                    {m.title}
                  </h3>
                  <p className="text-[#4A6580] dark:text-white/40 text-sm leading-relaxed" style={{ fontFamily: 'Inter' }}>
                    {m.desc}
                  </p>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#F8FAFC] dark:border-[#0A1628] z-10 flex-shrink-0" />

                {/* Spacer */}
                <div className="w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
