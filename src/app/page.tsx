import { Achievements } from "@/components/Achievements";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Section } from "@/components/Section";
import { Skills } from "@/components/Skills";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { resume } from "@/data/resume";

export default function HomePage() {
  return (
    <div>
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <Section id="education" title="Education" description="Academic background and credentials.">
        <Education />
      </Section>
      <Section id="about" title="About" description="The focus areas and principles behind my work.">
        <About />
      </Section>
      <Section id="skills" title="Skills" description="Tooling and platforms I work with daily.">
        <Skills />
      </Section>
      <Section id="experience" title="Experience" description="Recent roles spanning cloud, DevOps, and AI systems.">
        <Experience />
      </Section>
      <Section id="projects" title="Projects" description="Selected systems and research I have shipped.">
        <Projects />
      </Section>
      <Section id="gallery" title="Gallery" description="A small glimpse into my life.">
        <Gallery />
      </Section>
      <Section id="achievements" title="Achievements" description="Measurable impact across cloud, DevOps, and AI.">
        <Achievements />
      </Section>
      <Section id="contact" title="Contact" description="Let's connect and build something great.">
        <Contact />
      </Section>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {resume.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
