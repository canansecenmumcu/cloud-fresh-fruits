import React from 'react';
import { motion } from 'framer-motion';

// Fade Up
export const FadeUp = ({ children, duration = 0.6, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

// Fade Down
export const FadeDown = ({ children, duration = 0.6, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

// Fade Left
export const FadeLeft = ({ children, duration = 0.6, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

// Fade Right
export const FadeRight = ({ children, duration = 0.6, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);