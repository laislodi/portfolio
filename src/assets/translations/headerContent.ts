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
      "fr-CA": "Développeuse Full Stack",
      es: "Desarrolladora Full Stack",
      "pt-BR": "Desenvolvedora Full Stack"
    }),
    aboutMe: t({
      en: "About me",
      "fr-CA": "À propos de moi",
      es: "Acerca de mí",
      "pt-BR": "Sobre mim"
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
    centrées sur l'utilisateur, dans des environnements dynamiques.`,
      es: `Hola, soy desarrolladora Full Stack con más de 5 años de experiencia en la creación de
    aplicaciones web a gran escala. Domino ReactJS, JavaScript, HTML y CSS. También tengo conocimientos
    de Java, Python, bases de datos relacionales, Docker, Jenkins, Linux y AWS. Soy una firme
    defensora de las mejores prácticas. Colaboradora y orientada a los datos, me apasiona ofrecer
    soluciones de alta calidad centradas en el usuario en entornos dinámicos.`,
      "pt-BR": `Oi, sou uma desenvolvedora Full Stack com mais de 5 anos de experiência na criação de
    aplicações web de grande escala. Tenho proficiência em ReactJS, JavaScript, HTML e CSS. Também possuo
    conhecimento em Java, Python, bancos de dados relacionais, Docker, Jenkins, Linux e AWS. Sou uma
    grande defensora das melhores práticas. Colaborativa e orientada a dados, sou apaixonada por
    entregar soluções de alta qualidade e centradas no usuário em ambientes dinâmicos.`
    }),
    linkedIn: "https://www.linkedin.com/in/laislodi/"
  }
} satisfies Dictionary<HeaderContent>;


