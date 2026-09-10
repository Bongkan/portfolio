const ExtracurricularDetail = ({ selectedItem }) => {
  if (!selectedItem) return null;

  const isBootcamp = Boolean(selectedItem.program);

  return (
    <div className="w-full h-full flex flex-col animation-fade-in select-none">
      <div className="glass-panel w-full h-full rounded-2xl p-4 md:p-5 flex flex-col justify-between relative overflow-hidden group">
        {/* Top neon accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400"></div>

        <div className="overflow-y-auto cyber-scrollbar pr-0.5">
          {/* Header Tag */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-xs font-grotesk uppercase tracking-wider text-emerald-400 font-semibold px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              {isBootcamp ? "Bootcamp Dossier" : "Hobby Project Preview"}
            </span>
            <span className="text-xs font-grotesk text-slate-400">
              {isBootcamp ? selectedItem.period : selectedItem.type}
            </span>
          </div>

          {/* Media Header (Screenshot or Bootcamp Logo) */}
          <div className="w-full h-28 sm:h-32 rounded-xl overflow-hidden border border-white/15 bg-slate-950 p-1 mb-3 relative flex items-center justify-center">
            {isBootcamp ? (
              <div className="flex items-center justify-center w-full h-full bg-slate-900/80 rounded-lg p-2">
                <img
                  src={selectedItem.logo}
                  alt={selectedItem.title}
                  className="max-h-24 max-w-full object-contain rounded"
                />
              </div>
            ) : (
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
            <div className="absolute top-2 right-2 bg-slate-950/80 backdrop-blur-sm text-emerald-400 text-[10px] font-grotesk font-semibold px-2 py-0.5 rounded border border-emerald-500/30">
              {isBootcamp ? selectedItem.badge : "Live Project"}
            </div>
          </div>

          {/* Title & Organization / Type */}
          <h3 className="font-space text-lg font-bold text-white tracking-wide">
            {selectedItem.title}
          </h3>
          <p className="text-xs text-emerald-400 font-medium mt-0.5">
            {isBootcamp ? selectedItem.program : selectedItem.type}
          </p>
          {selectedItem.location && (
            <p className="text-[11px] text-slate-400 mt-0.5">
              📍 {selectedItem.location}
            </p>
          )}

          {/* Description */}
          <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
            {selectedItem.desc}
          </p>

          {/* Highlights (Bootcamp) or Tags (Hobby Project) */}
          {isBootcamp && selectedItem.highlights && (
            <div className="mt-3 pt-3 border-t border-white/10">
              <h5 className="text-xs font-grotesk uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                Curriculum Takeaways
              </h5>
              <ul className="space-y-1 text-xs text-slate-300">
                {selectedItem.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                    <span className="text-emerald-400 font-bold text-xs mt-0.5">›</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!isBootcamp && selectedItem.tags && (
            <div className="mt-3 pt-3 border-t border-white/10">
              <h5 className="text-xs font-grotesk uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                Tech Stack
              </h5>
              <div className="flex flex-wrap gap-1">
                {selectedItem.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-grotesk font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Action (Live Demo Button for Hobby Projects) */}
        {!isBootcamp && selectedItem.liveUrl && (
          <div className="pt-3 mt-3 border-t border-white/10">
            <a
              href={selectedItem.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-grotesk text-xs font-bold flex items-center justify-center gap-1.5 shadow-neon-green transition-all"
            >
              <span>EXPLORE LIVE DEMO</span>
              <span>↗</span>
            </a>
          </div>
        )}

        {isBootcamp && (
          <div className="pt-2.5 mt-3 border-t border-white/10 text-center">
            <span className="text-xs font-grotesk text-emerald-400 font-medium">
              ✓ Verified Completion Certificate
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExtracurricularDetail;
