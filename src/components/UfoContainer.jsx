import React from "react";
import Ufo from "../assets/ufo-flying-svgrepo-com.svg";

const UfoContainer = ({ activeSection }) => {
  return (
    <div className="mt-3 p-0 flex justify-center items-center">
      <img
        id="ufo-logo"
        src={Ufo}
        alt="ufo-logo"
        className="w-[50px] md:w-[75px]"
      />
      <h1 className="pl-3 text-xl font-medium">
        {activeSection === "Contact" ? "Home" : activeSection}
      </h1>
    </div>
  );
};

export default UfoContainer;
