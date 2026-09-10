const About = () => {
  const highlights = [
    { label: "ABAP Consultant", value: "Apr 2025+", desc: "Zygen Co., Ltd." },
    { label: "Modules", value: "FI • SD • MM", desc: "Enterprise Business Logic" },
    { label: "SAP Stack", value: "S/4HANA & ECC", desc: "Clean-Core, RAP & Fiori" },
    { label: "Education", value: "B.Eng.", desc: "Chiang Mai University" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between animation-fade-in text-slate-300 overflow-hidden">
      <div className="glass-panel w-full h-full rounded-2xl p-3 sm:p-4 md:p-5 relative overflow-hidden flex flex-col justify-between">
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400"></div>

        <div className="flex-1 min-h-0 flex flex-col justify-between overflow-hidden">
          {/* Section Header */}
          <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2.5 md:mb-3 shrink-0">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-1.5 sm:w-2 h-5 sm:h-7 bg-emerald-400 rounded-full"></div>
              <div>
                <span className="text-[10px] sm:text-xs font-grotesk uppercase tracking-wider text-emerald-400 font-semibold block">
                  Profile Overview
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-space font-bold text-white leading-tight">
                  Bongkan Jujai
                </h2>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] sm:text-xs font-grotesk font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                Technical ABAP Consultant
              </span>
            </div>
          </div>

          {/* Concise, Direct Overview */}
          <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 text-slate-300 text-[11px] sm:text-xs md:text-sm leading-relaxed flex-1 flex flex-col min-h-0">
            <p>
              Technical ABAP Consultant at Zygen since <span className="text-emerald-400 font-semibold">April 2025</span>, delivering and supporting <span className="text-white font-medium">SAP ECC 6.0 and SAP S/4HANA Private Cloud</span> enterprise solutions.
            </p>
            <p>
              Specialized in <span className="text-white font-medium">Clean-Core development</span> (in-app extensions, ABAP Cloud, BTP), building high-performance HANA models with <span className="text-emerald-300">CDS Views, AMDP, RAP (RESTful Application Programming Model)</span>, and <span className="text-cyan-300">SAP Fiori / SAPUI5</span>.
            </p>
            <p>
              Backed by manufacturing engineering experience at SVI Public Co., Ltd. and a <span className="text-white font-medium">Bachelor of Mechanical Engineering from Chiang Mai University</span>, with hands-on delivery across <span className="text-emerald-400 font-semibold">FI, SD, and MM</span> modules—including ALV Reporting, Smart Forms, Adobe Forms, BDC, BAPI, RFC, User Exits, BAdIs, and ATC testing.
            </p>
          </div>

          {/* Metrics Grid - Normal 2x2 on Mobile, 4-col on Desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 my-2 sm:my-3 shrink-0">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-950/60 border border-white/10 text-center flex flex-col justify-center min-w-0"
              >
                <div className="text-emerald-400 font-space font-bold text-xs sm:text-sm md:text-base truncate">
                  {item.value}
                </div>
                <div className="text-white font-medium text-[10.5px] sm:text-xs mt-0.5 truncate">
                  {item.label}
                </div>
                <div className="text-slate-400 text-[9.5px] sm:text-[10px] mt-0.5 truncate">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Active Cities Banner */}
          <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-slate-950/40 border border-white/10 text-[10.5px] sm:text-xs text-slate-300 shrink-0">
            <span className="text-emerald-400 font-bold shrink-0">📍 Active Locations:</span>
            <span className="truncate">Bangkok • Chiang Mai • Lamphun, Thailand</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-1.5 sm:pt-2 mt-1.5 sm:mt-2 flex items-center justify-between gap-3 border-t border-white/10">
          <span className="text-[10.5px] sm:text-xs text-slate-400 font-grotesk truncate">
            Full CV Document Available in PDF
          </span>
          <a
            href="https://drive.google.com/file/d/1YucppzmBRMmR7azPJP22rsRWC00ZxxMd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-grotesk font-bold text-[10.5px] sm:text-xs tracking-wider shadow-neon-green transition-all shrink-0"
          >
            <svg
              className="w-3.5 h-3.5"
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
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
