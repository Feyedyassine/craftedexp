'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number; // milliseconds per character
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export function Typewriter({ 
  text, 
  speed = 50, 
  delay = 0, 
  className,
  onComplete 
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay }}
      className={className}
    >
      {displayedText}
      {currentIndex < text.length && (
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
