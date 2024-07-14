import React from "react";
const About = () => {
  return (
    <div className="flex flex-col text-2xl h-full justify-center items-center w-full">
      <div>
        <div className="pb-10 max-w-full px-28">
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
      </div>
      <div className="hover:opacity-90 hover:bg-white hover:rounded hover:border-2 duration-100 hover:text-black">
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
