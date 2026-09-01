import { motion } from "motion/react";
import { Linkedin } from "lucide-react";

const LEADERS = [
  {
    name: "Shri Arjun Pratap Singh",
    title: "Founder & Executive Chairman",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&auto=format&crop=face",
    bio: "Visionary founder with 20+ years across construction and industry. Alumni of IIM Ahmedabad. Built SAP GROUPS from the ground up.",
  },
  {
    name: "Mrs. Kavitha Rajan",
    title: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1573166953836-3b8c1db1aaac?w=400&h=500&fit=crop&auto=format&crop=face",
    bio: "Former McKinsey strategy consultant. MBA from London Business School. Leads overall operations and group expansion strategy.",
  },
];

export function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="py-28 lg:py-32 bg-[#F8FAFC] dark:bg-[#0A1628]"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span
            className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "Manrope" }}
          >
            <span className="w-8 h-px bg-[#D4AF37]" />

            Leadership Team

            <span className="w-8 h-px bg-[#D4AF37]" />
          </span>

          <h2
            className="text-[#0A2540] dark:text-white mb-5"
            style={{
              fontFamily: "Manrope",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Exceptional People.
            <br />
            <span className="text-[#0E7490]">
              Extraordinary Results.
            </span>
          </h2>

          <p
            className="text-[#4A6580] dark:text-white/50 max-w-2xl mx-auto"
            style={{
              fontFamily: "Inter",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            SAP GROUPS is led by a diverse team of industry veterans,
            global strategists, and domain experts — united by a shared
            commitment to building India's most innovative conglomerate.
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 lg:gap-12 max-w-[900px] mx-auto">

          {LEADERS.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              className="
                group
                bg-white
                dark:bg-[#0A2540]/50
                rounded-2xl
                overflow-hidden
                border
                border-[#0A2540]/8
                dark:border-[#D4AF37]/10
                hover:border-[#D4AF37]/40
                hover:shadow-xl
                hover:shadow-[#0A2540]/10
                transition-all
                duration-400
                w-full
                sm:w-[400px]
              "
            >
              {/* Photo */}
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "4/5",
                }}
              >
                <img
                  src={leader.image}
                  alt={`${leader.name} — ${leader.title}`}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-700
                  "
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/20 to-transparent" />

                {/* LinkedIn */}
                <div
                  className="
                    absolute
                    top-4
                    right-4
                    w-9
                    h-9
                    rounded-full
                    bg-white/20
                    backdrop-blur-sm
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    cursor-pointer
                  "
                >
                  <Linkedin
                    size={15}
                    className="text-white"
                  />
                </div>

                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p
                    className="text-white font-bold text-base mb-1"
                    style={{
                      fontFamily: "Manrope",
                    }}
                  >
                    {leader.name}
                  </p>

                  <p
                    className="text-[#D4AF37] text-xs"
                    style={{
                      fontFamily: "Inter",
                    }}
                  >
                    {leader.title}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div className="p-5">
                <p
                  className="text-[#4A6580] dark:text-white/40 text-sm leading-relaxed"
                  style={{
                    fontFamily: "Inter",
                  }}
                >
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
