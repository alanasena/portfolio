"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";

// Cada letra pula quando o mouse passa por cima (o leitor de tela lê o texto inteiro pelo aria-label do título)
export default function Letras({ texto }: { texto: string }) {
  const palavras = texto.split(" ");
  return (
    <span aria-hidden>
      {palavras.map((palavra, p) => (
        <Fragment key={p}>
          <span className="inline-block whitespace-nowrap">
            {palavra.split("").map((letra, i) => (
              <motion.span
                key={i}
                className="inline-block"
                whileHover={{ y: -14, rotate: i % 2 ? 8 : -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                {letra}
              </motion.span>
            ))}
          </span>
          {p < palavras.length - 1 && " "}
        </Fragment>
      ))}
    </span>
  );
}
