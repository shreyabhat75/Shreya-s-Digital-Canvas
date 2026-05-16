import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function Loader() {
  const [show, setShow] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => setShow(false), 500);
    return () => clearTimeout(t);
  }, [prefersReducedMotion]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-4"
          >
            <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-violet to-azure text-2xl font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
              S
              <span className="absolute inset-0 rounded-2xl animate-shine" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Loading experience
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
