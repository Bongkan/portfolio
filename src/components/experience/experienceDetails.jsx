import React from "react";
import journey from "../../assets/Experience/Experience.png";

const ExperienceDetails = ({ showCompany }) => {
  return (
    <div className="pt-5 w-1/3 pl-0 md:p-10 flex justify-center items-center">
      {showCompany === "" && (
        <>
          {/* <img src={journey} alt="myjourney" width="50%" /> */}
          <p>My journey just began!</p>
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
        <div>
          <div className="flex justify-between">
            <p>Graduate Engineer – Program Management</p>
            <p>Oct 2021 – Aug 2022</p>
          </div>
          <p>SVI Public Company Limited</p>
          <ul>
            <li>
              • Design process improvement projects while collaborating with
              cross-functional teams
            </li>
            <li>
              • Coordinate with teams to meet the customer requirements in terms
              of production and materials management
            </li>
            <li>
              • Developed and maintained good relationships with customers to
              identify and remove roadblocks in each project
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default ExperienceDetails;
