import { resume } from "@/data/resume";

export function Contact() {
  return (
    <div className="contact-grid" data-reveal>
      <div className="contact-card">
        <p className="eyebrow">Transmission open</p>
        <h3>{resume.contactPitch.title}</h3>
        <p>{resume.contactPitch.description}</p>
        <div className="contact-actions">
          <a className="button primary" href={resume.contact.linkedin}>
            Connect on LinkedIn
          </a>
          <a className="button secondary" href={resume.contact.github}>
            View GitHub
          </a>
        </div>
      </div>
      <div className="contact-details" data-tilt>
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
