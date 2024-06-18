import React from "react";
import Ufo from "../assets/ufo-flying-svgrepo-com.svg";

const UfoContainer = () => {
  return (
    <div className="mt-3 p-0 text-center">
      <img
        id="ufo-logo"
        src={Ufo}
        alt="ufo-logo"
        className="w-[50px] md:w-[75px]"
      />
    </div>
  );
};

export default UfoContainer;
