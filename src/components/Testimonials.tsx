import { resume } from "@/data/resume";

export function Testimonials() {
  return (
    <div className="grid two-col">
      {resume.testimonials.map((item) => (
        <div key={item.name} className="card testimonial-card">
          <p className="quote">“{item.quote}”</p>
          <div className="testimonial-meta">
            <span>{item.name}</span>
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
