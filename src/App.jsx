import "./App.css";
import { useState, useEffect } from "react";
import Profile from "./components/profileCard";
import DataSection from "./components/data";
import Nav2 from "./components/Nav2";
import ExperienceDetails from "./components/experience/experienceDetails.jsx";
import SkillCartoon from "./components/skills/skillCartoon.jsx";
import ProjectSample from "./components/projects/projectSample.jsx";
import BackgroundStarGenerator from "./components/BackgroundStarGenerator.jsx";

const App = () => {
  const [activeSection, setActiveSection] = useState("About");
  const [isMobile, setIsMobile] = useState(false);
  const [showCompany, setShowCompany] = useState("petro-cloud");
  const [showProject, setShowProject] = useState("Pony Mart");
  const [showMenu, setShowMenu] = useState("Off");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="background-container text-white min-h-dvh flex flex-col relative selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Background Starlight Generator */}
      <BackgroundStarGenerator />

      {/* Main App Container */}
      <div className="relative z-10 w-full flex-1 flex flex-col">
        {/* Navigation Header (Sticky on mobile) */}
        <Nav2
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />

        {/* Workspace Body */}
        {showMenu === "Off" && (
          <div className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 md:py-6 flex flex-col md:flex-row items-stretch justify-center gap-6">
            {/* Left Contextual Column (Desktop) */}
            {!isMobile && (
              <aside className="w-full md:w-[360px] lg:w-[400px] shrink-0 flex flex-col justify-center items-center">
                {activeSection === "About" && <Profile />}
                {activeSection === "Experiences" && (
                  <ExperienceDetails
                    showCompany={showCompany}
                    setShowCompany={setShowCompany}
                  />
                )}
                {activeSection === "Skills" && <SkillCartoon />}
                {activeSection === "Projects" && (
                  <ProjectSample
                    showProject={showProject}
                    setShowProject={setShowProject}
                  />
                )}
                {activeSection === "Contact" && <Profile isCompact={true} />}
              </aside>
            )}

            {/* Right Main Content Pane (Desktop & Mobile) */}
            <main className="flex-1 min-w-0 flex flex-col justify-start">
              {/* On mobile, if on "About", show the Profile ID Card first */}
              {isMobile && activeSection === "About" && (
                <div className="mb-4 w-full">
                  <Profile />
                </div>
              )}

              <DataSection
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                showCompany={showCompany}
                setShowCompany={setShowCompany}
                showProject={showProject}
                setShowProject={setShowProject}
              />
            </main>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
