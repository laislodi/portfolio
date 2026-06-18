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
      "fr-CA": "À distance",
      es: "Remoto",
      "pt-BR": "Remoto"
    })
  else if (job_type === JobType.Hybrid)
    jobType = t({
      en: "Hybrid",
      "fr-CA": "Hybride",
      es: "Híbrido",
      "pt-BR": "Híbrido"
    })
  else if (job_type === JobType["On-site"])
    jobType = t({
      en: "On Site",
      "fr-CA": "Sur site",
      es: "En el sitio",
      "pt-BR": "Presencial"
    })
  return jobType
}

export default {
  key: "experience_content",
  content: {
    sectionTitle: t({
      en: "Experience",
      "fr-CA": "Expérience",
      es: "Experiencia",
      "pt-BR": "Experiência"
    }),
    experience: [
      {
        company: "Edvisor IO",
        title: t({
          en: "Frontend Developer",
          "fr-CA": "Développeuse Front-end",
          es: "Desarrolladora Front End",
          "pt-BR": "Desenvolvedora Frontend"
        }),
        date: {
          from: {
            month: t({
              en: "Sep",
              "fr-CA": "Sept",
              es: "Set",
              "pt-BR": "Set"
            }),
            year: 2025
          },
          to: {
            month: t({
              en: "Feb",
              "fr-CA": "Févr",
              es: "Feb",
              "pt-BR": "Fev"
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
          "fr-CA": "J'ai collaboré avec une équipe full-stack bien établie pour aider à reconstruire l'application frontend, en suivant une maquette très détaillée sur Figma.",
          es: "Colaboré con un equipo consolidado de desarrollo full-stack para ayudar en la reconstrucción de la aplicación frontend, siguiendo un prototipo muy detallado en Figma.",
          "pt-BR": "Colaborei com uma equipe full-stack consolidada para auxiliar na reconstrução da aplicação frontend, seguindo um protótipo bastante detalhado criado no Figma."
        }),
        tasks: [
          t({
            en: "Developed and maintain client-facing web applications using React and TypeScript, translating business requirements and Jira user stories into scalable UI components.",
            "fr-CA": "Développer et maintenir des applications Web destinées aux clients en utilisant React et TypeScript, en traduisant les exigences commerciales et histoires d'utilisateur Jira en composants d'interface utilisateur évolutifs.",
            es: "Desarrollo y mantenimiento de aplicaciones web para clientes utilizando React y TypeScript, traduciendo los requisitos comerciales y las historias de usuario de Jira en componentes de interfaz de usuario escalables.",
            "pt-BR": "Desenvolver e manter aplicações web voltadas para o cliente usando React e TypeScript, traduzindo requisitos de negócios e histórias de usuário do Jira em componentes de interface do usuário escaláveis."
          }),
          t({
            en: "Collaborated with backend engineers, designers, and product stakeholders to ensure all deliverables meet client requirements and adhere to established design specifications and best practices.",
            "fr-CA": "Collaborer avec les ingénieurs backend, les concepteurs et les parties prenantes du produit pour s'assurer que tous les livrables répondent aux exigences du client et respectent les spécifications de conception établies et les meilleures pratiques.",
            es: "Colaboré con desarrolladores de backend, diseñadores y partes interesadas del producto para garantizar que todos los entregables cumplan con los requisitos del cliente y se adhieran a las especificaciones de diseño establecidas y las mejores prácticas.",
            "pt-BR": "Colaborei com desenvolvedores backend, designers e stakeholders do produto para garantir que todas as entregas atendessem aos requisitos do cliente e estivessem em conformidade com as especificações de design e as melhores práticas estabelecidas."
          }),
          t({
            en: "Refined user stories and translate design mockups into functional, responsive UI components.",
            "fr-CA": "Affinez les scénarios utilisateurs et traduisez les maquettes de conception en composants d'interface utilisateur fonctionnels et réactifs.",
            es: "Perfeccioné las historias de usuario y transformé los bocetos de diseño en componentes de interfaz de usuario funcionales y adaptables.",
            "pt-BR": "Aprimorei as histórias de usuário e traduza os protótipos de design em componentes de interface do usuário funcionais e responsivos."
          }),
          t({
            en: "Leveraged AI-assisted development tools (e.g., Claude.ai) to improve code quality, refactor legacy components, and accelerate delivery while maintaining reliability.",
            "fr-CA": "Tirez parti des outils de développement assistés par l'IA (par exemple, Claude.ai) pour améliorer la qualité du code, refactoriser les composants existants et accélérer la livraison tout en maintenant la fiabilité.",
            es: "Utilicé herramientas de desarrollo asistidas por IA (por ejemplo, Claude.ai) para mejorar la calidad del código, refactorizar componentes heredados y acelerar la entrega manteniendo la fiabilidad.",
            "pt-BR": "Utilizei ferramentas de desenvolvimento assistidas por IA (por exemplo, Claude.ai) para melhorar a qualidade do código, refatorar componentes legados e acelerar a entrega, mantendo a confiabilidade."
          })
        ],
        technologies: ["React", "Typescript", "Claude.ai", "REST", "CSS", "Jira", "Git", "GitHub"]
      },
      {
        company: "Arctic Wolf",
        title: t({
          en: "Software Developer",
          "fr-CA": "Développeuse de logiciels",
          es: "Desarrolladora de software",
          "pt-BR": "Desenvolvedora de Software"
        }),
        date: {
          from: {
            month: t({
              en: "Oct",
              "fr-CA": "Oct",
              es: "Oct",
              "pt-BR": "Out"
            }),
            year: 2022
          },
          to: {
            month: t({
              en: "Aug",
              "fr-CA": "Août",
              es: "Ag",
              "pt-BR": "Ago"
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
          "fr-CA": "J'ai collaboré avec des équipes multidisciplinaires pour développer des solutions complètes, intégrant un frontend React avec des API RESTful basées sur Golang pour une application de sécurité visant à aider les clients à prévenir les failles de sécurité.",
          es: "Colaboré con equipos multidisciplinarios para desarrollar soluciones integrales, integrando el frontend de React con API RESTful basadas en Golang para una aplicación de seguridad que ayuda a los clientes a prevenir brechas de seguridad.",
          "pt-BR": "Colaborei com equipes multifuncionais para desenvolver soluções full-stack, integrando o frontend React com APIs RESTful baseadas em Golang para um aplicativo de segurança que ajuda os clientes a prevenir violações de segurança."
        }),
        tasks: [
          t({
            en: "Delivered data-driven dashboard leveraging Typescript and React aggregating Zendesk ticket data and key metrics, enabling teams to optimize support processes, and increasing team efficiency.",
            "fr-CA": "J'ai conçu un tableau de bord basé sur les données, utilisant Typescript et React, qui regroupe les données des tickets Zendesk et les indicateurs clés, permettant aux équipes d'optimiser les processus de soutien et d'accroître leur efficacité.",
            es: "Desarrollé un panel de control basado en datos utilizando Typescript y React para agregar datos de tickets de Zendesk y métricas clave, lo que permitió a los equipos optimizar los procesos de soporte y aumentar la eficiencia del equipo.",
            "pt-BR": "Desenvolvi um painel de controle orientado a dados, utilizando Typescript e React, que agrega dados de tickets do Zendesk e métricas-chave, permitindo que as equipes otimizem os processos de suporte e aumentem a eficiência da equipe."
          }),
          t({
            en: "Collaborated with UX/UI designers to translate designs into visually appealing and engaging, functional user interfaces.",
            "fr-CA": "J'ai collaboré avec des concepteurs UX/UI pour traduire les maquettes en interfaces utilisateur fonctionnelles, visuellement attrayantes et engageantes.",
            es: "Colaboré con diseñadores de UX/UI para traducir los diseños en interfaces de usuario funcionales, visualmente atractivas y fáciles de usar.",
            "pt-BR": "Colaborei com designers de UX/UI para traduzir designs em interfaces de usuário visualmente atraentes, envolventes e funcionais."
          }),
          t({
            en: "Refactored, split and organized one test file with 16 hundred lines of code into five domain-specific test files to enhance performance, reduce complexity, and ensure scalable code architecture.",
            "fr-CA": "J'ai restructuré, divisé et organisé un fichier de test contenant 1600 lignes de code en cinq fichiers de test spécifiques à un domaine afin d'améliorer les performances, de réduire la complexité et d'assurer une architecture de code évolutive.",
            es: "Refactoricé, dividí y organicé un archivo de prueba con 1600 líneas de código en cinco archivos de prueba específicos para cada dominio, con el fin de mejorar el rendimiento, reducir la complejidad y garantizar una arquitectura de código escalable.",
            "pt-BR": "Refatorei, dividi e organizei um arquivo de teste com 1600 linhas de código em cinco arquivos de teste específicos para cada domínio, a fim de melhorar o desempenho, reduzir a complexidade e garantir uma arquitetura de código escalável."
          }),
          t({
            en: "Improved and parallelized automation on GitHub Actions and improved the deployment process time by 12 minutes.",
            "fr-CA": "Amélioration et parallélisation de l'automatisation sur GitHub Actions et réduction du temps de processus de déploiement de 12 minutes."
          }),
          t({
            en: "Improved test coverage integrating Cypress testing best practices, ensuring robust feature delivery and seamless deployments.",
            "fr-CA": "Couverture de test améliorée intégrant les meilleures pratiques de test Cypress, garantissant une livraison de fonctionnalités robustes et des déploiements sans accroc.",
            es: "Mejoré y paralelicé la automatización en GitHub Actions y reduje el tiempo del proceso de implementación en 12 minutos.",
            "pt-BR": "Aprimorei e paralelizei a automação no GitHub Actions e reduzi o tempo do processo de implantação em 12 minutos."
          })
        ],
        technologies: ["Golang", "Postgres", "REST", "React", "Hooks", "Typescript", "ECMA Script", "CSS", "AWS",
          "Docker", "Shell Script", "Git", "Github", "GitHub Actions", "Cypress", "Jira", "Confluence", "Postman"]
      },
      {
        company: "Tasktop",
        title: t({
          en: "Software Engineer II",
          "fr-CA": "Ingénieure de Software II",
          es: "Ingeniera de Software II",
          "pt-BR": "Engenheira de Software II"
        }),
        date: {
          from: {
            month: t({
              en: "Jan",
              "fr-CA": "Janv",
              es: "En",
              "pt-BR": "Jan"
            }),
            year: 2020
          },
          to: {
            month: t({
              en: "Sep",
              "fr-CA": "Sept",
              es: "Set",
              "pt-BR": "Set"
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
          "fr-CA": "J'ai piloté le développement complet de plateformes SaaS destinées aux clients en utilisant Python Django, React et GraphQL, en rationalisant l'expérience utilisateur et en stimulant la croissance des produits.",
          es: "Lideré el desarrollo integral de plataformas SaaS orientadas al cliente utilizando Python Django, React y GraphQL, optimizando la experiencia del usuario e impulsando el crecimiento del producto.",
          "pt-BR": "Liderei o desenvolvimento full stack de plataformas SaaS voltadas para o cliente, utilizando Python Django, React e GraphQL, otimizando a experiência do usuário e impulsionando o crescimento do produto.",
        }),
        tasks: [
          t({
            en: "Led development for key project components using Graphene Django and React, ensuring scalable, high-quality code delivery.",
            "fr-CA": "J'ai dirigé le développement des composants clés du projet en utilisant Graphene Django et React, assurant ainsi une livraison de code évolutive et de haute qualité.",
            es: "Lideré el desarrollo de componentes clave del proyecto utilizando Graphene Django y React, garantizando la entrega de código escalable y de alta calidad.",
            "pt-BR": "Liderou o desenvolvimento de componentes-chave do projeto usando Graphene Django e React, garantindo a entrega de código escalável e de alta qualidade."
          }),
          t({
            en: "Troubleshooted and resolved about 15 false positive tests and shared knowledge about the fixes.",
            "fr-CA": "J'ai diagnostiqué et résolu environ 15 faux positifs et partagé les connaissances relatives aux solutions.",
            es: "Solucioné aproximadamente 15 falsos positivos en las pruebas y compartí mis conocimientos sobre las soluciones.",
            "pt-BR": "Solucionei problemas e resolvi cerca de 15 testes falso-positivos e compartilhei o conhecimento sobre as correções."
          }),
          t({
            en: "Added and maintained testing, branch protection and approval needings on GitHub Actions to improve and protect the deployment process.",
            "fr-CA": "Ajout et maintien des fonctionnalités de test, de protection des branches et d'approbation sur GitHub Actions afin d'améliorer et de protéger le processus de déploiement.",
            es: "Añadí y mantuve las pruebas, la protección de ramas y los requisitos de aprobación en GitHub Actions para mejorar y proteger el proceso de implementación.",
            "pt-BR": "Adicionadas e mantidas as funcionalidades de teste, proteção de branches e aprovação no GitHub Actions para melhorar e proteger o processo de implantação."
          }),
          t({
            en: "Mentored two co-op students through weekly feedback sessions, assisting them with both technical challenges and professional growth.",
            "fr-CA": "J'ai encadré deux étudiants en stage coopératif par le biais de séances de rétroaction hebdomadaires, en les aidant à relever les défis techniques et à progresser professionnellement.",
            es: "Fui mentor de dos estudiantes en prácticas a través de sesiones semanales de retroalimentación, ayudándolos tanto con desafíos técnicos como con su desarrollo profesional.",
            "pt-BR": "Mentorei dois estudantes em regime de estágio remunerado por meio de sessões de feedback semanais, auxiliando-os tanto com desafios técnicos quanto com seu desenvolvimento profissional."
          }),
          t({
            en: "Facilitated weekly deployment process, updated documentation, transferred knowledge, and troubleshoot issues related to CI/CD pipelines to another team to ensure smooth operations.",
            "fr-CA": "J'ai facilité le processus de déploiement hebdomadaire, mis à jour la documentation, transféré les connaissances et résolu les problèmes liés aux pipelines CI/CD pour une autre équipe afin d'assurer un fonctionnement optimal.",
            es: "Facilité el proceso de implementación semanal, actualicé la documentación, transferí conocimientos y solucioné problemas relacionados con las canalizaciones de CI/CD a otro equipo para garantizar un funcionamiento sin problemas.",
            "pt-BR": "Facilitei o processo de implantação semanal, atualizei a documentação, transferi conhecimento e solucionei problemas relacionados aos pipelines de CI/CD para outra equipe, garantindo operações tranquilas."
          }),
          t({
            en: "Improved AWS infrastructure by automating dynamic provisioning of 3 Jenkins Cloud nodes, enhancing CI/CD pipelines and optimizing resource usage.",
            "fr-CA": "Amélioration de l'infrastructure AWS grâce à l'automatisation du provisionnement dynamique de 3 nœuds Jenkins Cloud, à l'amélioration des pipelines CI/CD et à l'optimisation de l'utilisation des ressources.",
            es: "Mejoré la infraestructura de AWS automatizando el aprovisionamiento dinámico de 3 nodos de Jenkins Cloud, optimizando las canalizaciones de CI/CD y el uso de recursos.",
            "pt-BR": "Aprimorei a infraestrutura da AWS automatizando o provisionamento dinâmico de 3 nós do Jenkins Cloud, melhorando os pipelines de CI/CD e otimizando o uso de recursos."
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
          "fr-CA": "Développeuse Java",
          es: "Desarrolladora Java",
          "pt-BR": "Desenvolvedora Java"
        }),
        date: {
          from: {
            month: t({
              en: "Jan",
              "fr-CA": "Janv",
              es: "En",
              "pt-BR": "Jan"
            }),
            year: 2019
          },
          to: {
            month: t({
              en: "Sep",
              "fr-CA": "Sept",
              es: "Set",
              "pt-BR": "Set"
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
            "fr-CA": "J'ai travaillé sur différents projets avec différentes technologies, comme les cadres Spring et Spring Boot, Java 8, les bases de données Oracle et HANA, afin de fournir des solutions personnalisées aux clients.",
            es: "He trabajado en diferentes proyectos con distintas tecnologías, como Spring y Spring Boot Framework, Java 8, Oracle y bases de datos HANA, para proporcionar soluciones personalizadas a los clientes.",
            "pt-BR": "Trabalhei em diferentes projetos com diferentes tecnologias, como Spring e Spring Boot Framework, Java 8, bancos de dados Oracle e HANA, para fornecer soluções personalizadas para os clientes."
          }),
          t({
            en: "Developed Rest APIs to expose features to provide standard integration between SAP solutions using Rest API, JSON, Git, and Maven.",
            "fr-CA": "Développement d'API REST pour exposer des fonctionnalités permettant une intégration standard entre les solutions SAP à l'aide de REST API, JSON, Git et Maven.",
            es: "Desarrollé API REST para exponer funcionalidades que permitieran una integración estándar entre soluciones SAP utilizando API REST, JSON, Git y Maven.",
            "pt-BR": "Desenvolvi APIs REST para expor funcionalidades e proporcionar integração padrão entre soluções SAP usando REST API, JSON, Git e Maven."
          }),
          t({
            en: "Automated the development environment setup and improved the performance of new hires, using shell scripts and Docker, improving the setup time by one hour and forty minutes.",
            "fr-CA": "Automatisation de la configuration de l'environnement de développement et amélioration des performances des nouvelles recrues grâce à l'utilisation de scripts shell et de Docker, réduisant ainsi le temps de configuration d'une heure et quarante minutes.",
            es: "Automatizé la configuración del entorno de desarrollo y mejoré el rendimiento de los nuevos empleados, utilizando scripts de shell y Docker, reduciendo el tiempo de configuración en una hora y cuarenta minutos.",
            "pt-BR": "Automatizei a configuração do ambiente de desenvolvimento e melhorei o desempenho de novos funcionários, utilizando scripts de shell e Docker, reduzindo o tempo de configuração em uma hora e quarenta minutos."
          }),
        ],
        technologies: ["Java", "JavaScript", "ECMA Script", "Shell Script", "HANADB", "Docker", "Maven", "Git",
          "GitHub", "Oracle", "REST"]
      },
      {
        company: "Accenture Brasil",
        title: t({
          en: "Software Analyst",
          "fr-CA": "Analyste de Software",
          es: "Analista de Software",
          "pt-BR": "Analista de Software"
        }),
        date: {
          from: {
            month: t({
              en: "Oct",
              "fr-CA": "Oct",
              es: "Oct",
              "pt-BR": "Out"
            }),
            year: 2017
          },
          to: {
            month: t({
              en: "Jan",
              "fr-CA": "Janv",
              es: "En",
              "pt-BR": "Jan"
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
            "fr-CA": "Analyse des comportements inattendus du logiciel en fonction des problèmes rencontrés par les clients.",
            es: "Analicé el comportamiento inesperado del software basándome en los problemas reportados por los clientes.",
            "pt-BR": "Analisei comportamentos inesperados de software com base em problemas relatados por clientes."
          }),
          t({
            en: "Cross-team discussed and contributed to solving issues.",
            "fr-CA": "Les différentes équipes ont discuté et contribué à la résolution des problèmes.",
            es: "Participé en discusiones interdepartamentales y contribuí a la resolución de problemas.",
            "pt-BR": "Eu participei de discussões interdepartamentais e contribuí para a resolução de problemas."
          }),
          t({
            en: "Troubleshooted and debugged issues reported by customers.",
            "fr-CA": "Dépannage et résolution des problèmes signalés par les clients.",
            es: "Solucioné problemas y depuré errores reportados por los clientes.",
            "pt-BR": "Solucionei e depurei problemas relatados por clientes."
          }),
          t({
            en: "Wrote and tested SQL queries to understand and fix different scenarios and to provide the fastest workaround solutions to unblock the end-user to complete their tasks.",
            "fr-CA": "J'ai écrit et testé des requêtes SQL pour comprendre et corriger différents scénarios et pour fournir les solutions de contournement les plus rapides afin de permettre à l'utilisateur final de terminer ses tâches.",
            es: "Escribí y probé consultas SQL para comprender y solucionar diferentes escenarios, así como para proporcionar las soluciones alternativas más rápidas que permitieran al usuario final completar sus tareas.",
            "pt-BR": "Elaborei e testei consultas SQL para compreender e corrigir diferentes cenários, fornecendo as soluções alternativas mais rápidas para que o usuário final pudesse concluir suas tarefas."
          })
        ],
        technologies: ["Java", "Oracle", "SQL", "SOAP", "REST", "SVN", "Maven"]
      }
    ]
  }
} satisfies Dictionary<ExperienceContent>;

