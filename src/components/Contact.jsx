import React from "react";
import Face from "../assets/icons8-facebook.svg";
import Git from "../assets/icons8-github.svg";
import Linked from "../assets/icons8-linked-in.svg";
import ProfilePic from "../assets/Croped.jpg";

const Contact = () => {
  return (
    <>
      <div className="hidden text-center w-full md:flex md:flex-col justify-center animation-fade-in rounded-full shadow-[0px_5px_50px_rgb(2,110,2)] bg-white bg-opacity-10 m-[10vh]">
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
              className="soc w-[150px] hover:opacity-50 duration-100 "
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
      <section
        id="profile"
        className="w-full pl-0 mt-[10vh] md:p-10 h-screen flex flex-col items-center md:hidden animation-fade-in"
      >
        <div className="profile-container flex flex-col items-center md:items-end">
          <img
            className="w-[200px] mt-0 pt-0 rounded-[30px] shadow-[5px_5px_5px_rgb(2,110,2)] md:w-[600px]"
            src={ProfilePic}
            alt="Portrait"
          />
        </div>
        <div className="text-center">
          <div className="py-4">
            <h1 className="text-xl font-bold">BONGKAN JUJAI</h1>
            <p className="locat">Lamphun, Thailand</p>
          </div>
          <div className="text-center md:hidden">
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
              <a
                target="_blank"
                href="https://www.linkedin.com/in/bongkan-jujai"
              >
                <img className="soc" src={Linked} alt="Linkedin" />
              </a>
              <a target="_blank" href="https://github.com/Bongkan">
                <img className="soc" src={Git} alt="Github" />
              </a>
            </div>
          </div>
          <h4>
            <i>" Former engineer into a new journey "</i>
          </h4>
        </div>
      </section>
    </>
  );
};

export default Contact;
