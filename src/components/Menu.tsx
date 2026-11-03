"use client";

import { useState } from "react";
import { menu } from "@/data/conteudo";

export default function Menu() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-tinta/10 bg-creme/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3" aria-label="Menu principal">
        <a href="#topo" className="font-titulo text-xl font-extrabold">
          alana<span className="text-rosa">.</span>
        </a>

        <ul className="hidden gap-1 md:flex">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:bg-amarelo"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-full border-2 border-tinta px-3 py-1 text-sm font-bold md:hidden"
          aria-expanded={aberto}
          aria-controls="menu-celular"
          onClick={() => setAberto(!aberto)}
        >
          {aberto ? "Fechar" : "Menu"}
        </button>
      </nav>

      {aberto && (
        <ul id="menu-celular" className="flex flex-col gap-1 px-5 pb-4 md:hidden">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setAberto(false)}
                className="block rounded-xl px-3 py-2 font-medium hover:bg-amarelo"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
