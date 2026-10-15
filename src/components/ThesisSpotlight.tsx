import { resume } from "@/data/resume";

export function ThesisSpotlight() {
  return (
    <section id="thesis" className="thesis-section section">
      <div className="container">
        <div className="thesis-shell" data-reveal>
          <div className="thesis-copy">
            <p className="eyebrow">{resume.thesis.eyebrow}</p>
            <div className="approved-line">
              <span className="approved-mark" aria-hidden="true">✓</span>
              {resume.thesis.status}
            </div>
            <h2>{resume.thesis.title}</h2>
            <p className="thesis-lede">{resume.thesis.description}</p>
            <div className="thesis-actions">
              <a className="button primary" href={resume.thesis.checkerUrl} target="_blank" rel="noreferrer">
                Try Thesis ER <span aria-hidden="true">↗</span>
              </a>
              <a className="button secondary" href={resume.thesis.sourceUrl} target="_blank" rel="noreferrer">
                Read the source
              </a>
            </div>
            <p className="thesis-note">{resume.thesis.checkerNote}</p>
          </div>

          <div className="thesis-machine" data-tilt aria-label="Diagram of the thesis system">
            <div className="machine-plane plane-back">
              <span>PHYSICAL SPACE</span>
              <div className="sensor-pip p1">RGB</div>
              <div className="sensor-pip p2">IR</div>
              <div className="sensor-pip p3">AUDIO</div>
            </div>
            <div className="machine-plane plane-mid">
              <span>EDGE FUSION</span>
              <div className="fusion-radar">
                <i /><i /><i />
              </div>
            </div>
            <div className="machine-plane plane-front">
              <span>DIGITAL TWIN</span>
              <strong>LIVE</strong>
              <small>LATENCY · TRACKING · DECISION</small>
            </div>
            <div className="machine-link link-a" />
            <div className="machine-link link-b" />
          </div>

          <div className="thesis-metrics">
            {resume.thesis.metrics.map((metric) => (
              <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
