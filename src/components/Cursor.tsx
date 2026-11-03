"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { caminhoFlor } from "./Formas";

// Florzinha que segue o mouse (só no computador e só se a pessoa não desativou animações)
export default function Cursor() {
  const reduzir = useReducedMotion();
  const [ativo, setAtivo] = useState(false);
  const [emLink, setEmLink] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (reduzir || !window.matchMedia("(pointer: fine)").matches) return;
    setAtivo(true);
    const mover = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setEmLink(!!(e.target as HTMLElement).closest?.("a, button, [data-arrastar]"));
    };
    window.addEventListener("pointermove", mover);
    return () => window.removeEventListener("pointermove", mover);
  }, [reduzir, x, y]);

  if (!ativo) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] -ml-4 -mt-4 h-8 w-8"
      style={{ x: sx, y: sy }}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        animate={{ scale: emLink ? 1.8 : 1, rotate: emLink ? 90 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <path d={caminhoFlor(8)} fill="var(--color-chiclete)" stroke="var(--color-vinho)" strokeWidth="5" opacity="0.85" />
        <circle cx="50" cy="50" r="12" fill="var(--color-limao)" />
      </motion.svg>
    </motion.div>
  );
}
