import { useState } from "react";
import { sapProjects } from "../portfolioData.js";

const Experience = ({ showCompany, setShowCompany }) => {
  const [mobileExpanded, setMobileExpanded] = useState(showCompany || "petro-cloud");

  // Select initial project if empty
  const activeId = showCompany || "petro-cloud";

  return (
    <div className="w-full h-full flex flex-col animation-fade-in cyber-scrollbar overflow-y-auto pr-1">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-6 bg-emerald-400 rounded-full"></div>
          <h3 className="font-space text-lg md:text-xl font-bold text-white tracking-wide">
            Enterprise Client Projects
          </h3>
        </div>
        <span className="text-xs font-space px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
          {sapProjects.length} Projects / Milestones
        </span>
      </div>

      {/* Project Cards List */}
      <div className="space-y-3">
        {sapProjects.map((item) => {
          const isSelected = activeId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => {
                setShowCompany(item.id);
                setMobileExpanded(mobileExpanded === item.id ? "" : item.id);
              }}
              className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                isSelected
                  ? "bg-slate-900/90 border-emerald-500/60 shadow-[0_0_15px_rgba(0,240,118,0.25)]"
                  : "bg-slate-950/50 hover:bg-slate-900/60 border-white/10 hover:border-emerald-500/30"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="text-[11px] font-space text-emerald-400 tracking-wider uppercase font-semibold">
                    {item.industry}
                  </span>
                  <h4 className="text-sm md:text-base font-bold text-white mt-0.5">
                    {item.project}
                  </h4>
                </div>
                <div className="flex items-center gap-2 mt-1 sm:mt-0">
                  <span className="text-[10px] font-space px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                    {item.badge}
                  </span>
                  <span
                    className={`text-xs font-space transition-transform duration-200 ${
                      isSelected ? "text-emerald-400 rotate-90" : "text-slate-500"
                    }`}
                  >
                    ▶
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                {item.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {item.tags.slice(0, 5).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 font-space"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags.length > 5 && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded text-slate-400">
                    +{item.tags.length - 5}
                  </span>
                )}
              </div>

              {/* Mobile Expansion (Shown directly under card on small viewports) */}
              {mobileExpanded === item.id && (
                <div className="mt-4 pt-3 border-t border-white/10 md:hidden animation-fade-in text-xs text-slate-300 space-y-2">
                  <p className="font-semibold text-emerald-400 font-space text-[11px]">
                    KEY RESPONSIBILITIES:
                  </p>
                  <ul className="space-y-1.5 pl-2 list-disc list-inside">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="text-slate-300 leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
