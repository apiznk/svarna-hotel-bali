"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // 1. Reveal on scroll using IntersectionObserver
    const revealElements = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    // 2. Premium inertia scroll handler (Optional, native alternative helper)
    // We already have scroll-smooth active, let's keep it lightweight.

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
