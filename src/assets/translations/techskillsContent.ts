import { t, type Dictionary } from "intlayer";

const SKILL_TYPE = {
  FRONTEND: "frontend",
  BACKEND: "backend",
  API: "api",
  DEVOPS: "devops",
  COLLABORATION: "collaboration",
  TESTING: "testing",
  LINUX: "linux",
  DATABASE: "database"
}

interface TechSkillType {
  imagePath: string,
  types: string[],
  title: string
}

interface FilterType {
  option: string,
  description: string
}


interface TechSkillContent {
  sectionTitle: string,
  filter: {
    selectAll: FilterType,
    options: FilterType[]
  }
  tech: TechSkillType[]
}

export default {
  key: "tech_skills_content",
  content: {
    sectionTitle: t({
      en: "Tech Skills",
      "fr-CA": "Compétences Techniques"
    }),
    filter: {
      selectAll: {
        option: "selectAll",
        description: t({
          en: "Select All",
          "fr-CA": "Sélectionner Tout"
        }),
      },
      options: [
        {
          option: SKILL_TYPE.FRONTEND,
          description: "Frontend"
        },
        {
          option: SKILL_TYPE.BACKEND,
          description: "Backend"
        },
        {
          option: SKILL_TYPE.API,
          description: "API"
        },
        {
          option: SKILL_TYPE.DEVOPS,
          description: "DevOps"
        },
        {
          option: SKILL_TYPE.COLLABORATION,
          description: "Collaboration"
        },
        {
          option: SKILL_TYPE.TESTING,
          description: "Testing"
        },
        {
          option: SKILL_TYPE.LINUX,
          description: "Linux"
        },
        {
          option: SKILL_TYPE.DATABASE,
          description: t({
            en: "Database",
            "fr-CA": "Base de Données"
          })
        }
      ]
    },
    tech: [
      {
        imagePath: "techskills/git.svg",
        types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.COLLABORATION],
        title: "Git"
      }, {
        imagePath: "techskills/github.svg",
        types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.COLLABORATION],
        title: "GitHub"
      }, {
        imagePath: "techskills/jira.svg",
        types: [SKILL_TYPE.COLLABORATION],
        title: "Jira"
      }, {
        imagePath: "techskills/confluence.svg",
        types: [SKILL_TYPE.COLLABORATION],
        title: "Confluence"
      }, {
        imagePath: "techskills/bash-shell.svg",
        types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.LINUX],
        title: "Bash"
      }, {
        imagePath: "techskills/docker.svg",
        types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.LINUX],
        title: "Docker"
      }, {
        imagePath: "techskills/linux.svg",
        types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.LINUX],
        title: "Linux"
      }, {
        imagePath: "techskills/jenkins.svg",
        types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.LINUX],
        title: "Jenkins"
      }, {
        imagePath: "techskills/python.svg",
        types: [SKILL_TYPE.BACKEND],
        title: "Python"
      }, {
        imagePath: "techskills/django.svg",
        types: [SKILL_TYPE.BACKEND],
        title: "Django"
      }, {
        imagePath: "techskills/java.svg",
        types: [SKILL_TYPE.BACKEND],
        title: "Java"
      }, {
        imagePath: "techskills/spring.svg",
        types: [SKILL_TYPE.BACKEND],
        title: "Spring"
      }, {
        imagePath: "techskills/rest-api.svg",
        types: [SKILL_TYPE.API],
        title: "REST"
      }, {
        imagePath: "techskills/graphql.svg",
        types: [SKILL_TYPE.API],
        title: "GraphQL"
      }, {
        imagePath: "techskills/apollo.svg",
        types: [SKILL_TYPE.FRONTEND],
        title: "Apollo"
      }, {
        imagePath: "techskills/ts.svg",
        types: [SKILL_TYPE.FRONTEND],
        title: "Typescript"
      }, {
        imagePath: "techskills/html.svg",
        types: [SKILL_TYPE.FRONTEND],
        title: "HTML5"
      }, {
        imagePath: "techskills/js.svg",
        types: [SKILL_TYPE.FRONTEND],
        title: "Javascript"
      }, {
        imagePath: "techskills/css3.svg",
        types: [SKILL_TYPE.FRONTEND],
        title: "CSS3"
      }, {
        imagePath: "techskills/tailwind.svg",
        types: [SKILL_TYPE.FRONTEND],
        title: "Tailwind"
      }, {
        imagePath: "techskills/react.svg",
        types: [SKILL_TYPE.FRONTEND],
        title: "React"
      }, {
        imagePath: "techskills/intlayer.svg",
        types: [SKILL_TYPE.FRONTEND],
        title: "Intlayer"
      }, {
        imagePath: "techskills/bootstrap.svg",
        types: [SKILL_TYPE.FRONTEND],
        title: "Bootstrap"
      }, {
        imagePath: "techskills/postgresql.svg",
        types: [SKILL_TYPE.DATABASE, SKILL_TYPE.BACKEND],
        title: "PostgreSQL"
      }, {
        imagePath: "techskills/mysql.svg",
        types: [SKILL_TYPE.DATABASE, SKILL_TYPE.BACKEND],
        title: "MySQL"
      }, {
        imagePath: "techskills/cypress.svg",
        types: [SKILL_TYPE.TESTING, SKILL_TYPE.FRONTEND],
        title: "Cypress"
      }, {
        imagePath: "techskills/jest.svg",
        types: [SKILL_TYPE.TESTING, SKILL_TYPE.FRONTEND],
        title: "Jest"
      }, {
        imagePath: "techskills/playwright.svg",
        types: [SKILL_TYPE.TESTING, SKILL_TYPE.FRONTEND],
        title: "Playwright"
      }
    ]
  }
} satisfies Dictionary<TechSkillContent>;
