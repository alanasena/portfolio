import Movimento from "@/components/Movimento";
import Menu from "@/components/Menu";
import Topo from "@/components/Topo";
import Projetos from "@/components/Projetos";
import { Competencias, Contato, Experiencia, Formacao, Publicacao, Sobre } from "@/components/Conteudo";

export default function Home() {
  return (
    <Movimento>
      <Menu />
      <main>
        <Topo />
        <Sobre />
        <Projetos />
        <Experiencia />
        <Competencias />
        <Publicacao />
        <Formacao />
        <Contato />
      </main>
      <footer className="py-8 text-center text-sm opacity-70">
        Feito com carinho por Alana · 2026
      </footer>
    </Movimento>
  );
}
