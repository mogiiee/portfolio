import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, title, eyebrow, description, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section-header">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {description ? <p className="section-description">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
