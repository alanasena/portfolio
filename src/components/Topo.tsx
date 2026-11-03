"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import Letras from "./Letras";
import { pessoa } from "@/data/conteudo";
import { Brilho, caminhoFlor, Flor, Selo } from "./Formas";

const mascaraFlor = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='${caminhoFlor(9)}'/></svg>`,
)}")`;

const botoes = [
  { label: "GitHub", href: pessoa.github, cor: "bg-vinho text-leite" },
  { label: "LinkedIn", href: pessoa.linkedin, cor: "bg-lavanda" },
  { label: "E-mail", href: `mailto:${pessoa.email}`, cor: "bg-limao" },
  { label: "Baixar currículo", href: pessoa.curriculo, cor: "bg-chiclete", download: true },
];

const entrar = (atraso: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: atraso, type: "spring" as const, stiffness: 160, damping: 18 },
});

export default function Topo() {
  // Posição do mouse no topo, de -1 a 1, para dar profundidade às formas
  const reduzir = useReducedMotion();
  const mx = useSpring(useMotionValue(0), { stiffness: 80, damping: 16 });
  const my = useSpring(useMotionValue(0), { stiffness: 80, damping: 16 });
  const girarX = useTransform(my, [-1, 1], [10, -10]);
  const girarY = useTransform(mx, [-1, 1], [-12, 12]);
  const ondasX = useTransform(mx, [-1, 1], [-14, 14]);
  const ondasY = useTransform(my, [-1, 1], [-14, 14]);
  const longeX = useTransform(mx, [-1, 1], [36, -36]);
  const longeY = useTransform(my, [-1, 1], [30, -30]);
  const pertoX = useTransform(mx, [-1, 1], [-24, 24]);
  const pertoY = useTransform(my, [-1, 1], [-20, 20]);

  const mover = (e: React.PointerEvent) => {
    if (reduzir || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  const soltar = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section id="topo" className="relative overflow-hidden" onPointerMove={mover} onPointerLeave={soltar}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 md:grid-cols-[1.1fr_1fr] md:pt-16">
        <div className="order-2 text-center md:order-1 md:text-left">
          <motion.p {...entrar(0.3)} className="text-xl font-semibold">
            Oi, eu sou a
          </motion.p>
          <motion.h1
            {...entrar(0.4)}
            aria-label="Alana Oliveira de Sena"
            className="font-display mt-2 text-[clamp(3rem,9vw,6.5rem)] leading-[0.95] text-vinho [text-shadow:5px_5px_0_var(--color-chiclete)]"
          >
            <Letras texto="Alana Oliveira de Sena" />
          </motion.h1>
          <motion.p {...entrar(0.5)} className="mt-6 text-xl font-medium sm:text-2xl">
            {pessoa.titulo}
          </motion.p>

          <motion.ul {...entrar(0.6)} className="mt-9 flex flex-wrap justify-center gap-3 md:justify-start">
            {botoes.map((b) => (
              <li key={b.label}>
                <a
                  href={b.href}
                  {...(b.download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                  className={`inline-block rounded-full border-2 border-vinho px-5 py-2.5 font-bold shadow-[0_4px_0_var(--color-vinho)] transition-all hover:-translate-y-1 hover:shadow-[0_6px_0_var(--color-vinho)] active:translate-y-0.5 active:shadow-none ${b.cor}`}
                >
                  {b.label}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Foto dentro de uma flor, com ondas atrás */}
        <motion.div
          className="relative order-1 mx-auto w-full max-w-[26rem] md:order-2"
          style={{ rotateX: girarX, rotateY: girarY, transformPerspective: 900 }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
            style={{ x: ondasX, y: ondasY }}
            className="ondas aspect-square rounded-full"
            aria-hidden
          />
          <motion.div
            initial={{ scale: 0.4, rotate: -40, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 110, damping: 13 }}
            className="absolute inset-[9%] bg-rosinha"
            style={{ maskImage: mascaraFlor, WebkitMaskImage: mascaraFlor, maskSize: "100%", WebkitMaskSize: "100%" }}
          >
            <Image
              src={pessoa.foto}
              alt="Foto de Alana Oliveira de Sena"
              fill
              priority
              sizes="(min-width: 768px) 360px, 80vw"
              className="object-cover object-top"
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: -12 }}
            transition={{ delay: 0.75, type: "spring", stiffness: 200, damping: 12 }}
            style={{ x: pertoX, y: pertoY }}
            className="absolute -left-2 bottom-2 sm:-left-6"
          >
            <Selo className="h-28 w-28 font-display text-base leading-tight sm:h-32 sm:w-32 sm:text-lg">
              aberta a vagas!
            </Selo>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, type: "spring" }}
            style={{ x: longeX, y: longeY }}
            whileHover={{ rotate: 180, scale: 1.3 }}
            className="absolute -right-1 top-4"
          >
            <Brilho className="h-14 w-14 text-limao drop-shadow-[2px_2px_0_var(--color-vinho)]" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            style={{ x: longeX, y: pertoY }}
            whileHover={{ rotate: -120, scale: 1.3 }}
            className="absolute right-6 bottom-0"
          >
            <Flor className="h-12 w-12 text-lavanda" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
