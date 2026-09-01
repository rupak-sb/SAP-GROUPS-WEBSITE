import { ArrowLeft, Shirt } from "lucide-react";

export default function Textiles() {
  return (
    <main className="min-h-screen bg-[#071A2D] text-white">

      <header className="px-6 lg:px-12 py-6 border-b border-white/10">
        <button
          onClick={() => (window.location.href = "/")}
          className="flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors"
        >
          <ArrowLeft size={18} />
          Back to SAP GROUPS
        </button>
      </header>

      <section className="min-h-[70vh] flex items-center">

        <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full">

          <div className="max-w-3xl">

            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-8">
              <Shirt
                size={28}
                className="text-[#D4AF37]"
              />
            </div>

            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-5">
              SAP GROUPS
            </p>

            <h1
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
              style={{ fontFamily: "Manrope" }}
            >
              SAP
              <span className="text-[#D4AF37]">
                {" "}Textiles
              </span>
            </h1>

            <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
              Quality woven into every thread.
              SAP Textiles is one of the core businesses
              of SAP GROUPS, focused on textile manufacturing
              and quality fabric solutions.
            </p>

          </div>

        </div>

      </section>

      <section className="py-24 bg-[#0A2540]">

        <div className="max-w-6xl mx-auto px-6 lg:px-12">

          <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs mb-4">
            About the Business
          </p>

          <h2
            className="text-3xl md:text-5xl font-bold mb-8"
            style={{ fontFamily: "Manrope" }}
          >
            Experience woven into quality
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
            SAP Textiles focuses on textile manufacturing
            and supplying quality fabric solutions while
            building on consistency, operational discipline,
            and long-term relationships.
          </p>

        </div>

      </section>

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 lg:px-12">

          <h2
            className="text-3xl font-bold mb-12"
            style={{ fontFamily: "Manrope" }}
          >
            Areas of Focus
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {[
              "Textile Manufacturing",
              "Fabric Production",
              "Quality Textile Solutions",
              "Custom Requirements",
              "Domestic Market Supply",
              "Textile Development",
            ].map((item) => (
              <div
                key={item}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/40 transition-colors"
              >
                <h3
                  className="font-semibold text-lg"
                  style={{ fontFamily: "Manrope" }}
                >
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}