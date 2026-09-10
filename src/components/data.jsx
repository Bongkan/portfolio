import About from "./About.jsx";
import WorkExperience from "./experience/WorkExperience.jsx";
import ClientProjects from "./experience/ClientProjects.jsx";
import Skill from "./skills/skill.jsx";
import Extracurricular from "./extracurricular/Extracurricular.jsx";
import Contact from "./Contact.jsx";

const DataSection = ({
  activeSection,
  selectedExtracurricular,
  setSelectedExtracurricular,
}) => {
  return (
    <section
      id="data"
      className={`w-full h-full flex-1 flex flex-col justify-start items-center md:min-h-0 ${
        activeSection === "Contact"
          ? "min-h-0 overflow-y-auto cyber-scrollbar"
          : "min-h-0 overflow-hidden"
      }`}
    >
      {activeSection === "About" && <About />}
      {activeSection === "WorkExperience" && <WorkExperience />}
      {activeSection === "ClientProjects" && <ClientProjects />}
      {activeSection === "Skills" && <Skill />}
      {activeSection === "Extracurricular" && (
        <Extracurricular
          selectedItem={selectedExtracurricular}
          setSelectedItem={setSelectedExtracurricular}
        />
      )}
      {activeSection === "Contact" && <Contact />}
    </section>
  );
};

export default DataSection;
