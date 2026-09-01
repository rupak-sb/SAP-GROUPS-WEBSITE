import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Play, TrendingUp } from "lucide-react";

// Your actual image inside /public
const HERO_BG = "/sap-groups-logo.png.png";

const STATS = [
  {
    value: 3,
    suffix: "",
    label: "Active Companies",
  },
  {
    value: 2,
    suffix: "",
    label: "Upcoming Ventures",
  },
  {
    value: 3,
    suffix: "",
    label: "Core Business Areas",
  },
  {
    value: 0,
    suffix: "",
    label: "Open Positions",
  },
];

function AnimatedCounter({
  to,
  suffix,
}: {
  to: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);

  const ref = useRef<HTMLSpanElement>(null);

  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          // If the number is 0, just show 0
          if (to === 0) {
            setCount(0);
            return;
          }

          let start = 0;

          const duration = 1200;

          const step = to / (duration / 16);

          const timer = setInterval(() => {
            start += step;

            if (start >= to) {
              setCount(to);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [to]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "20%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, 0]
  );

  // Scroll to About section
  const scrollToAbout = () => {
    document
      .querySelector("#about")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  // Scroll to Companies section
  const scrollToCompanies = () => {
    document
      .querySelector("#companies")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="
        relative
        min-h-screen
        flex
        flex-col
        overflow-hidden
        bg-[#071A2D]
      "
    >

      {/* =========================================================
          HERO BACKGROUND
      ========================================================= */}

      <motion.div
        style={{ y }}
        className="
          absolute
          inset-0
          overflow-hidden
        "
      >

        {/* Main Navy Background */}

        <div
          className="
            absolute
            inset-0
            bg-[#071A2D]
          "
        />

        {/* =====================================================
            SAP GROUPS LOGO WATERMARK
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            pointer-events-none
          "
        >
          <motion.img
            src={HERO_BG}
            alt=""
            aria-hidden="true"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 0.06,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="
              w-[min(75vw,900px)]
              h-[min(75vw,900px)]
              object-contain
            "
          />
        </div>

        {/* =====================================================
            DARK OVERLAYS
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#071A2D]/75
            via-[#071A2D]/45
            to-[#071A2D]/95
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#071A2D]/85
            via-transparent
            to-[#071A2D]/85
          "
        />

      </motion.div>


      {/* =========================================================
          ANIMATED GRID
      ========================================================= */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(212,175,55,0.35) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(212,175,55,0.35) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />


      {/* =========================================================
          GOLD PARTICLES
      ========================================================= */}

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="
            absolute
            w-1.5
            h-1.5
            rounded-full
            bg-[#D4AF37]
            pointer-events-none
          "
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.25, 0.75, 0.25],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}


      {/* =========================================================
          MAIN HERO CONTENT
      ========================================================= */}

      <motion.div
        style={{
          opacity,
        }}
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          flex-1
          text-center
          px-6
          pt-32
          pb-16
        "
      >

        {/* =====================================================
            EYEBROW
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            flex
            items-center
            gap-3
            mb-7
          "
        >

          <div
            className="
              h-px
              w-16
              bg-[#D4AF37]
            "
          />

          <span
            className="
              text-[#D4AF37]
              text-xs
              font-semibold
              tracking-[0.35em]
              uppercase
            "
            style={{
              fontFamily: "Manrope",
            }}
          >
            EST. 2012 · INDIA
          </span>

          <div
            className="
              h-px
              w-16
              bg-[#D4AF37]
            "
          />

        </motion.div>


        {/* =====================================================
            MAIN HEADLINE
        ===================================================== */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="
            text-white
            mb-6
            leading-[0.95]
          "
          style={{
            fontFamily: "Manrope",
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
          }}
        >

          {/* White Heading */}

          <span className="block">
            Building Today.
          </span>

          {/* Gold Heading */}

          <span
            className="
              block
              bg-gradient-to-r
              from-[#D4AF37]
              via-[#F0D98A]
              to-[#D4AF37]
              bg-clip-text
              text-transparent
            "
          >
            Growing Tomorrow.
          </span>

        </motion.h1>


        {/* =====================================================
            TAGLINE
        ===================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          className="
            text-[#D4AF37]/90
            mb-6
          "
          style={{
            fontFamily: "Manrope",
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            fontWeight: 400,
            letterSpacing: "0.08em",
          }}
        >
          Growing Businesses. Creating Long-Term Value.
        </motion.p>


        {/* =====================================================
            DESCRIPTION
        ===================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
          className="
            text-white/60
            max-w-2xl
            mx-auto
            mb-12
          "
          style={{
            fontFamily: "Inter",
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
            lineHeight: 1.7,
          }}
        >
          SAP GROUPS is a growing business group with
          established operations in textiles, construction,
          and real estate, while exploring new opportunities
          for future growth.
        </motion.p>


        {/* =====================================================
            CTA BUTTONS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.1,
          }}
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
            mb-20
          "
        >

          {/* Explore Companies */}

          <button
            onClick={scrollToCompanies}
            className="
              group
              flex
              items-center
              gap-2
              px-8
              py-4
              bg-[#D4AF37]
              hover:bg-[#F0D98A]
              text-[#0A2540]
              rounded-full
              transition-all
              duration-300
              shadow-2xl
              shadow-[#D4AF37]/30
              hover:shadow-[#D4AF37]/50
              hover:scale-105
            "
            style={{
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.05em",
            }}
          >

            <TrendingUp size={16} />

            Explore Companies

          </button>


          {/* Our Vision */}

          <button
            onClick={scrollToAbout}
            className="
              group
              flex
              items-center
              gap-2
              px-8
              py-4
              bg-white/10
              hover:bg-white/20
              text-white
              border
              border-white/30
              hover:border-[#D4AF37]/50
              rounded-full
              backdrop-blur-sm
              transition-all
              duration-300
              hover:scale-105
            "
            style={{
              fontFamily: "Manrope",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >

            <Play
              size={14}
              className="fill-white"
            />

            Our Vision

          </button>

        </motion.div>


        {/* =====================================================
            STATS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.3,
          }}
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-px
            bg-white/10
            rounded-2xl
            overflow-hidden
            backdrop-blur-md
            border
            border-white/10
            max-w-3xl
            w-full
            mx-auto
          "
        >

          {STATS.map((stat, i) => (
            <div
              key={i}
              className="
                bg-[#0A2540]/60
                px-6
                py-5
                text-center
              "
            >

              {/* Number */}

              <div
                className="
                  text-[#D4AF37]
                  mb-1
                "
                style={{
                  fontFamily: "Manrope",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                }}
              >

                <AnimatedCounter
                  to={stat.value}
                  suffix={stat.suffix}
                />

              </div>


              {/* Label */}

              <div
                className="
                  text-white/50
                  text-xs
                  tracking-wider
                  uppercase
                "
                style={{
                  fontFamily: "Inter",
                }}
              >
                {stat.label}
              </div>

            </div>
          ))}

        </motion.div>

      </motion.div>


      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.button
        onClick={scrollToAbout}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          z-10
          flex
          flex-col
          items-center
          gap-2
          text-white/40
          hover:text-[#D4AF37]
          transition-colors
          group
        "
      >

        <span
          className="
            text-[10px]
            tracking-[0.25em]
            uppercase
          "
          style={{
            fontFamily: "Inter",
          }}
        >
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={16} />
        </motion.div>

      </motion.button>

    </section>
  );
}