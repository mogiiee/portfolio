import { resume } from "@/data/resume";

export function Education() {
  return (
    <div className="grid two-col">
      {resume.education.map((item) => (
        <div key={item.school} className="card">
          <h3>{item.degree}</h3>
          <p className="card-subtitle">{item.school}</p>
          <div className="card-meta">
            <span>{item.location}</span>
            <span>{item.dates}</span>
          </div>
          <p className="muted">{item.details}</p>
        </div>
      ))}
    </div>
  );
}
