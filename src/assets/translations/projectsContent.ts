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
          en: 'Budget Maker App',
          "fr-CA": 'Créateur de Budget'
        }),
        description: t({
          en: 'A full-stack budgeting application built on the zero-based budget principle — every dollar of income is assigned a job before the month begins, so the balance always reaches exactly $0.',
          "fr-CA": "Une application full-stack budgétaire basée sur le principe du budget à base zéro: chaque dollar de revenu se voit attribuer une tâche avant le début du mois, de sorte que le solde atteigne toujours exactement 0$."
        }),
        url: 'https://laislodi.github.io/personal-budget-maker' ,
        github: 'https://github.com/laislodi/easy-cooking_design',
        languages: ['HTML5', 'CSS3', 'Typescript'],
        technologies: ['React', 'Vite', 'GitHub Pages'],
        screenshots: ['/src/assets/screenshots/budget_maker/dashboard.png']
      },
      {
        name: t({
          en: "Budget Maker API",
          "fr-CA": "l'API de la Créateur de Budget"
        }),
        description: t({
          en: 'The API for the Budget Maker App',
          "fr-CA": "L'API de l'application Créateur de Budget"
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
          "fr-CA": "Calendrier hébraïque (Juif)"
        }),
        description: t({
          en: "A calendar web application built with React, TypeScript, and Vite that uses the Hebrew (Jewish) lunisolar calendar instead of the Gregorian calendar.",
          "fr-CA": "Un calendrier construite avec React, TypeScript et Vite qui utilise le calendrier luni-solaire hébraïque (juif) au lieu du calendrier grégorien."
        }),
        url: "https://laislodi.github.io/hebrew_calendar/",
        github: "https://github.com/laislodi/hebrew_calendar",
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
          en: "Easy Cooking Design",
          "fr-CA": "Easy Cooking Design (Conception de cuisine facile)"
        }),
        description: t({
          en: "A functional, beautiful and user-friendly design. A mock design for a cooking course website, with plans to subscribe to get access to recipes, videos of how to cook, images of dishes and a list of ingredients used in the recipes.",
          "fr-CA": "Un design fonctionnel, esthétique et intuitif. Maquette d'un site Web de cours de cuisine, offrant un abonnement pour accéder des recettes, des tutoriels vidéo, des photos de plats et des liste d'ingrédients."
        }),
        url: "https://laislodi.github.io/easy-cooking_design/",
        github: "https://github.com/laislodi/easy-cooking_design",
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
          "fr-CA": "Roche, papier, ciseaux, lézard et Spock"
        }),
        description: t({
          en: "Rock, Paper, Scissors, Lizard, Spock is a game of chance that expands the traditional game of Rock, Paper, Scissors. It is first used to settle a dispute about what to watch on TV between Sheldon and Raj in 'The Lizard-Spock Expansion'",
          "fr-CA": "Roche, Papier, Ciseaux, Lézard and Spock est un jeu de hasard qui est l'appellation québécoise du traditionnel Pierre-Feuille-Ciseaux. Il a été utilisé pour la première fois afin de régler un différend entre Sheldon Cooper et Raj Koothrappali au sujet de l'émission de télévision à regarder, dans l'épisode \"L'extension Lézard-Spock\" de la série The Big Bang Theory."
        }),
        github: "https://github.com/laislodi/Rock-Paper-Scissors-Lizard-Spock",
        languages: ["Python"],
        technologies: [],
        screenshots: []
      },
      {
        name: t({
          en: "Vancouver Aquarium Exhibits",
          "fr-CA": "Expositions de l'aquarium de Vancouver"
        }),
        description: t({
          en: "This app is built using Google Maps Javascript API to create a funny way of showing the exhibits going on in the Vancouver Aquarium.",
          "fr-CA": "Cette application utilise l'API Javascript de Google Maps pour présenter de manière ludique les expositions en cours à l'aquarium de Vancouver."
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
        name: "Tic-Tac-Toe",
        description: t({
          en: "A Beautiful Tic Tac Toe game to play online.",
          "fr-CA": "Un magnifique jeu de Tic Tac Toe en ligne."
        }),
        url: "https://laislodi.github.io/tic-tac-toe/",
        github: "https://github.com/laislodi/tic-tac-toe",
        languages: ["Javascript", "CSS3"],
        technologies: ["React"],
        screenshots: [
          "/src/assets/screenshots/tic_tac_toe/home.png",
        ]
      },
      {
        name: t({
          en: "Investment Calculator",
          "fr-CA": "Calculatrice de placement"
        }),
        description: t({
          en: "Investor Calculator is a React single-page application that helps users estimate the growth of their investments over time. By inputting key financial details, the app calculates the future value of an investment based on compound interest.",
          "fr-CA": "Calculatrice de placement est une application avec React qui permet d'estimer la croissance d'um investissement au fil du temps. En saisissant des informations financières clés, l'application calcule la valeur future d'un investissement en fonction des intérêts composés."
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
          "fr-CA": "Gestion de projet"
        }),
        description: t({
          en: "React application that manages projects with checkable tasks. It deals with context, refs, portal and routes. The application has dark and light modes.",
          "fr-CA": "Une application en React de gestion de projets avec des tâches vérifiables. Elle gère le contexte, les références, le portail et les routes. L'application offre un mode clair et un mode sombre."
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
