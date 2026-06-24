import "./components.css";
import Reveal from "./components/Reveal.jsx";
import Hero from "./components/Hero.jsx";
import Origin from "./components/Origin.jsx";
import Project from "./components/Project.jsx";
import APIOverview from "./components/APIOverview.jsx";
import Architecture from "./components/Architecture.jsx";
import Troubleshooting from "./components/Troubleshooting.jsx";
import Observability from "./components/Observability.jsx";
import DesignInsights from "./components/DesignInsights.jsx";
import AIStory from "./components/AIStory.jsx";
import TechStack from "./components/TechStack.jsx";
import StudyNotes from "./components/StudyNotes.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Reveal><Hero /></Reveal>
      <Reveal><Origin /></Reveal>
      <Reveal><Project /></Reveal>
      <Reveal><APIOverview /></Reveal>
      <Reveal><Architecture /></Reveal>
      <Reveal><Troubleshooting /></Reveal>
      <Reveal><Observability /></Reveal>
      <Reveal><DesignInsights /></Reveal>
      <Reveal><AIStory /></Reveal>
      <Reveal><TechStack /></Reveal>
      <Reveal><StudyNotes /></Reveal>
      <Footer />
    </>
  );
}
