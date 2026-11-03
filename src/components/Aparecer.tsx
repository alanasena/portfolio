"use client";

import { motion } from "framer-motion";

// Faz o conteúdo aparecer suavemente quando entra na tela
export default function Aparecer({
  children,
  atraso = 0,
  className,
}: {
  children: React.ReactNode;
  atraso?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: atraso, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
