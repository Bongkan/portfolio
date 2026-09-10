import { useState } from "react";
import Face from "../assets/icons8-facebook.svg";
import Git from "../assets/icons8-github.svg";
import Linked from "../assets/icons8-linked-in.svg";
import MainPic from "../assets/Main.jpg";

const Profile = () => {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Bongkan.jj@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.8 : 1));
  };

  return (
    <>
      <section
        id="profile"
        className="w-full h-full flex flex-col animation-fade-in"
      >
        <div className="glass-panel w-full h-full rounded-2xl p-4 md:p-5 flex flex-col justify-between items-center text-center relative overflow-hidden group">
          {/* Neon accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400"></div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Consulting</span>
          </div>

          {/* Portrait using only Main.jpg with Full Head Focus & Click-to-Zoom */}
          <div className="relative mb-2.5 group/photo select-none">
            <div
              onClick={() => {
                setIsModalOpen(true);
                setZoomLevel(1);
              }}
              title="Click to zoom portrait"
              className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-neon-green p-0.5 bg-slate-950/80 relative cursor-pointer"
            >
              <img
                src={MainPic}
                alt="Bongkan Jujai portrait"
                style={{
                  objectPosition: "center 10%",
                }}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover/photo:scale-105"
                loading="eager"
              />

              {/* Hover Zoom Hint */}
              <div className="absolute inset-0 bg-slate-950/35 opacity-0 group-hover/photo:opacity-100 transition-opacity rounded-xl flex items-center justify-center z-20 pointer-events-none">
                <span className="bg-slate-900/90 text-emerald-300 text-[10px] font-grotesk font-medium px-2 py-0.5 rounded border border-emerald-500/40 flex items-center gap-1 shadow-lg">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                  Click to Zoom
                </span>
              </div>
            </div>

            {/* ABAP Badge */}
            <div className="absolute -bottom-1 -right-1 z-20 bg-slate-900 border border-emerald-500/50 text-emerald-400 text-[10px] font-grotesk font-semibold px-1.5 py-0.5 rounded shadow-md">
              SAP ABAP
            </div>
          </div>

          {/* Identity & Role */}
          <h1 className="font-space text-xl md:text-2xl font-bold tracking-wide text-white glow-text mt-0.5">
            BONGKAN JUJAI
          </h1>
          <p className="text-emerald-400 font-medium text-xs md:text-sm mt-0.5 tracking-wide">
            Technical ABAP Consultant
          </p>

          {/* Active Cities List (Bangkok, Chiang Mai, Lamphun) */}
          <div className="mt-1.5 w-full flex items-center justify-center gap-1 text-slate-300 text-xs bg-slate-950/40 py-1 px-2.5 rounded-lg border border-white/5">
            <svg
              className="w-3.5 h-3.5 text-emerald-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="font-medium text-[11px] text-slate-300">
              Bangkok • Chiang Mai • Lamphun
            </span>
          </div>

          {/* Education Highlight */}
          <div className="mt-1.5 w-full py-1.5 px-3 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
            <p className="text-slate-400 text-[10px]">Education</p>
            <p className="font-semibold text-slate-200 text-xs">
              B.Eng. Mechanical Engineering
            </p>
            <p className="text-emerald-400/90 text-[11px]">
              Chiang Mai University
            </p>
          </div>

          {/* Contact Links & Actions */}
          <div className="w-full flex flex-col gap-1.5 pt-2 mt-2 border-t border-white/10 text-xs">
            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/20 text-slate-200 transition-colors"
              title="Click to copy email address"
            >
              <span className="flex items-center gap-2 truncate text-slate-300 text-xs">
                <svg
                  className="w-3.5 h-3.5 text-emerald-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Bongkan.jj@gmail.com
              </span>
              <span className="text-xs text-emerald-400 shrink-0 font-grotesk font-semibold ml-1">
                {copied ? "COPIED!" : "COPY"}
              </span>
            </button>

            <a
              href="tel:+66876604146"
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/50 hover:bg-slate-800/60 border border-white/10 text-slate-300 transition-colors"
            >
              <span className="flex items-center gap-2 text-xs">
                <svg
                  className="w-3.5 h-3.5 text-emerald-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +66 87 660 4146
              </span>
              <span className="text-xs text-slate-300 font-grotesk font-medium">CALL</span>
            </a>
          </div>

          {/* Social Icons (Enlarged 2x) */}
          <div className="flex items-center justify-center gap-4 mt-2 pt-2 border-t border-white/10 w-full">
            <a
              href="https://www.linkedin.com/in/bongkan-jujai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/15 hover:border-emerald-400 transition-all hover:scale-110 shadow-sm"
              title="LinkedIn Profile"
            >
              <img className="w-8 h-8 sm:w-9 sm:h-9" src={Linked} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/Bongkan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/15 hover:border-emerald-400 transition-all hover:scale-110 shadow-sm"
              title="GitHub Profile"
            >
              <img className="w-8 h-8 sm:w-9 sm:h-9" src={Git} alt="Github" />
            </a>
            <a
              href="https://www.facebook.com/Nanosweet159/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/15 hover:border-emerald-400 transition-all hover:scale-110 shadow-sm"
              title="Facebook Profile"
            >
              <img className="w-8 h-8 sm:w-9 sm:h-9" src={Face} alt="Facebook" />
            </a>
          </div>
        </div>
      </section>

      {/* Portrait Lightbox Modal with Zoom */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-[200] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animation-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative glass-panel p-3 rounded-2xl max-w-xl w-full flex flex-col items-center"
          >
            {/* Modal Controls Header */}
            <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs">
              <span className="font-grotesk text-emerald-400 font-bold tracking-wider">
                Bongkan Jujai — Portrait
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleZoom}
                  className="px-2.5 py-1 rounded bg-slate-900 border border-white/15 text-slate-200 text-xs font-grotesk hover:border-emerald-400"
                >
                  {zoomLevel > 1 ? "Zoom 1x" : "Zoom 2x"}
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-lg bg-slate-900 border border-white/15 text-slate-300 hover:text-white hover:border-rose-400"
                  aria-label="Close modal"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Zoomable Image Container */}
            <div
              onClick={toggleZoom}
              className={`overflow-auto max-h-[75vh] w-full flex items-center justify-center rounded-xl bg-slate-950 p-2 relative cursor-${
                zoomLevel > 1 ? "zoom-out" : "zoom-in"
              }`}
            >
              <img
                src={MainPic}
                alt="Enlarged Portrait"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: "center top",
                }}
                className="max-h-[65vh] w-auto object-contain rounded-lg transition-transform duration-300 select-none"
              />
            </div>

            <p className="text-xs text-slate-400 mt-2 font-grotesk">
              Click image or button above to toggle zoom • Click outside to close
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
