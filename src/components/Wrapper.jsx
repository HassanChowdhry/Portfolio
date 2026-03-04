"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

export const Wrapper = ({fade, type, index, children, className }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 849px)');
    setIsMobile(mql.matches);

    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  if (isMobile) return <div>{children}</div>;

  return (
    <motion.div className={className} variants={fadeIn(fade, type, index * 0.4, 0.6)}>
      {children}
    </motion.div>
  );
}
