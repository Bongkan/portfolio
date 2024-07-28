import React from "react";
import ponyMart from "../../assets/projects/PonyMart.png";
import colmar from "../../assets/projects/ColmarAcademy.png";
import crud from "../../assets/projects/SimpleCRUD.png";

const Project = ({ showProject }) => {
  return (
    <div className="pt-10 flex flex-col md:flex-row justify-around w-full pr-5 md:pr-10 animation-fade-in">
      <div className="flex items-center justify-center min-h-screen">
        <div className="block md:hidden h-full max-w-sm py-10">
          <div className="h-1/3">
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
            <p className="text-center pt-3">
              E-commerce website, a group project created using the MERN stack
            </p>
          </div>
          <div className="h-1/3">
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
            <p className="text-center pt-3">Simple CRUD manipulation</p>
          </div>
          <div className="h-1/3">
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
            <p className="text-center pt-3">
              My very first project with basic HTML, CSS
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        {showProject === "Pony Mart" && (
          <div className="animation-fade-in">
            <a href="https://jsd-7-cmfm-frontend.vercel.app/" target="_blank">
              <img src={ponyMart} alt="Pony Mart" className="h-2/3" />
            </a>
            <p className="text-center pt-3">
              E-commerce website, a group project created using the MERN stack
            </p>
          </div>
        )}
        {showProject === "CRUD" && (
          <div className="animation-fade-in">
            <a href="https://05-fear-js.vercel.app/" target="_blank">
              <img src={crud} alt="CRUD" className="h-2/3" />
            </a>
            <p className="text-center pt-3">Simple CRUD manipulation</p>
          </div>
        )}
        {showProject === "Colmar" && (
          <div className="animation-fade-in">
            <a href="https://5-fear-colmar.vercel.app/" target="_blank">
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
