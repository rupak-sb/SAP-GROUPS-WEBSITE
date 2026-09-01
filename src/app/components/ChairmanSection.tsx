import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function ChairmanSection() {
  return (
    <section id="chairman" className="py-32 bg-white dark:bg-[#040D1A] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Background decorator */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#D4AF37]/30" />
              <div className="relative rounded-2xl overflow-hidden bg-[#0A2540]/10" style={{ aspectRatio: '3/4' }}>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&auto=format&crop=face"
                  alt="Chairman of SAP GROUPS in a formal portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 via-transparent to-transparent" />
                {/* Name plate */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="h-0.5 w-12 bg-[#D4AF37] mb-3" />
                  <p className="text-white font-bold text-xl" style={{ fontFamily: 'Manrope' }}>Shri Arjun Pratap Singh</p>
                  <p className="text-[#D4AF37] text-sm" style={{ fontFamily: 'Inter' }}>Founder & Executive Chairman, SAP GROUPS</p>
                </div>
              </div>
            </div>

            {/* Gold award badge */}
            <div className="absolute -right-4 top-16 bg-[#D4AF37] text-[#0A2540] rounded-2xl p-5 shadow-2xl shadow-[#D4AF37]/30 max-w-[140px]">
              <div className="text-3xl font-black" style={{ fontFamily: 'Manrope' }}>12+</div>
              <div className="text-xs font-semibold leading-tight mt-1" style={{ fontFamily: 'Inter' }}>Years of Visionary Leadership</div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: 'Manrope' }}>
              <span className="w-8 h-px bg-[#D4AF37]" />
              Chairman's Message
            </span>

            <h2 className="text-[#0A2540] dark:text-white mb-6"
              style={{ fontFamily: 'Manrope', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
              Building India's Most Trusted Business Group — One Decade at a Time
            </h2>

            <Quote size={40} className="text-[#D4AF37]/30 mb-4" />

            <div className="space-y-5 text-[#4A6580] dark:text-white/50 leading-relaxed" style={{ fontFamily: 'Inter', fontSize: '1.05rem', lineHeight: 1.85 }}>
              <p>
                When we founded SAP GROUPS in 2012, we had a simple but audacious goal: to build businesses that truly matter.
                Not just profitable enterprises, but institutions that solve real problems, create meaningful employment, and leave
                our industries better than we found them.
              </p>
              <p>
                Over the past twelve years, we have grown from a single construction company into a diversified group spanning five
                industries, with over 2,800 dedicated professionals. Each company in our portfolio was born from a genuine market need
                and built with patient capital, long-term thinking, and an obsessive commitment to quality.
              </p>
              <p>
                But I believe our most exciting chapter is still ahead. The eight ventures we are developing today — in AI, Robotics,
                Clean Energy, Healthcare, and more — represent our vision for the next decade. We are positioning SAP GROUPS at the
                intersection of India's most important transformations: digital, green, and industrial.
              </p>
              <p>
                We are not just building companies. We are building India's future. And we invite every investor, partner, customer,
                and employee to join us on this extraordinary journey.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0A2540]/10 dark:border-[#D4AF37]/10">
              <p className="text-[#0A2540] dark:text-[#D4AF37] font-bold" style={{ fontFamily: 'Manrope', fontSize: '1.1rem' }}>
                Shri Arjun Pratap Singh
              </p>
              <p className="text-[#4A6580] dark:text-white/40 text-sm" style={{ fontFamily: 'Inter' }}>
                Founder & Executive Chairman · SAP GROUPS
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
