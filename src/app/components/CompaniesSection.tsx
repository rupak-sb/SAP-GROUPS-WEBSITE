import { motion } from "motion/react";
import {
  Building2,
  Home,
  Shirt,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const COMPANIES = [
  {
    id: "construction",
    name: "SAP Construction",
    category: "CONSTRUCTION",
    tagline: "Building with Strength. Creating with Purpose.",
    icon: Building2,

    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=700&fit=crop&auto=format",

    description:
      "SAP Construction is one of the core businesses of SAP GROUPS, focused on delivering quality construction solutions with a strong emphasis on reliability, workmanship, and long-term value.",

    services: [
      "Construction & Infrastructure",
      "Commercial Projects",
      "Residential Construction",
      "Project Development",
      "Civil Engineering",
    ],

    status: "Active",

    color: "#0A2540",

    route: "/companies/construction",
  },

  {
    id: "realestate",
    name: "SAP Real Estate",
    category: "REAL ESTATE",
    tagline: "Creating Spaces for Better Living.",
    icon: Home,

    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=700&fit=crop&auto=format",

    description:
      "SAP Real Estate focuses on identifying, developing, and managing real estate opportunities with a long-term approach to creating valuable spaces and sustainable property assets.",

    services: [
      "Residential Properties",
      "Commercial Properties",
      "Land Development",
      "Property Investment",
      "Real Estate Development",
    ],

    status: "Active",

    color: "#0E7490",

    route: "/companies/real-estate",
  },

  {
    id: "textiles",
    name: "SAP Textiles",
    category: "TEXTILES",
    tagline: "Quality Woven into Every Thread.",
    icon: Shirt,

    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=700&fit=crop&auto=format",

    description:
      "SAP Textiles is a core business of SAP GROUPS focused on textile manufacturing and supplying quality fabric solutions while building on experience, consistency, and operational excellence.",

    services: [
      "Textile Manufacturing",
      "Fabric Production",
      "Quality Textile Solutions",
      "Custom Requirements",
      "Domestic Market Supply",
    ],

    status: "Active",

    color: "#D4AF37",

    route: "/companies/textiles",
  },
];

export function CompaniesSection() {

 const exploreCompany = (route: string) => {
  window.location.href = route;
};

  return (
    <section
      id="companies"
      className="
        py-32
        bg-[#F8FAFC]
        dark:bg-[#0A1628]
      "
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
          className="text-center mb-20"
        >

          <span
            className="
              inline-flex
              items-center
              gap-2
              text-[#D4AF37]
              text-xs
              font-semibold
              tracking-[0.3em]
              uppercase
              mb-4
            "
            style={{
              fontFamily: "Manrope",
            }}
          >

            <span className="w-8 h-px bg-[#D4AF37]" />

            Our Companies

            <span className="w-8 h-px bg-[#D4AF37]" />

          </span>


          <h2
            className="
              text-[#0A2540]
              dark:text-white
              mb-5
            "
            style={{
              fontFamily: "Manrope",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >

            Three Businesses.

            <br />

            <span className="text-[#0E7490]">
              One Growing Group.
            </span>

          </h2>


          <p
            className="
              text-[#4A6580]
              dark:text-white/50
              max-w-2xl
              mx-auto
            "
            style={{
              fontFamily: "Inter",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            SAP GROUPS operates across three core business
            areas, building strong foundations today while
            creating opportunities for tomorrow.
          </p>

        </motion.div>


        {/* =====================================================
            COMPANY CARDS
        ===================================================== */}

        <div className="space-y-8">

          {COMPANIES.map((company, i) => {

            const Icon = company.icon;

            return (
              <motion.div
                key={company.id}

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
                  margin: "-80px",
                }}

                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
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
                  hover:shadow-2xl
                  hover:shadow-[#0A2540]/10
                  dark:hover:shadow-[#D4AF37]/5
                  transition-all
                  duration-500
                "
              >

                <div
                  className={`
                    flex
                    flex-col
                    ${
                      i % 2 === 0
                        ? "lg:flex-row"
                        : "lg:flex-row-reverse"
                    }
                  `}
                >

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div
                    className="
                      lg:w-2/5
                      relative
                      overflow-hidden
                    "
                    style={{
                      minHeight: "340px",
                    }}
                  >

                    <img
                      src={company.image}
                      alt={`${company.name} `}
                      className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-105
                        transition-transform
                        duration-700
                      "
                    />

                    {/* Image Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-[#0A2540]/60
                        via-[#0A2540]/20
                        to-transparent
                      "
                    />


                    {/* =================================================
                        CATEGORY
                    ================================================= */}

                    <div
                      className="
                        absolute
                        top-5
                        left-5
                        px-4
                        py-2
                        bg-[#0A2540]/85
                        backdrop-blur-md
                        rounded-full
                        border
                        border-white/10
                      "
                    >

                      <span
                        className="
                          text-[#D4AF37]
                          text-xs
                          font-bold
                          tracking-[0.15em]
                        "
                        style={{
                          fontFamily: "Manrope",
                        }}
                      >
                        {company.category}
                      </span>

                    </div>


                    {/* =================================================
                        ACTIVE BADGE
                    ================================================= */}

                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        flex
                        items-center
                        gap-2
                        px-3
                        py-1.5
                        bg-green-500/90
                        backdrop-blur-sm
                        rounded-full
                      "
                    >

                      <div
                        className="
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-white
                          animate-pulse
                        "
                      />

                      <span
                        className="
                          text-white
                          text-xs
                          font-semibold
                        "
                        style={{
                          fontFamily: "Manrope",
                        }}
                      >
                        {company.status}
                      </span>

                    </div>

                  </div>


                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div
                    className="
                      lg:w-3/5
                      p-8
                      lg:p-10
                      flex
                      flex-col
                      justify-between
                    "
                  >

                    <div>

                      {/* Company Heading */}

                      <div
                        className="
                          flex
                          items-center
                          gap-4
                          mb-5
                        "
                      >

                        <div
                          className="
                            w-12
                            h-12
                            rounded-xl
                            bg-[#0A2540]
                            dark:bg-[#D4AF37]/10
                            flex
                            items-center
                            justify-center
                            flex-shrink-0
                          "
                        >

                          <Icon
                            size={22}
                            className="text-[#D4AF37]"
                          />

                        </div>


                        <div>

                          <h3
                            className="
                              text-[#0A2540]
                              dark:text-white
                            "
                            style={{
                              fontFamily: "Manrope",
                              fontSize: "1.5rem",
                              fontWeight: 800,
                            }}
                          >
                            {company.name}
                          </h3>

                          <p
                            className="
                              text-[#0E7490]
                              dark:text-[#D4AF37]/70
                              text-xs
                              font-medium
                              tracking-wider
                              mt-1
                            "
                            style={{
                              fontFamily: "Manrope",
                            }}
                          >
                            {company.tagline}
                          </p>

                        </div>

                      </div>


                      {/* Description */}

                      <p
                        className="
                          text-[#4A6580]
                          dark:text-white/50
                          mb-7
                          leading-relaxed
                        "
                        style={{
                          fontFamily: "Inter",
                          lineHeight: 1.75,
                        }}
                      >
                        {company.description}
                      </p>


                      {/* =================================================
                          SERVICES
                      ================================================= */}

                      <div
                        className="
                          grid
                          grid-cols-1
                          sm:grid-cols-2
                          gap-3
                          mb-8
                        "
                      >

                        {company.services.map((service) => (

                          <div
                            key={service}
                            className="
                              flex
                              items-start
                              gap-2
                              text-sm
                            "
                          >

                            <CheckCircle2
                              size={15}
                              className="
                                text-[#D4AF37]
                                flex-shrink-0
                                mt-0.5
                              "
                            />

                            <span
                              className="
                                text-[#0A2540]
                                dark:text-white/60
                              "
                              style={{
                                fontFamily: "Inter",
                              }}
                            >
                              {service}
                            </span>

                          </div>

                        ))}

                      </div>

                    </div>


                    {/* =================================================
                        BOTTOM / EXPLORE
                    ================================================= */}

                    <div
                      className="
                        flex
                        items-center
                        justify-end
                        pt-5
                        border-t
                        border-[#0A2540]/8
                        dark:border-[#D4AF37]/10
                      "
                    >

                      <button
                        onClick={() =>
                          exploreCompany(company.route)
                        }
                        className="
                          group/btn
                          flex
                          items-center
                          gap-2
                          px-6
                          py-3
                          bg-[#0A2540]
                          dark:bg-[#D4AF37]
                          text-white
                          dark:text-[#0A2540]
                          rounded-full
                          text-sm
                          font-semibold
                          hover:gap-3
                          hover:shadow-lg
                          transition-all
                          duration-300
                        "
                        style={{
                          fontFamily: "Manrope",
                        }}
                      >

                        Explore Company

                        <ArrowRight
                          size={15}
                          className="
                            transition-transform
                            duration-300
                          "
                        />

                      </button>

                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>


        {/* =====================================================
            BOTTOM NOTE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            mt-14
            text-center
          "
        >

          <p
            className="
              text-[#4A6580]
              dark:text-white/40
              text-sm
            "
            style={{
              fontFamily: "Inter",
            }}
          >
            Our businesses form the foundation of SAP GROUPS
            today, with new ventures being developed for the future.
          </p>

        </motion.div>

      </div>
    </section>
  );
}