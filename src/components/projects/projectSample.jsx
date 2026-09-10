import { projectList } from "../portfolioData.js";

const ProjectSample = ({ setShowProject, showProject }) => {
  const activeId = showProject || "Pony Mart";

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 md:p-6 animation-fade-in">
      <div className="glass-panel w-full max-w-md rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500"></div>

        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-space uppercase tracking-widest text-emerald-400 font-semibold">
            Featured Web Projects
          </span>
        </div>

        <div className="space-y-3">
          {projectList.map((p) => {
            const isSelected = activeId === p.id;
            return (
              <div
                key={p.id}
                onClick={() => setShowProject(p.id)}
                className={`p-3.5 rounded-xl cursor-pointer transition-all duration-200 border text-left ${
                  isSelected
                    ? "bg-slate-900/90 border-emerald-400 shadow-neon-green"
                    : "bg-slate-950/50 border-white/10 hover:border-emerald-500/30 hover:bg-slate-900/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-space uppercase text-emerald-400 font-semibold tracking-wider">
                    {p.category}
                  </span>
                  <span
                    className={`text-xs ${
                      isSelected ? "text-emerald-400 font-bold" : "text-slate-500"
                    }`}
                  >
                    ›
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mt-1">
                  {p.name}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1">
                  {p.desc}
                </p>
                <div className="mt-2 text-[10px] text-emerald-300/80 font-space">
                  {p.tech}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectSample;
