import Movimento from "@/components/Movimento";
import Menu from "@/components/Menu";
import Cursor from "@/components/Cursor";
import Topo from "@/components/Topo";
import Faixa from "@/components/Faixa";
import Adesivos from "@/components/Adesivos";
import Projetos from "@/components/Projetos";
import { Competencias, Contato, Experiencia, PublicacaoFormacao, Sobre } from "@/components/Conteudo";

export default function Home() {
  return (
    <Movimento>
      <Cursor />
      <Faixa
        itens={["full stack", "IA aplicada", "React", "Python", "C# / .NET", "Gemini", "formatura em dez/2026"]}
        className="bg-chiclete text-leite"
        velocidade="40s"
      />
      <Menu />
      <main>
        <Topo />
        <Adesivos />
        <Sobre />
        <Faixa itens={["Projetos com IA", "feitos do zero", "no ar e com código aberto"]} className="bg-laranja text-vinho" reverso />
        <Projetos />
        <Experiencia />
        <Competencias />
        <PublicacaoFormacao />
        <div className="h-16" />
        <Contato />
      </main>
      <footer className="bg-vinho pb-8 text-center text-leite/80">
        <div aria-hidden className="xadrez mb-8 h-6" style={{ ["--xa" as string]: "#6b0f1a", ["--xb" as string]: "#f25ca8", ["--xt" as string]: "24px" }} />
        Feito por Alana Oliveira de Sena em 2026
      </footer>
    </Movimento>
  );
}
