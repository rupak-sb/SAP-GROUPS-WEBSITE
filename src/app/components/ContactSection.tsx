import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2, Clock } from "lucide-react";

const OFFICES = [
  {
    city: "Coimbatore",
    type: "Corporate Headquarters",
    address: "29,SKK Nagar Sulur, Coimbatore — 641 402.",
    phone: "+91 9842258215",
    email: "sulur123sap@gmail.com",
  },
  {
    city: "sulur",
    type: "Operational office",
    address: "Sulur old bus stand,shop No: 21 ,sulur commercial complex,sulur,coimbatore-641402",
    phone: "+7708288215",
    email: "rupakprashanthan@gmail.com / getworker0@gmail.com",
  },
];

const INQUIRY_TYPES = [
  "Business Partnership",
  "Investment & Investor Relations",
  "Media & Press Enquiry",
  "Career & HR",
  "Government / Public Sector",
  "Other",
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Formspree endpoint — replace YOUR_FORM_ID with the ID from your Formspree
  // form (create a free form at https://formspree.io pointing to
  // rupakprashanthan@gmail.com, then paste its ID here).
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          inquiryType: form.type,
          message: form.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Message failed to send. Please try again or email us directly.");
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setForm({ name: "", company: "", email: "", phone: "", type: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#F8FAFC] dark:bg-[#0A1628] overflow-hidden">
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
            Get In Touch
            <span className="w-8 h-px bg-[#D4AF37]" />
          </span>
          <h2 className="text-[#0A2540] dark:text-white mb-4"
            style={{ fontFamily: 'Manrope', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Let's Build Something<br />
            <span className="text-[#0E7490]">Extraordinary Together</span>
          </h2>
          <p className="text-[#4A6580] dark:text-white/50 max-w-xl mx-auto" style={{ fontFamily: 'Inter', lineHeight: 1.7 }}>
            Whether you're a potential investor, business partner, government body, or talented professional — we welcome every conversation that could shape the future.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white dark:bg-[#0A2540]/50 rounded-2xl p-8 border border-[#0A2540]/8 dark:border-[#D4AF37]/10 shadow-lg">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-[#0A2540] dark:text-white font-bold text-xl mb-2" style={{ fontFamily: 'Manrope' }}>
                    Message Received!
                  </h3>
                  <p className="text-[#4A6580] dark:text-white/50" style={{ fontFamily: 'Inter' }}>
                    Thank you for reaching out. Our team will respond within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#0A2540] dark:text-white/70 text-sm font-semibold mb-2" style={{ fontFamily: 'Manrope' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0A1628] border border-[#0A2540]/10 dark:border-[#D4AF37]/10 text-[#0A2540] dark:text-white placeholder:text-[#4A6580]/50 focus:outline-none focus:border-[#0E7490] transition-colors"
                        style={{ fontFamily: 'Inter' }}
                      />
                    </div>
                    <div>
                      <label className="block text-[#0A2540] dark:text-white/70 text-sm font-semibold mb-2" style={{ fontFamily: 'Manrope' }}>
                        Company / Organisation
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                        placeholder="Your company name"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0A1628] border border-[#0A2540]/10 dark:border-[#D4AF37]/10 text-[#0A2540] dark:text-white placeholder:text-[#4A6580]/50 focus:outline-none focus:border-[#0E7490] transition-colors"
                        style={{ fontFamily: 'Inter' }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#0A2540] dark:text-white/70 text-sm font-semibold mb-2" style={{ fontFamily: 'Manrope' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0A1628] border border-[#0A2540]/10 dark:border-[#D4AF37]/10 text-[#0A2540] dark:text-white placeholder:text-[#4A6580]/50 focus:outline-none focus:border-[#0E7490] transition-colors"
                        style={{ fontFamily: 'Inter' }}
                      />
                    </div>
                    <div>
                      <label className="block text-[#0A2540] dark:text-white/70 text-sm font-semibold mb-2" style={{ fontFamily: 'Manrope' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0A1628] border border-[#0A2540]/10 dark:border-[#D4AF37]/10 text-[#0A2540] dark:text-white placeholder:text-[#4A6580]/50 focus:outline-none focus:border-[#0E7490] transition-colors"
                        style={{ fontFamily: 'Inter' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#0A2540] dark:text-white/70 text-sm font-semibold mb-2" style={{ fontFamily: 'Manrope' }}>
                      Nature of Inquiry *
                    </label>
                    <select
                      required
                      value={form.type}
                      onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0A1628] border border-[#0A2540]/10 dark:border-[#D4AF37]/10 text-[#0A2540] dark:text-white focus:outline-none focus:border-[#0E7490] transition-colors"
                      style={{ fontFamily: 'Inter' }}
                    >
                      <option value="" disabled>Select inquiry type</option>
                      {INQUIRY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#0A2540] dark:text-white/70 text-sm font-semibold mb-2" style={{ fontFamily: 'Manrope' }}>
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell us about your interest, project, or question..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0A1628] border border-[#0A2540]/10 dark:border-[#D4AF37]/10 text-[#0A2540] dark:text-white placeholder:text-[#4A6580]/50 focus:outline-none focus:border-[#0E7490] transition-colors resize-none"
                      style={{ fontFamily: 'Inter' }}
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm" style={{ fontFamily: 'Inter' }}>{error}</p>}
                  <button type="submit" disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#0A2540] dark:bg-[#D4AF37] text-white dark:text-[#0A2540] rounded-xl font-bold hover:bg-[#0E7490] dark:hover:bg-[#F0D98A] transition-all duration-300 hover:shadow-lg disabled:opacity-60"
                    style={{ fontFamily: 'Manrope' }}>
                    <Send size={16} /> {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Offices */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            {OFFICES.map((office, i) => (
              <div key={office.city}
                className="bg-white dark:bg-[#0A2540]/50 rounded-2xl p-6 border border-[#0A2540]/8 dark:border-[#D4AF37]/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0A2540] flex items-center justify-center">
                    <Building2 size={18} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-[#0A2540] dark:text-white font-bold" style={{ fontFamily: 'Manrope' }}>{office.city}</h4>
                    <p className="text-[#0E7490] dark:text-[#D4AF37]/60 text-xs" style={{ fontFamily: 'Inter' }}>{office.type}</p>
                  </div>
                </div>
                <div className="space-y-2 pl-13">
                  <div className="flex items-start gap-2 text-[#4A6580] dark:text-white/40 text-sm" style={{ fontFamily: 'Inter' }}>
                    <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#D4AF37]" />
                    {office.address}
                  </div>
                  <div className="flex items-center gap-2 text-[#4A6580] dark:text-white/40 text-sm" style={{ fontFamily: 'Inter' }}>
                    <Phone size={14} className="text-[#D4AF37]" />
                    {office.phone}
                  </div>
                  <div className="flex items-center gap-2 text-[#4A6580] dark:text-white/40 text-sm" style={{ fontFamily: 'Inter' }}>
                    <Mail size={14} className="text-[#D4AF37]" />
                    {office.email}
                  </div>
                </div>
              </div>
            ))}

            {/* Business Hours */}
            <div className="bg-[#0A2540] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-[#D4AF37]" />
                <h4 className="text-white font-bold" style={{ fontFamily: 'Manrope' }}>Business Hours</h4>
              </div>
              <div className="space-y-2 text-sm" style={{ fontFamily: 'Inter' }}>
                <div className="flex justify-between text-white/60">
                  <span>Monday – Friday</span>
                  <span className="text-[#D4AF37]">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Saturday</span>
                  <span className="text-[#D4AF37]">10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Sunday</span>
                  <span className="text-white/30">Closed</span>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <p className="text-white/30 text-xs">For urgent matters, email corporate@sapgroups.in</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
