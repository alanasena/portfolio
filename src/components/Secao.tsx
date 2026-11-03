const sombras = {
  chiclete: "[text-shadow:4px_4px_0_var(--color-chiclete)]",
  laranja: "[text-shadow:4px_4px_0_var(--color-laranja)]",
  lavanda: "[text-shadow:4px_4px_0_var(--color-lavanda)]",
  limao: "[text-shadow:4px_4px_0_var(--color-limao)]",
  rosinha: "[text-shadow:4px_4px_0_var(--color-rosinha)]",
};

export function Titulo({
  children,
  sombra = "chiclete",
  className = "",
}: {
  children: React.ReactNode;
  sombra?: keyof typeof sombras;
  className?: string;
}) {
  return (
    <h2 className={`font-display mb-10 text-[clamp(2.4rem,6vw,4rem)] leading-none ${sombras[sombra]} ${className}`}>
      {children}
    </h2>
  );
}

export default function Secao({
  id,
  titulo,
  sombra,
  fundo = "",
  children,
}: {
  id: string;
  titulo: string;
  sombra?: keyof typeof sombras;
  fundo?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={fundo}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <Titulo sombra={sombra}>{titulo}</Titulo>
        {children}
      </div>
    </section>
  );
}
