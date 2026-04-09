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
          option: "frontend",
          description: "Frontend"
        },
        {
          option: "backend",
          description: "Backend"
        },
        {
          option: "api",
          description: "API"
        },
        {
          option: "devops",
          description: "DevOps"
        },
        {
          option: "collaboration",
          description: "Collaboration"
        },
        {
          option: "testing",
          description: "Testing"
        },
        {
          option: "linux",
          description: "Linux"
        },
        {
          option: "database",
          description: t({
            en: "Database",
            "fr-CA": "Base de Données"
          })
        }
      ]
    },
    tech: [
      {
        imagePath: "techskills/git-logo.png",
        types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.COLLABORATION],
        title: "Git"
      }, {
        imagePath: "techskills/github-logo.png",
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
        imagePath: "techskills/bash-shell-logo.png",
        types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.LINUX],
        title: "Bash"
      }, {
        imagePath: "techskills/docker-logo.png",
        types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.LINUX],
        title: "Docker"
      }, {
        imagePath: "techskills/unix.png",
        types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.LINUX],
        title: "Linux"
      }, {
        imagePath: "techskills/jenkins-logo.png",
        types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.LINUX],
        title: "Jenkins"
      }, {
        imagePath: "techskills/python-logo.png",
        types: [SKILL_TYPE.BACKEND],
        title: "Python"
      }, {
        imagePath: "techskills/django.png",
        types: [SKILL_TYPE.BACKEND],
        title: "Django"
      }, {
        imagePath: "techskills/java-logo.png",
        types: [SKILL_TYPE.BACKEND],
        title: "Java"
      }, {
        imagePath: "techskills/spring-framework.png",
        types: [SKILL_TYPE.BACKEND],
        title: "Spring"
      }, {
        imagePath: "techskills/restfull-api.png",
        types: [SKILL_TYPE.API],
        title: "REST"
      }, {
        imagePath: "techskills/graphql-query.png",
        types: [SKILL_TYPE.API],
        title: "GraphQL"
      }, {
        imagePath: "techskills/apollo.png",
        types: [SKILL_TYPE.FRONTEND],
        title: "Apollo"
      }, {
        imagePath: "techskills/typescript.png",
        types: [SKILL_TYPE.FRONTEND],
        title: "Typescript"
      }, {
        imagePath: "techskills/html5.png",
        types: [SKILL_TYPE.FRONTEND],
        title: "HTML5"
      }, {
        imagePath: "techskills/javascript.png",
        types: [SKILL_TYPE.FRONTEND],
        title: "Javascript"
      }, {
        imagePath: "techskills/css3.png",
        types: [SKILL_TYPE.FRONTEND],
        title: "CSS3"
      }, {
        imagePath: "techskills/tailwind.svg",
        types: [SKILL_TYPE.FRONTEND],
        title: "Tailwind"
      }, {
        imagePath: "techskills/react-logo.png",
        types: [SKILL_TYPE.FRONTEND],
        title: "React"
      }, {
        imagePath: "techskills/intlayer-logo.svg",
        types: [SKILL_TYPE.FRONTEND],
        title: "Intlayer"
      }, {
        imagePath: "techskills/bootstrap.png",
        types: [SKILL_TYPE.FRONTEND],
        title: "Bootstrap"
      }, {
        imagePath: "techskills/postgresql-logo.png",
        types: [SKILL_TYPE.DATABASE, SKILL_TYPE.BACKEND],
        title: "PostgreSQL"
      }, {
        imagePath: "techskills/mysql.png",
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
      }
    ]
  }
}satisfies Dictionary<TechSkillContent>;
