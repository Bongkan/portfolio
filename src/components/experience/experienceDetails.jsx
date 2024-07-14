import React from "react";
import journey from "../../assets/Experience/Experience.png";

const ExperienceDetails = ({ showCompany }) => {
  return (
    <div className="pt-5 w-1/3 pl-0 md:p-10 flex justify-center items-center">
      {showCompany === "" && (
        <>
          {/* <img src={journey} alt="myjourney" width="50%" /> */}
          <p className="text-3xl">My journey has just begun!</p>
        </>
      )}
      {showCompany === "Generation" && (
        <div className="flex flex-col">
          <p className="pb-5 text-center">Apr 2024 – Jul 2024</p>
          <p>Junior Software Developer</p>
          <p>Full Stack with MERN Stack</p>
          <p>Software Development Cycle</p>
        </div>
      )}
      {showCompany === "KBTG" && (
        <div className="flex flex-col">
          <p className="pb-5 text-center">Sep 2023 – Dec 2023</p>
          <p>DevOps Practices</p>
          <p>Docker & Kubernetes</p>
          <p>Cloud Technology</p>
          <p>Observability (Monitoring, Logging and Tracing)</p>
        </div>
      )}
      {showCompany === "SVI" && (
        <div className="flex flex-col">
          <p className="pb-5 text-center">Oct 2021 – Aug 2022</p>
          <p>Engineering</p>
          <p>Project Management</p>
          <p>Project Improvment</p>
        </div>
      )}
    </div>
  );
};
export default ExperienceDetails;
