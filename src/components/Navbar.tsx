import { resume } from "@/data/resume";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-logo" href="#top">
          {resume.name.split(" ")[0]}
          <span className="nav-dot">.</span>
        </a>
        <nav className="nav-links">
          {resume.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="nav-cta" href={resume.hero.ctaPrimary.href}>
            {resume.hero.ctaPrimary.label}
          </a>
        </div>
      </div>
    </header>
  );
}
