import Ufo from "../assets/ufo-flying-svgrepo-com.svg";
import { navSections } from "./portfolioData.js";

const Nav2 = ({ activeSection, setActiveSection, showMenu, setShowMenu }) => {
  const isMenuOpen = showMenu === "On";

  const toggleMenu = () => {
    setShowMenu(isMenuOpen ? "Off" : "On");
  };

  const handleSelect = (sectionId) => {
    setActiveSection(sectionId);
    setShowMenu("Off");
  };

  return (
    <>
      {/* Mobile Sticky Header */}
      <header className="md:hidden sticky top-0 left-0 right-0 z-50 w-full px-4 py-3 glass-panel border-b border-white/10 flex items-center justify-between">
        {/* Brand & Mascot */}
        <div
          onClick={() => handleSelect("About")}
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          <img
            src={Ufo}
            alt="UFO Mascot"
            className="w-8 h-8 animation-float drop-shadow-[0_0_8px_rgba(0,240,118,0.6)]"
          />
          <div>
            <span className="font-space text-sm font-bold text-white tracking-wider block">
              BONGKAN.J
            </span>
            <span className="text-[11px] text-emerald-400 font-grotesk block -mt-0.5 font-medium">
              SAP ABAP Consultant
            </span>
          </div>
        </div>

        {/* Current Active Section Badge & Hamburger Button */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-grotesk px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
            {activeSection}
          </span>
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 rounded-xl bg-slate-900 border border-white/10 text-white hover:border-emerald-500/40 focus:outline-none transition-colors"
          >
            {isMenuOpen ? (
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Slide-down Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] z-40 bg-slate-950/95 backdrop-blur-2xl animation-fade-in flex flex-col justify-between p-6 overflow-y-auto">
          <div className="space-y-2 pt-2">
            <p className="text-xs font-grotesk text-slate-400 uppercase tracking-wider px-2 mb-3 font-semibold">
              Navigation Menu
            </p>
            {navSections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => handleSelect(sec.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl font-grotesk text-left text-sm transition-all border ${
                    isActive
                      ? "bg-emerald-950/70 border-emerald-400 text-white shadow-neon-green"
                      : "bg-slate-900/50 border-white/10 text-slate-300 hover:text-white hover:border-emerald-500/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base">{sec.icon}</span>
                    <span className="font-bold tracking-wide">{sec.label}</span>
                  </div>
                  {isActive && (
                    <img
                      src={Ufo}
                      alt="Active Indicator"
                      className="w-5 h-5 animation-float drop-shadow-[0_0_6px_rgba(0,240,118,0.7)]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Contact & Info Footer in Drawer */}
          <div className="pt-6 border-t border-white/10 mt-6 text-center space-y-2">
            <p className="text-xs text-slate-400">
              Chiang Mai University • Mechanical Engineering
            </p>
            <p className="text-[11px] text-emerald-300">
              Bangkok • Chiang Mai • Lamphun, Thailand
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-emerald-400">
              <span>Bongkan.jj@gmail.com</span>
              <span>•</span>
              <span>+66 87 660 4146</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav2;
