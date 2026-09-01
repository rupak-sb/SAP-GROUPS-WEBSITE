import { motion } from "motion/react";
import { Trophy, Star } from "lucide-react";

const AWARDS = [
  {
    year: "2024",
    title: "Best Emerging Conglomerate of the Year",
    org: "India Business Excellence Forum",
    category: "Corporate Excellence",
  },
  {
    year: "2024",
    title: "Top 50 Most Innovative Companies in India",
    org: "Business Today Magazine",
    category: "Innovation",
  },
  {
    year: "2023",
    title: "Excellence in Sustainable Construction",
    org: "Green Building Council of India",
    category: "Sustainability",
  },
  {
    year: "2023",
    title: "Best Real Estate Developer — Maharashtra",
    org: "National Real Estate Awards",
    category: "Real Estate",
  },
  {
    year: "2023",
    title: "Best Employer of the Year — Mid-Size Conglomerate",
    org: "Great Place to Work® Institute",
    category: "People & Culture",
  },
  {
    year: "2022",
    title: "Export Excellence Award — Textiles",
    org: "Federation of Indian Export Organisations",
    category: "Exports",
  },
  {
    year: "2022",
    title: "Agri Innovation Award — Precision Farming",
    org: "Ministry of Agriculture, Government of India",
    category: "Agriculture",
  },
  {
    year: "2021",
    title: "Infrastructure Project of the Year",
    org: "Construction World Awards",
    category: "Infrastructure",
  },
  {
    year: "2020",
    title: "ESG Leadership Award",
    org: "Confederation of Indian Industry (CII)",
    category: "ESG",
  },
  {
    year: "2019",
    title: "Young Entrepreneur of the Year",
    org: "Economic Times Entrepreneurship Awards",
    category: "Leadership",
  },
  {
    year: "2018",
    title: "Manufacturing Quality Excellence",
    org: "Quality Council of India",
    category: "Manufacturing",
  },
  {
    year: "2016",
    title: "Fastest Growing Company — Maharashtra",
    org: "Dun & Bradstreet India",
    category: "Growth",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Corporate Excellence": "#D4AF37",
  "Innovation": "#0E7490",
  "Sustainability": "#22C55E",
  "Real Estate": "#0A2540",
  "People & Culture": "#EC4899",
  "Exports": "#F97316",
  "Agriculture": "#84CC16",
  "Infrastructure": "#6B7280",
  "ESG": "#22C55E",
  "Leadership": "#D4AF37",
  "Manufacturing": "#8B5CF6",
  "Growth": "#0E7490",
};

export function AwardsSection() {
  return (
    <section id="awards" className="py-32 bg-white dark:bg-[#040D1A] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'Manrope' }}>
            <span className="w-8 h-px bg-[#D4AF37]" />
            Recognition
            <span className="w-8 h-px bg-[#D4AF37]" />
          </span>
          <h2 className="text-[#0A2540] dark:text-white mb-4"
            style={{ fontFamily: 'Manrope', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Awards &<br />
            <span className="text-[#D4AF37]">Recognition</span>
          </h2>
          <p className="text-[#4A6580] dark:text-white/50 max-w-xl mx-auto" style={{ fontFamily: 'Inter', lineHeight: 1.7 }}>
            Recognized by India's most prestigious institutions for excellence in business, innovation, sustainability, and leadership.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {AWARDS.map((award, i) => (
            <motion.div
              key={`${award.year}-${award.title}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="group bg-[#F8FAFC] dark:bg-[#0A1628] rounded-2xl p-6 border border-transparent hover:border-[#D4AF37]/30 hover:bg-white dark:hover:bg-[#0A2540]/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                  <Trophy size={18} className="text-[#D4AF37]" />
                </div>
                <span className="text-[#4A6580] dark:text-white/30 text-sm font-bold" style={{ fontFamily: 'Manrope' }}>
                  {award.year}
                </span>
              </div>
              <h4 className="text-[#0A2540] dark:text-white font-bold mb-2 leading-snug" style={{ fontFamily: 'Manrope', fontSize: '0.9rem' }}>
                {award.title}
              </h4>
              <p className="text-[#4A6580] dark:text-white/30 text-xs mb-3" style={{ fontFamily: 'Inter' }}>
                {award.org}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
                style={{
                  color: CATEGORY_COLORS[award.category],
                  backgroundColor: `${CATEGORY_COLORS[award.category]}15`,
                  fontFamily: 'Manrope',
                }}>
                <Star size={9} fill="currentColor" /> {award.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
