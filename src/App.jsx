import "./components.css";
import Hero from "./components/Hero.jsx";
import Origin from "./components/Origin.jsx";
import Project from "./components/Project.jsx";
import Pipeline from "./components/Pipeline.jsx";
import Troubleshooting from "./components/Troubleshooting.jsx";
import DesignInsights from "./components/DesignInsights.jsx";
import AIStory from "./components/AIStory.jsx";
import TechStack from "./components/TechStack.jsx";
import Perseverance from "./components/Perseverance.jsx";
import StudyNotes from "./components/StudyNotes.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Hero />
      <Origin />
      <Project />
      <Pipeline />
      <Troubleshooting />
      <DesignInsights />
      <AIStory />
      <TechStack />
      <Perseverance />
      <StudyNotes />
      <Footer />
    </>
  );
}
