import { motion } from "motion/react";
import { Shield, Target, Lightbulb, Globe2, Award, Users } from "lucide-react";

const VALUES = [
  { icon: Lightbulb, label: "Innovation", desc: "Pioneering tomorrow's solutions today" },
  { icon: Shield, label: "Integrity", desc: "Unwavering ethical standards in every decision" },
  { icon: Award, label: "Excellence", desc: "World-class quality across all endeavors" },
  { icon: Globe2, label: "Sustainability", desc: "Building responsibly for future generations" },
  { icon: Target, label: "Leadership", desc: "Setting the standard in every industry we enter" },
  { icon: Users, label: "Trust", desc: "Relationships built on reliability and transparency" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white dark:bg-[#040D1A] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Manrope' }}>
              <span className="w-8 h-px bg-[#D4AF37]" />
              Who We Are
              <span className="w-8 h-px bg-[#D4AF37]" />
            </span>
            <h2 className="text-[#0A2540] dark:text-white"
              style={{ fontFamily: 'Manrope', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              A Conglomerate Built on<br />
              <span className="text-[#0E7490]">Vision, Grit & Excellence</span>
            </h2>
          </motion.div>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0E7490]/10">
              <img
                src="/sap-groups-logo.png.png"
                alt="SAP GROUPS leadership in a strategic boardroom discussion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] rounded-2xl p-6 shadow-2xl max-w-[200px]">
              <div className="text-[#0A2540] text-3xl font-black" style={{ fontFamily: 'Manrope' }}>12+</div>
              <div className="text-[#0A2540]/80 text-sm font-medium mt-1" style={{ fontFamily: 'Inter' }}>Years of Transforming Industries</div>
            </div>
            {/* Navy accent box */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0A2540] rounded-2xl flex items-center justify-center">
              <Globe2 size={32} className="text-[#D4AF37]" />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="space-y-6">
              <h3 className="text-[#0A2540] dark:text-white"
                style={{ fontFamily: 'Manrope', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, lineHeight: 1.3 }}>
                Our Story: From Local Roots to Global Ambition
              </h3>
              <p className="text-[#4A6580] dark:text-white/60 leading-relaxed" style={{ fontFamily: 'Inter', fontSize: '1.05rem' }}>
                SAP GROUPS was founded with a singular conviction: that India's next great conglomerate would be built not through imitation,
                but through relentless innovation, disciplined execution, and deep-rooted values. What began as a construction enterprise in
                2012 has grown into a diversified business group with active operations across construction, real estate, textiles, agriculture,
                and industrial manufacturing.
              </p>
              <p className="text-[#4A6580] dark:text-white/60 leading-relaxed" style={{ fontFamily: 'Inter', fontSize: '1.05rem' }}>
                Today, SAP GROUPS is positioning itself as the conglomerate of the future — one that combines the dependability of
                traditional industries with the dynamism of emerging technologies. Our upcoming ventures in AI, Robotics, Clean Energy,
                Healthcare, and Aerospace represent our unwavering commitment to shaping the industries of tomorrow.
              </p>

              {/* Mission & Vision */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { label: "Our Mission", text: "To create sustainable businesses that generate enduring value for all stakeholders — employees, customers, communities, and investors." },
                  { label: "Our Vision", text: "To become a globally respected conglomerate recognized for innovation, ethical leadership, and transformative impact across 15+ industries by 2035." },
                ].map((item) => (
                  <div key={item.label} className="p-5 rounded-xl bg-[#F8FAFC] dark:bg-[#0A1628] border border-[#0A2540]/8 dark:border-[#D4AF37]/10">
                    <div className="w-1 h-6 bg-[#D4AF37] rounded mb-3" />
                    <h4 className="text-[#0A2540] dark:text-[#D4AF37] text-sm font-bold mb-2" style={{ fontFamily: 'Manrope' }}>{item.label}</h4>
                    <p className="text-[#4A6580] dark:text-white/50 text-xs leading-relaxed" style={{ fontFamily: 'Inter' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <div className="text-center mb-12">
            <h3 className="text-[#0A2540] dark:text-white" style={{ fontFamily: 'Manrope', fontSize: '1.75rem', fontWeight: 700 }}>
              Our Core Values
            </h3>
            <p className="text-[#4A6580] dark:text-white/50 mt-2" style={{ fontFamily: 'Inter' }}>
              The principles that guide every decision at SAP GROUPS
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {VALUES.map((v) => (
              <motion.div key={v.label} variants={fadeUp}
                className="group text-center p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#0A1628] border border-transparent hover:border-[#D4AF37]/40 hover:bg-white dark:hover:bg-[#112036] transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#0A2540] group-hover:bg-[#D4AF37] flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <v.icon size={20} className="text-[#D4AF37] group-hover:text-[#0A2540] transition-colors duration-300" />
                </div>
                <div className="text-[#0A2540] dark:text-white text-sm font-bold mb-1" style={{ fontFamily: 'Manrope' }}>{v.label}</div>
                <div className="text-[#4A6580] dark:text-white/40 text-xs leading-snug" style={{ fontFamily: 'Inter' }}>{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
