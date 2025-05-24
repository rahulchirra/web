import React, { useState, useEffect } from 'react';

const DigitalClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear interval on component unmount
    return () => {
      clearInterval(timerId);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      // Second can be removed for a cleaner look if preferred, but keeping for now
      second: '2-digit', 
      hour12: true,
    });
  };

  return (
    <div 
      className="font-hero-heading text-lg text-slate-300 px-3 py-2 rounded-md" 
      aria-label="Current time"
      role="timer"
      aria-live="polite"
    >
      {formatTime(currentTime)}
    </div>
  );
};

export default DigitalClock;