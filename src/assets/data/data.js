import mentorshipImg from '../images/soft-sill-mentorship.png';
import creativityImg from '../images/soft-skill-creativity-innovation.png';
import teamworkImg from '../images/soft-skill-teamwork.png';
import communicationImg from '../images/soft-skills-communication.png';
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
import emailContactImg from "../images/social-medias/Email.png";
import gitHubContactImg from "../images/social-medias/GitHub.png";
import LinkedInImg from "../images/social-medias/LinkedIn.png";
import phoneImg from "../images/social-medias/Phone.png";

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
        "Always try to think outside the box. I've created a innovative way to transfer knowledge and to lead discussions while bringing everyone torwards to speak their minds.",
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
        "I talked to more senior developers about how to communicate better with juniors and how to express their feedback more respectfully and considered.",
    },
  ],
  "tech": [
    {
      image: gitImg,
      type: "generic",
      title: "Git"
    }, {
      image: gitHubImg,
      type: "generic",
      title: "GitHub"
    }, {
      image: bashIgm,
      type: "environment",
      title: "Bash"
    }, {
      image: dockerImg,
      type: "devops",
      title: "Docker"
    }, {
      image: linuxImg,
      type: "environment",
      title: "Linux"
    }, {
      image: jenkinsImg,
      type: "devops",
      title: "Jenkins"
    }, {
      image: pythonImg,
      type: "backend",
      title: "Python"
    }, {
      image: djangoImg,
      type: "backend",
      title: "Django"
    }, {
      image: javaImg,
      type: "backend",
      title: "Java"
    }, {
      image: springFrameworkImg,
      type: "backend",
      title: "Spring Framework"
    }, {
      image: restImg,
      type: "api",
      title: "REST"
    }, {
      image: graphQLImg,
      type: "api",
      title: "GraphQL"
    }, {
      image: apolloImg,
      type: "frontend",
      title: "Apollo"
    }, {
      image: typescriptImg,
      type: "frontend",
      title: "Typescript"
    }, {
      image: htmlImg,
      type: "frontend",
      title: "HTML5"
    },{
      image: javascriptImg,
      type: "frontend",
      title: "Javascript"
    }, {
      image: cssImag,
      type: "frontend",
      title: "CSS3"
    },{
      image: reactImg,
      type: "frontend",
      title: "React Library"
    }, {
      image: postgreImg,
      type: "database",
      title: "PostgreSQL"
    }, {
      image: mysqlImg,
      type: "database",
      title: "MySQL"
    }, {
      image: bootstrapImg,
      type: "frontend",
      title: "Bootstrap"
    }
  ]
};

export const CONTACT = [
  {
    image: gitHubContactImg,
    title: "GitHub",
    url: "https://github.com/laislodi/"
  },
  {
    image: LinkedInImg,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/laislodi/"
  },
  {
    image: emailContactImg,
    title: "Email",
    url: "mailto:gabriellelodi@gmail.com"
  },
  {
    image: phoneImg,
    title: "Phone",
    url: "tel:+1(778)513-2710"
  }
];

export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
