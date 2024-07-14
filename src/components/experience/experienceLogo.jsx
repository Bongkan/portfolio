import React, { useState } from "react";
import Generation from "../../assets/Experience/GenerationThailand.jpg";
import KBTG from "../../assets/Experience/kbtgKampus.png";
import SVI from "../../assets/Experience/SVI.png";

const Experience = ({ showCompany, setShowCompany }) => {
  return (
    <div className="md:py-10 md:pr-10 md:pb-0 md:pt-5 w-full flex flex-col justify-center relative">
      <button
        className={`absolute top-10 left-10 ${
          showCompany === "" ? "hidden" : "flex"
        }`}
        onClick={() => setShowCompany("")}
      >
        &lt;Motto
      </button>
      <div className="flex justify-around">
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
          <h2 className="pt-2 text-center">
            Junior Software Developer Bootcamp
          </h2>
        </div>
        <div
          className={`w-1/3 flex items-center flex-col hover:opacity-50 duration-100 ease-in hover:cursor-pointer ${
            showCompany === "KBTG" ? "rounded-xl bg-white bg-opacity-10" : ""
          }`}
          onClick={() => setShowCompany("KBTG")}
        >
          <img src={KBTG} alt="Generation" className={`w-2/3`} />
          <h2 className="pt-5 text-center">KBTG Kampus</h2>
          <h2 className="pt-2 text-center">
            Junior Software Developer Bootcamp
          </h2>
        </div>
        <div
          className={`w-1/3 flex items-center flex-col hover:opacity-50 duration-100 ease-in hover:cursor-pointer ${
            showCompany === "SVI" ? "rounded-xl bg-white bg-opacity-10" : ""
          }`}
          onClick={() => setShowCompany("SVI")}
        >
          <img src={SVI} alt="Generation" className="w-2/3 rounded-full" />
          <h2 className="pt-5 text-center">SVI Public Company Limited</h2>
          <h2 className="pt-2 text-center">
            Graduate Engineer – Program Management
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Experience;
