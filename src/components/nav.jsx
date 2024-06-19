import React from "react";
import UfoContainer from "./UfoContainer";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 z-[1000] ml-[10px] flex flex-col h-screen md:hidden">
      <UfoContainer />
      <ul className="h-full mt-2 flex flex-col justify-evenly md:hidden">
        <li>
          <a href="#profile">Contact</a>
        </li>
        <li>
          <a href="#data">About</a>
        </li>
        <li>
          <a href="#data">Project</a>
        </li>
        <li>
          <a href="#data">Experience</a>
        </li>
        <li>
          <a href="#data">Skills</a>
        </li>
        <li>
          <a href="#data">Education</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
