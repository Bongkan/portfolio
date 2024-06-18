import React from "react";
import UfoContainer from "./UfoContainer";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 z-[1000] ml-[10px] md:hidden">
      <UfoContainer />
      <ul className="mt-2 md:hidden">
        <li>
          <a href="#profile">Contact</a>
        </li>
        <li>
          <a href="#data">Profile</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
