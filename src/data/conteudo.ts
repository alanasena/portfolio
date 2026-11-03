// Todo o texto do site fica aqui. Para mudar algo, é só editar este arquivo.

export const pessoa = {
  nome: "Alana Oliveira de Sena",
  titulo: "Desenvolvedora de software · full stack e IA aplicada",
  // Troque pela sua foto: coloque o arquivo em /public e mude o nome aqui (ex.: "/foto.jpg")
  foto: "/foto.jpg",
  email: "alana.ossena@gmail.com",
  linkedin: "https://www.linkedin.com/in/alanaasena",
  github: "https://github.com/alanasena",
  // Coloque o PDF do currículo em /public com este nome
  curriculo: "/curriculo-alana-sena.pdf",
};

export const sobre = [
  "Sou estudante de Engenharia de Software na Universidade Federal do Ceará (UFC), Campus Russas, e me formo em dezembro de 2026.",
  "Já trabalho em dois projetos reais: uma plataforma educacional da universidade e um sistema de gestão para clínicas. No dia a dia, uso React, C#/.NET, Python, banco de dados e testes, e coloco IA aplicada nos meus projetos para resolver problemas de verdade.",
  "Também tenho um artigo publicado sobre ensino de computação.",
];

export type Projeto = {
  nome: string;
  descricao: string;
  tecnologias: string[];
  github?: string;
  site?: string;
  // Print do projeto: coloque a imagem em /public/projetos e escreva o caminho aqui (ex.: "/projetos/robo-vagas.png")
  imagem?: string;
  emBreve?: boolean;
  emoji: string;
};

export const projetos: Projeto[] = [
  {
    nome: "Robo-vagas IA",
    emoji: "🤖",
    descricao:
      "Robô que busca vagas júnior em 5 sites de hora em hora (cerca de 1.500 por rodada), filtra por nível, área e contrato, usa o Gemini para dar nota de 1 a 10 a cada vaga e manda as melhores por e-mail e WhatsApp.",
    tecnologias: ["Python", "Gemini API", "GitHub Actions"],
    github: "https://github.com/alanasena/robo-vagas-ia",
  },
  {
    nome: "Tira-Dúvidas UFC",
    emoji: "🎓",
    descricao:
      "Assistente com RAG que responde dúvidas de alunos com base no Regulamento da Graduação da UFC, mostrando o documento e a página de onde veio cada resposta.",
    tecnologias: ["Python", "FastAPI", "Gemini", "ChromaDB", "Next.js", "Docker"],
    site: "https://ufc-rag.vercel.app",
    imagem: "/projetos/tira-duvidas.jpg",
    github: "https://github.com/alanasena/ufc-rag",
  },
  {
    nome: "Rangô",
    emoji: "🍔",
    descricao:
      "Agente de IA que entende pedidos de comida em linguagem natural, decide quais ferramentas usar (buscar restaurantes, ver cardápio, calcular total), respeita o orçamento e pede confirmação antes de fechar.",
    tecnologias: ["Python", "FastAPI", "Gemini (function calling)", "React", "TypeScript", "PostgreSQL", "Docker"],
    github: "https://github.com/alanasena/rango-agente",
    site: "https://https://rango-three.vercel.app/",
  },
  {
    nome: "Bloom",
    emoji: "🌸",
    descricao:
      "Loja virtual com checkout via Stripe, cadastro com verificação de e-mail, área do cliente e telas de administração. Projeto feito em dupla.",
    tecnologias: ["Next.js", "React", "TypeScript", "PostgreSQL", "Stripe"],
    github: "https://github.com/alanasena/bloom-store",
  },
  {
    nome: "Sentimento de avaliações",
    emoji: "💬",
    descricao:
      "Modelo que identifica o sentimento de avaliações escritas em português, publicado no Hugging Face.",
    tecnologias: ["Python", "Hugging Face"],
    emBreve: true,
  },
];

export const experiencias = [
  {
    cargo: "Estagiária de desenvolvimento",
    empresa: "Kisaude",
    sobre: "Sistema de gestão para clínicas",
    periodo: "jan/2026 – atual",
    itens: [
      "Painel da clínica em React e JavaScript",
      "Telas pensadas com foco em UX",
      "Testes da aplicação",
      "Apoio no back-end em C#/.NET com PostgreSQL",
    ],
  },
  {
    cargo: "Estagiária de desenvolvimento front-end",
    empresa: "StudyLab",
    sobre: "Plataforma educacional da UFC",
    periodo: "set/2025 – atual",
    itens: [
      "Telas em React para os perfis de aluno, professor e administrador",
      "Compartilhamento de materiais por disciplina",
      "Fóruns",
      "Integração com API REST em .NET",
    ],
  },
];

export const competencias = [
  { grupo: "Front-end", itens: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { grupo: "Back-end", itens: ["C#", ".NET", "Python", "FastAPI", "API REST"] },
  { grupo: "IA aplicada", itens: ["Gemini API", "RAG", "Agentes com function calling", "Prompt engineering", "ChromaDB"] },
  { grupo: "Banco de dados", itens: ["PostgreSQL", "SQL"] },
  { grupo: "Testes", itens: ["Manuais", "Automatizados"] },
  { grupo: "Outros", itens: ["Git", "GitHub", "GitHub Actions", "Docker", "UX", "Figma"] },
];

export const publicacao = {
  autores: "Nogueira, E. de F. S.; Sena, A. O. de; Queiroz, M. D. de.",
  titulo:
    "Computação desplugada para auxiliar no aprendizado dos conceitos sobre a formação dos números binários.",
  revista: "Revista Educação e Linguagem (RedLi), v. 13, n. 1, 2026.",
  doi: "10.23900/redli.v13n1-022",
};

export const formacao = {
  curso: "Bacharelado em Engenharia de Software",
  instituicao: "Universidade Federal do Ceará (UFC) – Campus Russas",
  conclusao: "Conclusão em dez/2026",
};

export const menu = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
  { id: "competencias", label: "Competências" },
  { id: "publicacao", label: "Publicação" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
];
