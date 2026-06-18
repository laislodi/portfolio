import { t, type Dictionary } from "intlayer";

interface ProjectsType {
  name: string,
  description: string,
  url?: string,
  github: string,
  languages: string[],
  technologies: string[],
  screenshots: string[]
};

interface ProjectsContent {
  sectionTitle: string,
  projects: ProjectsType[]
}

export default {
  key: "projects_content",
  content: {
    sectionTitle: t({
      en: "Projects",
      "fr-CA": "Projets",
      es: "Projetos",
      "pt-BR": "Projetos",
    }),
    projects: [
      {
        name: t({
          en: 'Budget Maker App',
          "fr-CA": 'Créateur de Budget',
          es: "Creador de Planificación Financiera",
          "pt-BR": "Criador de Orçamento Financeiro",
        }),
        description: t({
          en: 'A full-stack budgeting application built on the zero-based budget principle — every dollar of income is assigned a job before the month begins, so the balance always reaches exactly $0.',
          "fr-CA": "Une application de gestion budgétaire full-stack basée sur le principle du budget à base zero: chaque dollar de revenu est affectée à un usage précis une tâche avant le début du mois, de sorte que soit toujours de 0$.",
          es: "Una aplicación full-stack de creación de presupuesto baseado en el princípio de presupuesto de base cero: donde cada dollar de su ingresso tiene un destino antes que lo mes se finde, entonces el saldo Financeiro sea $0.",
          "pt-BR": "Uma aplicação full-stack de criação de orçamento financeiro baseado no princípio Orçamento Base Zero: onde cada dollar dos seus recursos tenha um destino certo antes do final do mês, para que o balanço final seja $0"
        }),
        url: 'https://laislodi.github.io/personal-budget-maker/',
        github: 'https://github.com/laislodi/personal-budget-maker/',
        languages: ['HTML5', 'CSS3', 'Typescript'],
        technologies: ['React', 'Vite', 'GitHub Pages'],
        screenshots: ['/src/assets/screenshots/budget_maker/dashboard.png']
      },
      {
        name: t({
          en: "Budget Maker API",
          "fr-CA": "L'API de la Créateur de Budget",
          es: "La API del Creador de Planificación Financiera",
          "pt-BR": "API do Criador de Orçamento Financeiro",
        }),
        description: t({
          en: 'The API for the Budget Maker App',
          "fr-CA": "L'API de l'application Créateur de Budget",
          es: "La API del Creador de Planificación Financiera",
          "pt-BR": "A API para a aplicação Criador de Orçamento Financeiro",
        }),
        github: 'https://github.com/laislodi/personal-budget-maker-api',
        url: 'https://personal-budget-maker.onrender.com/docs',
        languages: ['Python', 'FastAPI', 'Postgres'],
        technologies: ['Render', 'Alembic', 'Docker', 'sqlite', 'Pytest', 'JWT'],
        screenshots: []
      },
      {
        name: t({
          en: "Hebrew Calendar",
          "fr-CA": "Calendrier hébraïque (Juif)",
          es: "Calendario Hebraico",
          "pt-BR": "Calendario Hebraico",
        }),
        description: t({
          en: "A calendar web application built with React, TypeScript, and Vite that uses the Hebrew (Jewish) lunisolar calendar instead of the Gregorian calendar.",
          "fr-CA": "Un calendrier construite avec React, TypeScript et Vite qui utilise le calendrier luni-solaire hébraïque (juif) au lieu du calendrier grégorien.",
          es: "Una applicación web creada con React, Typescript, y Vite, que utiliza el Calendario lunisolar Hebraico (judío) en lugar del Calendario Gregoriano.",
          "pt-BR": "Uma aplicação web criada com React, Typescript e Vite, que usa o Calendário Hebreu (judeu) lunar/solar ao invés do Calendário Gregoriano.",
        }),
        url: "https://laislodi.github.io/hebrew_calendar/",
        github: "https://github.com/laislodi/hebrew_calendar/",
        languages: ["HTML5", "CSS3", "Typescript"],
        technologies: ["React", "Vite"],
        screenshots: [
          "/src/assets/screenshots/hebrew_calendar/MonthlyView-dark.png",
          "/src/assets/screenshots/hebrew_calendar/YearlyView-dark.png",
          "/src/assets/screenshots/hebrew_calendar/WeeklyView-dark.png",
          "/src/assets/screenshots/hebrew_calendar/MonthlyView-light.png",
          "/src/assets/screenshots/hebrew_calendar/YearlyView-light.png",
          "/src/assets/screenshots/hebrew_calendar/WeeklyView-light.png",
        ]
      },
      {
        name: t({
          en: "Easy Cooking - Design",
          "fr-CA": "Easy Cooking - Design (Conception de Cuisine Facile)",
          es: "Cocina Fácil - Design",
          "pt-BR": "Design de Cozinha Fácil"
        }),
        description: t({
          en: "A functional, beautiful and user-friendly design. A mock design for a cooking course website, with plans to subscribe to get access to recipes, videos of how to cook, images of dishes and a list of ingredients used in the recipes.",
          "fr-CA": "Un design fonctionnel, esthétique et intuitif. Maquette d'un site Web de cours de cuisine, offrant un abonnement pour accéder des recettes, des tutoriels vidéo, des photos de plats et des liste d'ingrédients.",
          es: "Un design funcional, belo y user-friendly. Um mock para um site de corso de culinária, con planos de assinatura para obtener acesso a recetas, videos de preparación, images de platos y lista de ingredientes usados en las recetas.",
          "pt-BR": "Um design funcional, bonito e user-friendly. Um mockup para um site de curso de culinária, com planos de assinatura para acessar receitas, vídeos de preparo, imagens dos pratos e uma lista de ingredientes usados ​​nas receitas."
        }),
        url: "https://laislodi.github.io/easy-cooking_design/",
        github: "https://github.com/laislodi/easy-cooking_design/",
        languages: ["HTML5", "CSS3", "Javascript"],
        technologies: [],
        screenshots: [
          "/src/assets/screenshots/easy_cooking/large_screen_view.png",
          "/src/assets/screenshots/easy_cooking/large_screen_view_packages.png",
        ]
      },
      {
        name: t({
          en: "Rock, Paper, Scissors, Lizard, Spock",
          "fr-CA": "Roche, papier, ciseaux, lézard et Spock",
          es: "Piedra, papel, tijera, lagarto y Spock",
          "pt-BR": "Pedra, papel, tesoura, lagarto e Spock"
        }),
        description: t({
          en: "Rock, Paper, Scissors, Lizard, Spock is a game of chance that expands the traditional game of Rock, Paper, Scissors. It is first used to settle a dispute about what to watch on TV between Sheldon and Raj in 'The Lizard-Spock Expansion'",
          "fr-CA": "Roche, Papier, Ciseaux, Lézard and Spock est un jeu de hasard qui est l'appellation québécoise du traditionnel Pierre-Feuille-Ciseaux. Il a été utilisé pour la première fois afin de régler un différend entre Sheldon Cooper et Raj Koothrappali au sujet de l'émission de télévision à regarder, dans l'épisode \"L'extension Lézard-Spock\" de la série The Big Bang Theory.",
          es: "Piedra, papel, tijera, lagarto y Spock es un juego de azar que amplía el juego tradicional de Piedra, Papel o Tijera. Se utiliza por primera vez para resolver una disputa sobre qué ver en la televisión entre Sheldon y Raj en 'La expansión de Lagarto y Spock'",
          "pt-BR": "Pedra, papel, tesoura, lagarto e Spock é um jogo de azar que expande o jogo tradicional de Pedra, Papel e Tesoura. Ele é usado pela primeira vez para resolver uma disputa sobre o que assistir na TV entre Sheldon e Raj no episódio \"A Expansão Lagarto-Spock\"."
        }),
        github: "https://github.com/laislodi/Rock-Paper-Scissors-Lizard-Spock/",
        languages: ["Python"],
        technologies: [],
        screenshots: []
      },
      {
        name: t({
          en: "Vancouver Aquarium Exhibits",
          "fr-CA": "Expositions de l'aquarium de Vancouver",
          es: "Exposiciones en el Acuario de Vancouver",
          "pt-BR": "Exibições do Aquário de Vancouver"
        }),
        description: t({
          en: "This app is built using Google Maps Javascript API to create a funny way of showing the exhibits going on in the Vancouver Aquarium.",
          "fr-CA": "Cette application utilise l'API Javascript de Google Maps pour présenter de manière ludique les expositions en cours à l'aquarium de Vancouver.",
          es: "Esta aplicación fue construída utilizando la API Javascript del Google Maps para presentar las exposiciones en el Acuario de Vancouver de manera divertida",
          "pt-BR": "Esta aplicação foi construída usando a API Javascript do Google Maps para exibir de forma divertida as exposições do Aquário de Vancouver de maneira divertida"
        }),
        url: "https://laislodi.github.io/vancouver-aquarium-map/",
        github: "https://github.com/laislodi/vancouver-aquarium-map/",
        languages: ["HTML", "CSS3", "Javascript"],
        technologies: ["Google API"],
        screenshots: [
          "/src/assets/screenshots/vancouver_aquarium/map-view.png",
          "/src/assets/screenshots/vancouver_aquarium/satellite-view.png",
        ]
      },
      {
        name: t({
          "en": "Tic-Tac-Toe",
          "fr-CA": "Tic-Tac-Toe",
          es: "Tres en raya",
          "pt-BR": "Jogo da velha"
        }),
        description: t({
          en: "A Beautiful Tic Tac Toe game to play online.",
          "fr-CA": "Un magnifique jeu de Tic Tac Toe en ligne.",
          es: "Un precioso juego de tres en raya para jugar en línea.",
          "pt-BR": "Um belo jogo da velha para jogar online."
        }),
        url: "https://laislodi.github.io/tic-tac-toe/",
        github: "https://github.com/laislodi/tic-tac-toe/",
        languages: ["Javascript", "CSS3"],
        technologies: ["React"],
        screenshots: [
          "/src/assets/screenshots/tic_tac_toe/home.png",
        ]
      },
      {
        name: t({
          en: "Investment Calculator",
          "fr-CA": "Calculatrice de placement",
          es: "Calculadora de inversiones",
          "pt-BR": "Calculadora de Investimentos"
        }),
        description: t({
          en: "Investor Calculator is a React single-page application that helps users estimate the growth of their investments over time. By inputting key financial details, the app calculates the future value of an investment based on compound interest.",
          "fr-CA": "Calculatrice de placement est une application avec React qui permet d'estimer la croissance d'um investissement au fil du temps. En saisissant des informations financières clés, l'application calcule la valeur future d'un investissement en fonction des intérêts composés.",
          es: "La Calculadora de Inversiones es una aplicación de una sola página desarrollada en React que ayuda a los usuarios a estimar el crecimiento de sus inversiones a lo largo del tiempo. Al ingresar sus datos financieros, la aplicación calcula el valor futuro de la inversión basándose en el interés compuesto.",
          "pt-BR": "A Calculadora de Investimentos é uma single-page application em React que ajuda o usuário a estimar o crescimento de seus investimentos ao longo do tempo. Ao entrar com seus detalhes financeiros, a aplicação calcula o futuro valor do investimento baseado nos juros compostos."
        }),
        url: "https://laislodi.github.io/investment-calculator/",
        github: "https://github.com/laislodi/investment-calculator/",
        languages: ["Javascript", "CSS3"],
        technologies: ["React"],
        screenshots: []
      },
      {
        name: t({
          en: "Project Management",
          "fr-CA": "Gestion de projet",
          es: "Gestión de Proyectos",
          "pt-BR": "Gerenciamento de Projetos"
        }),
        description: t({
          en: "React application that manages projects with checkable tasks. It deals with context, refs, portal and routes. The application has dark and light modes.",
          "fr-CA": "Une application en React de gestion de projets avec des tâches vérifiables. Elle gère le contexte, les références, le portail et les routes. L'application offre un mode clair et un mode sombre.",
          es: "Aplicación de gestión de proyectos basada en React con tareas verificables. Gestiona el contexto, las referencias, el portal y las rutas. La aplicación ofrece modos claro y oscuro.",
          "pt-BR": "Um aplicativo de gerenciamento de projetos baseado em React com tarefas verificáveis. Ele gerencia contexto, referências, o portal e rotas. O aplicativo oferece modos claro e escuro."
        }),
        url: "https://laislodi.github.io/project-management/",
        github: "https://github.com/laislodi/project-management/",
        languages: ["Javascript", "Tailwind"],
        technologies: ["React", "React Routes"],
        screenshots: []
      }
    ]
  }
} satisfies Dictionary<ProjectsContent>;
