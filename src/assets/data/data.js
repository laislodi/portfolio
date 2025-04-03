import mentorshipImg from '../images/soft-sill-mentorship.png';
import creativityImg from '../images/soft-skill-creativity-innovation.png';
import teamworkImg from '../images/soft-skill-teamwork.png';
import communicationImg from '../images/soft-skills-communication.png';
import empathyImg from '../images/empathy.svg';
import feedbackImg from '../images/feedback.svg';
import knowledgeShareImg from '../images/knowledge-share.svg';
import investigativeImg from '../images/investigative.svg';
import selfMotivatedImg from '../images/self-motivated.svg';
import gitImg from '../images/git-logo.png';
import gitHubImg from '../images/github-logo.png';
import bashIgm from '../images/bash-shell-logo.png';
import dockerImg from '../images/docker-logo.png';
import linuxImg from '../images/unix.png';
import jenkinsImg from '../images/jenkins-logo.png';
import pythonImg from '../images/python-logo.png';
import djangoImg from '../images/django.png';
import javaImg from '../images/java-logo.png';
import restImg from '../images/restfull-api.png';
import springFrameworkImg from '../images/spring-framework.png';
import graphQLImg from '../images/graphql-query.png';
import apolloImg from "../images/apollo.png";
import typescriptImg from '../images/typescript.png';
import htmlImg from "../images/html5.png";
import javascriptImg from '../images/javascript.png';
import cssImag from "../images/css3.png";
import reactImg from '../images/react-logo.png';
import postgreImg from '../images/postgresql-logo.png';
import mysqlImg from '../images/mysql.png';
import bootstrapImg from '../images/bootstrap.png';
import tailwindImg from '../images/tailwind.svg';
import jestImg from '../images/jest.svg';
import cypressImg from '../images/cypress.svg';
import jiraImg from "../images/jira.svg";
import confluenceImg from "../images/confluence.svg";

const SKILL_TYPE = {
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  API: "API",
  DEVOPS: "DevOps",
  COLLABORATION: "Collaboration",
  TESTING: "Testing",
  LINUX: "Linux",
  DATABASE: "Database"
}

export const SKILLS = {
  "soft": [
    {
      image: mentorshipImg,
      title: "Mentorship",
      description:
        "Mentoring is one of my passions. I've mentored co-ops at Tasktop and I felt in love with guiding and nurserishing younger minds.",
    },
    {
      image: creativityImg,
      title: 'Creativity',
      description:
        "I always try to think outside the box. I've created a innovative way to transfer knowledge and to lead discussions while bringing everyone torwards to speak their minds.",
    },
    {
      image: teamworkImg,
      title: "Teamwork",
      description:
        "I've facilitated weekly deployment process, updated documentation, transferred knowledge to another team to ensure smooth operations. I've lead discussions about how to best design and code GraphQL APIs using Django.",
    },
    {
      image: communicationImg,
      title: "Communication",
      description:
        "I've talked to more senior developers about how to communicate better with juniors and how to express their feedback more respectfully and considered.",
    },
    {
      image: empathyImg,
      title: "Empathy",
      description:
        "I am always kind to all, no matter their backgroung. I expect the best in people and try to know the best way to treat each person like they want to be treated, not like I think it's the best. Each of us has our own path and history. What makes sense to me may not make sense to you.",
    },
    {
      image: feedbackImg,
      title: "Constructive Feedback",
      description:
        "I try to find the best timing and best way of deliver feedback. I always correct people in private. I always compliment in public. Giving constructive feedback is not just saying what is wrong, but finding out we can do to get better together, as a team.",
    },
    {
      image: selfMotivatedImg,
      title: "Self-Motivation",
      description:
        "I love learning! I am always learning a new language, new technology, or new hobby. I'm constantly updading this portfolio with new projects where I can expand my capacities.",
    },
    {
      image: investigativeImg,
      title: "Investigative",
      description:
        "At Arctic Wolf, I refactored 1,600+ lines of legacy Golang integration tests. At Tasktop, I investigated and fixed false positive tests improving test confiability and effectiveness.",
    },
    {
      image: knowledgeShareImg,
      title: "Knowledge Sharing",
      description:
        "I organized and lead knowledge share meetings on deployment proccess, and paired up with colleagues to share knowledge about DjangoObjectType, customise fields, and related Models.",
    },
  ],
  "tech": [
    {
      image: gitImg,
      types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.COLLABORATION],
      title: "Git"
    }, {
      image: gitHubImg,
      types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.COLLABORATION],
      title: "GitHub"
    }, {
      image: jiraImg,
      types: [SKILL_TYPE.COLLABORATION],
      title: "Jira"
    }, {
      image: confluenceImg,
      types: [SKILL_TYPE.COLLABORATION],
      title: "Confluence"
    }, {
      image: bashIgm,
      types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.LINUX],
      title: "Bash"
    }, {
      image: dockerImg,
      types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.LINUX],
      title: "Docker"
    }, {
      image: linuxImg,
      types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.LINUX],
      title: "Linux"
    }, {
      image: jenkinsImg,
      types: [SKILL_TYPE.DEVOPS, SKILL_TYPE.LINUX],
      title: "Jenkins"
    }, {
      image: pythonImg,
      types: [SKILL_TYPE.BACKEND],
      title: "Python"
    }, {
      image: djangoImg,
      types: [SKILL_TYPE.BACKEND],
      title: "Django"
    }, {
      image: javaImg,
      types: [SKILL_TYPE.BACKEND],
      title: "Java"
    }, {
      image: springFrameworkImg,
      types: [SKILL_TYPE.BACKEND],
      title: "Spring"
    }, {
      image: restImg,
      types: [SKILL_TYPE.API],
      title: "REST"
    }, {
      image: graphQLImg,
      types: [SKILL_TYPE.API],
      title: "GraphQL"
    }, {
      image: apolloImg,
      types: [SKILL_TYPE.FRONTEND],
      title: "Apollo"
    }, {
      image: typescriptImg,
      types: [SKILL_TYPE.FRONTEND],
      title: "Typescript"
    }, {
      image: htmlImg,
      types: [SKILL_TYPE.FRONTEND],
      title: "HTML5"
    }, {
      image: javascriptImg,
      types: [SKILL_TYPE.FRONTEND],
      title: "Javascript"
    }, {
      image: cssImag,
      types: [SKILL_TYPE.FRONTEND],
      title: "CSS3"
    }, {
      image: tailwindImg,
      types: [SKILL_TYPE.FRONTEND],
      title: "Tailwind"
    }, {
      image: reactImg,
      types: [SKILL_TYPE.FRONTEND],
      title: "React"
    }, {
      image: bootstrapImg,
      types: [SKILL_TYPE.FRONTEND],
      title: "Bootstrap"
    }, {
      image: postgreImg,
      types: [SKILL_TYPE.DATABASE, SKILL_TYPE.BACKEND],
      title: "PostgreSQL"
    }, {
      image: mysqlImg,
      types: [SKILL_TYPE.DATABASE, SKILL_TYPE.BACKEND],
      title: "MySQL"
    }, {
      image: cypressImg,
      types: [SKILL_TYPE.TESTING, SKILL_TYPE.FRONTEND],
      title: "Cypress"
    }, {
      image: jestImg,
      types: [SKILL_TYPE.TESTING, SKILL_TYPE.FRONTEND],
      title: "Jest"
    }
  ]
};

export const CONTACT = {
  GitHub: {
    title: "GitHub",
    url: "https://github.com/laislodi/"
  },
  LinkedIn: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/laislodi/"
  },
  email: {
    title: "Email",
    url: "mailto:gabriellelodi@gmail.com"
  },
  phone: {
    title: "Phone",
    url: "tel:+1(778)513-2710"
  }
};

