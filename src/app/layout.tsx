import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/shrikhand";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alana Oliveira de Sena · Desenvolvedora de software",
  description:
    "Portfólio de Alana Oliveira de Sena, desenvolvedora de software full stack e IA aplicada. Estudante de Engenharia de Software na UFC.",
  openGraph: {
    title: "Alana Oliveira de Sena · Desenvolvedora de software",
    description: "Full stack e IA aplicada. Projetos, experiência e contato.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className="font-sans">{children}</body>
    </html>
  );
}
