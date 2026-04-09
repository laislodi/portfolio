import { t, type Dictionary } from "intlayer";


interface SoftSkillType {
  imagePath: string,
  title: string,
  description: string
}

interface SoftSkillsContent {
  sectionTitle: string,
  soft: SoftSkillType[]
}

export default {
  key: "soft_skills_content",
  content: {
    sectionTitle: t({
      en: "Soft Skills",
      "fr-CA": "Compétences générales"
    }),
    soft: [
      {
        imagePath: "softskills/mentorship.svg",
        title: t({
          en: "Mentorship",
          "fr-CA": "Mentorat"
        }),
        description: t({
          en: "Mentoring is one of my passions. I've mentored co-ops at Tasktop and I felt in love with guiding and nurserishing younger minds.",
          "fr-CA": "Le mentorat est une de mes passions. J'ai encadré des stagiaires chez Tasktop et j'ai adoré guider et accompagner les jeunes esprits."
        }),
      },
      {
        imagePath: "softskills/creativity.svg",
        title: t({
          en: "Creativity",
          "fr-CA": "Créativité"
        }),
        description: t({
          en: "I always try to think outside the box. I've created a innovative way to transfer knowledge and to lead discussions while bringing everyone towards to speak their minds.",
          "fr-CA": "J'essaie toujours de sortir des sentiers battus. J'ai créé une méthode innovante pour transmettre les connaissances et animer les discussions, tout en encourageant chacun à exprimer librement son opinion."
        }),
      },
      {
        imagePath: "softskills/teamwork.svg",
        title: t({
          en: "Teamwork",
          "fr-CA": "Travail d'équipe",
        }),
        description: t({
          en: "I've facilitated weekly deployment process, updated documentation, transferred knowledge to another team to ensure smooth operations. I've lead discussions about how to best design and code GraphQL APIs using Django.",
          "fr-CA": "J'ai facilité le processus de déploiement hebdomadaire, mis à jour la documentation et transféré les connaissances à une autre équipe afin d'assurer le bon déroulement des opérations. J'ai animé des discussions sur la conception et le développement optimaux d'API GraphQL avec Django."
        }),
      },
      {
        imagePath: "softskills/communication.svg",
        title: "Communication",
        description: t({
          en: "I've talked to more senior developers about how to communicate better with juniors and how to express their feedback more respectfully and considered.",
          "fr-CA": "J'ai discuté avec des développeurs plus expérimentés de la façon de mieux communiquer avec les développeurs juniors et d'exprimer leurs commentaires d'une manière plus respectueuse et réfléchie."
        }),
      },
      {
        imagePath: "softskills/empathy.svg",
        title: t({
          en: "Empathy",
          "fr-CA": "Empathie"
        }),
        description: t({
          en: "I am always kind to all, no matter their backgroung. I expect the best in people and try to know the best way to treat each person like they want to be treated, not like I think it's the best. Each of us has our own path and history. What makes sense to me may not make sense to you.",
          "fr-CA": "Je suis toujours bienveillant envers tous, peu importe leurs origines. J'attends le meilleur des gens et je m'efforce de les traiter comme ils le veulent, pas selon ce que je crois être le mieux. Chacun a son propre parcours et son histoire. Ce qui me semble logique ne l'est peut-être pas pour vous."
        }),
      },
      {
        imagePath: "softskills/feedback.svg",
        title: t({
          en: "Constructive Feedback",
          "fr-CA": "Feedback constructifs"
        }),
        description: t({
          en: "I try to find the best timing and best way of deliver feedback. I always correct people in private. I always compliment in public. Giving constructive feedback is not just saying what is wrong, but finding out we can do to get better together, as a team.",
          "fr-CA": "J'essaie de trouver le moment et la manière les plus pertinents pour donner du feedback. Je corrige toujours les gens en privé et je fais toujours des compliments en public. Donner une feedback constructive, ce n'est pas seulement pointer du doigt ce qui ne va pas, mais aussi identifier ensemble les axes d'amélioration, en équipe."
        }),
      },
      {
        imagePath: "softskills/self-motivated.svg",
        title: t({
          en: "Self-Motivation",
          "fr-CA": "Motivation Personnelle"
        }),
        description: t({
          en: "I love learning! I am always learning a new language, new technology, or new hobby. I'm constantly updating this portfolio with new projects where I can expand my capacities.",
          "fr-CA": "J'adore apprendre ! J'apprends constamment une nouvelle langue, une nouvelle technologie ou je m'adonne à un nouveau loisir. Je mets à jour ce portfolio régulièrement avec de nouveaux projets qui me permettent de développer mes compétences."
        }),
      },
      {
        imagePath: "softskills/investigative.svg",
        title: t({
          en: "Investigative",
          "fr-CA": "Enquêteur"
        }),
        description: t({
          en: "At Arctic Wolf, I refactored 1,600+ lines of legacy Golang integration tests. At Tasktop, I investigated and fixed false positive tests improving test confiability and effectiveness.",
          "fr-CA": "Chez Arctic Wolf, j'ai remanié plus de 1 600 lignes de tests d'intégration Golang existants. Chez Tasktop, j'ai analysé et corrigé les faux positifs, améliorant ainsi la fiabilité et l'efficacité des tests."
        }),
      },
      {
        imagePath: "softskills/knowledge-share.svg",
        title: t({
          en: "Knowledge Sharing",
          "fr-CA": "Partage des connaissances"
        }),
        description: t({
          en: "I organized and lead knowledge share meetings on deployment process, and paired up with colleagues to share knowledge about DjangoObjectType, customise fields, and related Models.",
          "fr-CA": "J'ai organisé et animé des réunions de partage de connaissances sur le processus de déploiement, et j'ai collaboré avec des collègues pour partager des connaissances sur DjangoObjectType, personnaliser les champs et les modèles associés."
        })
      },
    ]
  }

} satisfies Dictionary<SoftSkillsContent>;
