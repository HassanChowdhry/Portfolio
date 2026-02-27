"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

export const Wrapper = ({fade, type, index, children, className }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 850);
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
