import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#0A2540" }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
              backgroundSize: "60px 60px"
            }} />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Logo diamond */}
            <div className="relative w-20 h-20 flex items-center justify-center mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-[#D4AF37]/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 border border-[#D4AF37]/20 rounded-full"
              />
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#D4AF37] rotate-45 rounded-sm" />
                <span className="relative text-[#0A2540] font-black text-xl z-10" style={{ fontFamily: 'Manrope' }}>S</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-white font-black tracking-[0.3em] text-2xl mb-1" style={{ fontFamily: 'Manrope' }}>
                SAP <span className="text-[#D4AF37]">GROUPS</span>
              </div>
              <div className="text-white/40 text-xs tracking-[0.35em] uppercase" style={{ fontFamily: 'Inter' }}>
                Building Tomorrow. Transforming Industries.
              </div>
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-0.5 bg-white/10 rounded-full mt-10 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-[#D4AF37] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
