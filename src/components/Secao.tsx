import Aparecer from "./Aparecer";

const cores = {
  rosa: "bg-rosa",
  laranja: "bg-laranja",
  amarelo: "bg-amarelo",
  verde: "bg-verde",
  roxo: "bg-roxo",
  azul: "bg-azul",
};

export default function Secao({
  id,
  titulo,
  cor = "rosa",
  children,
}: {
  id: string;
  titulo: string;
  cor?: keyof typeof cores;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <Aparecer>
        <h2 className="font-titulo mb-10 text-3xl font-extrabold sm:text-4xl">
          <span className="relative inline-block">
            <span
              aria-hidden
              className={`absolute -bottom-1 left-0 -z-10 h-4 w-full -rotate-1 rounded-full ${cores[cor]} opacity-70`}
            />
            {titulo}
          </span>
        </h2>
      </Aparecer>
      {children}
    </section>
  );
}
