import React, { useEffect } from "react";
import UfoContainer from "./UfoContainer";
import About from "./About.jsx";
import Experience from "./experience/experienceLogo.jsx";
import Contact from "./Contact.jsx";
import Skill from "./skills/skill";
import Project from "./projects/project.jsx";
import Profile from "./profileCard";

const DataSection = ({
  activeSection,
  setActiveSection,
  showCompany,
  setShowCompany,
  showProject,
  setShowProject,
}) => {
  const sections = ["About", "Projects", "Experience", "Skills", "Contact"];

  const handleScroll = (event) => {
    const currentIndex = sections.indexOf(activeSection);
    if (event.deltaY > 0) {
      const nextIndex = (currentIndex + 1) % sections.length;
      setActiveSection(sections[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
      setActiveSection(sections[prevIndex]);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection]);

  return (
    <section id="data" className="w-2/3 flex md:flex-col h-screen ">
      <div className="hidden md:flex flex-col md:flex-row justify-around font-space md:h-1/6">
        {sections.map((section) => (
          <div
            key={section}
            className={`mt-3 w-full p-0 h-[120px] text-center hover:cursor-pointer invisible md:visible ${
              activeSection !== section
                ? "flex items-center justify-center hover:opacity-50 hover:shadow-[5px_5px_5px_rgb(2,110,2)] rounded-full duration-[750ms]"
                : "rounded-full shadow-[5px_5px_5px_rgb(2,110,2)] bg-white bg-opacity-10"
            }`}
            onClick={() => {
              if (section === "Experience") setShowCompany("");
              setActiveSection(section);
            }}
          >
            {activeSection === section && <UfoContainer />}
            <h1>{section}</h1>
          </div>
        ))}
      </div>
      <div className="h-full pb-[10vh] w-full flex pl-[5vw] md:pl-0 md:h-5/6">
        {activeSection === "Home" && <Profile />}
        {activeSection === "About" && <About />}
        {activeSection === "Experience" && (
          <Experience
            setShowCompany={setShowCompany}
            showCompany={showCompany}
          />
        )}
        {activeSection === "Contact" && <Contact />}
        {activeSection === "Skills" && <Skill />}
        {activeSection === "Projects" && <Project showProject={showProject} />}
      </div>
    </section>
  );
};

export default DataSection;
