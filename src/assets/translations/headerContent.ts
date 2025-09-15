import { t, type Dictionary } from "intlayer";

interface HeaderContent {
  name: string,
  title: string,
  aboutMe: string,
  summary: string,
  linkedIn: string
}

export default {
  key: "header_content",
  content: {
    name: "Lais Gabrielle Lodi",
    title: t({
      en: "Full Stack Developer",
      "fr-CA": "Développeuse Full Stack"
    }),
    aboutMe: t({
      en: "About me",
      "fr-CA": "Sur moi"
    }),
    summary: t({
      en: `Hello, I am a Full Stack Developer with 5+ years of experience building large-scale web 
    applications. Proficient in ReactJS, Javascript, HTML, and CSS. Also knowledgeble in 
    Java, Python, Relational databases, Docker, Jenkins, Linux environments and AWS. A 
    strong advocate for best practices. Collaborative and data-driven, passionate about 
    delivering high-quality, user-centred solutions in dynamic environments.`,
      "fr-CA": `Salut, Je sui une Développeuse Full Stack avec plus de 5 ans d'expérience dans la création 
      d'applications Web à grande échelle. Maîtrise de ReactJS, Javascript, HTML et CSS. 
      Connaissance aussi en Java, Python, bases de données relationnelles, Docker, Jenkins, 
      environnements Linux et AWS. Une ardente défenseure des meilleures pratiques. Collaborative 
      et axée sur les données, passionnée par la fourniture de solutions de haute qualité, 
      centrées sur l'utilisateur, dans des environnements dynamiques.`
    }),
    linkedIn: "https://www.linkedin.com/in/laislodi/"
  }
} satisfies Dictionary<HeaderContent>;


