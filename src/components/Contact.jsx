import React from "react";
import Face from "../assets/icons8-facebook.svg";
import Git from "../assets/icons8-github.svg";
import Linked from "../assets/icons8-linked-in.svg";

const Contact = () => {
  return (
    <div className="flex flex-col text-2xl h-full justify-center shadow-[0px_5px_69px_0px_rgb(2,110,2)] rounded-full">
      <h4 className="text-center">
        <i>" Former engineer into a new journey "</i>
      </h4>
      <div className="text-center">
        <div className="py-10">
          <h1 className="text-4xl font-bold">BONGKAN JUJAI</h1>
          <p className="locat">Lamphun, Thailand</p>
        </div>
        <div className="text-center">
          <h4>
            <a href="mailto:Bongkan.jj@gmail.com">Bongkan.jj@gmail.com</a>
          </h4>
          <h4>
            <a href="tel:0949151489">Tel. +66 876604146</a>
          </h4>
          <div className="flex justify-center py-4">
            <a target="_blank" href="https://www.facebook.com/Nanosweet159/">
              <img className="soc" src={Face} alt="Facebook" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/bongkan-jujai">
              <img className="soc" src={Linked} alt="Linkedin" />
            </a>
            <a target="_blank" href="https://github.com/Bongkan">
              <img className="soc" src={Git} alt="Github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
