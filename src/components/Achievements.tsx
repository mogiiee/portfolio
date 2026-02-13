import { resume } from "@/data/resume";

export function Achievements() {
  return (
    <div className="achievements-grid">
      {resume.achievements.map((item) => (
        <div key={item.label} className="achievement-card">
          <div className="achievement-icon">{item.icon}</div>
          <div className="achievement-metric">{item.metric}</div>
          <div className="achievement-label">{item.label}</div>
          <p className="achievement-desc">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
