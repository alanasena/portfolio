"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projetos } from "@/data/conteudo";
import Secao from "./Secao";

// Cada projeto ganha um padrão e uma cor de cartão
const estilos = [
  { cartao: "bg-laranja", capa: "listras", vars: { "--la": "#ffc6e2", "--lb": "#f25ca8" } },
  { cartao: "bg-lavanda", capa: "xadrez", vars: { "--xa": "#6b0f1a", "--xb": "#e3f06b", "--xt": "44px" } },
  { cartao: "bg-chiclete", capa: "bolinhas", vars: { "--ba": "#e3f06b", "--bb": "#ff5a1f" } },
  { cartao: "bg-rosinha", capa: "listras", vars: { "--la": "#ff5a1f", "--lb": "#fff3dc" } },
  { cartao: "bg-leite", capa: "bolinhas", vars: { "--ba": "#cdb8ff", "--bb": "#fff3dc" } },
];

const formasCapa = [
  "rounded-[48%_52%_40%_60%/55%_45%_55%_45%]",
  "rounded-[2.5rem_0.75rem_2.5rem_0.75rem]",
  "rounded-[60%_40%_55%_45%/45%_55%_45%_55%]",
  "rounded-[0.75rem_2.5rem_0.75rem_2.5rem]",
  "rounded-[3rem]",
];

export default function Projetos() {
  return (
    <Secao id="projetos" titulo="Projetos" sombra="laranja">
      <ul className="grid gap-8 md:grid-cols-2">
        {projetos.map((p, i) => {
          const e = estilos[i % estilos.length];
          return (
            <motion.li
              key={p.nome}
              whileHover={p.emBreve ? undefined : { y: -8, rotate: i % 2 ? 1 : -1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className={`group flex flex-col rounded-[2rem] border-2 border-vinho p-4 shadow-[6px_6px_0_var(--color-vinho)] ${e.cartao} ${
                p.emBreve ? "border-dashed shadow-none" : ""
              }`}
            >
              <div
                className={`relative grid aspect-[16/10] place-items-center overflow-hidden border-2 border-vinho ${e.capa} ${formasCapa[i % formasCapa.length]}`}
                style={e.vars as React.CSSProperties}
              >
                {p.imagem ? (
                  <Image src={p.imagem} alt={`Print do projeto ${p.nome}`} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                ) : (
                  <span
                    aria-hidden
                    className="font-display rounded-full border-2 border-vinho bg-leite px-5 py-2 text-center text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                  >
                    {p.nome}
                  </span>
                )}
                {p.emBreve && (
                  <span className="absolute right-4 top-4 rotate-6 rounded-full border-2 border-vinho bg-limao px-3 py-1 text-sm font-bold">
                    em breve
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                <h3 className="font-display text-3xl">{p.nome}</h3>
                <p className="mt-2 flex-1 leading-relaxed">{p.descricao}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tecnologias">
                  {p.tecnologias.map((t) => (
                    <li key={t} className="rounded-full border-2 border-vinho/80 bg-leite/70 px-2.5 py-0.5 text-sm font-semibold">
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
                        className="rounded-full border-2 border-vinho bg-limao px-4 py-1.5 font-bold transition-transform hover:-translate-y-0.5"
                      >
                        Ver site
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border-2 border-vinho bg-vinho px-4 py-1.5 font-bold text-leite transition-transform hover:-translate-y-0.5"
                      >
                        Ver código
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>
    </Secao>
  );
}
