import { resume } from "@/data/resume";

export function About() {
  return (
    <div className="about-grid">
      {resume.about.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <div className="about-card">
        <p className="eyebrow">Currently</p>
        <h3>Open to impactful engineering work</h3>
        <p>
          Interested in cloud platforms, CI/CD pipeline automation, AI-driven bots, and customer retention engineering.
          Available for full-time roles, research collaborations, and consulting.
        </p>
      </div>
    </div>
  );
}
