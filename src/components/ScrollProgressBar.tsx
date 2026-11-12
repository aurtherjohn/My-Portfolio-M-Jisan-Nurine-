import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring dampening for ultra-luxurious, jitter-free scroll indication
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2.5px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 origin-left shadow-[0_0_10px_rgba(6,182,212,0.8),0_0_3px_rgba(168,85,247,0.6)]"
        style={{ scaleX }}
      />
    </div>
  );
};
