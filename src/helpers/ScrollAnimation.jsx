import React, { useEffect, useRef, useState } from "react";
import s from "./scrollAnimation.module.css";

const ScrollAnimation = ({ children, x, y }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      {React.Children.map(children, (child, index) => (
        <div
          style={{ transform: `translate(${x}% , ${y}% )` }}
          key={index}
          className={`${s.animation} ${isVisible ? s.visible : ""}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
