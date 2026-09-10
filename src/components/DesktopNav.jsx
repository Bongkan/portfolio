import Ufo from "../assets/ufo-flying-svgrepo-com.svg";
import { navSections } from "./portfolioData.js";

const DesktopNav = ({ activeSection, setActiveSection }) => {
  return (
    <div className="hidden md:flex items-center justify-center w-full relative z-40 select-none">
      <div className="glass-pill p-1.5 rounded-full flex items-center gap-1 border border-white/10 shadow-xl relative">
        {navSections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <div key={sec.id} className="relative flex flex-col items-center">
              {/* UFO & Soft Fuzzy Abduction Tractor Beam Fitted Exactly to Tab Width */}
              {isActive && (
                <div className="absolute -top-9 left-0 right-0 pointer-events-none flex flex-col items-center z-10">
                  {/* Hovering UFO Ship */}
                  <div className="animation-float flex flex-col items-center">
                    <img
                      src={Ufo}
                      alt="Hovering UFO"
                      className="w-6 h-6 drop-shadow-[0_0_8px_rgba(0,240,118,0.95)] filter brightness-110"
                    />
                    {/* Glowing Emitter Lens */}
                    <div className="w-2.5 h-1 bg-white rounded-full blur-[0.5px] -mt-0.5 shadow-[0_0_8px_#00f076]"></div>
                  </div>

                  {/* Soft Fuzzy Tractor Beam (Tailored from UFO down to exact tab width) */}
                  <div className="w-full h-7 -mt-0.5 relative flex items-center justify-center overflow-visible">
                    {/* Blurred / Fuzzy Ambient Beam Layer with SVG Gaussian Blur filter */}
                    <svg
                      className="w-full h-full overflow-visible opacity-75 animation-beam-pulse"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <filter id="softFuzzyGlow" x="-30%" y="-30%" width="160%" height="160%">
                          <feGaussianBlur stdDeviation="3" />
                        </filter>
                        <linearGradient id="fuzzyBeamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                          <stop offset="20%" stopColor="#00f076" stopOpacity="0.5" />
                          <stop offset="65%" stopColor="#10b981" stopOpacity="0.18" />
                          <stop offset="100%" stopColor="#00f076" stopOpacity="0.02" />
                        </linearGradient>
                      </defs>
                      <polygon
                        points="44,0 56,0 96,100 4,100"
                        fill="url(#fuzzyBeamGrad)"
                        filter="url(#softFuzzyGlow)"
                      />
                    </svg>

                    {/* Secondary Ethereal Core */}
                    <svg
                      className="absolute inset-0 w-full h-full overflow-visible opacity-60 animation-beam-pulse"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <filter id="softFuzzyCore" x="-30%" y="-30%" width="160%" height="160%">
                          <feGaussianBlur stdDeviation="1.5" />
                        </filter>
                        <linearGradient id="fuzzyCoreGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                          <stop offset="35%" stopColor="#a7f3d0" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#00f076" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <polygon
                        points="46,0 54,0 82,100 18,100"
                        fill="url(#fuzzyCoreGrad)"
                        filter="url(#softFuzzyCore)"
                      />
                    </svg>

                    {/* Gentle Rising Suction Rings */}
                    <div className="absolute inset-0 flex flex-col items-center justify-around pointer-events-none overflow-hidden">
                      <div className="w-2/3 h-0.5 rounded-full bg-emerald-300/40 blur-[0.8px] animation-ring-rise-1"></div>
                      <div className="w-1/2 h-0.5 rounded-full bg-cyan-200/50 blur-[0.6px] animation-ring-rise-2"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Tab Button (Crisp, High-Contrast Text on Top) */}
              <button
                type="button"
                onClick={() => setActiveSection(sec.id)}
                className={`relative px-4 py-1.5 rounded-full font-grotesk text-xs sm:text-sm font-bold tracking-normal transition-all duration-200 flex items-center gap-1.5 select-none z-30 ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-300 text-slate-950 shadow-[0_0_14px_rgba(0,240,118,0.5)] animation-abduct-lift"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className={`relative z-40 ${isActive ? "text-slate-950 font-black" : "text-slate-200"}`}>
                  {sec.label}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopNav;
