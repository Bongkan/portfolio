import React from "react";

const ProjectSample = ({ setShowProject, showProject }) => {
  return (
    <div className="pt-5 w-1/3 pl-0 md:p-10 flex flex-col justify-center items-center">
      <a
        className={`text-3xl py-5 hover:opacity-50 duration-100 ease-in hover:cursor-pointer ${
          showProject === "Pony Mart" ? "rounded-xl bg-white bg-opacity-10" : ""
        }`}
        onClick={() => setShowProject("Pony Mart")}
      >
        Pony Mart E-Commerce
      </a>
      <a
        className={`text-3xl py-5 hover:opacity-50 duration-100 ease-in hover:cursor-pointer ${
          showProject === "CRUD" ? "rounded-xl bg-white bg-opacity-10" : ""
        }`}
        onClick={() => setShowProject("CRUD")}
      >
        Simple CRUD
      </a>
      <a
        className={`text-3xl py-5 hover:opacity-50 duration-100 ease-in hover:cursor-pointer ${
          showProject === "Colmar" ? "rounded-xl bg-white bg-opacity-10" : ""
        }`}
        onClick={() => setShowProject("Colmar")}
      >
        Colmar Academy
      </a>
    </div>
  );
};

export default ProjectSample;
