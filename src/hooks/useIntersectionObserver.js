// src/hooks/useIntersectionObserver.js
import { useState, useEffect } from "react";

export const useIntersectionObserver = (elementId) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    const element = document.getElementById(elementId);
    observer.observe(element);

    return () => observer.disconnect();
  }, [elementId]);

  return !isVisible;
};
