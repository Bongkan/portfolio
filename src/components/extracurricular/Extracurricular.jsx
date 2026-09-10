import { useState, useEffect } from "react";
import { extracurricularData } from "../portfolioData.js";
import ExtracurricularDetail from "./ExtracurricularDetail.jsx";

const Extracurricular = ({ selectedItem, setSelectedItem }) => {
  const [subTab, setSubTab] = useState("hobbies"); // "hobbies" | "bootcamps"
  const [hobbyPage, setHobbyPage] = useState(0);
  const [modalItem, setModalItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const { bootcamps, hobbyProjects } = extracurricularData;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2 items per page for hobbies (Page 1 fits 2 items, Page 2 fits 1 item)
  const HOBBY_PAGE_SIZE = 2;
  const totalHobbyPages = Math.ceil(hobbyProjects.length / HOBBY_PAGE_SIZE);
  const safeHobbyPage = Math.min(hobbyPage, Math.max(0, totalHobbyPages - 1));

  // Sync initial selection
  useEffect(() => {
    if (!selectedItem && hobbyProjects.length > 0) {
      if (setSelectedItem) {
        setSelectedItem(hobbyProjects[0]);
      }
    }
  }, [selectedItem, setSelectedItem, hobbyProjects]);

  const displayedHobbies = hobbyProjects.slice(
    safeHobbyPage * HOBBY_PAGE_SIZE,
    (safeHobbyPage + 1) * HOBBY_PAGE_SIZE
  );

  const handlePrevHobbyPage = () => {
    const next = safeHobbyPage === 0 ? totalHobbyPages - 1 : safeHobbyPage - 1;
    setHobbyPage(next);
    if (setSelectedItem) {
      setSelectedItem(hobbyProjects[next * HOBBY_PAGE_SIZE]);
    }
  };

  const handleNextHobbyPage = () => {
    const next = safeHobbyPage === totalHobbyPages - 1 ? 0 : safeHobbyPage + 1;
    setHobbyPage(next);
    if (setSelectedItem) {
      setSelectedItem(hobbyProjects[next * HOBBY_PAGE_SIZE]);
    }
  };

  const handleTileClick = (item) => {
    if (setSelectedItem) {
      setSelectedItem(item);
    }
    if (isMobile) {
      setModalItem(item);
    }
  };

  const handleTabSwitch = (newTab) => {
    setSubTab(newTab);
    if (setSelectedItem) {
      if (newTab === "hobbies") {
        setSelectedItem(hobbyProjects[safeHobbyPage * HOBBY_PAGE_SIZE] || hobbyProjects[0]);
      } else {
        setSelectedItem(bootcamps[0]);
      }
    }
    // Suppress popup on tab switch - modalItem is not set here
  };

  return (
    <div className="w-full h-full flex flex-col justify-between animation-fade-in text-slate-300 select-none overflow-hidden">
      <div className="glass-panel w-full h-full rounded-2xl p-3 sm:p-4 md:p-5 relative overflow-hidden flex flex-col justify-between">
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400"></div>

        <div className="flex-1 min-h-0 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 mb-2 sm:mb-2.5 shrink-0">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-1.5 sm:w-2 h-5 sm:h-7 bg-emerald-400 rounded-full"></div>
              <div>
                <span className="text-[10px] sm:text-xs font-grotesk uppercase tracking-wider text-emerald-400 font-semibold block">
                  Continuous Learning
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-space font-bold text-white leading-tight">
                  Extracurricular
                </h2>
              </div>
            </div>

            {/* Sub-tab Switcher (Hobbies vs Bootcamps) */}
            <div className="flex items-center gap-1 p-0.5 sm:p-1 rounded-xl bg-slate-950/70 border border-white/10">
              <button
                type="button"
                onClick={() => handleTabSwitch("hobbies")}
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-grotesk font-semibold transition-all ${
                  subTab === "hobbies"
                    ? "bg-emerald-500 text-slate-950 shadow-neon-green"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Hobbies ({hobbyProjects.length})
              </button>
              <button
                type="button"
                onClick={() => handleTabSwitch("bootcamps")}
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-grotesk font-semibold transition-all ${
                  subTab === "bootcamps"
                    ? "bg-emerald-500 text-slate-950 shadow-neon-green"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Bootcamps ({bootcamps.length})
              </button>
            </div>
          </div>

          {/* Sub-tab 1: Hobby Projects (Fits 2 items per page cleanly without scrolling) */}
          {subTab === "hobbies" && (
            <div className="animation-fade-in flex-1 min-h-0 flex flex-col justify-between">
              {/* Pagination bar */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 shrink-0">
                <span className="text-[10.5px] sm:text-xs truncate mr-1">
                  Showing {safeHobbyPage * HOBBY_PAGE_SIZE + 1}–{Math.min((safeHobbyPage + 1) * HOBBY_PAGE_SIZE, hobbyProjects.length)} of {hobbyProjects.length} projects
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-xs font-grotesk text-slate-300">
                    {safeHobbyPage + 1} / {totalHobbyPages}
                  </span>
                  <button
                    type="button"
                    onClick={handlePrevHobbyPage}
                    aria-label="Previous hobby projects page"
                    className="w-6 sm:w-7 h-6 sm:h-7 rounded-lg bg-slate-900 border border-white/15 hover:border-emerald-400 text-white flex items-center justify-center font-grotesk font-bold text-xs transition-colors shadow-sm"
                  >
                    &lt;
                  </button>
                  <button
                    type="button"
                    onClick={handleNextHobbyPage}
                    aria-label="Next hobby projects page"
                    className="w-6 sm:w-7 h-6 sm:h-7 rounded-lg bg-slate-900 border border-white/15 hover:border-emerald-400 text-white flex items-center justify-center font-grotesk font-bold text-xs transition-colors shadow-sm"
                  >
                    &gt;
                  </button>
                </div>
              </div>

              {/* Projects Grid (2 items fit per page cleanly) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 flex-1 min-h-0 content-start">
                {displayedHobbies.map((proj) => {
                  const isSelected = selectedItem?.id === proj.id;
                  return (
                    <div
                      key={proj.id}
                      onClick={() => handleTileClick(proj)}
                      className={`p-2 sm:p-2.5 rounded-xl cursor-pointer transition-all duration-200 border flex flex-col justify-between ${
                        isSelected
                          ? "bg-slate-900/90 border-emerald-400 shadow-neon-green"
                          : "bg-slate-950/60 border-white/10 hover:border-emerald-500/30 hover:bg-slate-900/50"
                      }`}
                    >
                      <div>
                        <div className="w-full h-16 sm:h-20 md:h-24 rounded-lg overflow-hidden border border-white/10 mb-1.5 bg-slate-900 relative">
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-1 right-1 text-[9px] sm:text-[10px] font-grotesk font-medium px-1.5 py-0.5 rounded bg-slate-950/80 text-emerald-300 border border-emerald-500/20">
                            {proj.type.split(" ")[0]}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                            {proj.title}
                          </h4>
                          {isSelected && (
                            <span className="text-[10px] sm:text-xs font-grotesk text-emerald-400 font-medium">
                              Active ✓
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5 line-clamp-1 sm:line-clamp-2">
                          {proj.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-1.5 pt-1 border-t border-white/10">
                        <div className="flex flex-wrap gap-1">
                          {proj.tags.slice(0, 3).map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-400 font-grotesk"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-grotesk text-[10px] sm:text-xs font-bold shrink-0 transition-colors"
                        >
                          Demo ↗
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Sub-tab 2: Tech Bootcamps (All 3 fit together in the container without splitting) */}
          {subTab === "bootcamps" && (
            <div className="animation-fade-in flex-1 min-h-0 flex flex-col justify-between">
              <span className="text-[10.5px] sm:text-xs text-slate-400 block mb-1 shrink-0">
                Completed Intensive Engineering Programs ({bootcamps.length})
              </span>

              {/* All 3 Bootcamps Fit Together (List on Mobile, 3-Cols on Desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 flex-1 min-h-0 content-start">
                {bootcamps.map((boot) => {
                  const isSelected = selectedItem?.id === boot.id;
                  return (
                    <div
                      key={boot.id}
                      onClick={() => handleTileClick(boot)}
                      className={`p-2 sm:p-2.5 rounded-xl cursor-pointer transition-all duration-200 border flex flex-col justify-between ${
                        isSelected
                          ? "bg-slate-900/90 border-emerald-400 shadow-neon-green"
                          : "bg-slate-950/60 border-white/10 hover:border-emerald-500/30 hover:bg-slate-900/50"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <img
                            src={boot.logo}
                            alt={boot.title}
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg object-contain bg-white/5 border border-white/15 p-0.5 shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                              {boot.title}
                            </h4>
                            <span className="text-[10px] font-grotesk text-emerald-400 block">
                              {boot.period}
                            </span>
                          </div>
                        </div>
                        <p className="text-[10.5px] sm:text-[11px] text-emerald-300 font-medium truncate mb-0.5">
                          {boot.program}
                        </p>
                        <p className="text-[10px] text-slate-400 line-clamp-1 sm:line-clamp-2">
                          {boot.desc}
                        </p>
                      </div>

                      <div className="mt-1.5 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] font-grotesk">
                        <span className="text-slate-400 truncate mr-1">
                          📍 {boot.location || "Thailand"}
                        </span>
                        {isSelected ? (
                          <span className="text-emerald-400 font-bold shrink-0">Selected ✓</span>
                        ) : (
                          <span className="text-slate-500 shrink-0">View Info ›</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="pt-1.5 sm:pt-2 mt-1.5 sm:mt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs text-slate-400 font-grotesk shrink-0">
          <span className="truncate mr-1">Continuous self-development</span>
          <span className="text-emerald-400 font-medium shrink-0">QA & Full-Stack Certified</span>
        </div>
      </div>

      {/* Mobile Details Popup Modal */}
      {modalItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:hidden animation-fade-in"
          onClick={() => setModalItem(null)}
        >
          <div
            className="relative w-full max-w-sm max-h-[85dvh] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-emerald-500/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setModalItem(null)}
              aria-label="Close details"
              className="absolute top-2.5 right-2.5 z-30 w-7 h-7 rounded-full bg-slate-900/90 border border-white/20 text-slate-300 hover:text-white hover:border-emerald-400 flex items-center justify-center text-xs font-bold transition-all shadow-md"
            >
              ✕
            </button>

            {/* ExtracurricularDetail Content */}
            <div className="w-full h-full overflow-y-auto cyber-scrollbar">
              <ExtracurricularDetail selectedItem={modalItem} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Extracurricular;
