import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../constants';

export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize.width < BREAKPOINTS.SM;
  const isTablet = windowSize.width >= BREAKPOINTS.SM && windowSize.width < BREAKPOINTS.LG;
  const isDesktop = windowSize.width >= BREAKPOINTS.LG;

  return {
    windowSize,
    isMobile,
    isTablet,
    isDesktop,
    breakpoints: BREAKPOINTS,
  };
};
