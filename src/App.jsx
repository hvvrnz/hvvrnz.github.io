import "./components.css";
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
      <Hero />
      <Origin />
      <Project />
      <APIOverview />
      <Architecture />
      <Troubleshooting />
      <Observability />
      <DesignInsights />
      <AIStory />
      <TechStack />
      <StudyNotes />
      <Footer />
    </>
  );
}
