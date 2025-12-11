import HeroSection from "@/components/sections/HeroSection";
import BasicSection from "@/components/sections/BasicSection";
import { sections } from "@/lib/data/sections";

export default function Home() {
  return (
    <main className="pt-18">
      <HeroSection />

      {sections.map((section) => (
        <BasicSection key={section.id} id={section.id} title={section.title} />
      ))}
    </main>
  );
}
