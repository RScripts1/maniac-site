import HeroVideo from "./components/HeroVideo";
import StudioSection from "./components/StudioSection";
import ProjectsSection from "./components/ProjectsSection";
import ProcessSection from "./components/ProcessSection";
import FounderSection from "./components/FounderSection";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <main style={{ background: "#000000" }}>
      <HeroVideo />
      <StudioSection />
      <ProjectsSection />
      <ProcessSection />
      <FounderSection />
      <ClosingCTA />
    </main>
  );
}
