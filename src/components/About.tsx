import { resume } from "@/data/resume";

export function About() {
  return (
    <div className="about-grid" data-reveal>
      {resume.about.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <div className="about-card" data-tilt>
        <p className="eyebrow">Current signal</p>
        <h3>{resume.currentFocus.title}</h3>
        <p>{resume.currentFocus.description}</p>
      </div>
    </div>
  );
}
