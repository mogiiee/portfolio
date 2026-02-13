import { resume } from "@/data/resume";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">{resume.location}</p>
          <h1>
            {resume.name}
            <span>{resume.title}</span>
          </h1>
          <p className="hero-summary">{resume.summary}</p>
          <div className="hero-cta">
            <a className="button primary" href={resume.hero.ctaPrimary.href}>
              {resume.hero.ctaPrimary.label}
            </a>
            <a className="button secondary" href={resume.hero.ctaSecondary.href}>
              {resume.hero.ctaSecondary.label}
            </a>
          </div>
          <div className="hero-stats">
            {resume.hero.stats.map((stat) => (
              <div key={stat.label} className="stat">
                <span className="stat-icon">{stat.icon}</span>
                <div>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <img
              src={resume.images.headshot}
              alt={`${resume.name} headshot`}
              className="hero-headshot"
            />
            <div>
              <p className="hero-tag">{resume.hero.tagline}</p>
              <div className="hero-links">
                <a href={resume.contact.linkedin}>LinkedIn</a>
                <a href={resume.contact.github}>GitHub</a>
              </div>
            </div>
          </div>
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="orb orb-three" />
        </div>
      </div>
      <p className="hero-footnote">* still no girlfriend</p>
    </section>
  );
}
