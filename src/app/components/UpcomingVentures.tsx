import { motion } from "motion/react";
import {
  Sprout,
  Cpu,
  Clock,
  TrendingUp,
  Globe2,
} from "lucide-react";

const VENTURES = [
  {
    name: "SAP FARMS",
    icon: Sprout,
    industry: "Agriculture & AgriTech",
    year: "2027",
    phase: "Pre-Launch",
    vision:
      "Building a next-generation agricultural ecosystem combining modern farming, smart technology, automation, and sustainable practices to transform agricultural productivity.",
    focus: [
      "Smart & Modern Farming",
      "Agricultural Technology",
      "Sustainable Agriculture",
      "Agri Supply Chain",
    ],
    color: "#22C55E",
    progress: 42,
  },
  {
    name: "SAP NEX-GEN TECHNOLOGIES",
    icon: Cpu,
    industry: "Technology & Innovation",
    year: "2026 - 2027 Mid",
    phase: "R&D Phase",
    vision:
      "Developing next-generation technology solutions focused on artificial intelligence, ai voice calls, digital platforms and web apps, Hollographic Fan Technologies and emerging technologies for businesses and industries.",
    focus: [
      "Artificial Intelligence",
      "Digital Platforms & Web Apps",
      "Hollographic Fan Technologies",
      "Emerging Technologies",
    ],
    color: "#0E7490",
    progress: 62,
  },
];

const PHASE_COLORS: Record<string, string> = {
  "Pre-Launch": "#22C55E",
  "R&D Phase": "#0E7490",
  "Feasibility Study": "#EAB308",
  "Market Research": "#F97316",
  "Business Planning": "#8B5CF6",
  "Concept Stage": "#6B7280",
  "Vision Stage": "#9CA3AF",
};

export function UpcomingVentures() {
  return (
    <section
      id="ventures"
      className="py-28 lg:py-32 bg-[#0A2540] overflow-hidden relative"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 25% 50%,
              #D4AF37 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 75% 50%,
              #0E7490 0%,
              transparent 50%
            )
          `,
        }}
      />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(212,175,55,0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(212,175,55,0.5) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center mb-16 lg:mb-20"
        >
          <span
            className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{
              fontFamily: "Manrope",
            }}
          >
            <span className="w-8 h-px bg-[#D4AF37]" />

            The Future Portfolio

            <span className="w-8 h-px bg-[#D4AF37]" />
          </span>

          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "Manrope",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Upcoming Ventures
          </h2>

          <p
            className="text-white/50 max-w-2xl mx-auto"
            style={{
              fontFamily: "Inter",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            Two upcoming ventures shaping the next phase of
            SAP GROUPS — focused on agriculture, technology,
            innovation, and future growth.
          </p>
        </motion.div>

        {/* Two Venture Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-[1120px] mx-auto">

          {VENTURES.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{
                opacity: 0,
                y: 45,
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
                duration: 0.65,
                delay: i * 0.12,
              }}
              className="
                group
                bg-white/5
                hover:bg-white/[0.08]
                border border-white/10
                hover:border-[#D4AF37]/30
                rounded-2xl
                p-8
                lg:p-10
                transition-all
                duration-500
                backdrop-blur-sm
                min-h-[500px]
                flex
                flex-col
              "
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-7">

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${v.color}20`,
                  }}
                >
                  <v.icon
                    size={26}
                    style={{
                      color: v.color,
                    }}
                  />
                </div>

                <span
                  className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                  style={{
                    color:
                      PHASE_COLORS[v.phase] || "#9CA3AF",
                    backgroundColor: `${
                      PHASE_COLORS[v.phase] || "#9CA3AF"
                    }15`,
                    fontFamily: "Manrope",
                  }}
                >
                  {v.phase}
                </span>
              </div>

              {/* Company Name */}
              <h3
                className="text-white mb-2"
                style={{
                  fontFamily: "Manrope",
                  fontSize: "1.45rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                {v.name}
              </h3>

              {/* Industry */}
              <p
                className="text-[#D4AF37]/70 text-xs mb-6 flex items-center gap-1.5"
                style={{
                  fontFamily: "Manrope",
                }}
              >
                <Globe2 size={11} />
                {v.industry}
              </p>

              {/* Vision */}
              <p
                className="text-white/45 text-sm lg:text-[15px] leading-relaxed mb-7"
                style={{
                  fontFamily: "Inter",
                }}
              >
                {v.vision}
              </p>

              {/* Focus Areas */}
              <div className="space-y-2.5">
                {v.focus.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-white/50"
                    style={{
                      fontFamily: "Inter",
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              {/* Push footer to bottom */}
              <div className="flex-1" />

              {/* Development Progress */}
              <div className="mt-10">

                <div className="flex items-center justify-between mb-2.5">

                  <span
                    className="text-white/30 text-[10px] flex items-center gap-1.5"
                    style={{
                      fontFamily: "Inter",
                    }}
                  >
                    <TrendingUp size={11} />
                    Development Progress
                  </span>

                  <span
                    className="text-[#D4AF37] text-xs font-bold"
                    style={{
                      fontFamily: "Manrope",
                    }}
                  >
                    {v.progress}%
                  </span>

                </div>

                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${v.progress}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.3 + i * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full"
                    style={{
                      backgroundColor:
                        PHASE_COLORS[v.phase] ||
                        "#D4AF37",
                    }}
                  />

                </div>

                {/* Launch */}
                <div className="flex items-center gap-1.5 mt-4">

                  <Clock
                    size={11}
                    className="text-[#D4AF37]/50"
                  />

                  <span
                    className="text-[#D4AF37]/60 text-[10px] font-semibold"
                    style={{
                      fontFamily: "Manrope",
                    }}
                  >
                    Target Launch: {v.year}
                  </span>

                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Future Ventures Message */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            text-center
            mt-16
            lg:mt-20
          "
        >
          <p
            className="text-white/30 text-xs tracking-[0.2em] uppercase"
            style={{
              fontFamily: "Manrope",
            }}
          >
            More ventures will be introduced as SAP GROUPS
            continues to expand.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
