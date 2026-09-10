import { useState, useEffect } from "react";
import sapLogo from "../../assets/Skills/sap.jpg";

const skillCategories = [
  {
    id: "sap-focused",
    title: "SAP Focused",
    subtitle: "S/4HANA, Clean-Core, RAP & FI/SD/MM",
    iconImage: sapLogo,
    skills: [
      { name: "SAP S/4HANA Private Cloud & ECC 6.0", desc: "Implementation, migration, and maintenance" },
      { name: "Clean-Core Extensibility & ABAP Cloud", desc: "Decoupled extensions on SAP BTP" },
      { name: "ABAP RESTful Application Model (RAP)", desc: "RAP business objects, draft handling, validations" },
      { name: "Core Data Services (CDS) & AMDP", desc: "Data modeling, table functions, and HANA SQLScript" },
      { name: "SAP FI (Financial Accounting)", desc: "Bank interfaces, payment runs, and reconciliation" },
      { name: "SAP SD (Sales & Distribution)", desc: "Order-to-cash, pricing procedures, and delivery" },
      { name: "SAP MM (Materials Management)", desc: "Procure-to-pay, purchase orders, and inventory" },
      { name: "BAPI, RFC & BDC Integration", desc: "Secure enterprise interfaces and batch data input" },
      { name: "Adobe Forms (PDF) & Smart Forms", desc: "Enterprise print/interactive documents and ALV" },
      { name: "User Exits, Customer Exits & BAdIs", desc: "Custom business enhancements and standard hooks" },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    subtitle: "Enterprise & Web Development",
    icon: "💻",
    skills: [
      { name: "ABAP / Modern ABAP Cloud", desc: "OO-ABAP, modern 7.4+ expressions, clean code" },
      { name: "SQL & SAP HANA SQLScript", desc: "Code pushdown, database views, and stored procedures" },
      { name: "JavaScript (ES6+)", desc: "Asynchronous programming and DOM manipulation" },
      { name: "React.js", desc: "Modern component state, hooks, and responsive apps" },
      { name: "HTML5 & CSS3 / Tailwind", desc: "Semantic markup, modern layout, and cyber aesthetics" },
      { name: "Node.js & Express.js", desc: "RESTful backend APIs and full-stack integration" },
      { name: "Python", desc: "Automation scripts, data processing, and utilities" },
    ],
  },
  {
    id: "tools-testing",
    title: "Tools & Testing Environments",
    subtitle: "Developer Utilities, QA & CI/CD",
    icon: "🛠️",
    skills: [
      { name: "Eclipse ADT & SAP GUI", desc: "Primary ABAP Cloud development environment" },
      { name: "ABAP Test Cockpit (ATC)", desc: "Automated static code checks and compliance" },
      { name: "ABAP Unit Testing", desc: "Automated regression testing and test suites" },
      { name: "Runtime Analysis (SAT / ST05)", desc: "Performance tuning, runtime traces, and SQL indexing" },
      { name: "Postman", desc: "OData v2/v4 and RESTful service endpoint testing" },
      { name: "Robot Framework & Selenium", desc: "Automated test scripts and QA verification" },
      { name: "Git, GitHub & GitLab", desc: "Branching strategies, version control, and code reviews" },
      { name: "Docker", desc: "Containerization fundamentals and dev environments" },
    ],
  },
];

const Skill = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [skillPage, setSkillPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalCategories = skillCategories.length;
  const activeCategory = skillCategories[categoryIndex];

  const handlePrev = () => {
    setCategoryIndex((prev) => (prev === 0 ? totalCategories - 1 : prev - 1));
    setSkillPage(0);
  };

  const handleNext = () => {
    setCategoryIndex((prev) => (prev === totalCategories - 1 ? 0 : prev + 1));
    setSkillPage(0);
  };

  const handleCategorySelect = (idx) => {
    setCategoryIndex(idx);
    setSkillPage(0);
  };

  // Item-level pagination under topics (4 items per page on mobile, 8 on desktop)
  const PAGE_SIZE = isMobile ? 4 : 8;
  const totalSkillPages = Math.ceil(activeCategory.skills.length / PAGE_SIZE);
  const safeSkillPage = Math.min(skillPage, Math.max(0, totalSkillPages - 1));

  const handlePrevSkillPage = () => {
    setSkillPage((prev) => (prev === 0 ? totalSkillPages - 1 : prev - 1));
  };

  const handleNextSkillPage = () => {
    setSkillPage((prev) => (prev === totalSkillPages - 1 ? 0 : prev + 1));
  };

  const displayedSkills = activeCategory.skills.slice(
    safeSkillPage * PAGE_SIZE,
    (safeSkillPage + 1) * PAGE_SIZE
  );

  return (
    <div className="w-full h-full flex flex-col justify-between animation-fade-in text-slate-300 select-none overflow-hidden">
      <div className="glass-panel w-full h-full rounded-2xl p-3 sm:p-4 md:p-5 relative overflow-hidden flex flex-col justify-between">
        {/* Top neon accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400"></div>

        <div className="flex-1 min-h-0 flex flex-col">
          {/* Header & Carousel Navigation (< >) at Header Level */}
          <div className="flex items-center justify-between gap-2 mb-2 sm:mb-2.5 shrink-0">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-1.5 sm:w-2 h-5 sm:h-7 bg-emerald-400 rounded-full"></div>
              <div>
                <span className="text-[10px] sm:text-xs font-grotesk uppercase tracking-wider text-emerald-400 font-semibold block">
                  Competency Matrix
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-space font-bold text-white leading-tight">
                  Skills & Expertise
                </h2>
              </div>
            </div>

            {/* Header-Level Topic Carousel Navigation (< >) */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xs font-grotesk text-slate-400 mr-1">
                {categoryIndex + 1} / {totalCategories}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous skill category"
                className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-emerald-400 text-white flex items-center justify-center font-grotesk font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                &lt;
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next skill category"
                className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-emerald-400 text-white flex items-center justify-center font-grotesk font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* On Mobile: 1 Topic per page (Header Level Pagination) */}
          <div className="block sm:hidden mb-2 shrink-0">
            <div className="p-2 rounded-xl border border-emerald-400 bg-emerald-950/70 text-white shadow-neon-green flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                {activeCategory.iconImage ? (
                  <div className="w-6 h-6 rounded bg-white p-0.5 flex items-center justify-center shrink-0 shadow-sm">
                    <img
                      src={activeCategory.iconImage}
                      alt={activeCategory.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-base">{activeCategory.icon}</span>
                )}
                <div className="min-w-0">
                  <h4 className="font-grotesk text-xs font-bold text-white truncate">
                    {activeCategory.title}
                  </h4>
                  <span className="text-[10px] font-grotesk text-slate-300 block truncate mt-0.5">
                    {activeCategory.subtitle}
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-grotesk text-emerald-400 font-semibold px-2 py-0.5 rounded bg-slate-900/90 border border-emerald-500/30 shrink-0 ml-1">
                Topic {categoryIndex + 1}/{totalCategories}
              </span>
            </div>
          </div>

          {/* On Desktop: Show All 3 Topic Buttons */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-2.5 mb-2.5 shrink-0">
            {skillCategories.map((cat, idx) => {
              const isSelected = idx === categoryIndex;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategorySelect(idx)}
                  className={`p-2 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                    isSelected
                      ? "bg-emerald-950/70 border-emerald-400 text-white shadow-neon-green"
                      : "bg-slate-950/50 border-white/10 text-slate-400 hover:text-white hover:border-emerald-500/30"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {cat.iconImage ? (
                      <div className="w-5 h-5 rounded bg-white p-0.5 flex items-center justify-center shrink-0 shadow-sm">
                        <img
                          src={cat.iconImage}
                          alt={cat.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-base">{cat.icon}</span>
                    )}
                    <span className="font-grotesk text-xs font-bold text-slate-100 truncate">
                      {cat.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-grotesk text-slate-400 block truncate mt-0.5">
                    {cat.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Skills Grid - Fixed Container Fitting Screen Height */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/60 border border-white/10 animation-fade-in flex-1 min-h-0 flex flex-col">
            <div className="flex items-center justify-between pb-1.5 sm:pb-2 mb-1.5 sm:mb-2 border-b border-white/10 shrink-0">
              {/* On Desktop: Show Category Title & Icon. On Mobile: Hidden since it's already shown in the top topic card */}
              <h3 className="hidden sm:flex font-space text-sm md:text-base font-bold text-white items-center gap-2">
                {activeCategory.iconImage ? (
                  <div className="w-5 h-5 rounded bg-white p-0.5 flex items-center justify-center shrink-0 shadow-sm">
                    <img
                      src={activeCategory.iconImage}
                      alt={activeCategory.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-emerald-400">{activeCategory.icon}</span>
                )}
                <span>{activeCategory.title}</span>
              </h3>

              <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
                <span className="text-[11px] sm:text-xs font-grotesk font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  {activeCategory.skills.length} Competencies
                </span>

                {totalSkillPages > 1 && (
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-grotesk text-slate-400">
                      Page {safeSkillPage + 1}/{totalSkillPages}
                    </span>
                    <button
                      type="button"
                      onClick={handlePrevSkillPage}
                      aria-label="Previous skill page"
                      className="w-6 sm:w-7 h-6 sm:h-7 rounded-lg bg-slate-900 border border-white/15 hover:border-emerald-400 text-white flex items-center justify-center font-grotesk font-bold text-xs transition-colors shadow-sm"
                    >
                      &lt;
                    </button>
                    <button
                      type="button"
                      onClick={handleNextSkillPage}
                      aria-label="Next skill page"
                      className="w-6 sm:w-7 h-6 sm:h-7 rounded-lg bg-slate-900 border border-white/15 hover:border-emerald-400 text-white flex items-center justify-center font-grotesk font-bold text-xs transition-colors shadow-sm"
                    >
                      &gt;
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Competency Items Grid: Fixed container fitting screen height without collapsing */}
            <div className="flex-1 min-h-[200px] grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 content-start">
              {displayedSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-lg bg-slate-900/60 border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-center"
                >
                  <div className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold text-xs mt-0.5 shrink-0">›</span>
                    <span className="text-xs font-bold text-white leading-tight">
                      {skill.name}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5 pl-3.5 line-clamp-1">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Indicators */}
        <div className="pt-1.5 sm:pt-2 mt-1.5 sm:mt-2 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs text-slate-400 font-grotesk shrink-0">
          <div className="flex items-center gap-1.5">
            {skillCategories.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => handleCategorySelect(dotIdx)}
                aria-label={`Go to category ${dotIdx + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  dotIdx === categoryIndex
                    ? "w-5 bg-emerald-400 shadow-neon-green"
                    : "bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
          <span className="text-emerald-400 font-medium">{activeCategory.subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
