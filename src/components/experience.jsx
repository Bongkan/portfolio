import React from "react";

const Experience = () => {
  return (
    <div className="md:p-10 md:pb-0 md:pt-5 w-full flex flex-col justify-center">
      <div className="border-b-2 border-white pb-2">
        <div className="flex justify-between">
          <p>Junior Software Developer Bootcamp</p>
          <p>Apr 2024 – present</p>
        </div>
        <p>Generation Thailand</p>
        <ul>
          <li>• Learned basic programming and workflow</li>
          <li>
            • Learned essential skills for switching careers, such as growth
            mindset, communication, agile, and teamwork
          </li>
        </ul>
      </div>
      <div className="border-b-2 border-white py-2">
        <div className="flex justify-between">
          <p>Infrastructure Engineering Bootcamp</p>
          <p>Sep 2023 – Dec 2023</p>
        </div>
        <p>KBTG Kampus</p>
        <ul>
          <li>
            • Worked on real-world projects and challenges in collaboration with
            peers and instructors
          </li>
          <li>
            • Gained hands-on experience in working with AWS cloud services.
          </li>
          <li>
            • Developed skills in IT infrastructures using various tools and
            technologies and DevOps practices
          </li>
        </ul>
      </div>
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
    </div>
  );
};

export default Experience;
