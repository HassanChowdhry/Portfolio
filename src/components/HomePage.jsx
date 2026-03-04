"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
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

const StarsCanvas = dynamic(() => import("@/src/components/canvas/Stars"), {
  ssr: false,
});

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export default function HomePage({ cmsData }) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  const settings = cmsData?.settings;
  const socialLinks = cmsData?.socialLinks;
  const experiences = cmsData?.experiences;
  const projects = cmsData?.projects;

  return (
    <div className="min-h-[100vh] relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar resumeUrl={settings?.resumeUrl} />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Loader />
            </motion.div>
          ) : (
            <motion.div
              key="hero"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
            >
              <Hero
                resumeUrl={settings?.resumeUrl}
                transcriptUrl={settings?.transcriptUrl}
                meetingLink={settings?.meetingLink}
              />
            </motion.div>
          )}
        </AnimatePresence>
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
