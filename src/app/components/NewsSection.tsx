import { motion } from "motion/react";
import { Calendar, Tag } from "lucide-react";

const NEWS = [
  {
    date: "July 28, 2026",
    category: "Innovation",
    title: "SAP GROUPS Launches SAP Innovation Labs — ₹120 Crore R&D Investment to Power Next Generation Ventures",
    excerpt: "SAP GROUPS today inaugurated its four-facility Innovation Lab complex in Pune, housing 60+ researchers working on AI, robotics, green technology, and frontier industries. The ₹120 Cr investment marks the group's most significant push toward technology-driven business creation.",
    image: "https://images.unsplash.com/photo-1781330175070-6ec7e25f57aa?w=800&h=450&fit=crop&auto=format",
    readTime: "4 min read",
    tag: "Innovation",
  },
  {
    date: "June 15, 2026",
    category: "Business",
    title: "SAP GROUPS Crosses ₹850 Crore Annual Revenue — Announces Global Expansion to UAE, Singapore & UK",
    excerpt: "In a landmark announcement at the SAP GROUPS Annual Business Review, Executive Chairman Shri Arjun Pratap Singh revealed that the group has crossed ₹850 Crore in consolidated annual revenue for FY26, representing a 31% year-on-year growth.",
    image: "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=800&h=450&fit=crop&auto=format",
    readTime: "6 min read",
    tag: "Milestone",
  },
  {
    date: "May 03, 2026",
    category: "Sustainability",
    title: "SAP Farms Achieves Carbon-Neutral Status Across 5,000-Acre Operations — First Indian Agri Company to Do So",
    excerpt: "SAP Farms, the agricultural arm of SAP GROUPS, has received independent certification for achieving carbon-neutral operations across all 5,000+ acres under management — making it the first large-scale Indian agricultural enterprise to achieve this milestone.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=450&fit=crop&auto=format",
    readTime: "5 min read",
    tag: "ESG",
  },
  {
    date: "March 22, 2026",
    category: "Real Estate",
    title: "SAP Real Estate Unveils 'Horizon City' — India's First Fully Smart Mixed-Use Township in Navi Mumbai",
    excerpt: "SAP Real Estate today unveiled plans for Horizon City, a ₹650 Crore integrated smart township in Navi Mumbai spanning 85 acres. The project will feature AI-enabled building management, 100% solar power, and a zero-waste water recycling system.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=450&fit=crop&auto=format",
    readTime: "7 min read",
    tag: "Real Estate",
  },
  {
    date: "February 10, 2026",
    category: "Manufacturing",
    title: "SAP Machine Works Secures ₹80 Crore Government Contract for Precision Aerospace Components",
    excerpt: "SAP Machine Works has been awarded a prestigious ₹80 Crore multi-year contract by a leading Indian defence PSU for the supply of precision-machined aerospace components — marking SAP's first foray into the defence and aerospace supply chain.",
    image: "https://images.unsplash.com/photo-1565373677928-80b2e29cfc46?w=800&h=450&fit=crop&auto=format",
    readTime: "4 min read",
    tag: "Manufacturing",
  },
  {
    date: "January 05, 2026",
    category: "Leadership",
    title: "SAP GROUPS Appoints Dr. Priya Menon as Chief Technology Officer — Former Stanford AI Researcher to Lead Digital Transformation",
    excerpt: "SAP GROUPS has appointed Dr. Priya Menon, a Stanford-trained AI researcher with 15 years of experience at leading global tech companies, as its first-ever Chief Technology Officer. Dr. Menon will spearhead the group's SAP AI venture and digital transformation agenda.",
    image: "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=800&h=450&fit=crop&auto=format&crop=faces",
    readTime: "3 min read",
    tag: "Leadership",
  },
];

const TAG_COLORS: Record<string, string> = {
  Innovation: "#D4AF37",
  Milestone: "#22C55E",
  ESG: "#84CC16",
  "Real Estate": "#EC4899",
  Manufacturing: "#F97316",
  Leadership: "#8B5CF6",
};

export function NewsSection() {
  return (
    <section id="news" className="py-32 bg-[#F8FAFC] dark:bg-[#0A1628]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-[#0E7490] dark:text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Manrope' }}>
              <span className="w-8 h-px bg-[#0E7490] dark:bg-[#D4AF37]" />
              Newsroom
            </span>
            <h2 className="text-[#0A2540] dark:text-white"
              style={{ fontFamily: 'Manrope', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
              Latest News & Updates
            </h2>
          </motion.div>
        </div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group mb-8 bg-white dark:bg-[#0A2540]/50 rounded-3xl overflow-hidden border border-[#0A2540]/8 dark:border-[#D4AF37]/10 hover:shadow-2xl hover:shadow-[#0A2540]/10 transition-all duration-500"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 relative overflow-hidden" style={{ minHeight: '280px' }}>
              <img src={NEWS[0].image} alt={NEWS[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A2540]/20" />
              <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full"
                style={{ color: TAG_COLORS[NEWS[0].tag] || "#D4AF37", backgroundColor: `${TAG_COLORS[NEWS[0].tag] || "#D4AF37"}20`, fontFamily: 'Manrope' }}>
                <Tag size={9} className="inline mr-1" /> {NEWS[0].tag}
              </span>
            </div>
            <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[#4A6580] dark:text-white/30 text-xs mb-4" style={{ fontFamily: 'Inter' }}>
                <Calendar size={12} /> {NEWS[0].date} · {NEWS[0].readTime}
              </div>
              <h3 className="text-[#0A2540] dark:text-white mb-4 leading-snug"
                style={{ fontFamily: 'Manrope', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 800 }}>
                {NEWS[0].title}
              </h3>
              <p className="text-[#4A6580] dark:text-white/40 leading-relaxed mb-6" style={{ fontFamily: 'Inter' }}>
                {NEWS[0].excerpt}
              </p>
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS.slice(1).map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group bg-white dark:bg-[#0A2540]/50 rounded-2xl overflow-hidden border border-[#0A2540]/8 dark:border-[#D4AF37]/10 hover:shadow-xl hover:shadow-[#0A2540]/10 dark:hover:border-[#D4AF37]/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img src={article.image} alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ color: TAG_COLORS[article.tag] || "#D4AF37", backgroundColor: `${TAG_COLORS[article.tag] || "#D4AF37"}25`, fontFamily: 'Manrope' }}>
                  {article.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#4A6580] dark:text-white/30 text-xs mb-3" style={{ fontFamily: 'Inter' }}>
                  <Calendar size={11} /> {article.date} · {article.readTime}
                </div>
                <h4 className="text-[#0A2540] dark:text-white font-bold mb-3 leading-snug"
                  style={{ fontFamily: 'Manrope', fontSize: '0.95rem' }}>
                  {article.title}
                </h4>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
