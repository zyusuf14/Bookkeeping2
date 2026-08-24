"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  direction?: "left" | "right" | "up";
};

export default function Reveal({
  children,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hiddenPosition =
    direction === "left"
      ? "-translate-x-20"
      : direction === "right"
      ? "translate-x-20"
      : "translate-y-12";

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${hiddenPosition} opacity-0`
      }`}
    >
      {children}
    </div>
  );
}