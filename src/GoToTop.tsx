import React from "react";
import { useEffect, useState } from "react";
import "./styles/GoToTop.css";

interface GoToTopProps {
  className?: string;
}

const GoToTop = ({ className }: GoToTopProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dashOffset, setDashOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const progress = (scrollTop / (fullHeight - windowHeight)) * 100;
      setScrollProgress(progress);

      const newDashOffset = 305 * (1 - progress / 100);
      setDashOffset(newDashOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const visibilityClass = scrollProgress > 20 ? "visible" : "";

  return (
    <div
      className={`back-to-top ${visibilityClass} ${className ? className : ""}`}
      onClick={handleBackToTop}
    >
      <svg
        className=""
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
        fill="none"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          className="circle"
          style={{ strokeDashoffset: dashOffset }}
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2b4eff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </div>
  );
};

export default GoToTop;
