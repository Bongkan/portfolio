import React from "react";
import reactlogo from "../../assets/Skills/react.svg";
import awslogo from "../../assets/Skills/aws.svg";
import csslogo from "../../assets/Skills/css.svg";
import dockerlogo from "../../assets/Skills/docker.svg";
import htmllogo from "../../assets/Skills/html.svg";
import javascriptlogo from "../../assets/Skills/javascript.svg";
import postmanlogo from "../../assets/Skills/postman.svg";
import githublogo from "../../assets/Skills/github.svg";

const Skill = () => {
  return (
    <div className="w-full grid grid-cols-4 grid-rows-2 justify-center items-center animation-fade-in">
      <img
        src={reactlogo}
        className="w-2/3 hover:opacity-50 duration-100"
        alt=""
      />
      <img
        src={awslogo}
        className="w-2/3 hover:opacity-50 duration-100"
        alt=""
      />
      <img
        src={csslogo}
        className="w-2/3 hover:opacity-50 duration-100"
        alt=""
      />
      <img
        src={dockerlogo}
        className="w-2/3 hover:opacity-50 duration-100"
        alt=""
      />
      <img
        src={htmllogo}
        className="w-2/3 hover:opacity-50 duration-100"
        alt=""
      />
      <img
        src={javascriptlogo}
        className="w-2/3 hover:opacity-50 duration-100"
        alt=""
      />
      <img
        src={postmanlogo}
        className="w-2/3 hover:opacity-50 duration-100"
        alt=""
      />
      <img
        src={githublogo}
        className="w-2/3 hover:opacity-50 duration-100"
        alt=""
      />
    </div>
  );
};

export default Skill;
