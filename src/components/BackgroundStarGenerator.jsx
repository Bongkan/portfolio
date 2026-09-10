import { useEffect, useState } from "react";

const BackgroundStarGenerator = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const numDots = 75;
    const newDots = Array.from({ length: numDots }, (_, i) => ({
      id: i,
      top: `${(Math.random() * 100).toFixed(2)}%`,
      left: `${(Math.random() * 100).toFixed(2)}%`,
      size: `${(Math.random() * 2 + 1.2).toFixed(1)}px`,
      delay: `${(Math.random() * 4).toFixed(2)}s`,
      duration: `${(Math.random() * 3 + 2).toFixed(2)}s`,
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="random-dots-container" aria-hidden="true">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="dot"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
            animationDuration: dot.duration,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundStarGenerator;
