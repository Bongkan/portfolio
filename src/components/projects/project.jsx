import { useState } from "react";
import ponyMart from "../../assets/projects/PonyMart.png";
import colmar from "../../assets/projects/ColmarAcademy.png";
import crud from "../../assets/projects/SimpleCRUD.png";

const projectsData = [
  {
    id: "Pony Mart",
    title: "Pony Mart - E-Commerce Platform",
    category: "Full-Stack Web App",
    image: ponyMart,
    desc: "An end-to-end e-commerce web platform created using the MERN stack (MongoDB, Express, React, Node.js). Features customer catalog, shopping cart, authentication, and order processing.",
    note: "Database hosted on free tier (may take ~30 seconds to spin up on cold start).",
    liveUrl: "https://jsd-7-cmfm-frontend.vercel.app/",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "TailwindCSS", "REST API"],
  },
  {
    id: "CRUD",
    title: "Interactive CRUD Manager",
    category: "Frontend Web Application",
    image: crud,
    desc: "A client-side interactive records management application with dynamic DOM rendering, async state updates, and validation logic.",
    liveUrl: "https://05-fear-js.vercel.app/",
    tags: ["JavaScript (ES6+)", "HTML5", "CSS3", "DOM API", "Responsive"],
  },
  {
    id: "Colmar",
    title: "Colmar Academy Learning Portal",
    category: "Responsive Web Portal",
    image: colmar,
    desc: "A responsive educational institution homepage built using semantic HTML5 and clean CSS layouts with mobile-first design principles.",
    liveUrl: "https://5-fear-colmar.vercel.app/",
    tags: ["Semantic HTML5", "CSS Flexbox/Grid", "Mobile-First", "UI/UX"],
  },
];

const Project = ({ showProject }) => {
  const [mobileActive, setMobileActive] = useState("Pony Mart");
  const activeDesktopProject =
    projectsData.find((p) => p.id === showProject) || projectsData[0];

  return (
    <div className="w-full h-full flex flex-col animation-fade-in cyber-scrollbar overflow-y-auto pr-1">
      {/* Mobile Accordion / List View */}
      <div className="flex flex-col gap-4 md:hidden">
        {projectsData.map((project) => {
          const isExpanded = mobileActive === project.id;
          return (
            <div
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10"
            >
              <div
                onClick={() =>
                  setMobileActive(isExpanded ? null : project.id)
                }
                className="p-4 cursor-pointer flex items-center justify-between bg-slate-900/60"
              >
                <div>
                  <span className="text-[10px] font-space text-emerald-400 font-semibold tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-0.5">
                    {project.title}
                  </h4>
                </div>
                <span
                  className={`text-xs font-space transition-transform duration-200 ${
                    isExpanded ? "text-emerald-400 rotate-90" : "text-slate-400"
                  }`}
                >
                  ▶
                </span>
              </div>

              {isExpanded && (
                <div className="p-4 pt-0 animation-fade-in space-y-3">
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-950/80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-44 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.desc}
                  </p>
                  {project.note && (
                    <p className="text-[11px] text-amber-300/80 italic">
                      * {project.note}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/20 text-emerald-300 font-space"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-space font-semibold text-xs tracking-wider transition-colors"
                  >
                    <span>VISIT LIVE DEMO</span>
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop Detailed View */}
      <div className="hidden md:flex flex-col h-full justify-center items-center">
        <div className="glass-panel w-full max-w-xl rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500"></div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-space uppercase tracking-widest text-emerald-400 font-semibold px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                {activeDesktopProject.category}
              </span>
              <span className="text-xs text-slate-400 font-space">
                Production Deployment
              </span>
            </div>

            <h3 className="text-xl font-space font-bold text-white mb-2">
              {activeDesktopProject.title}
            </h3>

            {/* Preview Image with glowing frame */}
            <div className="relative my-3 rounded-xl overflow-hidden border border-white/15 shadow-neon-green group">
              <img
                src={activeDesktopProject.image}
                alt={activeDesktopProject.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <a
                  href={activeDesktopProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-space text-xs font-bold flex items-center gap-1.5 shadow-lg"
                >
                  <span>Open Live App</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mt-3">
              {activeDesktopProject.desc}
            </p>

            {activeDesktopProject.note && (
              <p className="text-xs text-amber-300/80 italic mt-1">
                * {activeDesktopProject.note}
              </p>
            )}

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {activeDesktopProject.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs px-2.5 py-1 rounded bg-slate-950/70 border border-emerald-500/30 text-emerald-300 font-space"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Live on Vercel Global Edge Network
            </span>
            <a
              href={activeDesktopProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-slate-950 font-space font-semibold text-xs tracking-wider shadow-neon-green transition-all"
            >
              <span>LAUNCH APP</span>
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
