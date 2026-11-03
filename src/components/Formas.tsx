// Formas orgânicas usadas no site (flor, estrela, brilho)

function pontos(n: number, f: (t: number) => number, cx = 50, cy = 50) {
  const passos = 240;
  let d = "";
  for (let i = 0; i <= passos; i++) {
    const t = (i / passos) * Math.PI * 2;
    const r = f(t);
    const x = cx + r * Math.cos(t);
    const y = cy + r * Math.sin(t);
    d += `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  return d + "Z";
}

// Flor de pétalas redondas (contorno ondulado)
export const caminhoFlor = (petalas = 9) => pontos(petalas, (t) => 44 + 6 * Math.cos(petalas * t));

// Estrela de pontas (selo)
export function caminhoEstrela(pontas = 16, fora = 50, dentro = 40) {
  let d = "";
  for (let i = 0; i < pontas * 2; i++) {
    const r = i % 2 === 0 ? fora : dentro;
    const t = (i / (pontas * 2)) * Math.PI * 2 - Math.PI / 2;
    d += `${i === 0 ? "M" : "L"}${(50 + r * Math.cos(t)).toFixed(2)} ${(50 + r * Math.sin(t)).toFixed(2)}`;
  }
  return d + "Z";
}

export function Flor({ className, cor = "currentColor" }: { className?: string; cor?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <path d={caminhoFlor(8)} fill={cor} />
    </svg>
  );
}

export function Brilho({ className, cor = "currentColor" }: { className?: string; cor?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <path d="M50 0 C55 38 62 45 100 50 C62 55 55 62 50 100 C45 62 38 55 0 50 C38 45 45 38 50 0Z" fill={cor} />
    </svg>
  );
}

export function Selo({
  children,
  className,
  cor = "var(--color-limao)",
}: {
  children: React.ReactNode;
  className?: string;
  cor?: string;
}) {
  return (
    <div className={`relative grid place-items-center ${className ?? ""}`}>
      <div className="absolute inset-0 overflow-hidden rounded-full" aria-hidden>
        <svg viewBox="0 0 100 100" className="girar h-full w-full">
          <path d={caminhoEstrela(18, 50, 42)} fill={cor} />
        </svg>
      </div>
      <span className="relative px-4 text-center">{children}</span>
    </div>
  );
}

// Texto girando em círculo, como um carimbo.
// textLength faz o texto ocupar o círculo certinho em qualquer navegador (sem sobrar nem encavalar)
export function TextoCircular({ texto, className }: { texto: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <path id="circulo" d="M100 100 m-74 0 a74 74 0 1 1 148 0 a74 74 0 1 1 -148 0" />
      </defs>
      <g className="girar" style={{ transformOrigin: "100px 100px" }}>
        <text fontSize="16" fontWeight="700" fill="currentColor" textLength="462" lengthAdjust="spacing">
          <textPath href="#circulo">{texto}</textPath>
        </text>
      </g>
    </svg>
  );
}
