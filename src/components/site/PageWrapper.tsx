import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import { useLocation } from "@tanstack/react-router";

export function PageWrapper({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const location = useLocation();

  useEffect(() => {
    // Re-initialize AOS on route change
    AOS.refresh();
    
    // Sometimes a hard init is needed on route change
    setTimeout(() => {
      AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });
    }, 100);
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`min-h-screen pt-20 pb-12 flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  );
}
