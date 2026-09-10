import About from "./About.jsx";
import Experience from "./experience/experienceLogo.jsx";
import Contact from "./Contact.jsx";
import Skill from "./skills/skill";
import Project from "./projects/project.jsx";

const sections = [
  { id: "About", label: "About", icon: "👤" },
  { id: "Experiences", label: "Experience", icon: "💼" },
  { id: "Skills", label: "Skills", icon: "⚡" },
  { id: "Projects", label: "Projects", icon: "🚀" },
  { id: "Contact", label: "Contact", icon: "📡" },
];

const DataSection = ({
  activeSection,
  setActiveSection,
  showCompany,
  setShowCompany,
  showProject,
}) => {
  return (
    <section
      id="data"
      className="w-full flex flex-col h-full min-h-[calc(100dvh-5rem)] md:min-h-0"
    >
      {/* Desktop Navigation Pill Bar */}
      <div className="hidden md:flex items-center justify-center py-4 px-6 w-full">
        <div className="glass-pill p-1.5 rounded-full flex items-center gap-1.5 border border-white/10 shadow-lg">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => {
                  if (sec.id === "Experiences" && !showCompany) {
                    setShowCompany("petro-cloud");
                  }
                  setActiveSection(sec.id);
                }}
                className={`relative px-4 py-2 rounded-full font-space text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 select-none ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-slate-950 shadow-neon-green"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse"></span>
                )}
                <span>{sec.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Viewport */}
      <div className="flex-1 w-full p-4 md:p-6 flex flex-col justify-start items-center overflow-hidden">
        {activeSection === "About" && <About />}
        {activeSection === "Experiences" && (
          <Experience
            setShowCompany={setShowCompany}
            showCompany={showCompany}
          />
        )}
        {activeSection === "Skills" && <Skill />}
        {activeSection === "Projects" && <Project showProject={showProject} />}
        {activeSection === "Contact" && <Contact />}
      </div>
    </section>
  );
};

export default DataSection;
