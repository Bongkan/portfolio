import { sapProjects } from "../portfolioData.js";

const ExperienceDetails = ({ showCompany }) => {
  const activeProject =
    sapProjects.find((p) => p.id === showCompany) || sapProjects[0];

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 md:p-6 animation-fade-in">
      <div className="glass-panel w-full max-w-md rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between cyber-scrollbar max-h-[80vh] overflow-y-auto">
        {/* Neon top line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500"></div>

        <div>
          {/* Industry & Status header */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[10px] font-space uppercase tracking-widest text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              {activeProject.period}
            </span>
            <span className="text-[11px] text-cyan-300 font-medium">
              SAP Consulting
            </span>
          </div>

          <h3 className="text-lg md:text-xl font-space font-bold text-white leading-snug">
            {activeProject.project}
          </h3>

          <p className="text-emerald-400 font-medium text-xs mt-1">
            {activeProject.industry} • {activeProject.position}
          </p>

          <p className="text-xs text-slate-300 mt-3 pb-3 border-b border-white/10 leading-relaxed">
            {activeProject.summary}
          </p>

          {/* Detailed Responsibilities */}
          <div className="my-4">
            <h4 className="text-xs font-space font-semibold tracking-wider text-slate-200 uppercase mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Core Responsibilities & Deliverables
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {activeProject.responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-emerald-400 font-bold text-xs mt-0.5">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-3 border-t border-white/10">
          <p className="text-[10px] font-space text-slate-400 uppercase tracking-wider mb-2">
            Technologies & Frameworks
          </p>
          <div className="flex flex-wrap gap-1.5">
            {activeProject.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-space"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
