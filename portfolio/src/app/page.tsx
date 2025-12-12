import HeroSection from "@/components/sections/HeroSection";
import BasicSection from "@/components/sections/BasicSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TrainingSection from "@/components/sections/TrainingSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="pt-18">
      <HeroSection />

      <BasicSection id="about" title="About">
        <AboutSection />
      </BasicSection>

      <BasicSection id="skills" title="Skills">
        <SkillsSection />
      </BasicSection>

      <BasicSection id="projects" title="Projects">
        <ProjectsSection />
      </BasicSection>

      <BasicSection id="training" title="Training">
        <TrainingSection />
      </BasicSection>

      <BasicSection id="resume" title="Resume">
        <ResumeSection />
      </BasicSection>

      <BasicSection id="contact" title="">
        <ContactSection />
      </BasicSection>
    </main>
  );
}
