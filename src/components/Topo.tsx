"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { pessoa } from "@/data/conteudo";

const formas = [
  { cor: "bg-amarelo", tamanho: "h-16 w-16", pos: "left-[6%] top-[12%]", forma: "rounded-full" },
  { cor: "bg-verde", tamanho: "h-10 w-10", pos: "right-[10%] top-[18%]", forma: "rounded-lg rotate-12" },
  { cor: "bg-roxo", tamanho: "h-12 w-12", pos: "left-[14%] bottom-[14%]", forma: "rounded-lg -rotate-12" },
  { cor: "bg-azul", tamanho: "h-8 w-8", pos: "right-[18%] bottom-[20%]", forma: "rounded-full" },
];

const botoes = [
  { label: "GitHub", href: pessoa.github, cor: "bg-tinta text-creme" },
  { label: "LinkedIn", href: pessoa.linkedin, cor: "bg-azul" },
  { label: "E-mail", href: `mailto:${pessoa.email}`, cor: "bg-verde" },
  { label: "Baixar currículo", href: pessoa.curriculo, cor: "bg-amarelo", download: true },
];

export default function Topo() {
  return (
    <section id="topo" className="relative overflow-hidden">
      {formas.map((f, i) => (
        <motion.span
          key={i}
          aria-hidden
          className={`absolute hidden sm:block ${f.cor} ${f.tamanho} ${f.pos} ${f.forma} opacity-80`}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-5 py-16 text-center sm:py-24 md:flex-row md:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative shrink-0"
        >
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-rosa" />
          <Image
            src={pessoa.foto}
            alt="Foto de Alana Oliveira de Sena"
            width={240}
            height={240}
            priority
            unoptimized={pessoa.foto.endsWith(".svg")}
            className="relative h-48 w-48 rounded-[2rem] border-4 border-tinta object-cover sm:h-60 sm:w-60"
          />
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-2 text-lg font-medium"
          >
            Oi, eu sou a <span aria-hidden>👋</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="font-titulo text-4xl font-extrabold leading-tight sm:text-6xl"
          >
            {pessoa.nome}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-4 text-lg sm:text-xl"
          >
            {pessoa.titulo}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
          >
            {botoes.map((b) => (
              <li key={b.label}>
                <a
                  href={b.href}
                  {...(b.download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                  className={`inline-block rounded-full border-2 border-tinta px-5 py-2.5 font-bold shadow-[3px_3px_0_var(--color-tinta)] transition-transform hover:-translate-y-0.5 active:translate-y-0 ${b.cor}`}
                >
                  {b.label}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
