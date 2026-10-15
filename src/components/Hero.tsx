import { resume } from "@/data/resume";

export function Hero() {
  const [firstName, middleName, ...surnameParts] = resume.name.split(" ");
  const surname = surnameParts.join(" ");

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-content" data-reveal>
          <div className="hero-status">
            <span className="live-dot" />
            {resume.hero.status}
          </div>
          <p className="eyebrow">{resume.hero.eyebrow}</p>
          <h1>
            <span className="hero-name">{firstName} {middleName}</span>
            <span className="hero-name outline">{surname}</span>
          </h1>
          <p className="hero-role">{resume.hero.role}</p>
          <p className="hero-summary">{resume.hero.description}</p>
          <div className="hero-cta">
            <a className="button primary" href={resume.hero.ctaPrimary.href}>
              {resume.hero.ctaPrimary.label} <span aria-hidden="true">↗</span>
            </a>
            <a className="button secondary" href={resume.hero.ctaSecondary.href}>
              {resume.hero.ctaSecondary.label}
            </a>
          </div>
          <div className="hero-stats">
            {resume.hero.stats.map((stat) => (
              <div key={stat.label} className="stat" data-tilt>
                <div>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual" data-reveal>
          <div className="command-orbit orbit-outer" />
          <div className="command-orbit orbit-inner" />
          <div className="command-core" data-tilt>
            <div className="core-side core-side-left">EDGE · CLOUD · FIELD</div>
            <div className="core-side core-side-bottom" />
            <div className="core-face">
              <div className="core-header">
                <span>AM / SYSTEMS</span>
                <span>2026</span>
              </div>
              <div className="portrait-frame">
                <img src={resume.images.headshot} alt={`${resume.name} in front of Purdue's Bell Tower`} />
                <span className="portrait-scan" />
              </div>
              <div className="core-readout">
                <span>SHIP / MEASURE / ITERATE</span>
                <strong>FIELD<br />SYSTEMS</strong>
              </div>
            </div>
          </div>
          <div className="signal-chip chip-one"><span>01</span> EDGE AI</div>
          <div className="signal-chip chip-two"><span>02</span> CLOUD</div>
          <div className="signal-chip chip-three"><span>03</span> DIGITAL TWIN</div>
        </div>
      </div>
      <div className="hero-marquee" aria-hidden="true">
        <span>FORWARD DEPLOYED ENGINEERING · EDGE AI · CLOUD SYSTEMS · DIGITAL TWINS · </span>
        <span>FORWARD DEPLOYED ENGINEERING · EDGE AI · CLOUD SYSTEMS · DIGITAL TWINS · </span>
      </div>
    </section>
  );
}
