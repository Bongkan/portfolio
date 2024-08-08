import React, { useState } from "react";
import UfoContainer from "./UfoContainer";

const Nav2 = ({ activeSection, setActiveSection, showMenu, setShowMenu }) => {
  const sections = ["Home", "About", "Projects", "Experiences", "Skills"];

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const ToggleUFO = () => {
    setShowMenu((prevShowMenu) => (prevShowMenu === "Off" ? "On" : "Off"));
  };

  const renderNav = () => {
    return (
      <ul className="h-full mt-2 w-full justify-center flex flex-col md:hidden">
        {sections.map((section) => (
          <li
            key={section}
            className={`mt-3 w-full p-0 h-[120px] text-center hover:cursor-pointer text-xl font-medium ${
              activeSection !== section
                ? "flex items-center justify-center hover:opacity-50 hover:shadow-[5px_5px_5px_rgb(2,110,2)] rounded-full duration-[750ms]"
                : "shadow-[5px_0px_5px_rgb(2,110,2)] bg-white bg-opacity-10 rounded-full"
            }`}
            onClick={() => {
              handleClick(section);
              setShowMenu("Off");
            }}
          >
            {activeSection === section && <UfoContainer />}
            <a>{section}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav
      className={`ml-[10px] flex flex-col h-screen pr-5 md:hidden font-space ${
        showMenu !== "On" ? "fixed top-0 left-0 z-[100]" : "w-screen"
      }`}
    >
      <a onClick={ToggleUFO}>
        {showMenu === "Off" && <UfoContainer activeSection={activeSection} />}
      </a>
      {showMenu === "On" && renderNav()}
    </nav>
  );
};

export default Nav2;
