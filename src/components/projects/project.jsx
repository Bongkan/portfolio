import React, { useState } from "react";
import ponyMart from "../../assets/projects/PonyMart.png";
import colmar from "../../assets/projects/ColmarAcademy.png";
import crud from "../../assets/projects/SimpleCRUD.png";

const Project = ({ showProject }) => {
  const [activeProject, setActiveProject] = useState(null);

  const handleClick = (projectName) => {
    setActiveProject((prev) => (prev === projectName ? null : projectName));
  };

  return (
    <div className="pt-[5vh] pb-10 flex flex-col md:flex-row justify-around w-full pr-5 md:pr-10 animation-fade-in">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col justify-center md:hidden h-full max-w-sm">
          <div className="md:h-1/3">
            <p
              className={`text-xl text-center py-5 hover:opacity-50 duration-100 ease-in hover:cursor-pointer ${
                showProject === "Pony Mart"
                  ? "rounded-xl bg-white bg-opacity-10"
                  : ""
              }`}
              onClick={() => handleClick("Pony Mart")}
            >
              Pony Mart - E-commerce
            </p>
            {activeProject === "Pony Mart" && (
              <div className="animation-fade-in">
                <p className="text-center py-2">
                  E-commerce website, a group project created using the MERN
                  stack
                </p>
                <p className="text-center">
                  *Database may take a while to wake up*
                </p>
                <a
                  href="https://jsd-7-cmfm-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ponyMart}
                    alt="Pony Mart"
                    className="h-2/3 w-full object-cover"
                  />
                </a>
              </div>
            )}
          </div>
          <div className="md:h-1/3 my-[5vh]">
            <p
              className={`text-xl text-center py-5 hover:opacity-50 duration-100 ease-in hover:cursor-pointer ${
                showProject === "Pony Mart"
                  ? "rounded-xl bg-white bg-opacity-10"
                  : ""
              }`}
              onClick={() => handleClick("CRUD")}
            >
              Simple CRUD manipulation
            </p>
            {activeProject === "CRUD" && (
              <div className="animation-fade-in">
                <p className="text-center pt-2">
                  Simple CRUD operation using HTML, CSS and Javascript
                </p>
                <a
                  href="https://05-fear-js.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={crud}
                    alt="CRUD"
                    className="h-2/3 w-full object-cover"
                  />
                </a>
              </div>
            )}
          </div>
          <div className="md:h-1/3">
            <p
              className={`text-xl text-center py-5 hover:opacity-50 duration-100 ease-in hover:cursor-pointer ${
                showProject === "Pony Mart"
                  ? "rounded-xl bg-white bg-opacity-10"
                  : ""
              }`}
              onClick={() => handleClick("Colmar")}
            >
              Colmar Academy
            </p>
            {activeProject === "Colmar" && (
              <div className="animation-fade-in">
                <p className="text-center pt-2">
                  My very first project with basic HTML, CSS
                </p>
                <a
                  href="https://5-fear-colmar.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={colmar}
                    alt="Colmar"
                    className="h-2/3 w-full object-cover"
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        {showProject === "Pony Mart" && (
          <div className="animation-fade-in">
            <a
              href="https://jsd-7-cmfm-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ponyMart} alt="Pony Mart" className="h-2/3" />
            </a>
            <p className="text-center pt-3">
              E-commerce website, a group project created using the MERN stack
            </p>
            <p className="text-center">
              *Database may take a while to wake up*
            </p>
          </div>
        )}
        {showProject === "CRUD" && (
          <div className="animation-fade-in">
            <a
              href="https://05-fear-js.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={crud} alt="CRUD" className="h-2/3" />
            </a>
            <p className="text-center pt-3">
              Simple CRUD operation using HTML, CSS and Javascript
            </p>
          </div>
        )}
        {showProject === "Colmar" && (
          <div className="animation-fade-in">
            <a
              href="https://5-fear-colmar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={colmar} alt="Colmar" className="h-2/3" />
            </a>
            <p className="text-center pt-3">
              My very first project with basic HTML, CSS
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
