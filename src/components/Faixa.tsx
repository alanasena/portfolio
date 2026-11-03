// Faixa de texto que rola sozinha (para no modo "menos movimento")
export default function Faixa({
  itens,
  className = "bg-vinho text-rosinha",
  velocidade = "28s",
  reverso = false,
}: {
  itens: string[];
  className?: string;
  velocidade?: string;
  reverso?: boolean;
}) {
  const linha = (
    <span className="flex shrink-0 items-center">
      {itens.map((t) => (
        <span key={t} className="flex items-center">
          <span className="px-5">{t}</span>
          <span aria-hidden>✺</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className={`overflow-hidden py-2.5 font-display text-lg ${className}`} aria-hidden>
      <div
        className="rolar flex w-max"
        style={{ ["--vel" as string]: velocidade, animationDirection: reverso ? "reverse" : "normal" }}
      >
        {linha}
        {linha}
        {linha}
        {linha}
      </div>
    </div>
  );
}
