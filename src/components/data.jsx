import React, { useState, useEffect, useRef } from "react";
import UfoContainer from "./UfoContainer";
import Contact from "./Contact";
import Experience from "./experience";
import Education from "./education";
import Skill from "./skill";
import Project from "./project";

const DataSection = () => {
  const [activeSection, setActiveSection] = useState("About");

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const Nav = ["About", "Projects", "Experience", "Skills", "Education"];

  return (
    <section id="data" className="w-full md:w-2/3 flex md:flex-col h-screen">
      <div className="flex flex-col md:flex-row justify-evenly">
        {Nav.map((section) => (
          <div
            key={section}
            className={`mt-3 w-full p-0 h-[120px] text-center hover:cursor-pointer invisible md:visible ${
              activeSection !== section
                ? "flex items-center justify-center hover:opacity-50 hover:shadow-[5px_5px_5px_rgb(2,110,2)] rounded-full duration-[750ms]"
                : "rounded-full shadow-[5px_5px_5px_rgb(2,110,2)]"
            }`}
            onClick={() => handleClick(section)}
          >
            {activeSection === section && <UfoContainer />}
            <h1>{section}</h1>
          </div>
        ))}
      </div>
      <div className="h-full pb-[10vh] w-full flex justify-center items-center">
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
