import { resume } from "@/data/resume";

export function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-logo" href="#top">
          <span>AM</span>
          <small>Systems engineer<br />West Lafayette</small>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {resume.navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <span className="nav-time">UTC−4</span>
          <a className="nav-cta" href="#contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
