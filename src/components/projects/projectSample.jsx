import React from "react";

const ProjectSample = ({ setShowProject, showProject }) => {
  return (
    <div className="pt-5 w-1/3 pl-0 md:p-10 flex flex-col justify-center items-center">
      <a
        className={`text-3xl py-5 hover:opacity-50 duration-100 ease-in hover:cursor-pointer px-5 ${
          showProject === "Pony Mart"
            ? "rounded-xl bg-white bg-opacity-10 shadow-[5px_5px_5px_rgb(2,110,2)] "
            : ""
        }`}
        onClick={() => setShowProject("Pony Mart")}
      >
        Pony Mart E-Commerce
      </a>
      <a
        className={`text-3xl py-5 hover:opacity-50 duration-100 ease-in hover:cursor-pointer px-5 ${
          showProject === "CRUD"
            ? "rounded-xl bg-white bg-opacity-10 shadow-[5px_5px_5px_rgb(2,110,2)] "
            : ""
        }`}
        onClick={() => setShowProject("CRUD")}
      >
        Simple CRUD
      </a>
      <a
        className={`text-3xl py-5 hover:opacity-50 duration-100 ease-in hover:cursor-pointer px-5 ${
          showProject === "Colmar"
            ? "rounded-xl bg-white bg-opacity-10 shadow-[5px_5px_5px_rgb(2,110,2)] "
            : ""
        }`}
        onClick={() => setShowProject("Colmar")}
      >
        Colmar Academy
      </a>
    </div>
  );
};

export default ProjectSample;
