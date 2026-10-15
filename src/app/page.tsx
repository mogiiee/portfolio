import { Achievements } from "@/components/Achievements";
import { AmbientMap } from "@/components/AmbientMap";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { InteractionController } from "@/components/InteractionController";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Section } from "@/components/Section";
import { Skills } from "@/components/Skills";
import { ThesisSpotlight } from "@/components/ThesisSpotlight";
import { resume } from "@/data/resume";

export default function HomePage() {
  return (
    <div>
      <InteractionController />
      <AmbientMap />
      <Navbar />
      <Hero />
      <ThesisSpotlight />
      <Section id="projects" eyebrow="Selected systems" title="Built to leave the slide deck." description="Products, infrastructure, and applied AI that crossed the line into working systems.">
        <Projects />
      </Section>
      <Section id="experience" eyebrow="Field log" title="Experience" description="Roles where the work moved between customers, infrastructure, and deployed software.">
        <Experience />
      </Section>
      <Section id="achievements" eyebrow="By the numbers" title="Measured outcomes" description="A few useful signals from the systems and teams behind the work.">
        <Achievements />
      </Section>
      <Section id="skills" eyebrow="Capability map" title="Tools I reach for" description="The stack changes. The job stays the same: understand the system, find the bottleneck, ship the fix.">
        <Skills />
      </Section>
      <Section id="about" eyebrow="Operating principles" title="How I work" description="Close to the user, honest about constraints, and interested in systems that survive contact with reality.">
        <About />
      </Section>
      <Section id="education" eyebrow="Academic record" title="Education" description="The formal work behind the field work.">
        <Education />
      </Section>
      <Section id="gallery" eyebrow="Off the clock" title="A life outside terminals" description="People, places, and the occasional properly lit photograph.">
        <Gallery />
      </Section>
      <Section id="contact" eyebrow="Open channel" title="Let’s build something real." description="If the problem touches customers, infrastructure, or edge AI, I want to hear about it.">
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
