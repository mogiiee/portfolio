import { resume } from "@/data/resume";

export function Projects() {
  return (
    <div className="grid two-col">
      {resume.projects.map((project) => (
        <div key={project.name} className="card project-card">
          <div className="project-image">
            <img src={project.image} alt={project.name} />
          </div>
          <div className="project-content">
            <div className="card-meta">
              <span>{project.period}</span>
              <span>{project.location}</span>
            </div>
            <h3>{project.name}</h3>
            <p className="card-subtitle">{project.stack}</p>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
