import "./App.css";
import React, { useState, useEffect } from "react";
// import Nav from "./components/nav";
import Profile from "./components/profileCard";
import DataSection from "./components/data";
import backgroundImage from "./assets/panoramic-view-sunset-night.jpg";
import Nav2 from "./components/Nav2";
import ExperienceDetails from "./components/experience/experienceDetails.jsx";
import SkillCartoon from "./components/skills/skillCartoon.jsx";
import ProjectSample from "./components/projects/projectSample.jsx";

const App = () => {
  const [activeSection, setActiveSection] = useState("");
  const [profileDesktop, setProfileDesktop] = useState("");
  const [showCompany, setShowCompany] = useState("");
  const [showProject, setShowProject] = useState("Pony Mart");
  const [showMenu, setShowMenu] = useState("Off");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setProfileDesktop("False");
        setActiveSection("Home");
      } else {
        setProfileDesktop("True");
        setActiveSection("About");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-center text-white flex font-spacemono"
    >
      <div className="animation-loading w-full">
        <Nav2
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        {showMenu === "Off" && (
          <main className="flex flex-col md:flex-row w-screen">
            {profileDesktop === "True" && activeSection === "About" && (
              <Profile />
            )}
            {profileDesktop === "True" && activeSection === "Skills" && (
              <SkillCartoon />
            )}
            {profileDesktop === "True" && activeSection === "Projects" && (
              <ProjectSample
                showProject={showProject}
                setShowProject={setShowProject}
              />
            )}
            {profileDesktop === "True" && activeSection === "Contact" && (
              <Profile />
            )}
            {profileDesktop === "True" && activeSection === "Experience" && (
              <ExperienceDetails
                showCompany={showCompany}
                setShowCompany={setShowCompany}
              />
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
        )}
      </div>
    </div>
  );
};

export default App;
