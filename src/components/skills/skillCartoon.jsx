const SkillCartoon = () => {
  const pillars = [
    {
      title: "Clean-Core Strategy",
      desc: "Zero modifications to standard SAP tables; strictly decoupling extensions using ABAP Cloud and SAP BTP.",
    },
    {
      title: "Code Pushdown",
      desc: "Leveraging SAP HANA in-memory performance with complex calculations pushed to CDS Views and AMDP.",
    },
    {
      title: "RAP Business Objects",
      desc: "Modern RESTful Application Programming Model with draft handling, determinations, and validations.",
    },
    {
      title: "Quality Gates",
      desc: "Enforcing ATC (ABAP Test Cockpit) checks and automated ABAP Unit test suites for release integrity.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col animation-fade-in">
      <div className="glass-panel w-full h-full rounded-2xl p-4 md:p-5 relative overflow-hidden flex flex-col justify-between">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500"></div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-grotesk uppercase tracking-wider text-emerald-400 font-semibold">
              Architectural Philosophy
            </span>
          </div>

          <h3 className="text-lg md:text-xl font-space font-bold text-white mb-1.5">
            Clean-Core & Modern SAP
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            Building resilient, future-ready enterprise extensions that survive S/4HANA upgrades seamlessly without technical debt.
          </p>

          <div className="space-y-2">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-slate-950/60 border border-white/10"
              >
                <h4 className="text-xs font-grotesk font-semibold text-emerald-300">
                  {pillar.title}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCartoon;
