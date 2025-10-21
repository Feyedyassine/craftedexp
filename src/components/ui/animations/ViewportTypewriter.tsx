'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface ViewportTypewriterProps {
  text: string;
  speed?: number; // milliseconds per character
  className?: string;
  threshold?: number;
}

export function ViewportTypewriter({ 
  text, 
  speed = 50, 
  className,
  threshold = 0.3
}: ViewportTypewriterProps) {
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
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

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
      {hasStarted && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="ml-0.5"
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
}
