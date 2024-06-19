import React from "react";
import UfoContainer from "./UfoContainer";

const Nav = ({ activeSection, setActiveSection }) => {
  const sections = [
    "Home",
    "About",
    "Projects",
    "Experience",
    "Skills",
    "Education",
  ];

  const sectionIds = {
    Home: "profile",
    About: "data",
    Projects: "data",
    Experience: "data",
    Skills: "data",
    Education: "data",
  };

  const handleClick = (section) => {
    setActiveSection(section);
    document
      .getElementById(sectionIds[section])
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 z-[100] ml-[10px] flex flex-col h-screen md:hidden">
      <ul className="h-full mt-2 flex flex-col justify-evenly md:hidden">
        {sections.map((section) => (
          <li
            key={section}
            className={`mt-3 w-full p-0 h-[120px] text-center hover:cursor-pointer  ${
              activeSection !== section
                ? "flex items-center justify-center hover:opacity-50 hover:shadow-[5px_5px_5px_rgb(2,110,2)] rounded-full duration-[750ms]"
                : "shadow-[5px_0px_5px_rgb(2,110,2)] bg-white bg-opacity-10 rounded-full"
            }`}
            onClick={() => handleClick(section)}
          >
            {activeSection === section && <UfoContainer />}
            <a href={`#${sectionIds[section]}`}>{section}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
