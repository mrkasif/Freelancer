import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import ProjectDashboard from "@/components/ProjectDashboard";
import About from "@/components/About";
import Estimator from "@/components/Estimator";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import StartProjectWizard from "@/components/StartProjectWizard";
import Contact from "@/components/Contact";
import GitHubSection from "@/components/GitHubSection";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  return (
    <>
      <CommandPalette />
      <Hero />
      <FeaturedWork />
      <ProjectDashboard />
      <About />
      <Estimator />
      <Process />
      <Pricing />
      <Services />
      <StartProjectWizard />
      <Contact />
      <GitHubSection />
    </>
  );
}