import React, { useState } from "react";
import Generation from "../../assets/Experience/GenerationThailand.jpg";
import KBTG from "../../assets/Experience/kbtgKampus.png";
import SVI from "../../assets/Experience/SVI.png";

const Experience = ({ showCompany, setShowCompany }) => {
  return (
    <div className="md:py-10 md:pr-10 md:pb-0 md:pt-5 w-full flex flex-col justify-center relative animation-fade-in">
      <button
        className={`absolute top-10 left-10 hidden md:${
          showCompany === "" ? "hidden" : "flex"
        }`}
        onClick={() => setShowCompany("")}
      >
        &lt;Motto
      </button>
      <div className="hidden md:flex justify-around">
        <div
          className={`w-1/3 flex items-center flex-col hover:opacity-50 duration-100 ease-in hover:cursor-pointer ${
            showCompany === "Generation"
              ? "rounded-xl bg-white bg-opacity-10"
              : ""
          }`}
          onClick={() => setShowCompany("Generation")}
        >
          <img
            src={Generation}
            alt="Generation"
            className="w-2/3 rounded-full "
          />
          <h2 className="pt-5 text-center">Generation Thailand x GenKX</h2>
        </div>
        <div
          className={`w-1/3 flex items-center flex-col hover:opacity-50 duration-100 ease-in hover:cursor-pointer ${
            showCompany === "KBTG" ? "rounded-xl bg-white bg-opacity-10" : ""
          }`}
          onClick={() => setShowCompany("KBTG")}
        >
          <img src={KBTG} alt="Generation" className={`w-2/3`} />
          <h2 className="pt-5 text-center">KBTG Kampus</h2>
        </div>
        <div
          className={`w-1/3 flex items-center flex-col hover:opacity-50 duration-100 ease-in hover:cursor-pointer ${
            showCompany === "SVI" ? "rounded-xl bg-white bg-opacity-10" : ""
          }`}
          onClick={() => setShowCompany("SVI")}
        >
          <img src={SVI} alt="Generation" className="w-2/3 rounded-full" />
          <h2 className="pt-5 text-center">SVI Public Company Limited</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center min-h-[calc(100vh/2)] md:hidden">
        <div className="flex p-5">
          <div
            className={`w-1/3 flex items-center justify-center flex-col hover:opacity-50 duration-100 ease-in hover:cursor-pointer ${
              showCompany === "Generation"
                ? "rounded-xl bg-white bg-opacity-10"
                : ""
            }`}
            onClick={() =>
              showCompany !== "Generation"
                ? setShowCompany("Generation")
                : setShowCompany("")
            }
          >
            <img
              src={Generation}
              alt="Generation"
              className="w-2/3 rounded-full"
            />
            <h2 className="pt-5 text-center">Generation TH</h2>
            {/* <h2 className="pt-2 text-center">
              Junior Software Developer Bootcamp
            </h2> */}
          </div>
          <div
            className={`w-1/3 flex items-center justify-center flex-col hover:opacity-50 duration-100 ease-in hover:cursor-pointer border-x-2 ${
              showCompany === "KBTG" ? "rounded-xl bg-white bg-opacity-10" : ""
            }`}
            onClick={() =>
              showCompany !== "KBTG"
                ? setShowCompany("KBTG")
                : setShowCompany("")
            }
          >
            <img src={KBTG} alt="Generation" className={`w-2/3`} />
            <h2 className="pt-5 text-center">KBTG Kampus</h2>
            {/* <h2 className="pt-2 text-center">
              Infrastructure Engineer Bootcamp
            </h2> */}
          </div>
          <div
            className={`w-1/3 flex items-center flex-col hover:opacity-50 duration-100 ease-in hover:cursor-pointer ${
              showCompany === "SVI" ? "rounded-xl bg-white bg-opacity-10" : ""
            }`}
            onClick={() =>
              showCompany !== "SVI" ? setShowCompany("SVI") : setShowCompany("")
            }
          >
            <img src={SVI} alt="Generation" className="w-2/3 rounded-full" />
            <h2 className="pt-5 text-center">SVI</h2>
          </div>
        </div>
        {showCompany === "Generation" && (
          <div className="p-4 flex flex-col animation-fade-in">
            <p className="pb-5 text-center">Apr 2024 – Jul 2024</p>
            <p className="text-center pb-2">
              Junior Software Developer Bootcamp
            </p>
            <p>• Full Stack with MERN Stack</p>
            <p>• Software Development Cycle</p>
            <p>• Hands-on Learning from Industry experts</p>
          </div>
        )}
        {showCompany === "KBTG" && (
          <div className="p-4 flex flex-col animation-fade-in">
            <p className="pb-5 text-center">Sep 2023 – Dec 2023</p>
            <p className="text-center pb-2">Infrastructure Engineer Bootcamp</p>
            <p>• DevOps Practices</p>
            <p>• Cloud Technology</p>
            <p>• Observability (Monitoring, Logging and Tracing)</p>
          </div>
        )}
        {showCompany === "SVI" && (
          <div className="p-4 flex flex-col animation-fade-in">
            <p className="pb-5 text-center">Oct 2021 – Aug 2022</p>
            <p className="text-center pb-2">
              Graduate Engineer – Program Management
            </p>
            <p>• Project Improvment & Management</p>
            <p>• SMT-IMT Engineering</p>
            <p>• Cross Functional Team Management</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
