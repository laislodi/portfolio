import "./styles.css";
import Header from "./components/Header";
// import MenuTabs from "./components/MenuTabs";
import { useState } from "react";
import MenuTabs from "./components/MenuTabs";

type Content = {
  title: string,
  content: string[]
}

const data: Content[] = [
  {
    title: "Why React?",
    content: [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem"
    ]
  },
  {
    title: "Core Features",
    content: [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering"
    ]
  },
  {
    title: "Related Resources",
    content: [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)"
    ]
  },
  {
    title: "React vs JS",
    content: [
      "Vanilla JavaScript requires imperative programming",
      "Imperative Programming: You define all the steps needed to achieve a result",
      "React on the other hand embraces declarative programming",
      "With React, you define the goal and React figures out how to get there"
    ]
  }
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <Header />
      <MenuTabs />
    </div>
  );
}
