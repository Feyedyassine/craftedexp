'use client';

import React, { useRef, useState, useCallback } from 'react';

interface DualRangeSliderProps {
  min: number;
  max: number;
  step: number;
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
  formatValue?: (value: number) => string;
  className?: string;
}

export function DualRangeSlider({
  min,
  max,
  step,
  value,
  onChange,
  formatValue = (val) => val.toString(),
  className = '',
}: DualRangeSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeThumb, setActiveThumb] = useState<'min' | 'max' | null>(null);

  const getPercentage = (val: number) => {
    return ((val - min) / (max - min)) * 100;
  };

  const getValueFromPosition = useCallback((clientX: number) => {
    if (!sliderRef.current) return min;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    const rawValue = min + (percentage / 100) * (max - min);
    return Math.round(rawValue / step) * step;
  }, [min, max, step]);

  const handleMouseDown = useCallback((thumb: 'min' | 'max') => {
    setActiveThumb(thumb);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!activeThumb) return;
    
    const newValue = getValueFromPosition(e.clientX);
    const constrainedValue = Math.max(min, Math.min(max, newValue));
    
    if (activeThumb === 'min') {
      const newMin = Math.min(constrainedValue, value.max - step);
      if (newMin !== value.min) {
        onChange({ min: newMin, max: value.max });
      }
    } else {
      const newMax = Math.max(constrainedValue, value.min + step);
      if (newMax !== value.max) {
        onChange({ min: value.min, max: newMax });
      }
    }
  }, [activeThumb, value, step, min, max, getValueFromPosition, onChange]);

  const handleMouseUp = useCallback(() => {
    setActiveThumb(null);
  }, []);

  const handleTrackClick = useCallback((e: React.MouseEvent) => {
    if (activeThumb) return;
    
    const clickValue = getValueFromPosition(e.clientX);
    const distanceToMin = Math.abs(clickValue - value.min);
    const distanceToMax = Math.abs(clickValue - value.max);
    
    if (distanceToMax < distanceToMin) {
      const newMax = Math.max(clickValue, value.min + step);
      if (newMax !== value.max) {
        onChange({ min: value.min, max: newMax });
      }
    } else {
      const newMin = Math.min(clickValue, value.max - step);
      if (newMin !== value.min) {
        onChange({ min: newMin, max: value.max });
      }
    }
  }, [activeThumb, value, step, getValueFromPosition, onChange]);

  // Add global mouse events when dragging
  React.useEffect(() => {
    if (activeThumb) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [activeThumb, handleMouseMove, handleMouseUp]);

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Current Range Display */}
      <div className="text-center">
        <span className="text-lg font-semibold text-charcoal">
          {formatValue(value.min)} - {formatValue(value.max)}
        </span>
      </div>
      
      {/* Dual Range Slider */}
      <div className="relative" ref={sliderRef}>
        <div 
          className="relative h-2 bg-soft-gray rounded-lg cursor-pointer"
          onClick={handleTrackClick}
        >
          {/* Active range bar */}
          <div 
            className="absolute h-2 bg-charcoal rounded-lg"
            style={{
              left: `${getPercentage(value.min)}%`,
              width: `${getPercentage(value.max) - getPercentage(value.min)}%`
            }}
          />
          
          {/* Min thumb */}
          <div
            className="absolute w-5 h-5 bg-charcoal border-2 border-white rounded-full cursor-pointer shadow-lg transform -translate-x-1/2 -translate-y-1.5"
            style={{ left: `${getPercentage(value.min)}%` }}
            onMouseDown={() => handleMouseDown('min')}
          />
          
          {/* Max thumb */}
          <div
            className="absolute w-5 h-5 bg-charcoal border-2 border-white rounded-full cursor-pointer shadow-lg transform -translate-x-1/2 -translate-y-1.5"
            style={{ left: `${getPercentage(value.max)}%` }}
            onMouseDown={() => handleMouseDown('max')}
          />
        </div>
        
        {/* Range labels */}
        <div className="flex justify-between text-xs text-charcoal/70 mt-2">
          <span>{formatValue(min)}</span>
          <span>{formatValue(max)}</span>
        </div>
      </div>
    </div>
  );
}
