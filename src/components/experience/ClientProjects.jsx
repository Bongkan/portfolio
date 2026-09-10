import { useState, useEffect, useRef } from "react";
import { clientProjects } from "../portfolioData.js";

const ClientProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabsRef = useRef([]);
  const containerRef = useRef(null);

  const total = clientProjects.length;
  const current = clientProjects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Center the active project pill in the middle of the container whenever currentIndex changes
  useEffect(() => {
    const activeTab = tabsRef.current[currentIndex];
    const container = containerRef.current;
    if (activeTab && container) {
      const tabLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;
      const containerWidth = container.clientWidth;
      const scrollTarget = tabLeft - containerWidth / 2 + tabWidth / 2;

      container.scrollTo({
        left: scrollTarget,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="w-full h-full flex flex-col justify-between animation-fade-in text-slate-300">
      <div className="glass-panel w-full h-full rounded-2xl p-4 md:p-5 relative overflow-hidden flex flex-col justify-between">
        {/* Top neon accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400"></div>

        <div>
          {/* Header & Carousel Pagination Controls */}
          <div className="flex items-center justify-between gap-2 mb-2.5 md:mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-7 bg-emerald-400 rounded-full"></div>
              <div>
                <span className="text-xs font-grotesk uppercase tracking-wider text-emerald-400 font-semibold block">
                  Enterprise Engagements
                </span>
                <h2 className="text-xl md:text-2xl font-space font-bold text-white">
                  Client Projects
                </h2>
              </div>
            </div>

            {/* Carousel Navigation Buttons (< >) */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-grotesk text-slate-400 mr-1">
                {currentIndex + 1} / {total}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Previous project"
                className="w-8 h-8 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-emerald-400 text-white flex items-center justify-center font-grotesk font-bold transition-colors shadow-sm"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                aria-label="Next project"
                className="w-8 h-8 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-emerald-400 text-white flex items-center justify-center font-grotesk font-bold transition-colors shadow-sm"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Quick Select Pill Strip (Active highlighted tab always stays in the middle) */}
          <div
            ref={containerRef}
            className="flex items-center gap-2 overflow-x-auto pb-1.5 mb-2.5 md:mb-3 cyber-scrollbar scroll-smooth px-[calc(50%-2.5rem)]"
          >
            {clientProjects.map((p, idx) => (
              <button
                key={p.id}
                ref={(el) => (tabsRef.current[idx] = el)}
                onClick={() => setCurrentIndex(idx)}
                className={`px-3 py-1 rounded-lg text-xs font-grotesk shrink-0 transition-all border ${
                  idx === currentIndex
                    ? "bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-neon-green scale-105"
                    : "bg-slate-950/60 text-slate-300 border-white/10 hover:border-white/20"
                }`}
              >
                Proj {idx + 1}
              </button>
            ))}
          </div>

          {/* Active Client Project Carousel Slide */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/60 border border-white/10 animation-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 mb-2 border-b border-white/10">
              <div>
                <span className="text-xs font-grotesk text-emerald-400 font-semibold tracking-wider uppercase">
                  {current.client}
                </span>
                <h3 className="text-base md:text-lg font-bold text-white mt-0.5">
                  {current.project}
                </h3>
              </div>
              <span className="text-xs font-grotesk font-semibold px-2.5 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 shrink-0">
                {current.role}
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-2 leading-relaxed">
              {current.summary}
            </p>

            <h5 className="text-xs font-grotesk font-semibold tracking-wider text-slate-200 uppercase mb-1.5">
              Deliverables & Responsibilities
            </h5>
            <ul className="space-y-1 text-xs text-slate-300">
              {current.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                  <span className="text-emerald-400 font-bold text-xs mt-0.5">›</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Carousel Pagination Dots & Tags */}
        <div className="pt-2 mt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {current.tags.map((t, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/20 text-emerald-300 font-grotesk font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Indicator dots */}
          <div className="flex items-center gap-1.5 self-center sm:self-auto">
            {clientProjects.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  dotIdx === currentIndex
                    ? "w-5 bg-emerald-400 shadow-neon-green"
                    : "bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProjects;
