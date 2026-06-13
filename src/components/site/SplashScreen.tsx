import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/courses/Logo_img.png";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show splash for 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <div className="relative flex flex-col items-center">
            {/* Subtle red glow behind the logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 md:h-48 md:w-48 bg-[#E31E24]/10 rounded-full blur-3xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <img
                src={logoImg}
                alt="CADPOINT Logo"
                className="h-50 w-50 md:h-55 md:w-55 object-contain drop-shadow-sm"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-col items-center text-center relative z-10"
            >
              <h1 className="font-display text-2xl md:text-3xl font-extrabold text-charcoal tracking-wide" >
                <span className="text-brand-red font-light">CADPOINT</span> Thiruvarur
              </h1>
              <p className="mt-1 text-xs md:text-sm tracking-[0.2em] text-muted-foreground font-medium uppercase">
                Authorized Training Centre
              </p>
            </motion.div>

            {/* Loading Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 w-48 h-1 bg-gray-100 rounded-full overflow-hidden relative z-10"
            >
              <motion.div
                className="h-full bg-brand-red rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
