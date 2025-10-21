'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface LineTypewriterProps {
  text: string;
  speed?: number; // milliseconds per line
  className?: string;
  threshold?: number;
  delay?: number;
}

export function LineTypewriter({ 
  text, 
  speed = 800, // Slower for premium feel
  className,
  threshold = 0.3,
  delay = 0.1 // Reduced from 0 to start faster
}: LineTypewriterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold 
  });
  
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // Split text into lines (by sentences or manual breaks)
  const lines = text.split('. ').map(line => line.trim()).filter(line => line.length > 0);

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
    if (hasStarted && currentLineIndex < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => [...prev, lines[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, lines, speed, hasStarted]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className={className}
    >
      {displayedLines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {line}{index < lines.length - 1 ? '. ' : ''}
        </motion.div>
      ))}
    </motion.div>
  );
}
