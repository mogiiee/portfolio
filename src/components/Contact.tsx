import { resume } from "@/data/resume";

export function Contact() {
  return (
    <div className="contact-grid">
      <div className="card contact-card">
        <h3>Let’s build something secure and customer-first.</h3>
        <p>
          Open to client-facing engineering, forward deployed roles, and
          secure cloud systems that bridge business and technical teams.
        </p>
        <div className="contact-actions">
          <a className="button primary" href={resume.contact.linkedin}>
            Connect on LinkedIn
          </a>
          <a className="button secondary" href={resume.contact.github}>
            View GitHub
          </a>
        </div>
      </div>
      <div className="card contact-details">
        <div>
          <p className="eyebrow">Location</p>
          <p>{resume.location}</p>
        </div>
        <div>
          <p className="eyebrow">Email</p>
          <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
        </div>
        <div className="contact-links">
          <a href={resume.contact.linkedin}>LinkedIn</a>
          <a href={resume.contact.github}>GitHub</a>
        </div>
      </div>
    </div>
  );
}
