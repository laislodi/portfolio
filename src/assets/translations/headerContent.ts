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
      "fr-CA": "À propos de moi"
    }),
    summary: t({
      en: `Hello, I am a Full Stack Developer with 5+ years of experience building large-scale web 
    applications. Proficient in ReactJS, JavaScript, HTML, and CSS. Also knowledgeable in 
    Java, Python, relational databases, Docker, Jenkins, Linux environments and AWS. A 
    strong advocate for best practices. Collaborative and data-driven, passionate about 
    delivering high-quality, user-centred solutions in dynamic environments.`,
      "fr-CA": `Bonjour, je suis une Développeuse Full Stack avec plus de 5 ans d'expérience dans le développement 
      d'applications Web à grande échelle. Je maîtrise ReactJS, JavaScript, HTML et CSS.
      En plus, je possède des connaissances en Java, Python, bases de données relationnelles, Docker, Jenkins, 
      environnements Linux et AWS. Ardente défenseuse des meilleures pratiques. Je suis collaborative 
      et axée sur les données, passionnée par la création de solutions de haute qualité, 
      centrées sur l'utilisateur, dans des environnements dynamiques.`
    }),
    linkedIn: "https://www.linkedin.com/in/laislodi/"
  }
} satisfies Dictionary<HeaderContent>;


