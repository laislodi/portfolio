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

export const CONTACT = [
  {
    title: "GitHub",
    url: "https://github.com/laislodi/",
    img: (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
              <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
            </svg>)
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/laislodi/",
    img: (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
              <path d="M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M24,47h-5V27h5 V47z M24.029,23.009C23.382,23.669,22.538,24,21.5,24c-1.026,0-1.865-0.341-2.519-1.023S18,21.458,18,20.468 c0-1.02,0.327-1.852,0.981-2.498C19.635,17.323,20.474,17,21.5,17c1.038,0,1.882,0.323,2.529,0.969 C24.676,18.615,25,19.448,25,20.468C25,21.502,24.676,22.349,24.029,23.009z M47,47h-5V35.887C42,32.788,40.214,31,38,31 c-1.067,0-2.274,0.648-2.965,1.469S34,34.331,34,35.594V47h-5V27h5v3.164h0.078c1.472-2.435,3.613-3.644,6.426-3.652 C44.5,26.5,47,29.5,47,34.754V47z"></path>
            </svg>)
  },
  {
    title: "Email",
    url: "mailto:gabriellelodi@gmail.com",
    img: (<svg fill="#000000" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
              <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fillRule="evenodd"/>
            </svg>)
  },
  {
    title: "Phone",
    url: "tel:+1(778)513-2710",
    img: (<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
              <g>
                <path d="M84.96,70.237c-0.167-1.032-0.814-1.914-1.783-2.438l-14.335-8.446l-0.118-0.066
                  c-0.579-0.297-1.249-0.45-1.937-0.45c-1.201,0-2.348,0.455-3.144,1.253l-4.231,4.233c-0.181,0.172-0.771,0.421-0.95,0.43
                  c-0.049-0.004-4.923-0.355-13.896-9.329c-8.957-8.955-9.337-13.844-9.34-13.844c0.005-0.25,0.251-0.838,0.426-1.02l3.608-3.607
                  c1.271-1.274,1.652-3.386,0.898-5.022L32.19,16.938c-0.579-1.192-1.704-1.928-2.952-1.928c-0.883,0-1.735,0.366-2.401,1.031
                  l-9.835,9.813c-0.943,0.938-1.755,2.578-1.932,3.898c-0.086,0.631-1.831,15.693,18.819,36.346
                  C51.42,83.627,65.09,84.989,68.865,84.989l0,0c0.812,0,1.285-0.058,1.376-0.071c1.316-0.176,2.954-0.986,3.891-1.925l9.827-9.826
                  C84.761,72.361,85.127,71.296,84.96,70.237z"/>
              </g>
            </svg>)
  }
];

