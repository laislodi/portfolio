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
      "fr-CA": "Projets"
    }),
    projects: [
      {
        name: t({
          en: "Easy Cooking Design",
          "fr-CA": "Easy Cooking Design (Conception de cuisine facile)"
        }),
        description: t({
          en: "A functional, beautiful and user-friendly design. A mock design for a cooking course website, with plans to subscribe to get access to recipes, videos of how to cook, images of dishes and a list of ingredients used in the recipes.",
          "fr-CA": "Un design fonctionnel, esthétique et intuitif. Maquette d'un site Web de cours de cuisine, offrant un abonnement pour accéder aux recettes, aux tutoriels vidéo, aux photos des plats et à la liste des ingrédients."
        }),
        url: "https://laislodi.github.io/easy-cooking_design/",
        github: "https://github.com/laislodi/easy-cooking_design",
        languages: ["HTML5", "CSS3", "Javascript"],
        technologies: [],
        screenshots: []
      },
      {
        name: t({
          en: "Rock, Paper, Scissors, Lizard, Spock",
          "fr-CA": "Roche, Papier Ciseaux, Lézard et Spock"
        }),
        description: t({
          en: "Rock, Paper, Scissors, Lizard, Spock is a game of chance that expands the traditional game of Rock, Paper, Scissors. It is first used to settle a dispute about what to watch on TV between Sheldon and Raj in 'The Lizard-Spock Expansion'",
          "fr-CA": "Roche, Papier Ciseaux, Lézard et Spock est un jeu de hasard qui enrichit le jeu traditionnel Roche, Papier Ciseaux. Il est utilisé pour la première fois afin de régler un différend entre Sheldon et Raj au sujet de l'émission de télévision à regarder, dans l'épisode \"L'extension Lézard-Spock\"."
        }),
        github: "https://github.com/laislodi/Rock-Paper-Scissors-Lizard-Spock",
        languages: ["Python"],
        technologies: [],
        screenshots: []
      },
      {
        name: t({
          en: "Vancouver Aquarium Exhibits",
          "fr-CA": "Expositions de l'Aquarium de Vancouver"
        }),
        description: t({
          en: "This app is built using Google Maps Javascript API to create a funny way of showing the exhibits going on in the Vancouver Aquarium.",
          "fr-CA": "Cette application utilise l'API Javascript de Google Maps pour présenter de manière ludique les expositions en cours à l'aquarium de Vancouver."
        }),
        url: "https://laislodi.github.io/vancouver-aquarium-map/",
        github: "https://github.com/laislodi/vancouver-aquarium-map/",
        languages: ["HTML", "CSS3", "Javascript"],
        technologies: ["Google API"],
        screenshots: []
      },
      {
        name: "Tic-Tac-Toe",
        description: t({
          en: "A Beautiful Tic Tac Toe game to play online.",
          "fr-CA": "Un magnifique jeu de Tic Tac Toe à jouer en ligne."
        }),
        url: "https://laislodi.github.io/tic-tac-toe/",
        github: "https://github.com/laislodi/tic-tac-toe",
        languages: ["React", "Javascript", "CSS3"],
        technologies: [],
        screenshots: []
      },
      {
        name: t({
          en: "Investment Calculator",
          "fr-CA": "Calculateur de placement"
        }),
        description: t({
          en: "Investor Calculator is a React single-page application that helps users estimate the growth of their investments over time. By inputting key financial details, the app calculates the future value of an investment based on compound interest.",
          "fr-CA": "Calculateur de placement est une application en React qui permet d'estimer la croissance de ses investissements au fil du temps. En saisissant des informations financières clés, l'application calcule la valeur future d'un investissement en fonction des intérêts composés."
        }),
        url: "https://laislodi.github.io/investment-calculator/",
        github: "https://github.com/laislodi/investment-calculator/",
        languages: ["React", "Javascript", "CSS3"],
        technologies: [],
        screenshots: []
      },
      {
        name: t({
          en: "Project Management",
          "fr-CA": "Gestion de projet"
        }),
        description: t({
          en: "React application that manages projects with checkable tasks. It deals with context, refs, portal and routes. The application has dark and light modes.",
          "fr-CA": "Application React de gestion de projets avec tâches vérifiables. Elle gère le contexte, les références, le portail et les routes. L'application offre un mode clair et un mode sombre."
        }),
        url: "https://laislodi.github.io/project-management/",
        github: "https://github.com/laislodi/project-management/",
        languages: ["React", "React Routes", "Javascript", "Tailwind"],
        technologies: [],
        screenshots: []
      }
    ]
  }
} satisfies Dictionary<ProjectsContent>;
