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
      "fr-CA": "Compétences générales",
      es: "Habilidades blandas",
      "pt-BR": "Habilidades interpessoais"
    }),
    soft: [
      {
        imagePath: "softskills/mentorship.svg",
        title: t({
          en: "Mentorship",
          "fr-CA": "Mentorat",
          es: "Mentoría",
          "pt-BR": "Mentoria"
        }),
        description: t({
          en: "Mentoring is one of my passions. I've mentored co-ops at Tasktop and I fell in love with guiding and nourishing younger minds.",
          "fr-CA": "Le mentorat est une de mes passions. J'ai encadré des stagiaires chez Tasktop et j'ai adoré guider et accompagner les jeunes esprits.",
          es: "La mentoría es una de mis pasiones. He sido mentora de estudiantes en prácticas en Tasktop y me enamoré de guiar y nutrir las mentes jóvenes.",
          "pt-BR": "A mentoria é uma das minhas paixões. Já fui mentor de estagiários na Tasktop e me apaixonei por orientar e nutrir mentes mais jovens."
        }),
      },
      {
        imagePath: "softskills/creativity.svg",
        title: t({
          en: "Creativity",
          "fr-CA": "Créativité",
          es: "Creatividad",
          "pt-BR": "Criatividade"
        }),
        description: t({
          en: "I always try to think outside the box. I've created an innovative way to transfer knowledge and to lead discussions while bringing everyone to speak their minds.",
          "fr-CA": "J'essaie toujours de sortir des sentiers battus. J'ai créé une méthode innovante pour transmettre les connaissances et animer les discussions, tout en encourageant chacun à exprimer librement son opinion.",
          es: "Siempre intento pensar de forma innovadora. He creado una manera original de transmitir conocimientos y dirigir debates, animando a todos a expresar sus opiniones.",
          "pt-BR": "Sempre tento pensar fora da caixa. Criei uma forma inovadora de transmitir conhecimento e conduzir discussões, incentivando todos a expressarem suas opiniões."
        }),
      },
      {
        imagePath: "softskills/teamwork.svg",
        title: t({
          en: "Teamwork",
          "fr-CA": "Travail d'équipe",
          es: "Trabajo en equipo",
          "pt-BR": "Trabalho em equipe"
        }),
        description: t({
          en: "I've facilitated weekly deployment process, updated documentation, transferred knowledge to another team to ensure smooth operations. I've led discussions about how to best design and code GraphQL APIs using Django.",
          "fr-CA": "J'ai facilité le processus de déploiement hebdomadaire, mis à jour la documentation et transféré les connaissances à une autre équipe afin d'assurer le bon déroulement des opérations. J'ai animé des discussions sur la conception et le développement optimaux d'API GraphQL avec Django.",
          es: "He facilitado el proceso de despliegue semanal, actualizado la documentación y transferido conocimientos a otro equipo para garantizar el buen funcionamiento. He liderado debates sobre la mejor manera de diseñar y programar API GraphQL con Django.",
          "pt-BR": "Facilitei o processo de implantação semanal, atualizei a documentação e compartilhei conhecimento com outra equipe para garantir operações tranquilas. Lideri discussões sobre a melhor forma de projetar e codificar APIs GraphQL usando Django."
        }),
      },
      {
        imagePath: "softskills/communication.svg",
        title: t({
          en: "Communication",
          "fr-CA": "Communication",
          es: "Comunicación",
          "pt-BR": "Comunicação"
        }),
        description: t({
          en: "I've talked to more senior developers about how to communicate better with juniors and how to express their feedback more respectfully and considerately.",
          "fr-CA": "J'ai discuté avec des développeurs plus expérimentés de la façon de mieux communiquer avec les développeurs juniors et d'exprimer leurs commentaires d'une manière plus respectueuse et réfléchie.",
          es: "He hablado con desarrolladores más experimentados sobre cómo comunicarse mejor con los desarrolladores junior y cómo expresar sus comentarios de manera más respetuosa y considerada.",
          "pt-BR": "Conversei com desenvolvedores mais experientes sobre como se comunicar melhor com os juniores e como expressar o feedback deles de forma mais respeitosa e atenciosa."
        }),
      },
      {
        imagePath: "softskills/empathy.svg",
        title: t({
          en: "Empathy",
          "fr-CA": "Empathie",
          es: "Empatía",
          "pt-BR": "Empatia"
        }),
        description: t({
          en: "I am always kind to all, no matter their background. I expect the best in people and try to know the best way to treat each person like they want to be treated, not like I think it's the best. Each of us has our own path and history. What makes sense to me may not make sense to you.",
          "fr-CA": "Je suis toujours bienveillante envers tous, peu importe leurs origines. Je crois au meilleur en chacun et je m'efforce de les traiter comme ils le veulent, pas selon ce que je crois être le mieux. Chacun a son propre parcours et son histoire. Ce qui me semble logique ne l'est peut-être pas pour vous.",
          es: "Siempre soy amable con todos, sin importar su origen. Espero lo mejor de las personas y trato de tratar a cada una como se merecen, no como yo creo que es la mejor manera. Cada uno tiene su propio camino e historia. Lo que para mí tiene sentido, puede que para ti no.",
          "pt-BR": "Sempre sou gentil com todos, independentemente de sua origem. Espero o melhor das pessoas e tento encontrar a melhor maneira de tratar cada uma, da forma como elas desejam ser tratadas, e não da maneira que eu acho melhor. Cada um de nós tem seu próprio caminho e história. O que faz sentido para mim pode não fazer sentido para você."
        }),
      },
      {
        imagePath: "softskills/feedback.svg",
        title: t({
          en: "Constructive Feedback",
          "fr-CA": "Feedback constructif",
          es: "Feedback constructivo",
          "pt-BR": "Feedback construtivo"
        }),
        description: t({
          en: "I try to find the best timing and the best way to give feedback. I always correct people in private. I always compliment in public. Giving constructive feedback is not just saying what is wrong, but finding out what we can do to get better together, as a team.",
          "fr-CA": "J'essaie de trouver le moment et la manière les plus pertinents pour donner du feedback. Je corrige toujours les gens en privé et je fais toujours des compliments en public. Donner un feedback constructif, ce n'est pas seulement pointer du doigt ce qui ne va pas, mais aussi identifier ensemble les axes d'amélioration, en équipe.",
          es: "Intento encontrar el momento y la manera más adecuados para dar retroalimentación. Siempre corrijo en privado y siempre felicito en público. Dar retroalimentación constructiva no se trata solo de señalar los errores, sino de descubrir cómo podemos mejorar juntos, como equipo.",
          "pt-BR": "Procuro encontrar o melhor momento e a melhor forma de dar feedback. Sempre corrijo as pessoas em particular. Sempre elogio em público. Dar feedback construtivo não é apenas apontar o que está errado, mas descobrir o que podemos fazer para melhorar juntos, como equipe."
        }),
      },
      {
        imagePath: "softskills/self-motivated.svg",
        title: t({
          en: "Self-Motivation",
          "fr-CA": "Motivation personnelle",
          es: "Automotivación",
          "pt-BR": "Automotivação"
        }),
        description: t({
          en: "I love learning! I am always learning a new language, new technology, or new hobby. I'm constantly updating this portfolio with new projects where I can expand my capacities.",
          "fr-CA": "J'adore apprendre! J'apprends constamment une nouvelle langue, une nouvelle technologie ou je m'adonne à un nouveau loisir. Je mets à jour ce portfolio régulièrement avec de nouveaux projets qui me permettent de développer mes compétences.",
          es: "¡Me encanta aprender! Siempre estoy aprendiendo un nuevo idioma, una nueva tecnología o una nueva afición. Constantemente actualizo este portafolio con nuevos proyectos donde puedo ampliar mis capacidades.",
          "pt-BR": "Eu amo aprender! Estou sempre aprendendo um novo idioma, uma nova tecnologia ou um novo hobby. Estou constantemente atualizando este portfólio com novos projetos onde posso expandir minhas habilidades."
        }),
      },
      {
        imagePath: "softskills/investigative.svg",
        title: t({
          en: "Investigative",
          "fr-CA": "Esprit investigateur",
          es: "Investigativa",
          "p-BR": "Investigativa"
        }),
        description: t({
          en: "At Arctic Wolf, I refactored 1,600+ lines of legacy Golang integration tests. At Tasktop, I investigated and fixed false positive tests improving test reliability and effectiveness.",
          "fr-CA": "Chez Arctic Wolf, j'ai remanié plus de 1 600 lignes de tests d'intégration Golang existants. Chez Tasktop, j'ai analysé et corrigé les faux positifs, améliorant ainsi la fiabilité et l'efficacité des tests.",
          es: "En Arctic Wolf, refactoricé más de 1600 líneas de pruebas de integración heredadas de Golang. En Tasktop, investigué y corregí pruebas que generaban falsos positivos, mejorando así la fiabilidad y la eficacia de las pruebas.",
          "pt-BR": "Na Arctic Wolf, refatorei mais de 1.600 linhas de testes de integração legados em Golang. Na Tasktop, investiguei e corrigi testes com falsos positivos, melhorando a confiabilidade e a eficácia dos testes."
        }),
      },
      {
        imagePath: "softskills/knowledge-share.svg",
        title: t({
          en: "Knowledge Sharing",
          "fr-CA": "Partage des connaissances",
          es: "intercambio de conocimientos",
          "pt-BR": "Troca de Conhecimento"
        }),
        description: t({
          en: "I organized and led knowledge share meetings on deployment process, and paired up with colleagues to share knowledge about DjangoObjectType, customize fields, and related Models.",
          "fr-CA": "J'ai organisé et animé des réunions de partage de connaissances sur le processus de déploiement, et j'ai collaboré avec des collègues pour partager des connaissances sur DjangoObjectType, personnaliser les champs et les modèles associés.",
          es: "Organicé y dirigí reuniones para compartir conocimientos sobre el proceso de implementación, y colaboré con mis colegas para compartir conocimientos sobre DjangoObjectType, campos personalizados y modelos relacionados.",
          "pt-BR": "Organizei e liderei reuniões de compartilhamento de conhecimento sobre o processo de implantação e trabalhei em conjunto com colegas para compartilhar conhecimento sobre DjangoObjectType, personalização de campos e modelos relacionados."
        })
      },
    ]
  }

} satisfies Dictionary<SoftSkillsContent>;
