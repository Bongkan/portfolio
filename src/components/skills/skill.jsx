import { useState } from "react";

const skillCategories = [
  {
    id: "sap-core",
    title: "SAP S/4HANA & Clean-Core",
    icon: "⚡",
    skills: [
      { name: "SAP S/4HANA (Private Cloud)", level: "Advanced", desc: "Core implementation & extensions" },
      { name: "SAP ECC 6.0", level: "Advanced", desc: "Support, enhancements & maintenance" },
      { name: "Clean-Core Architecture", level: "Specialist", desc: "In-app, ABAP Cloud & BTP" },
      { name: "ABAP RESTful Model (RAP)", level: "Advanced", desc: "Enterprise RAP & business objects" },
      { name: "CDS Views & AMDP", level: "Advanced", desc: "Core Data Services & HANA procedures" },
      { name: "SAP Fiori Elements & SAPUI5", level: "Proficient", desc: "Modern user experience apps" },
      { name: "OData Services", level: "Advanced", desc: "RESTful SAP APIs & integration" },
      { name: "ABAP Coding for HANA", level: "Advanced", desc: "Code pushdown & in-memory queries" },
    ],
  },
  {
    id: "sap-modules",
    title: "Enterprise Modules & Integration",
    icon: "🔄",
    skills: [
      { name: "SAP FI (Financial Accounting)", level: "Module Expert", desc: "Bank interfaces & reconciliation" },
      { name: "SAP SD (Sales & Distribution)", level: "Module Expert", desc: "Order-to-cash & commercial flow" },
      { name: "SAP MM (Materials Management)", level: "Module Expert", desc: "Procure-to-pay & inventory logistics" },
      { name: "BAPI & Remote Function Calls (RFC)", level: "Advanced", desc: "Secure cross-system interfaces" },
      { name: "Batch Data Command (BDC)", level: "Advanced", desc: "Batch input & legacy data migration" },
      { name: "ABAP Proxy (SAP PI/PO)", level: "Proficient", desc: "Middleware enterprise integration" },
      { name: "Dialog Programming", level: "Advanced", desc: "Custom screen painter & module pools" },
    ],
  },
  {
    id: "forms-reports",
    title: "Reports, Forms & Enhancements",
    icon: "📊",
    skills: [
      { name: "ALV Grid & List Processing", level: "Advanced", desc: "Interactive high-speed reporting" },
      { name: "Smart Forms", level: "Advanced", desc: "Enterprise document automation" },
      { name: "Adobe Forms (PDF)", level: "Proficient", desc: "Interactive & print forms" },
      { name: "SAP Scripts", level: "Proficient", desc: "Legacy output format support" },
      { name: "BAdIs & User Exits", level: "Advanced", desc: "Enhancements & custom validations" },
      { name: "Enhancement Spots & Sections", level: "Advanced", desc: "Standard SAP modifications" },
    ],
  },
  {
    id: "quality-web",
    title: "Code Quality & Web Tech",
    icon: "🛠️",
    skills: [
      { name: "ATC (ABAP Test Cockpit)", level: "Quality Gate", desc: "Automated checks & compliance" },
      { name: "ABAP Unit Testing", level: "QA Focus", desc: "Regression-free automated unit tests" },
      { name: "Performance Tuning", level: "Specialist", desc: "Runtime analysis (SAT/ST05) & indexing" },
      { name: "React & JavaScript", level: "Proficient", desc: "Frontend modern web development" },
      { name: "HTML5, CSS & Tailwind", level: "Proficient", desc: "Modern UI styling & layouts" },
      { name: "Docker, AWS & Git", level: "Proficient", desc: "CI/CD & cloud workflows" },
    ],
  },
];

const Skill = () => {
  const [activeTab, setActiveTab] = useState("sap-core");
  const activeCategory = skillCategories.find((c) => c.id === activeTab) || skillCategories[0];

  return (
    <div className="w-full h-full flex flex-col animation-fade-in cyber-scrollbar overflow-y-auto pr-1">
      {/* Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`p-2.5 rounded-xl text-left transition-all duration-200 border ${
              activeTab === cat.id
                ? "bg-emerald-950/70 border-emerald-400 text-white shadow-neon-green"
                : "bg-slate-950/50 border-white/10 text-slate-400 hover:text-white hover:border-emerald-500/30"
            }`}
          >
            <span className="text-base mr-1.5">{cat.icon}</span>
            <span className="font-space text-xs font-semibold block sm:inline">
              {cat.title.split(" ")[0]}
            </span>
            <span className="text-[10px] text-slate-400 block truncate">
              {cat.title}
            </span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="glass-panel p-5 rounded-2xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <h3 className="font-space text-base md:text-lg font-bold text-white flex items-center gap-2">
            <span className="text-emerald-400">{activeCategory.icon}</span>
            {activeCategory.title}
          </h3>
          <span className="text-[11px] font-space px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            {activeCategory.skills.length} Competencies
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {activeCategory.skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-950/60 border border-white/10 hover:border-emerald-500/40 transition-all duration-200 hover:shadow-neon-green flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs md:text-sm font-bold text-white leading-tight">
                  {skill.name}
                </span>
                <span className="shrink-0 text-[10px] font-space px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/30 text-emerald-300">
                  {skill.level}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
