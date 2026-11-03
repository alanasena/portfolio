"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

// Adesivos que a pessoa pode arrastar pela faixa
const adesivos = [
  // x/y: posição no computador · xm/ym: posição no celular
  { t: "Python", c: "bg-limao", x: "6%", y: "18%", xm: "6%", ym: "6%", r: -8, f: "rounded-full" },
  { t: "IA que resolve problema real", c: "bg-laranja", x: "26%", y: "58%", xm: "14%", ym: "52%", r: 5, f: "rounded-[2rem_0.6rem_2rem_0.6rem]" },
  { t: "React + TypeScript", c: "bg-lavanda", x: "52%", y: "12%", xm: "38%", ym: "20%", r: -4, f: "rounded-full" },
  { t: "Gemini ✦ RAG ✦ agentes", c: "bg-leite", x: "68%", y: "60%", xm: "30%", ym: "74%", r: 7, f: "rounded-[0.6rem_2rem_0.6rem_2rem]" },
  { t: "C# / .NET", c: "bg-vinho text-leite", x: "84%", y: "22%", xm: "62%", ym: "38%", r: 10, f: "rounded-full" },
  { t: "movida a café", c: "bg-chiclete", x: "4%", y: "66%", xm: "4%", ym: "34%", r: 4, f: "rounded-full" },
];

export default function Adesivos() {
  const area = useRef<HTMLDivElement>(null);

  return (
    <section aria-label="Adesivos" className="relative flex min-h-[22rem] flex-col justify-between overflow-hidden bg-rosinha py-6 md:min-h-0">
      <div aria-hidden className="pointer-events-none select-none font-display text-[clamp(3rem,10vw,7rem)] leading-[1.05]">
        <p className="texto-contorno whitespace-nowrap">full stack e IA aplicada full stack e IA aplicada</p>
        <p className="texto-contorno -ml-40 whitespace-nowrap">código com cor e com cuidado código com cor</p>
      </div>

      <div ref={area} className="absolute inset-0">
        {adesivos.map((a) => (
          <motion.div
            key={a.t}
            drag
            data-arrastar
            dragConstraints={area}
            dragElastic={0.15}
            whileDrag={{ scale: 1.12, rotate: 0, zIndex: 10 }}
            whileHover={{ scale: 1.06 }}
            initial={{ rotate: a.r }}
            style={{ ["--x" as string]: a.x, ["--y" as string]: a.y, ["--xm" as string]: a.xm, ["--ym" as string]: a.ym }}
            className={`absolute left-(--xm) top-(--ym) md:left-(--x) md:top-(--y) whitespace-nowrap cursor-grab touch-none border-2 border-vinho px-4 py-2 text-sm font-bold shadow-[3px_3px_0_var(--color-vinho)] active:cursor-grabbing sm:text-base ${a.c} ${a.f}`}
          >
            {a.t}
          </motion.div>
        ))}
      </div>
      <p className="relative mt-2 text-center text-sm font-medium opacity-70">pode arrastar os adesivos</p>
    </section>
  );
}
