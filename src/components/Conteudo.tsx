import { competencias, experiencias, formacao, pessoa, publicacao, sobre } from "@/data/conteudo";
import { Brilho, Flor, Selo, TextoCircular } from "./Formas";
import Secao, { Titulo } from "./Secao";

export function Sobre() {
  return (
    <Secao id="sobre" titulo="Sobre mim">
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed sm:text-xl">
          {sobre.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="relative mx-auto w-full max-w-xs">
          <div className="xadrez aspect-square rounded-[2.5rem] border-2 border-vinho" style={{ ["--xt" as string]: "40px" }} />
          <div className="absolute inset-[14%] grid place-items-center rounded-full border-2 border-vinho bg-laranja text-vinho">
            <TextoCircular texto="engenharia de software ✺ UFC Russas ✺ turma 2026 ✺ " className="absolute inset-0 h-full w-full" />
            <Brilho className="h-1/3 w-1/3 text-rosinha" />
          </div>
        </div>
      </div>
    </Secao>
  );
}

const coresExp = ["bg-laranja", "bg-chiclete"];

export function Experiencia() {
  return (
    <section id="experiencia" className="bg-leite">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <Titulo sombra="lavanda">Experiência</Titulo>
        <ol className="space-y-6">
          {experiencias.map((e, i) => (
            <li
              key={e.empresa}
              className={`grid gap-6 rounded-[2rem] border-2 border-vinho p-6 sm:p-8 md:grid-cols-[1fr_1.3fr] ${coresExp[i % 2]}`}
            >
              <div>
                <p className="inline-block rounded-full bg-leite px-3 py-1 text-sm font-bold">{e.periodo}</p>
                <h3 className="font-display mt-3 text-4xl sm:text-5xl">{e.empresa}</h3>
                <p className="mt-2 text-lg font-bold">{e.cargo}</p>
                <p className="font-medium">{e.sobre}</p>
              </div>
              <ul className="space-y-2.5 self-center rounded-[1.5rem] bg-leite p-5 text-lg">
                {e.itens.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Flor className="mt-1.5 h-4 w-4 shrink-0 text-chiclete" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const coresComp = ["bg-laranja", "bg-lavanda", "bg-chiclete", "bg-leite", "bg-rosinha", "bg-limao"];
const formasComp = [
  "rounded-[2rem_0.5rem_2rem_0.5rem]",
  "rounded-[3rem]",
  "rounded-[0.5rem_2rem_0.5rem_2rem]",
  "rounded-[3rem]",
  "rounded-[2rem_0.5rem_2rem_0.5rem]",
  "rounded-[0.5rem_2rem_0.5rem_2rem]",
];
const giros = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]", "rotate-[1.5deg]", "-rotate-1", "rotate-1"];

export function Competencias() {
  return (
    <section id="competencias" className="relative">
      <div aria-hidden className="xadrez h-8" style={{ ["--xt" as string]: "32px" }} />
      <div className="bg-limao">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <Titulo sombra="chiclete">Competências</Titulo>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {competencias.map((c, i) => (
              <div
                key={c.grupo}
                className={`border-2 border-vinho p-6 shadow-[5px_5px_0_var(--color-vinho)] ${coresComp[i]} ${formasComp[i]} ${giros[i]}`}
              >
                <h3 className="font-display text-2xl">{c.grupo}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.itens.map((item) => (
                    <li key={item} className="rounded-full border-2 border-vinho bg-leite px-3 py-1 font-semibold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden className="xadrez h-8" style={{ ["--xt" as string]: "32px" }} />
    </section>
  );
}

export function PublicacaoFormacao() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-5 py-20 sm:py-24 lg:grid-cols-[1.5fr_1fr]">
      <section id="publicacao">
        <Titulo sombra="rosinha" className="[text-shadow:4px_4px_0_var(--color-chiclete)]">
          Publicação
        </Titulo>
        <article className="relative rounded-[2rem] border-2 border-dashed border-vinho bg-rosinha p-7 sm:p-9">
          <p className="font-medium">{publicacao.autores}</p>
          <h3 className="font-display mt-3 text-2xl leading-snug sm:text-3xl">{publicacao.titulo}</h3>
          <p className="mt-3 text-lg">{publicacao.revista}</p>
          <a
            href={`https://doi.org/${publicacao.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full border-2 border-vinho bg-vinho px-5 py-2 font-bold text-leite transition-transform hover:-translate-y-0.5"
          >
            Ler o artigo (DOI {publicacao.doi})
          </a>
        </article>
      </section>

      <section id="formacao">
        <Titulo sombra="laranja">Formação</Titulo>
        <div className="relative mx-auto aspect-square w-full max-w-[22rem]">
          <Selo cor="var(--color-lavanda)" className="h-full w-full">
            <span className="block font-display text-2xl leading-tight sm:text-3xl">{formacao.curso}</span>
            <span className="mt-3 block font-semibold">{formacao.instituicao}</span>
            <span className="mt-3 inline-block rounded-full bg-vinho px-4 py-1 font-bold text-leite">{formacao.conclusao}</span>
          </Selo>
        </div>
      </section>
    </div>
  );
}

export function Contato() {
  const links = [
    { label: pessoa.email, href: `mailto:${pessoa.email}`, cor: "bg-limao" },
    { label: "LinkedIn", href: pessoa.linkedin, cor: "bg-lavanda" },
    { label: "GitHub", href: pessoa.github, cor: "bg-chiclete" },
  ];
  return (
    <section id="contato" className="relative bg-vinho text-leite">
      <svg aria-hidden viewBox="0 0 1200 60" preserveAspectRatio="none" className="absolute -top-[59px] left-0 h-[60px] w-full text-vinho">
        <path
          d="M0 60 C100 0 200 0 300 30 C400 60 500 60 600 30 C700 0 800 0 900 30 C1000 60 1100 60 1200 20 L1200 60Z"
          fill="currentColor"
        />
      </svg>
      <div className="relative mx-auto max-w-4xl overflow-hidden px-5 py-24 text-center">
        <Flor className="absolute -left-6 top-8 h-24 w-24 text-laranja" />
        <Brilho className="absolute right-2 bottom-10 h-16 w-16 text-limao" />
        <h2 className="font-display text-[clamp(2.6rem,8vw,5.5rem)] leading-none text-rosinha [text-shadow:5px_5px_0_var(--color-laranja)]">
          Bora conversar?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-xl">
          Estou aberta a vagas e oportunidades em desenvolvimento de software e IA aplicada.
        </p>
        <ul className="mt-9 flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`inline-block break-all rounded-full border-2 border-leite px-6 py-3 text-lg font-bold text-vinho transition-transform hover:-translate-y-1 hover:rotate-1 ${l.cor}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
