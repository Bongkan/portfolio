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
          <p className="text-center pb-2">Junior Software Developer Bootcamp</p>
          <p>• Full Stack with MERN Stack</p>
          <p>• Software Development Cycle</p>
          <p>• Hands-on Learning from Industry experts</p>
        </div>
      )}
      {showCompany === "KBTG" && (
        <div className="flex flex-col">
          <p className="pb-5 text-center">Sep 2023 – Dec 2023</p>
          <p className="text-center pb-2">Infrastructure Engineer Bootcamp</p>
          <p>• DevOps Practices</p>
          <p>• Cloud Technology</p>
          <p>• Observability (Monitoring, Logging and Tracing)</p>
        </div>
      )}
      {showCompany === "SVI" && (
        <div className="flex flex-col">
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
  );
};
export default ExperienceDetails;
