"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projetos } from "@/data/conteudo";
import Secao from "./Secao";

const fundos = ["bg-rosa", "bg-azul", "bg-laranja", "bg-verde", "bg-roxo"];

export default function Projetos() {
  return (
    <Secao id="projetos" titulo="Projetos" cor="amarelo">
      <ul className="grid gap-6 sm:grid-cols-2">
        {projetos.map((p, i) => (
          <motion.li
            key={p.nome}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            whileHover={p.emBreve ? undefined : { y: -6, rotate: i % 2 ? 0.6 : -0.6 }}
            className={`flex flex-col overflow-hidden rounded-3xl border-2 border-tinta bg-white shadow-[5px_5px_0_var(--color-tinta)] ${
              p.emBreve ? "border-dashed opacity-80" : ""
            }`}
          >
            {/* Espaço para o print do projeto */}
            <div className={`relative flex aspect-video items-center justify-center ${fundos[i % fundos.length]}`}>
              {p.imagem ? (
                <Image src={p.imagem} alt={`Print do projeto ${p.nome}`} fill className="object-cover" sizes="(min-width: 640px) 50vw, 100vw" />
              ) : (
                <span aria-hidden className="text-6xl">
                  {p.emoji}
                </span>
              )}
              {p.emBreve && (
                <span className="absolute right-3 top-3 rounded-full border-2 border-tinta bg-amarelo px-3 py-1 text-xs font-bold">
                  Em breve
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-titulo text-2xl font-extrabold">{p.nome}</h3>
              <p className="mt-2 flex-1">{p.descricao}</p>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias">
                {p.tecnologias.map((t) => (
                  <li key={t} className="rounded-full bg-creme px-3 py-1 text-xs font-bold">
                    {t}
                  </li>
                ))}
              </ul>

              {(p.site || p.github) && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {p.site && (
                    <a
                      href={p.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border-2 border-tinta bg-verde px-4 py-1.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
                    >
                      Ver site
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border-2 border-tinta px-4 py-1.5 text-sm font-bold transition-transform hover:-translate-y-0.5 hover:bg-amarelo"
                    >
                      Ver código
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </Secao>
  );
}
