import React from "react";
import Face from "../assets/icons8-facebook.svg";
import Git from "../assets/icons8-github.svg";
import Linked from "../assets/icons8-linked-in.svg";

const Contact = () => {
  return (
    <div className="hidden text-center w-full md:flex md:flex-col justify-center">
      <h4 className="py-4">
        <a
          href="mailto:Bongkan.jj@gmail.com"
          className="text-3xl hover:opacity-50 duration-100"
        >
          Bongkan.jj@gmail.com
        </a>
      </h4>
      <h4>
        <a
          href="tel:0876604146"
          className="text-3xl hover:opacity-50 duration-100"
        >
          Tel. +66 876604146
        </a>
      </h4>
      <div className="flex justify-center py-4">
        <a target="_blank" href="https://www.facebook.com/Nanosweet159/">
          <img
            className="soc w-[150px] hover:opacity-50 duration-100"
            src={Face}
            alt="Facebook"
          />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/bongkan-jujai">
          <img
            className="soc w-[150px] hover:opacity-50 duration-100"
            src={Linked}
            alt="Linkedin"
          />
        </a>
        <a target="_blank" href="https://github.com/Bongkan">
          <img
            className="soc w-[150px] hover:opacity-50 duration-100"
            src={Git}
            alt="Github"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
