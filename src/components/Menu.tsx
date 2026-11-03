"use client";

import { useState } from "react";
import { menu } from "@/data/conteudo";

const cores = ["bg-laranja", "bg-chiclete", "bg-lavanda", "bg-limao", "bg-rosinha", "bg-laranja", "bg-vinho text-leite"];

export default function Menu() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-leite/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Menu principal">
        <a href="#topo" className="font-display text-2xl text-chiclete">
          alana
        </a>

        <ul className="hidden gap-1.5 lg:flex">
          {menu.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block rounded-full border-2 border-vinho px-3.5 py-1 text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:-rotate-2 ${cores[i % cores.length]}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-full border-2 border-vinho bg-limao px-4 py-1 text-sm font-bold lg:hidden"
          aria-expanded={aberto}
          aria-controls="menu-celular"
          onClick={() => setAberto(!aberto)}
        >
          {aberto ? "Fechar" : "Menu"}
        </button>
      </nav>

      {aberto && (
        <ul id="menu-celular" className="grid grid-cols-2 gap-2 px-5 pb-4 lg:hidden">
          {menu.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setAberto(false)}
                className={`block rounded-full border-2 border-vinho px-4 py-2 text-center font-semibold ${cores[i % cores.length]}`}
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
