import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.4,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-violet via-azure to-rose"
    />
  );
}

export function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const hoveringRef = useRef(false);
  const pointerRef = useRef({ x: -100, y: -100 });

  const rawDotX = useMotionValue(-100);
  const rawDotY = useMotionValue(-100);
  const rawRingX = useMotionValue(-100);
  const rawRingY = useMotionValue(-100);

  const dotX = useSpring(rawDotX, { stiffness: 800, damping: 35, mass: 0.2 });
  const dotY = useSpring(rawDotY, { stiffness: 800, damping: 35, mass: 0.2 });
  const ringX = useSpring(rawRingX, { stiffness: 250, damping: 22 });
  const ringY = useSpring(rawRingY, { stiffness: 250, damping: 22 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const move = (e) => {
      pointerRef.current = { x: e.clientX, y: e.clientY };
      rawDotX.set(e.clientX - 4);
      rawDotY.set(e.clientY - 4);
      const offset = hoveringRef.current ? 24 : 16;
      rawRingX.set(e.clientX - offset);
      rawRingY.set(e.clientY - offset);
    };
    const over = (e) => {
      const t = e.target;
      const isHovering = !!t.closest("a, button, [data-cursor='hover']");
      hoveringRef.current = isHovering;
      setHovering(isHovering);
      const offset = isHovering ? 24 : 16;
      rawRingX.set(pointerRef.current.x - offset);
      rawRingY.set(pointerRef.current.y - offset);
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [prefersReducedMotion, rawDotX, rawDotY, rawRingX, rawRingY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-foreground mix-blend-difference"
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] rounded-full border border-violet/60"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          opacity: hovering ? 1 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
      />
    </>
  );
}
