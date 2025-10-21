'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface CharacterTypewriterProps {
  text: string;
  speed?: number; // milliseconds per character
  className?: string;
  threshold?: number;
  delay?: number;
}

export function CharacterTypewriter({ 
  text, 
  speed = 100, // Slower for premium feel
  className,
  threshold = 0.3,
  delay = 0
}: CharacterTypewriterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold 
  });
  
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && !hasStarted) {
      // Add initial delay
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
      }, delay * 1000);
      
      return () => clearTimeout(startTimeout);
    }
  }, [isInView, hasStarted, delay]);

  useEffect(() => {
    if (hasStarted && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, hasStarted]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className={className}
    >
      {displayedText}
    </motion.span>
  );
}
