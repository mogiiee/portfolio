import { resume } from "@/data/resume";

export function Achievements() {
  return (
    <div className="achievements-grid">
      {resume.achievements.map((item) => (
        <div key={item.label} className="achievement-card" data-tilt data-reveal>
          <div className="achievement-metric">{item.metric}</div>
          <div className="achievement-label">{item.label}</div>
          <p className="achievement-desc">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
