import "./App.css";
import { useState, useEffect } from "react";
import Profile from "./components/profileCard";
import DataSection from "./components/data";
import Nav2 from "./components/Nav2";
import DesktopNav from "./components/DesktopNav.jsx";
import SkillCartoon from "./components/skills/skillCartoon.jsx";
import ExtracurricularDetail from "./components/extracurricular/ExtracurricularDetail.jsx";
import BackgroundStarGenerator from "./components/BackgroundStarGenerator.jsx";
import BackgroundUfo from "./components/BackgroundUfo.jsx";
import { extracurricularData } from "./components/portfolioData.js";

const App = () => {
  const [activeSection, setActiveSection] = useState("About");
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState("Off");
  const [selectedExtracurricular, setSelectedExtracurricular] = useState(
    extracurricularData.hobbyProjects[0]
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [aboutMobilePage, setAboutMobilePage] = useState(1);

  // Reset Extracurricular detail panel to first item whenever switching into Extracurricular tab
  useEffect(() => {
    if (activeSection === "Extracurricular") {
      setSelectedExtracurricular(extracurricularData.hobbyProjects[0]);
    }
    if (activeSection === "About") {
      setAboutMobilePage(1);
    }
  }, [activeSection]);

  // Work Experience, Client Projects, and Contact tabs collapse left panel and center content
  const isCenteredTab = ["WorkExperience", "ClientProjects", "Contact"].includes(activeSection);

  return (
    <div className="background-container text-white min-h-dvh flex flex-col relative selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Background Starlight & Occasional Flying Green UFO */}
      <BackgroundStarGenerator />
      <BackgroundUfo />

      {/* Main App Container */}
      <div className="relative z-10 w-full flex-1 flex flex-col">
        {/* Navigation Header (Sticky on mobile) */}
        <Nav2
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />

        {/* Desktop Navigation Pill Bar with Abducting UFO Tractor Beam (Always Centered) */}
        {!isMobile && showMenu === "Off" && (
          <div className="w-full flex items-center justify-center pt-7 md:pt-7 pb-2 md:pb-2.5 px-4">
            <DesktopNav
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
        )}

        {/* Workspace Body: Left and Right Panels Level Directly Under Menu Tabs */}
        {showMenu === "Off" && (
          <div className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-3 md:pb-3.5 flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6">
            {/* Left Contextual Column (Rendered only on split 2-panel sections: About, Skills, Extracurricular) */}
            {!isMobile && !isCenteredTab && (
              <aside className="shrink-0 w-[340px] lg:w-[370px] md:h-[530px] lg:h-[540px] md:max-h-[calc(100dvh-5.5rem)] flex flex-col animation-fade-in">
                <div className="w-full h-full flex flex-col">
                  {activeSection === "About" && <Profile />}
                  {activeSection === "Skills" && <SkillCartoon />}
                  {activeSection === "Extracurricular" && (
                    <ExtracurricularDetail selectedItem={selectedExtracurricular} />
                  )}
                </div>
              </aside>
            )}

            {/* Main Content Pane (Expands and centers on 1-panel tabs, split on 2-panel tabs) */}
            <main
              className={`min-w-0 flex-1 min-h-0 flex flex-col md:h-[530px] lg:h-[540px] md:max-h-[calc(100dvh-5.5rem)] ${
                isCenteredTab
                  ? "w-full max-w-4xl lg:max-w-5xl mx-auto"
                  : "w-full"
              }`}
            >
              {/* On mobile, About tab features clean pagination: Page 1 = Contact Card, Page 2 = Profile Overview */}
              {isMobile && activeSection === "About" && (
                <div className="w-full flex items-center justify-between p-1.5 mb-2.5 rounded-xl bg-slate-950/80 border border-white/10 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setAboutMobilePage(1)}
                      className={`px-3 py-1 rounded-lg text-xs font-grotesk font-semibold transition-all ${
                        aboutMobilePage === 1
                          ? "bg-emerald-500 text-slate-950 shadow-neon-green"
                          : "bg-white/5 text-slate-400 hover:text-white"
                      }`}
                    >
                      1. Contact Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setAboutMobilePage(2)}
                      className={`px-3 py-1 rounded-lg text-xs font-grotesk font-semibold transition-all ${
                        aboutMobilePage === 2
                          ? "bg-emerald-500 text-slate-950 shadow-neon-green"
                          : "bg-white/5 text-slate-400 hover:text-white"
                      }`}
                    >
                      2. Profile Overview
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setAboutMobilePage((prev) => (prev === 1 ? 2 : 1))}
                      aria-label="Previous About page"
                      className="w-7 h-7 rounded-lg bg-slate-900 border border-white/15 hover:border-emerald-400 text-white flex items-center justify-center font-grotesk font-bold text-xs transition-colors"
                    >
                      &lt;
                    </button>
                    <span className="text-xs font-grotesk text-slate-400 px-1">
                      {aboutMobilePage}/2
                    </span>
                    <button
                      type="button"
                      onClick={() => setAboutMobilePage((prev) => (prev === 1 ? 2 : 1))}
                      aria-label="Next About page"
                      className="w-7 h-7 rounded-lg bg-slate-900 border border-white/15 hover:border-emerald-400 text-white flex items-center justify-center font-grotesk font-bold text-xs transition-colors"
                    >
                      &gt;
                    </button>
                  </div>
                </div>
              )}

              {/* Render mobile view page or standard DataSection */}
              <div className="flex-1 min-h-0 w-full flex flex-col">
                {isMobile && activeSection === "About" ? (
                  aboutMobilePage === 1 ? (
                    <Profile />
                  ) : (
                    <DataSection
                      activeSection={activeSection}
                      selectedExtracurricular={selectedExtracurricular}
                      setSelectedExtracurricular={setSelectedExtracurricular}
                    />
                  )
                ) : (
                  <DataSection
                    activeSection={activeSection}
                    selectedExtracurricular={selectedExtracurricular}
                    setSelectedExtracurricular={setSelectedExtracurricular}
                  />
                )}
              </div>
            </main>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
