import { useState } from "react";
import Face from "../assets/icons8-facebook.svg";
import Git from "../assets/icons8-github.svg";
import Linked from "../assets/icons8-linked-in.svg";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("SAP Consulting");
  const [customTopic, setCustomTopic] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Bongkan.jj@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeTopic = isCustom && customTopic.trim() ? customTopic.trim() : selectedTopic;

  return (
    <div className="w-full min-h-full flex flex-col justify-between animation-fade-in text-slate-300 select-none">
      <div className="glass-panel w-full min-h-full rounded-2xl p-4 md:p-5 relative overflow-hidden flex flex-col justify-between">
        {/* Top glowing cyber accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400"></div>

        <div>
          {/* Header */}
          <div className="flex items-center justify-between gap-3 mb-2.5 md:mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-6 md:h-7 bg-emerald-400 rounded-full"></div>
              <div>
                <span className="text-xs font-grotesk uppercase tracking-wider text-emerald-400 font-semibold block">
                  Communication Terminal
                </span>
                <h2 className="text-lg md:text-xl font-space font-bold text-white">
                  Get In Touch
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-grotesk font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Consulting</span>
            </div>
          </div>

          {/* Engagement Terms & Availability Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-2.5 md:mb-3">
            {/* Availability Status */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/60 border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-grotesk text-slate-400">
                <span className="uppercase tracking-wider">Availability Status</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <div className="my-1">
                <div className="text-white font-space font-bold text-sm sm:text-base text-emerald-300">
                  Available Q2 2027
                </div>
                <div className="text-slate-400 text-[11px] font-grotesk mt-0.5">
                  Contract & Full-time Inquiries
                </div>
              </div>
            </div>

            {/* Working Mode */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/60 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-grotesk text-slate-400">
                <span className="uppercase tracking-wider">Working Mode</span>
                <span className="text-cyan-400">📍</span>
              </div>
              <div className="my-1">
                <div className="text-white font-space font-bold text-sm sm:text-base text-cyan-300">
                  Remote & Hybrid
                </div>
                <div className="text-slate-400 text-[11px] font-grotesk mt-0.5">
                  Bangkok • Chiang Mai • Lamphun
                </div>
              </div>
            </div>

            {/* Timezone & Overlap */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/60 border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-grotesk text-slate-400">
                <span className="uppercase tracking-wider">Timezone</span>
                <span className="text-emerald-400">🌐</span>
              </div>
              <div className="my-1">
                <div className="text-white font-space font-bold text-sm sm:text-base text-white">
                  UTC+7 (Indochina Time)
                </div>
                <div className="text-slate-400 text-[11px] font-grotesk mt-0.5">
                  Flexible for global overlap
                </div>
              </div>
            </div>
          </div>

          {/* Scope & Response Banner */}
          <span className="text-[11px] font-grotesk text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 shrink-0">
            Reply within 24h
          </span>

          {/* Direct Communication Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
            {/* Email Channel */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/60 border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-grotesk text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xs">
                      ✉
                    </span>
                    <span className="font-semibold text-slate-300">Email</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-grotesk flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Direct Inbox
                  </span>
                </div>

                <div className="mt-1.5">
                  <a
                    href="mailto:Bongkan.jj@gmail.com"
                    className="text-sm sm:text-base font-space font-bold text-white hover:text-emerald-300 transition-colors block truncate"
                  >
                    Bongkan.jj@gmail.com
                  </a>
                </div>

                {/* Inquiry Topic with Custom Free Text */}
                <div className="mt-2 pt-2 border-t border-white/5">
                  <div className="text-[10px] font-grotesk uppercase tracking-wider text-slate-400 mb-1">
                    Inquiry Topic:
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {["SAP Consulting", "Full-time Role"].map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => {
                          setSelectedTopic(topic);
                          setIsCustom(false);
                        }}
                        className={`text-[10px] font-grotesk px-2 py-0.5 rounded-md border transition-all ${!isCustom && selectedTopic === topic
                          ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 font-semibold"
                          : "bg-white/5 border-white/10 text-slate-300 hover:border-emerald-500/30"
                          }`}
                      >
                        {topic}
                      </button>
                    ))}

                    <div className="flex-1 min-w-[120px]">
                      <input
                        type="text"
                        value={isCustom ? customTopic : ""}
                        placeholder="Type custom topic..."
                        onFocus={() => setIsCustom(true)}
                        onChange={(e) => {
                          setIsCustom(true);
                          setCustomTopic(e.target.value);
                        }}
                        className={`w-full text-[10px] font-grotesk px-2 py-0.5 rounded-md border bg-slate-950/80 text-white placeholder:text-slate-500 transition-all focus:outline-none ${isCustom
                          ? "border-emerald-400 ring-1 ring-emerald-400/40"
                          : "border-white/10 hover:border-white/20"
                          }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-2.5 pt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full py-2 px-2 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/20 text-emerald-300 font-grotesk text-xs font-semibold flex items-center justify-center gap-1 transition-colors shadow-sm"
                >
                  <span>{copied ? "COPIED!" : "COPY EMAIL"}</span>
                </button>
                <a
                  href={`mailto:Bongkan.jj@gmail.com?subject=${encodeURIComponent(
                    `${activeTopic} - Bongkan Jujai Portfolio`
                  )}`}
                  className="w-full py-2 px-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-white font-grotesk text-xs font-bold flex items-center justify-center gap-1 transition-colors shadow-sm"
                >
                  <span>OPEN MAIL</span>
                </a>
              </div>
            </div>

            {/* Telephone Channel */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/60 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-grotesk text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs">
                      ☎
                    </span>
                    <span className="font-semibold text-slate-300">Phone</span>
                  </div>
                  <span className="text-[10px] text-cyan-400 font-grotesk flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    Direct Mobile
                  </span>
                </div>

                <div className="mt-1.5">
                  <a
                    href="tel:+66876604146"
                    className="text-sm sm:text-base font-space font-bold text-white hover:text-cyan-300 transition-colors block"
                  >
                    +66 87 660 4146
                  </a>
                </div>

                {/* Calling Hours & Messaging Note */}
                <div className="mt-2 pt-2 border-t border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-grotesk">
                    <span className="text-slate-400">Hours:</span>
                    <span className="text-slate-200 font-medium">Mon – Fri, 08:00 – 19:00</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-grotesk">
                    <span className="text-slate-400">Messaging:</span>
                    <span className="text-cyan-300 font-medium">WhatsApp / Line on request</span>
                  </div>
                </div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-white/10">
                <a
                  href="tel:+66876604146"
                  className="w-full py-2 px-3 rounded-lg bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 font-grotesk text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>CALL DIRECT (+66 87 660 4146)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enlarged Social Profiles Centered at Bottom (2x Size) */}
        <div className="pt-2.5 mt-1 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 sm:gap-5 w-full">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/bongkan-jujai"
            className="flex items-center gap-3 px-6 sm:px-7 py-2.5 sm:py-3 rounded-2xl bg-slate-950/90 hover:bg-slate-900 border-2 border-white/15 hover:border-emerald-400 text-white transition-all duration-200 hover:scale-105 hover:shadow-neon-green group"
            title="LinkedIn Profile"
          >
            <img className="w-10 h-10 sm:w-11 sm:h-11 transition-transform group-hover:scale-110" src={Linked} alt="Linkedin" />
            <span className="font-grotesk text-sm sm:text-base font-extrabold tracking-wide">LinkedIn</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Bongkan"
            className="flex items-center gap-3 px-6 sm:px-7 py-2.5 sm:py-3 rounded-2xl bg-slate-950/90 hover:bg-slate-900 border-2 border-white/15 hover:border-emerald-400 text-white transition-all duration-200 hover:scale-105 hover:shadow-neon-green group"
            title="GitHub Profile"
          >
            <img className="w-10 h-10 sm:w-11 sm:h-11 transition-transform group-hover:scale-110" src={Git} alt="Github" />
            <span className="font-grotesk text-sm sm:text-base font-extrabold tracking-wide">GitHub</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/Nanosweet159/"
            className="flex items-center gap-3 px-6 sm:px-7 py-2.5 sm:py-3 rounded-2xl bg-slate-950/90 hover:bg-slate-900 border-2 border-white/15 hover:border-emerald-400 text-white transition-all duration-200 hover:scale-105 hover:shadow-neon-green group"
            title="Facebook Profile"
          >
            <img className="w-10 h-10 sm:w-11 sm:h-11 transition-transform group-hover:scale-110" src={Face} alt="Facebook" />
            <span className="font-grotesk text-sm sm:text-base font-extrabold tracking-wide">Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
