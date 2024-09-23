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
    title: "Manifest",
    content:
      "Stay on top of your growing company by making it easy to search, and get to know, your teammates.",
  },
  {
    icon: regulamento,
    title: "Regulamento dos Clubes",
    content:
      "Keep your visuals consistently on-brand with easily accessible colors, icons, screenshots and more, for the whole team.",
  },
  {
    icon: report,
    title: "Report bugs",
    content:
      "Set up template bug report forms to give timely and actionable feedback on features and projects in development.",
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
