import { resume } from "@/data/resume";

export function Projects() {
  return (
    <div className="project-grid">
      {resume.projects.map((project, index) => (
        <article key={project.name} className="project-card" data-tilt data-reveal>
          <div className="project-image">
            <img src={project.image} alt={project.name} />
            <span className="project-index">0{index + 1}</span>
            <span className="project-status">SHIPPED</span>
          </div>
          <div className="project-content">
            <div className="card-meta">
              <span>{project.period}</span>
              <span>{project.location}</span>
            </div>
            <h3>{project.name}</h3>
            <p className="card-subtitle">{project.stack}</p>
            <ul>
              {project.highlights.slice(0, 3).map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
