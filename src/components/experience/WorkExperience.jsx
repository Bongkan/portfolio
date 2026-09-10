import { useState } from "react";
import { workExperiences } from "../portfolioData.js";

const WorkExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = workExperiences.length;
  const activeExp = workExperiences[currentIndex] || workExperiences[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full h-full flex flex-col justify-between animation-fade-in text-slate-300 overflow-hidden">
      <div className="glass-panel w-full h-full rounded-2xl p-3 sm:p-4 md:p-5 relative overflow-hidden flex flex-col justify-between">
        {/* Top neon accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400"></div>

        <div className="flex-1 min-h-0 flex flex-col justify-between">
          {/* Header & Carousel Navigation (< >) */}
          <div className="flex items-center justify-between gap-2 mb-2 sm:mb-2.5 md:mb-3 shrink-0">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-1.5 sm:w-2 h-5 sm:h-7 bg-emerald-400 rounded-full"></div>
              <div>
                <span className="text-[10px] sm:text-xs font-grotesk uppercase tracking-wider text-emerald-400 font-semibold block">
                  Career History
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-space font-bold text-white leading-tight">
                  Work Experience
                </h2>
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xs font-grotesk text-slate-400 mr-1">
                {currentIndex + 1} / {total}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Previous company"
                className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-emerald-400 text-white flex items-center justify-center font-grotesk font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                aria-label="Next company"
                className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-emerald-400 text-white flex items-center justify-center font-grotesk font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* On Mobile: Show Only 1 Active Company Card per Page */}
          <div className="block sm:hidden mb-1.5 shrink-0">
            <div className="p-1.5 rounded-xl border border-emerald-400 bg-slate-900/90 shadow-neon-green flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-black border border-white/15 p-0.5 flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src={activeExp.logo}
                  alt={`${activeExp.company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white truncate">
                    {activeExp.company}
                  </h4>
                  <span className="text-[10px] font-grotesk text-emerald-400 shrink-0 ml-1">
                    {activeExp.shortPeriod || activeExp.period}
                  </span>
                </div>
                <p className="text-[10px] text-emerald-300 font-medium truncate mt-0.5">
                  {activeExp.position}
                </p>
              </div>
            </div>
          </div>

          {/* On Desktop: Show Both Company Selector Cards */}
          <div className="hidden sm:grid sm:grid-cols-2 gap-2.5 mb-2.5 md:mb-3 shrink-0">
            {workExperiences.map((exp, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <div
                  key={exp.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`p-2.5 rounded-xl cursor-pointer transition-all duration-200 border flex items-center gap-3 ${isSelected
                    ? "bg-slate-900/90 border-emerald-400 shadow-neon-green"
                    : "bg-slate-950/50 border-white/10 hover:border-emerald-500/30 hover:bg-slate-900/50"
                    }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-black border border-white/15 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                        {exp.company}
                      </h4>
                      <span className="text-xs font-grotesk text-emerald-400 shrink-0 ml-1">
                        {exp.shortPeriod || exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-emerald-300 font-medium truncate mt-0.5">
                      {exp.position}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Experience Detail Dossier - Expands until domain position */}
          <div className="flex-1 min-h-0 p-2 sm:p-3.5 rounded-xl bg-slate-950/60 border border-white/10 animation-fade-in flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1 sm:pb-2 mb-1 sm:mb-2 border-b border-white/10 shrink-0">
              <div>
                <span className="text-[10px] sm:text-xs font-grotesk uppercase text-emerald-400 font-semibold tracking-wider">
                  {activeExp.badge} • {activeExp.location}
                </span>
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white mt-0.5">
                  {activeExp.position}
                </h3>
              </div>
              <span className="text-[10px] sm:text-xs font-grotesk px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 shrink-0 self-start sm:self-center">
                {activeExp.period}
              </span>
            </div>

            <div className="flex-1 min-h-0 flex flex-col overflow-y-auto cyber-scrollbar pr-1">
              <p className="text-[10.5px] sm:text-xs text-slate-300 mb-1.5 sm:mb-2 leading-relaxed">
                {activeExp.summary}
              </p>

              <div>
                <h5 className="text-[10px] sm:text-xs font-grotesk font-semibold tracking-wider text-slate-200 uppercase mb-1">
                  Key Responsibilities
                </h5>
                <ul className="space-y-1 sm:space-y-1.5 text-[10.5px] sm:text-xs text-slate-300">
                  {activeExp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-1 leading-snug sm:leading-relaxed">
                      <span className="text-emerald-400 font-bold text-xs mt-0.5 shrink-0">›</span>
                      <span className="whitespace-normal">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Footer */}
        <div className="pt-1.5 sm:pt-2 mt-1 sm:mt-2 border-t border-white/10 flex flex-wrap items-center gap-1 sm:gap-1.5 shrink-0">
          <span className="text-[10px] sm:text-xs font-grotesk text-slate-400 mr-1 uppercase">
            Domain:
          </span>
          {activeExp.tech.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/20 text-emerald-300 font-grotesk font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
