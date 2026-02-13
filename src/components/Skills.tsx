import { resume } from "@/data/resume";

export function Skills() {
  return (
    <div className="grid two-col">
      {resume.skills.map((group) => (
        <div key={group.title} className="card skill-card">
          <h3>{group.title}</h3>
          <div className="tag-list">
            {group.items.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
