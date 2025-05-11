import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions = new Map<string, number>();

const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    // Save scroll position before navigating 
    const saveScrollPosition = () => {
      scrollPositions.set(pathname, window.scrollY);
    };

    window.addEventListener("beforeunload", saveScrollPosition);
    return () => {
      saveScrollPosition();
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, [location.pathname]);

  useEffect(() => {
    const pathname = location.pathname;
    const y = scrollPositions.get(pathname) || 0;
    window.scrollTo(0, y);
  }, [location.pathname]);

  return null;
};

export default ScrollRestoration;
