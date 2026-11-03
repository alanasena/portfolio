import { competencias, experiencias, formacao, pessoa, publicacao, sobre } from "@/data/conteudo";
import Aparecer from "./Aparecer";
import Secao from "./Secao";

const cartao = "rounded-3xl border-2 border-tinta bg-white p-6 shadow-[5px_5px_0_var(--color-tinta)]";
const coresCompetencias = ["bg-rosa", "bg-azul", "bg-roxo", "bg-laranja", "bg-verde", "bg-amarelo"];

export function Sobre() {
  return (
    <Secao id="sobre" titulo="Sobre mim" cor="rosa">
      <Aparecer className="max-w-3xl space-y-4 text-lg leading-relaxed">
        {sobre.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Aparecer>
    </Secao>
  );
}

export function Experiencia() {
  return (
    <Secao id="experiencia" titulo="Experiência" cor="verde">
      <div className="grid gap-6 md:grid-cols-2">
        {experiencias.map((e, i) => (
          <Aparecer key={e.empresa} atraso={i * 0.1} className={cartao}>
            <p className="text-sm font-bold uppercase tracking-wide text-rosa">{e.periodo}</p>
            <h3 className="font-titulo mt-1 text-2xl font-extrabold">{e.empresa}</h3>
            <p className="font-medium">{e.cargo}</p>
            <p className="text-sm opacity-70">{e.sobre}</p>
            <ul className="mt-4 space-y-2">
              {e.itens.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="text-laranja">
                    ✦
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Aparecer>
        ))}
      </div>
    </Secao>
  );
}

export function Competencias() {
  return (
    <Secao id="competencias" titulo="Competências" cor="roxo">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {competencias.map((c, i) => (
          <Aparecer key={c.grupo} atraso={(i % 3) * 0.08} className={cartao}>
            <h3 className="font-titulo flex items-center gap-2 text-xl font-extrabold">
              <span aria-hidden className={`h-3 w-3 rounded-full ${coresCompetencias[i]}`} />
              {c.grupo}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {c.itens.map((item) => (
                <li key={item} className="rounded-full bg-creme px-3 py-1 text-sm font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </Aparecer>
        ))}
      </div>
    </Secao>
  );
}

export function Publicacao() {
  return (
    <Secao id="publicacao" titulo="Publicação" cor="azul">
      <Aparecer className={`${cartao} max-w-3xl`}>
        <p className="text-sm opacity-70">{publicacao.autores}</p>
        <h3 className="font-titulo mt-2 text-xl font-extrabold">{publicacao.titulo}</h3>
        <p className="mt-2 italic">{publicacao.revista}</p>
        <a
          href={`https://doi.org/${publicacao.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-full border-2 border-tinta bg-azul px-4 py-1.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
        >
          DOI: {publicacao.doi}
        </a>
      </Aparecer>
    </Secao>
  );
}

export function Formacao() {
  return (
    <Secao id="formacao" titulo="Formação" cor="laranja">
      <Aparecer className={`${cartao} max-w-3xl`}>
        <h3 className="font-titulo text-xl font-extrabold">{formacao.curso}</h3>
        <p className="mt-1">{formacao.instituicao}</p>
        <p className="mt-1 font-bold text-rosa">{formacao.conclusao}</p>
      </Aparecer>
    </Secao>
  );
}

export function Contato() {
  const links = [
    { label: pessoa.email, href: `mailto:${pessoa.email}`, cor: "bg-verde" },
    { label: "LinkedIn", href: pessoa.linkedin, cor: "bg-azul" },
    { label: "GitHub", href: pessoa.github, cor: "bg-amarelo" },
  ];
  return (
    <Secao id="contato" titulo="Contato" cor="rosa">
      <Aparecer className="rounded-3xl border-2 border-tinta bg-rosa p-8 text-center shadow-[5px_5px_0_var(--color-tinta)] sm:p-12">
        <p className="font-titulo text-2xl font-extrabold sm:text-3xl">Bora conversar? 💌</p>
        <p className="mx-auto mt-2 max-w-xl">Estou aberta a vagas e oportunidades em desenvolvimento e IA aplicada.</p>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`inline-block break-all rounded-full border-2 border-tinta px-5 py-2.5 font-bold shadow-[3px_3px_0_var(--color-tinta)] transition-transform hover:-translate-y-0.5 ${l.cor}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </Aparecer>
    </Secao>
  );
}
