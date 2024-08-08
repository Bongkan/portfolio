import React from "react";
const About = () => {
  return (
    <div className="flex flex-col text-sm md:text-2xl h-full justify-center items-center w-full animation-fade-in">
      <div>
        <div className="p-10 md:px-24 md:mt-[5vh] rounded-xl text-sm md:text-2xl bg-white bg-opacity-10 shadow-[0px_5px_5px_rgb(2,110,2)] text-justify leading-6">
          <p className="pb-4 text-start">Hi there!</p>
          <p className="pb-4">
            I’m a career switcher with a background in mechanical engineering,
            driven by a strong passion for technology and problem-solving.
          </p>
          <p>
            My enthusiasm has led me to explore the dynamic tech industry, and
            I’m excited to contribute to and grow within this ever-evolving
            field.
          </p>
        </div>
      </div>
      <div className="rounded-lg px-3 py-2 bg-[#E4E3E850] hover:opacity-90 hover:bg-white hover:rounded hover:border-2 duration-100 hover:text-black mt-5">
        <a
          href="https://drive.google.com/file/d/1ZE6iCBqo6xYdCI1-GqfkcbdWUYb0KWeL/view?usp=sharing"
          target="_blank"
        >
          Download My resume?
        </a>
      </div>
    </div>
  );
};

export default About;
