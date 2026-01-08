// components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "auto" or "smooth"
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Use 'instant' for immediate scroll, 'smooth' for smooth scroll
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;