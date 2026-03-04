"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

export const Wrapper = ({fade, type, index, children, className }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
    };

    // Set initial value on mount
    handleResize();

    // Update on resize
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (<div>{children}</div>) : (
        <motion.div className={className} variants={fadeIn(fade, type, index * 0.4, 0.6)}>
            {children}
        </motion.div>
      )}
    </>
  )
}
