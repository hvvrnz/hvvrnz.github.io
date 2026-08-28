import "./components.css";
import { LanguageProvider } from "./i18n.jsx";
import LanguageToggle from "./components/LanguageToggle.jsx";
import Reveal from "./components/Reveal.jsx";
import Hero from "./components/Hero.jsx";
import Origin from "./components/Origin.jsx";
import Project from "./components/Project.jsx";
import Architecture from "./components/Architecture.jsx";
import Troubleshooting from "./components/Troubleshooting.jsx";
import Observability from "./components/Observability.jsx";
import DataInsights from "./components/DataInsights.jsx";
import DesignInsights from "./components/DesignInsights.jsx";
import AIStory from "./components/AIStory.jsx";
import HackathonRetro from "./components/HackathonRetro.jsx";
import TechStack from "./components/TechStack.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <LanguageToggle />
      <Reveal><Hero /></Reveal>
      <Reveal><Origin /></Reveal>
      <Reveal><Project /></Reveal>
      <Reveal><Architecture /></Reveal>
      <Reveal><Troubleshooting /></Reveal>
      <Reveal><Observability /></Reveal>
      <Reveal><DataInsights /></Reveal>
      <Reveal><DesignInsights /></Reveal>
      <Reveal><AIStory /></Reveal>
      <Reveal><HackathonRetro /></Reveal>
      <Reveal><TechStack /></Reveal>
      <Footer />
    </LanguageProvider>
  );
}
