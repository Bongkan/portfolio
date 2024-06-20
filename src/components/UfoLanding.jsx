import React from "react";
import UfoLanding from "../assets/ufo-alien-svgrepo-com.svg";

const UfoLanding = () => {
  return (
    <div className="mt-3 p-0 flex justify-center">
      <img
        id="ufo-logo"
        src={UfoLanding}
        alt="ufo-logo"
        className="w-[50px] md:w-[75px]"
      />
    </div>
  );
};

export default UfoLanding;
