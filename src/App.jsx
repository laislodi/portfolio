import Header from "./components/Header/Header.jsx";
import { SKILLS } from "./assets/data/data";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Fragment } from "react/jsx-runtime";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Projects />
      <section id="experience">
        <h1>Experience</h1>
      </section>
      <section id="education">
        <h1>Education</h1>
      </section>
      <section id="skills">
        <Skills typeOfSkill="soft" skills={SKILLS.soft} />
        <Skills typeOfSkill="tech" skills={SKILLS.tech} />
      </section>
      <section id="contact">

      </section>
      <Footer/>
    </Fragment>
  );
}
