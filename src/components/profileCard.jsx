import { useState } from "react";
import Face from "../assets/icons8-facebook.svg";
import Git from "../assets/icons8-github.svg";
import Linked from "../assets/icons8-linked-in.svg";
import ProfilePic from "../assets/Croped.jpg";

const Profile = ({ isCompact = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Bongkan.jj@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="profile"
      className={`w-full flex flex-col items-center justify-center animation-fade-in ${
        isCompact ? "p-3" : "p-4 md:p-6"
      }`}
    >
      <div className="glass-panel w-full max-w-sm rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden group">
        {/* Neon accent top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400"></div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Open for Opportunities</span>
        </div>

        {/* Portrait with Glowing Cyber Ring */}
        <div className="relative mb-5">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-neon-green p-1 bg-slate-950/50">
            <img
              className="w-full h-full object-cover rounded-xl transition duration-500 group-hover:scale-105"
              src={ProfilePic}
              alt="Bongkan Jujai portrait"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-emerald-500/50 text-emerald-400 text-[10px] font-space px-2 py-0.5 rounded-md shadow-md">
            SAP ABAP
          </div>
        </div>

        {/* Identity & Role */}
        <h1 className="font-space text-2xl font-bold tracking-wide text-white glow-text">
          BONGKAN JUJAI
        </h1>
        <p className="text-emerald-400 font-medium text-sm mt-1 tracking-wide">
          Technical ABAP Consultant
        </p>
        <p className="text-slate-400 text-xs mt-0.5 flex items-center justify-center gap-1">
          <svg
            className="w-3.5 h-3.5 text-slate-400"
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
          Lamphun / Chiang Mai, Thailand
        </p>

        {/* Education Highlight */}
        <div className="mt-3 w-full py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
          <p className="text-slate-400 text-[11px]">Education</p>
          <p className="font-semibold text-slate-200">
            B.Eng. Mechanical Engineering
          </p>
          <p className="text-emerald-400/90 text-[11px]">
            Chiang Mai University
          </p>
        </div>

        {/* Tagline */}
        <p className="text-xs italic text-slate-300 my-4 border-l-2 border-emerald-500/40 pl-3 text-left w-full">
          &ldquo;Enhancing &amp; implementing SAP ECC6 &amp; S/4HANA systems through Clean-Core &amp; modern ABAP Cloud.&rdquo;
        </p>

        {/* Contact Links & Actions */}
        <div className="w-full flex flex-col gap-2 pt-2 border-t border-white/10 text-xs">
          <button
            onClick={handleCopyEmail}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/20 text-slate-200 transition-colors"
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
            <span className="text-[10px] text-emerald-400 shrink-0 font-space ml-1">
              {copied ? "COPIED!" : "COPY"}
            </span>
          </button>

          <a
            href="tel:+66876604146"
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-slate-900/50 hover:bg-slate-800/60 border border-white/10 text-slate-300 transition-colors"
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
            <span className="text-[10px] text-slate-400 font-space">CALL</span>
          </a>
        </div>

        {/* Social Icons with safe rel="noopener noreferrer" */}
        <div className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-white/10 w-full">
          <a
            href="https://www.linkedin.com/in/bongkan-jujai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 transition-all"
            title="LinkedIn Profile"
          >
            <img className="w-5 h-5" src={Linked} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/Bongkan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 transition-all"
            title="GitHub Profile"
          >
            <img className="w-5 h-5" src={Git} alt="Github" />
          </a>
          <a
            href="https://www.facebook.com/Nanosweet159/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 transition-all"
            title="Facebook Profile"
          >
            <img className="w-5 h-5" src={Face} alt="Facebook" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
