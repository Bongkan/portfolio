import React from "react";
import ponyMart from "../../assets/projects/PonyMart.png";
import colmar from "../../assets/projects/ColmarAcademy.png";
import crud from "../../assets/projects/SimpleCRUD.png";

const Project = ({ showProject }) => {
  return (
    <div className="pt-10 flex flex-col md:flex-row justify-around w-full pr-10">
      {showProject === "Pony Mart" && (
        <div>
          <img src={ponyMart} alt="ponyMart" className="h-2/3" />
          <p className="text-center pt-3">
            E-commerce Website using MERN Stack
          </p>
        </div>
      )}
      {showProject === "CRUD" && (
        <div>
          <img src={crud} alt="CRUD" className="h-2/3" />
          <p className="text-center pt-3">Simple CRUD state manipulation</p>
        </div>
      )}
      {showProject === "Colmar" && (
        <div>
          <img src={colmar} alt="Colmar" className="h-2/3" />
          <p className="text-center pt-3">
            My very fist front end project in this journey
          </p>
        </div>
      )}
    </div>
  );
};

export default Project;
