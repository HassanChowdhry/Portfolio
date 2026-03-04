"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const defaultOptions = {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.15,
  scale: 1.04,
  perspective: 1000,
};

export default function useTilt(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    VanillaTilt.init(el, { ...defaultOptions, ...options });

    return () => el.vanillaTilt?.destroy();
  }, []);

  return ref;
}
