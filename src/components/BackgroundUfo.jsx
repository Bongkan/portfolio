import { useState, useEffect, useRef } from "react";
import UfoSvg from "../assets/ufo-flying-svgrepo-com.svg";

const BackgroundUfo = () => {
  const [flight, setFlight] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const launchUfo = () => {
      // Random direction: true for left-to-right, false for right-to-left
      const leftToRight = Math.random() > 0.4;
      const startY = Math.floor(Math.random() * 60) + 15; // 15% to 75% vh
      const endY = Math.floor(Math.random() * 60) + 15;
      const duration = (Math.random() * 4 + 7).toFixed(1); // 7s to 11s
      const angle = leftToRight
        ? Math.atan2(endY - startY, 120) * (180 / Math.PI)
        : Math.atan2(endY - startY, -120) * (180 / Math.PI);

      setFlight({
        leftToRight,
        startY,
        endY,
        duration: Number(duration),
        angle: Math.max(-25, Math.min(25, angle)),
        key: Date.now(),
      });

      // Schedule next flight after current flight finishes + random interval (6-14s)
      const nextDelay = (Number(duration) + Math.random() * 8 + 6) * 1000;
      timerRef.current = setTimeout(launchUfo, nextDelay);
    };

    // First flight starts after a short initial delay (3 seconds)
    timerRef.current = setTimeout(launchUfo, 3000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!flight) return null;

  const { leftToRight, startY, endY, duration, angle, key } = flight;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <div
        key={key}
        className="absolute transition-transform select-none"
        style={{
          top: `${startY}vh`,
          left: leftToRight ? "-80px" : "calc(100vw + 80px)",
          animation: `flyAcross${leftToRight ? "Right" : "Left"} ${duration}s cubic-bezier(0.45, 0.05, 0.55, 0.95) forwards`,
          filter: "drop-shadow(0 0 10px rgba(0, 240, 118, 0.85)) drop-shadow(0 0 22px rgba(0, 240, 118, 0.45))",
        }}
      >
        <div
          style={{
            transform: `rotate(${angle}deg) ${leftToRight ? "" : "scaleX(-1)"}`,
          }}
          className="relative flex flex-col items-center"
        >
          {/* Green UFO Graphic */}
          <img
            src={UfoSvg}
            alt="Flying UFO"
            className="w-10 h-10 md:w-12 md:h-12 opacity-90 animate-pulse"
          />
          {/* Glowing Green Tractor / Exhaust Beam */}
          <div className="w-6 h-12 bg-gradient-to-b from-emerald-400/40 via-emerald-400/10 to-transparent blur-[2px] -mt-1 rounded-b-full"></div>
        </div>
      </div>

      <style>{`
        @keyframes flyAcrossRight {
          0% {
            transform: translate3d(0, 0, 0);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          90% {
            opacity: 0.9;
          }
          100% {
            transform: translate3d(calc(100vw + 160px), ${endY - startY}vh, 0);
            opacity: 0;
          }
        }
        @keyframes flyAcrossLeft {
          0% {
            transform: translate3d(0, 0, 0);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          90% {
            opacity: 0.9;
          }
          100% {
            transform: translate3d(calc(-100vw - 160px), ${endY - startY}vh, 0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundUfo;
