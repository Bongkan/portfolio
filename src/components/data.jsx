import React, { useState } from "react";
import UfoContainer from "./UfoContainer";
import Contact from "./Contact";
import Experience from "./experience";
import Education from "./education";
import Skill from "./skill";
import Project from "./project";

const DataSection = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const Nav = ["About", "Experience", "Education", "Skills", "Projects"];

  return (
    <section id="data" className="md:w-2/3 flex flex-col h-screen">
      <div className="flex justify-evenly">
        {Nav.map((section) => (
          <div
            key={section}
            className={`mt-3 p-0 h-[120px] text-center hover:cursor-pointer ${
              activeSection !== section ? "flex items-center" : ""
            }`}
            onClick={() => handleClick(section)}
          >
            {activeSection === section && <UfoContainer />}
            <h1>{section}</h1>
          </div>
        ))}
      </div>
      <div className="h-fit flex flex-col">
        {activeSection === "About" && <Contact />}
        {activeSection === "Experience" && <Experience />}
        {activeSection === "Education" && <Education />}
        {activeSection === "Skills" && <Skill />}
        {activeSection === "Projects" && <Project />}
      </div>
    </section>
  );
};

export default DataSection;
