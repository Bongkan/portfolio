import React, { useEffect } from "react";
import UfoContainer from "./UfoContainer";
import About from "./About.jsx";
import Experience from "./experience/experienceLogo.jsx";
import Contact from "./Contact.jsx";
import Skill from "./skills/skill";
import Project from "./projects/project.jsx";
import Profile from "./profileCard";
import { useSwipeable } from "react-swipeable";

const DataSection = ({
  activeSection,
  setActiveSection,
  showCompany,
  setShowCompany,
  showProject,
}) => {
  const sections = ["About", "Projects", "Experiences", "Skills", "Contact"];

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

  const handleSwipe = (direction) => {
    const currentIndex = sections.indexOf(activeSection);
    if (direction === "LEFT") {
      const nextIndex = (currentIndex + 1) % sections.length;
      setActiveSection(sections[nextIndex]);
    } else if (direction === "RIGHT") {
      const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
      setActiveSection(sections[prevIndex]);
    }
  };

  const handleTap = (event) => {
    const touchX = event.touches[0].clientX;
    const screenWidth = window.innerWidth;
    const tapThreshold = screenWidth * 0.1; // Define the tap area (20% of screen width)

    if (touchX < tapThreshold) {
      handleSwipe("RIGHT");
    } else if (touchX > screenWidth - tapThreshold) {
      handleSwipe("LEFT");
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
  });

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTap);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTap);
    };
  }, [activeSection]);

  return (
    <section
      id="data"
      className="md:w-2/3 flex md:flex-col h-screen "
      {...swipeHandlers}
    >
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
              if (section === "Experiences") setShowCompany("");
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
        {activeSection === "Experiences" && (
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
