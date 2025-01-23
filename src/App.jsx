import Header from "./components/Header/Header.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Fragment } from "react/jsx-runtime";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Projects />
      <Experience />
      <section id="education">
        <h1>Education</h1>
      </section>
      <Skills typeOfSkill="soft" />
      <Skills typeOfSkill="tech" />
      <Footer/>
    </Fragment>
  );
}
