"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  Loader,
} from "@/src/components";
import Widget from "@/src/components/Widget";
import "animate.css";

const StarsCanvas = dynamic(() => import("@/src/components/canvas/Stars"), {
  ssr: false,
});

export default function HomePage() {
  const [isLoading, setLoading] = useState(true);
  const [fadeClass, setFadeClass] = useState(
    "animate__animated animate__fadeIn"
  );

  useEffect(() => {
    let innerTimeoutId;
    if (isLoading) {
      const toRef = setTimeout(() => {
        setFadeClass("animate__animated animate__fadeOut");
        innerTimeoutId = setTimeout(() => {
          setLoading(false);
          setFadeClass("animate__animated animate__fadeIn");
        }, 650);
      }, 1000);
      return () => {
        clearTimeout(toRef);
        clearTimeout(innerTimeoutId);
      };
    }
  }, [isLoading]);

  return (
    <div className="min-h-[100vh] relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        {isLoading ? (
          <div className={fadeClass}>
            <Loader />
          </div>
        ) : (
          <div className={fadeClass}>
            <Hero />
          </div>
        )}
      </div>

      <About />
      <Experience />
      <Works />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>

      <Widget />
    </div>
  );
}
