import { useState } from "react";
import Face from "../assets/icons8-facebook.svg";
import Git from "../assets/icons8-github.svg";
import Linked from "../assets/icons8-linked-in.svg";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Bongkan.jj@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center animation-fade-in p-4 md:p-8">
      <div className="glass-panel w-full max-w-xl rounded-2xl p-6 md:p-8 relative overflow-hidden">
        {/* Glowing cyber top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400"></div>

        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-space mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            COMMUNICATION TERMINAL
          </div>
          <h2 className="text-2xl md:text-3xl font-space font-bold text-white tracking-wide">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-xs md:text-sm mt-1">
            Available for Technical SAP ABAP Consulting, S/4HANA Projects, and Engineering Inquiries.
          </p>
        </div>

        {/* Primary Contact Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {/* Email Channel */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 hover:border-emerald-500/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-space text-slate-400 uppercase tracking-wider">
                  Direct Email
                </span>
                <span className="text-emerald-400 text-xs">✉</span>
              </div>
              <a
                href="mailto:Bongkan.jj@gmail.com"
                className="block text-sm font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors truncate"
              >
                Bongkan.jj@gmail.com
              </a>
            </div>
            <button
              onClick={handleCopyEmail}
              className="mt-3 w-full py-1.5 px-3 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/20 text-emerald-300 font-space text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>{copied ? "COPIED TO CLIPBOARD!" : "COPY EMAIL"}</span>
            </button>
          </div>

          {/* Telephone Channel */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 hover:border-emerald-500/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-space text-slate-400 uppercase tracking-wider">
                  Telephone (Direct)
                </span>
                <span className="text-cyan-400 text-xs">☎</span>
              </div>
              <a
                href="tel:+66876604146"
                className="block text-sm font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors"
              >
                +66 87 660 4146
              </a>
            </div>
            <a
              href="tel:+66876604146"
              className="mt-3 w-full py-1.5 px-3 rounded-lg bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/20 text-cyan-300 font-space text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>CALL NOW</span>
            </a>
          </div>
        </div>

        {/* Location & Response Time */}
        <div className="p-3 rounded-xl bg-slate-950/40 border border-white/10 flex items-center justify-between text-xs text-slate-300 mb-6">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-emerald-400 shrink-0"
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
            <span>Lamphun / Chiang Mai, Thailand (UTC+7)</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-space shrink-0">
            Typically responds within 24h
          </span>
        </div>

        {/* Social Profiles with secure rel="noopener noreferrer" */}
        <div className="border-t border-white/10 pt-4">
          <p className="text-center text-xs text-slate-400 mb-3 font-space uppercase tracking-wider">
            Verified External Networks
          </p>
          <div className="flex justify-center gap-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/bongkan-jujai"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-white/10 hover:border-emerald-500/40 text-xs text-slate-200 transition-all hover:shadow-neon-green"
              title="LinkedIn"
            >
              <img className="w-4 h-4" src={Linked} alt="Linkedin" />
              <span className="font-space text-xs">LinkedIn</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Bongkan"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-white/10 hover:border-emerald-500/40 text-xs text-slate-200 transition-all hover:shadow-neon-green"
              title="GitHub"
            >
              <img className="w-4 h-4" src={Git} alt="Github" />
              <span className="font-space text-xs">GitHub</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/Nanosweet159/"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-white/10 hover:border-emerald-500/40 text-xs text-slate-200 transition-all hover:shadow-neon-green"
              title="Facebook"
            >
              <img className="w-4 h-4" src={Face} alt="Facebook" />
              <span className="font-space text-xs">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
