"use client";

import { useEffect } from "react";

export function InteractionController() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const paint = (event?: PointerEvent) => {
      if (event) {
        root.style.setProperty("--pointer-x", `${event.clientX / window.innerWidth - 0.5}`);
        root.style.setProperty("--pointer-y", `${event.clientY / window.innerHeight - 0.5}`);
      }
      root.style.setProperty("--scroll-y", `${window.scrollY}`);
      frame = 0;
    };

    const queuePointer = (event: PointerEvent) => {
      if (!frame) frame = requestAnimationFrame(() => paint(event));
    };
    const queueScroll = () => {
      if (!frame) frame = requestAnimationFrame(() => paint());
    };

    const tiltCleanups = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]")).map((card) => {
      const move = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--card-rx", `${-y * 7}deg`);
        card.style.setProperty("--card-ry", `${x * 9}deg`);
      };
      const reset = () => {
        card.style.setProperty("--card-rx", "0deg");
        card.style.setProperty("--card-ry", "0deg");
      };
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", reset);
      return () => {
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", reset);
      };
    });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true");
      }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((item) => observer.observe(item));

    paint();
    window.addEventListener("pointermove", queuePointer, { passive: true });
    window.addEventListener("scroll", queueScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", queuePointer);
      window.removeEventListener("scroll", queueScroll);
      if (frame) cancelAnimationFrame(frame);
      tiltCleanups.forEach((cleanup) => cleanup());
      observer.disconnect();
    };
  }, []);

  return null;
}
