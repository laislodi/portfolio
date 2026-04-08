import "./SoftSkills.css";

import { useIntlayer,  } from "react-intlayer";
import mentorshipImg from '../../assets/images/soft-sill-mentorship.png';
import creativityImg from '../../assets/images/soft-skill-creativity-innovation.png';
import teamworkImg from '../../assets/images/soft-skill-teamwork.png';
import communicationImg from '../../assets/images/soft-skills-communication.png';
import empathyImg from '../../assets/images/empathy.svg';
import feedbackImg from '../../assets/images/feedback.svg';
import knowledgeShareImg from '../../assets//images/knowledge-share.svg';
import investigativeImg from '../../assets/images/investigative.svg';
import selfMotivatedImg from '../../assets/images/self-motivated.svg';

export default function SoftSkills() {

  const skills = useIntlayer("soft_skills_content");

  const imageDictionary = {
    mentorship: mentorshipImg,
    creativity: creativityImg,
    teamwork: teamworkImg,
    communication: communicationImg,
    empathy: empathyImg,
    feedback: feedbackImg,
    knowledgeShare: knowledgeShareImg,
    investigative: investigativeImg,
    selfMotivated: selfMotivatedImg
  }

  return (
    <section id="soft-skills">
      <div className="max-width">
        <a href={"#soft-skills"} className="soft-skill-title-link">
          <h1>{skills.sectionTitle}</h1>
        </a>
        <ul>
          {skills.soft.map((skill) => {
            return (
            <li key={"soft" + skill.title.value}>
              <div className="skill-container">
                <div className="img-container">
                  <img 
                    className="text-color"
                    src={imageDictionary[skill.imageKey.value]}
                    alt={skill.title}
                  />
                </div>
              </div>
              <div className="skill-details">
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </div>
            </li>)
        })}
        </ul>
      </div>
    </section>
  )
}
