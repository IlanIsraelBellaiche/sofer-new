import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
  return {
    screenWidth,
    screenHeight,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;