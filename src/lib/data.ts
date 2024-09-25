import livro from "@/public/livro.svg";
import regulamento from "@/public/regulamento.svg";
import report from "@/public/report.svg";
import share from "@/public/share.svg";
import parede from "@/public/parede.svg";
import threemen from "@/public/threemen.png";
import pergunta from "@/public/pergunta.png";
import maoRobo from "@/public/maoRobo.png";
import { title } from "process";

export const links = [
  {
    name: "Projeto First",
    hash: "#Projeto First",
  },
  {
    name: "Calendario Olimpico",
    hash: "#Calendario Olimpico",
  },
  {
    name: "Clubes",
    hash: "#Clubes",
  },
  {
    name: "Sobre nos",
    hash: "#Sobre nos",
  },
  {
    name: "Login",
    hash: "#Login",
  },
] as const;

export const clubCardsData = [
  {
    title: "Clube xadrez",
    items: ["Competições", "Desenvolvimento pessoal", "De alunos, para alunos"],
  },
  {
    title: "Clube astronomia",
    items: [
      "Comunidade engajada",
      "Utilização de telescópios",
      "Observações noturnas",
      "Combate as pseudociências",
    ],
  },
  {
    title: "Clube Olimpiada",
    items: [
      "Comissões especializadas",
      "Criado por alunos especialistas",
      "Preparatórios e palestras",
      "Apoio financeiro",
    ],
  },
] as const;

export const squares = [
  {
    icon: livro,
    title: "Manifesto",
    content:
      "Explore o manifesto que guia nossas ações e define os princípios fundamentais da nossa comunidade. Entenda os nossos valores e compromissos.",
  },
  {
    icon: regulamento,
    title: "Regulamento dos Clubes",
    content:
      "Leia as regras e diretrizes que garantem o bom funcionamento dos clubes e asseguram uma experiência justa e organizada para todos os membros. ",
  },
  {
    icon: report,
    title: "Reclamações/Ajuda",
    content:
      "Encontre soluções para suas dúvidas ou problemas. Se você tiver uma reclamação ou precisar de assistência, estaremos prontos para oferecer suporte.",
  },
] as const;

export const timelineData = [
  {
    title: "O que é o projeto first?",
    idk: "Shared Quicklinks",
    description:
      "Convert long links into simple bookmarks for the whole team to access. Jump in to GitHub repos, or project documentation and invite the latest prototypes, effortlessly. Even set up your new members with everything they need, much faster.",
    link: "Learn about Quicklinks",
    icon: share,
    image: maoRobo,
  },
  {
    title: "Como tudo começou?",
    idk: "Shared Snippets",
    description:
      "Write faster by using Shared Snippets to store and insert the text your teams use most. Create canned responses to help with support, easily give code reviews in a set format and embed consistency across documentation.",
    link: "Learn more about Snippets",
    icon: parede,
    image: pergunta,
  },
  {
    title: "Aonde queremos chegar?",
    idk: "Shared Snippets",
    description:
      "Write faster by using Shared Snippets to store and insert the text your teams use most. Create canned responses to help with support, easily give code reviews in a set format and embed consistency across documentation.",
    link: "Learn more about Snippets",
    icon: parede,
    image: threemen,
  },
] as const;
