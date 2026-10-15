import { resume } from "@/data/resume";

export function Experience() {
  return (
    <div className="experience-track">
      {resume.experience.map((item, index) => (
        <article key={`${item.company}-${item.role}`} className="experience-card" data-reveal>
          <span className="experience-number">0{index + 1}</span>
          <div className="card-header">
            <div>
              <h3>{item.role}</h3>
              <p className="card-subtitle">{item.company}</p>
            </div>
            <div className="card-meta">
              <span>{item.location}</span>
              <span>{item.dates}</span>
            </div>
          </div>
          <ul>
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
