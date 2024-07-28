import React, { useEffect, useState } from "react";
import "../App.css";

const BackgroundStarGenerator = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateDots = () => {
      const numDots = 100;
      const newDots = Array.from({ length: numDots }, () => ({
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        size: `${Math.random() * 1 + 2}px`,
      }));
      setDots(newDots);
    };
    generateDots();
  }, []);

  return (
    <div className="random-dots-container">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="dot"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundStarGenerator;
