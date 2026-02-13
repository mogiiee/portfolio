import { resume } from "@/data/resume";

export function Certifications() {
  return (
    <div className="grid two-col">
      {resume.certifications.map((cert) => (
        <div key={cert.name} className="card">
          <h3>{cert.name}</h3>
          <p className="card-subtitle">{cert.issuer}</p>
          <div className="card-meta">
            <span>{cert.date}</span>
            {cert.url ? (
              <a href={cert.url} className="link">
                Credential
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
