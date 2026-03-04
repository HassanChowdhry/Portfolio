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

export default function HomePage({ cmsData }) {
  const [isLoading, setLoading] = useState(true);
  const [fadeClass, setFadeClass] = useState(
    "animate__animated animate__fadeIn"
  );

  useEffect(() => {
    if (isLoading) {
      const toRef = setTimeout(() => {
        setFadeClass("animate__animated animate__fadeOut");
        setTimeout(() => {
          setLoading(false);
          setFadeClass("animate__animated animate__fadeIn");
        }, 650);
      }, 1000);
      return () => clearTimeout(toRef);
    }
  }, [isLoading]);

  const settings = cmsData?.settings;
  const socialLinks = cmsData?.socialLinks;
  const experiences = cmsData?.experiences;
  const projects = cmsData?.projects;

  return (
    <div className="min-h-[100vh] relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar resumeUrl={settings?.resumeUrl} />
        {isLoading ? (
          <div className={fadeClass}>
            <Loader />
          </div>
        ) : (
          <div className={fadeClass}>
            <Hero
              resumeUrl={settings?.resumeUrl}
              transcriptUrl={settings?.transcriptUrl}
              meetingLink={settings?.meetingLink}
            />
          </div>
        )}
      </div>

      <About
        aboutText={settings?.aboutText}
        socialLinks={socialLinks}
      />
      <Experience experiences={experiences} />
      <Works projects={projects} />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>

      <Widget />
    </div>
  );
}
