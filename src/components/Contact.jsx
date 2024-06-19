import React from "react";
import Face from "../assets/icons8-facebook.svg";
import Git from "../assets/icons8-github.svg";
import Linked from "../assets/icons8-linked-in.svg";

const Contact = () => {
  return (
    <div className="flex flex-col text-2xl h-full justify-center items-center ">
      <div>
        <div className="pb-10 max-w-[700px]">
          <p className="pb-4 text-start">Hi there!</p>
          <p className="pb-4">
            I'm a tech learner with a background in mechanical engineering.
          </p>
          <p className="pb-4">
            My passion for innovation and problem-solving has led me to explore
            the dynamic world of technology.
          </p>
          <p>I am excited to be a part of this ever-growing industry!</p>
        </div>
        <div className="hidden md:block text-center">
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
