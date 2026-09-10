const About = () => {
  const highlights = [
    { label: "Experience", value: "2.5+ Years", desc: "Consulting & Implementation" },
    { label: "Core Modules", value: "FI • SD • MM", desc: "SAP Business Processes" },
    { label: "SAP S/4HANA", value: "Clean-Core", desc: "ABAP Cloud, BTP & RAP" },
    { label: "Education", value: "B.Eng.", desc: "Chiang Mai University" },
  ];

  return (
    <div className="flex flex-col w-full h-full justify-start items-center animation-fade-in cyber-scrollbar overflow-y-auto pr-1">
      <div className="glass-panel w-full max-w-2xl rounded-2xl p-6 md:p-8 relative">
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-2.5 h-8 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></div>
          <div>
            <span className="text-xs font-space uppercase tracking-widest text-emerald-400 font-semibold">
              Executive Summary
            </span>
            <h2 className="text-xl md:text-2xl font-space font-bold text-white">
              Technical ABAP Consultant
            </h2>
          </div>
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
          <p>
            With <span className="text-emerald-400 font-semibold">over 2.5 years of consulting experience</span>,
            I specialize in enhancing and supporting enterprise solutions in{" "}
            <span className="text-white font-medium">SAP ECC6 and SAP S/4HANA Private Cloud</span> across
            diverse industries including Petrochemicals, Agro & Food, Utilities, and Logistics.
          </p>

          <p>
            My core focus is on modernizing SAP architecture using{" "}
            <span className="text-emerald-300 font-semibold">Clean-Core principles</span>—designing in-app extensions,
            <span className="text-cyan-300 font-medium"> ABAP Cloud, BTP</span>, and building high-performance HANA models with{" "}
            <span className="text-white">CDS Views, AMDP, RAP (RESTful Application Programming Model)</span>,
            and <span className="text-white">SAP Fiori / SAPUI5</span>.
          </p>

          <p>
            Equipped with a{" "}
            <span className="text-white font-medium">Bachelor of Mechanical Engineering from Chiang Mai University</span>,
            I bridge analytical systems engineering with enterprise software. I have delivered full-lifecycle
            implementations for <span className="text-emerald-400 font-semibold">FI, SD, and MM</span> modules,
            covering ALV Reporting, Smart Forms, Adobe Forms, BDC, BAPI, RFC, Enhancements (User Exits & BAdIs),
            and comprehensive code quality using <span className="text-cyan-300">ATC & ABAP Unit</span>.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-950/60 border border-emerald-500/20 text-center flex flex-col justify-center"
            >
              <div className="text-emerald-400 font-space font-bold text-base md:text-lg">
                {item.value}
              </div>
              <div className="text-white font-medium text-xs mt-0.5">
                {item.label}
              </div>
              <div className="text-slate-400 text-[10px] mt-0.5">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button with safe rel="noopener noreferrer" */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <span className="text-xs text-slate-400">
            Need a complete dossier or official proposal CV?
          </span>
          <a
            href="https://drive.google.com/file/d/1ZE6iCBqo6xYdCI1-GqfkcbdWUYb0KWeL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-slate-950 font-space font-semibold text-xs md:text-sm tracking-wider shadow-neon-green transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            DOWNLOAD CV (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
