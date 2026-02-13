import { resume } from "@/data/resume";

export function Experience() {
  return (
    <div className="stack">
      {resume.experience.map((item) => (
        <div key={`${item.company}-${item.role}`} className="card experience-card">
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
        </div>
      ))}
    </div>
  );
}
