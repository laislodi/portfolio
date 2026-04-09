import { t, type Dictionary } from "intlayer";

interface ExperienceType {
  company: string,
  title: string,
  location: {
    city: string,
    province: string,
    country: string,
    type: JobType
  },
  date: {
    from: {
      month: string,
      year: number
    },
    to: {
      month: string,
      year: number,
    }
  }
  summary: string,
  tasks: string[],
  technologies: string[]
}

interface ExperienceContent {
  sectionTitle: string,
  experience: ExperienceType[]
}

enum JobType {
  Remote, Hybrid, "On-site"
}

function job_type(job_type: JobType) {
  let jobType = t({})
  if (job_type === JobType.Remote)
    jobType = t({
      en: "Remote",
      "fr-CA": "À distance"
    })
  else if (job_type === JobType.Hybrid)
    jobType = t({
      en: "Hybrid",
      "fr-CA": "Hybride"
    })
  else if (job_type === JobType["On-site"])
    jobType = t({
      en: "On Site",
      "fr-CA": "Sur Site"
    })
  return jobType
}

export default {
  key: "experience_content",
  content: {
    sectionTitle: t({
      en: "Experience",
      "fr-CA": "Expérience"
    }),
    experience: [
      {
        company: "Edvisor IO",
        title: t({
          en: "Frontend Developer",
          "fr-CA": "Développeuse Front-end" 
        }),
        date: {
          from: {
            month: t({
              en: "Sep",
              "fr-CA": "Sept" 
            }),
            year: 2025
          },
          to: {
            month: t({
              en: "Feb",
              "fr-CA": "Fev"
            }),
            year: 2026
          }
        },
        location: {
          city: "Vancouver",
          province: "BC",
          country: "Canada",
          type: job_type(JobType.Remote)
        },
        summary: t({
          en: "Collaborated with full-stack well established team to assist with rebuilding the frontend application, following a very detailed mockup on Figma.",
          "fr-CA": "J'ai collaboré avec une équipe full-stack bien établie pour aider à reconstruire l'application frontend, en suivant une maquette très détaillée sur Figma."
        }),
        tasks: [
          t({
            en: "Develop and maintain client-facing web applications using React and TypeScript, translating business requirements and Jira user stories into scalable UI components.",
            "fr-CA": "Développer et maintenir des applications Web destinées aux clients en utilisant React et TypeScript, en traduisant les exigences commerciales et les récits utilisateurs Jira en composants d'interface utilisateur évolutifs."
          }),
          t({
            en: "Collaborate with backend engineers, designers, and product stakeholders to ensure all deliverables meet client requirements and adhere to established design specifications and best practices",
            "fr-CA": "Collaborer avec les ingénieurs backend, les concepteurs et les intervenants du produit pour s'assurer que tous les livrables répondent aux exigences du client et respectent les spécifications de conception établies et les meilleures pratiques."
          }),
          t({
            en: "Refine user stories and translate design mockups into functional, responsive UI components.",
            "fr-CA": "Affinez les scénarios utilisateurs et traduisez les maquettes de conception en composants d'interface utilisateur fonctionnels et réactifs."
          }),
          t({
            en: "Leverage AI-assisted development tools (e.g., Claude.ai) to improve code quality, refactor legacy components, and accelerate delivery while maintaining reliability.",
            "fr-CA": "Tirez parti des outils de développement assistés par l'IA (par exemple, Claude.ai) pour améliorer la qualité du code, refactoriser les composants existants et accélérer la livraison tout en maintenant la fiabilité."
          })
        ],
        technologies: ["React", "Typescript", "Claude.ai", "REST", "CSS", "Jira", "Git", "GitHub"]
      },
      {
        company: "Arctic Wolf",
        title: t({
          en: "Software Developer",
          "fr-CA": "Développeuse de Software" 
        }),
        date: {
          from: {
            month: t({
              en: "Oct",
              "fr-CA": "Oct"
            }),
            year: 2022
          },
          to: {
            month: t({
              en: "Aug",
              "fr-CA": "Aout"
            }),
            year: 2024
          }
        },
        location: {
          city: "Waterloo",
          province: "ON",
          country: "Canada",
          type: job_type(JobType.Remote)
        },
        summary: t({
          en: "Collaborated with cross-functional teams to develop full-stack solutions, integrating React frontend with Golang-based RESTful APIs for a security application to help clients prevent security breaches.",
          "fr-CA": "J'ai collaboré avec des équipes multidisciplinaires pour développer des solutions complètes, intégrant un frontend React avec des API RESTful basées sur Golang pour une application de sécurité visant à aider les clients à prévenir les failles de sécurité."
        }),
        tasks: [
          t({
            en: "Delivered data-driven dashboard leveraging Typescript and React aggregating Zendesk ticket data and key metrics, enabling teams to optimize support processes, and increasing team efficiency.",
            "fr-CA": "J'ai conçu un tableau de bord basé sur les données, utilisant Typescript et React, qui regroupe les données des billets Zendesk et les indicateurs clés, permettant aux équipes d'optimiser les processus de soutien et d'accroître leur efficacité."
          }),
          t({
            en: "Collaborated with UX/UI designers to translate designs into visually appealing and engaging, functional user interfaces.",
            "fr-CA": "J'ai collaboré avec des concepteurs UX/UI pour traduire les maquettes en interfaces utilisateur fonctionnelles, visuellement attrayantes et engageantes."
          }),
          t({
            en: "Refactored, split and organized one test file with 16 hundred lines of code into five domain-specific test files to enhance performance, reduce complexity, and ensure scalable code architecture.",
            "fr-CA": "J'ai restructuré, divisé et organisé un fichier de test contenant 1600 lignes de code en cinq fichiers de test spécifiques à un domaine afin d'améliorer les performances, de réduire la complexité et d'assurer une architecture de code évolutive."
          }),
          t({
            en: "Improved and parallelized automation on GitHub Actions and improved the deployment process time by 12 minutes.",
            "fr-CA": "Amélioration et parallélisation de l'automatisation sur GitHub Actions et réduction du temps de processus de déploiement de 12 minutes."
          }),
          t({
            en: "Improved test coverage integrating Cypress testing best practices, ensuring robust feature delivery and seamless deployments.",
            "fr-CA": "Couverture de test améliorée intégrant les meilleures pratiques de test Cypress, garantissant une livraison de fonctionnalités robustes et des déploiements sans faille."
          })
        ],
        technologies: ["Golang", "Postgres", "REST", "React", "Hooks", "Typescript", "ECMA Script", "CSS", "AWS",
          "Docker", "Shell Script", "Git", "Github", "GitHub Actions", "Cypress", "Jira", "Confluence", "Postman"]
      },
      {
        company: "Tasktop",
        title: t({
          en: "Software Engineer II",
          "fr-CA": "Ingénieure de Software II"
        }),
        date: {
          from: {
            month: t({
              en: "Jan",
              "fr-CA": "Janv"
            }),
            year: 2020
          },
          to: {
            month: t({
              en: "Sept",
              "fr-CA": "Sept"
            }),
            year: 2022
          },
        },
        location: {
          city: "Vancouver",
          province: "BC",
          country: "Canada",
          type: job_type(JobType.Remote)
        },
        summary: t({
          en: "Spearheaded full stack development of customer-facing SaaS platforms using Python Django, React, and GraphQL, streamlining user experiences and driving product growth.",
          "fr-CA": "J'ai piloté le développement complet de plateformes SaaS destinées aux clients en utilisant Python Django, React et GraphQL, en rationalisant l'expérience utilisateur et en stimulant la croissance des produits."
        }),
        tasks: [
          t({
            en: "Led development for key project components using Graphene Django and React, ensuring scalable, high-quality code delivery.",
            "fr-CA": "J'ai dirigé le développement des composants clés du projet en utilisant Graphene Django et React, assurant ainsi une livraison de code évolutive et de haute qualité."
          }),
          t({
            en: "Troubleshooted and resolved about 15 false positive tests and shared knowledge about the fixes.",
            "fr-CA": "J'ai diagnostiqué et résolu environ 15 faux positifs et partagé les connaissances relatives aux solutions."
          }),
          t({
            en: "Added and maintained testing, branch protection and approval needings on GitHub Actions to improve and protect the deployment process.",
            "fr-CA": "Ajout et maintien des fonctionnalités de test, de protection des branches et d'approbation sur GitHub Actions afin d'améliorer et de protéger le processus de déploiement."
          }),
          t({
            en: "Mentored two co-op students through weekly feedback sessions, assisting them with both technical challenges and professional growth.",
            "fr-CA": "J'ai encadré deux étudiants en stage coopératif par le biais de séances de rétroaction hebdomadaires, en les aidant à relever les défis techniques et à progresser professionnellement."
          }),
          t({
            en: "Facilitated weekly deployment process, updated documentation, transferred knowledge, and troubleshoot issues related to CI/CD pipelines to another team to ensure smooth operations.",
            "fr-CA": "J'ai facilité le processus de déploiement hebdomadaire, mis à jour la documentation, transféré les connaissances et résolu les problèmes liés aux pipelines CI/CD pour une autre équipe afin d'assurer un fonctionnement optimal."
          }),
          t({
            en: "Improved AWS infrastructure by automating dynamic provisioning of 3 Jenkins Cloud nodes, enhancing CI/CD pipelines and optimizing resource usage.",
            "fr-CA": "Amélioration de l'infrastructure AWS grâce à l'automatisation du provisionnement dynamique de 3 nœuds Jenkins Cloud, à l'amélioration des pipelines CI/CD et à l'optimisation de l'utilisation des ressources."
          })
        ],
        technologies: ["Python", "Django", "GraphQL", "MySQL", "React", "Hooks", "Typescript", "ECMA Script", "CSS",
            "Jest", "Vite", "Sass", "AWS", "Shell Script", "Jenkins", "Docker", "Ansible", "Gerrit", "Git", "GitHub", 
            "JSON", "Jira", "Confluence", "Datadog", "Postman"]
      },
      {
        company: "SAP (Meta)",
        title: t({
          en: "Java Developer",
          "fr-CA": "Développeuse Java"
        }),
        date: {
          from: {
            month: t({
              en: "Jan",
              "fr-CA": "Janv"
            }),
            year: 2019
          },
          to: {
            month: t({
              en: "Sept",
              "fr-CA": "Sept"
            }),
            year: 2019
          }
        },
        location: {
          city: "Sao Leopoldo",
          province: "RS",
          country: "Brazil",
          type: job_type(JobType["On-site"])
        },
        summary: t({
          en: "",
          "fr-CA": ""
        }),
        tasks: [
          t({
            en: "Worked on different projects with different stacks, such as Spring and Spring Boot Framework, Java 8, Oracle and HANA databases to provide customized solutions for customers.",
            "fr-CA": "J'ai travaillé sur différents projets avec différentes technologies, comme les cadres Spring et Spring Boot, Java 8, les bases de données Oracle et HANA, afin de fournir des solutions personnalisées aux clients."
          }),
          t({
            en: "Developed Rest APIs to expose features to provide standard integration between SAP solutions using Rest API, JSON, Git, and Maven.",
            "fr-CA": "Développement d'API REST pour exposer des fonctionnalités permettant une intégration standard entre les solutions SAP à l'aide de REST API, JSON, Git et Maven."
          }),
          t({
            en: "Automated the development environment setup and improved the performance of new hires, using shell scripts and Docker, improving the setup time by one hour and forty minutes.",
            "fr-CA": "Automatisation de la configuration de l'environnement de développement et amélioration des performances des nouvelles recrues grâce à l'utilisation de scripts shell et de Docker, réduisant ainsi le temps de configuration d'une heure et quarante minutes."
          }),
        ],
        technologies: ["Java", "JavaScript", "ECMA Script", "Shell Script", "HANADB", "Docker", "Maven", "Git",
          "GitHub", "Oracle", "REST"]
      },
      {
        company: "Accenture Brasil",
        title: t({
          en: "Software Analyst",
          "fr-CA": "Analyste de Software"
        }),
        date: {
          from: {
            month: t({
              en: "Oct",
              "fr-CA": "Auot"
            }),
            year: 2017
          },
          to: {
            month: t({
              en: "Jan",
              "fr-CA": "Janv"
            }),
            year: 2019
          }
        },
        location: {
          city: "Porto Alegre",
          province: "RS",
          country: "Brazil",
          type: job_type(JobType["On-site"])
        },
        summary: "",
        tasks: [
          t({
            en: "Analyzed software unexpected behaviour based on customer issues.",
            "fr-CA": "Analyse des comportements inattendus du logiciel en fonction des problèmes rencontrés par les clients."
          }),
          t({
            en: "Cross-team discussed and contributed to solving issues.",
            "fr-CA": "Les différentes équipes ont discuté et contribué à la résolution des problèmes."
          }),
          t({
            en: "Troubleshooted and debugged issues reported by customers.",
            "fr-CA": "Dépannage et résolution des problèmes signalés par les clients."
          }),
          t({
            en: "Wrote and tested SQL queries to understand and fix different scenarios and to provide the fastest workaround solutions to unblock the end-user to complete their tasks.",
            "fr-CA": "J'ai écrit et testé des requêtes SQL pour comprendre et corriger différents scénarios et pour fournir les solutions de contournement les plus rapides afin de permettre à l'utilisateur final de terminer ses tâches."
          })
        ],
        technologies: ["Java", "Oracle", "SQL", "SOAP", "REST", "SVN", "Maven"]
      }
    ]
  }
} satisfies Dictionary<ExperienceContent>;

