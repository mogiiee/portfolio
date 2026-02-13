"use client";

import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const sections = document.querySelectorAll(".section, .hero");
    sections.forEach((section) => {
      section.classList.add("fade-in");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
