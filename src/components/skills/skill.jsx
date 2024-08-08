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
    <div className="p-5 w-full grid-cols-3 grid-rows-3 grid md:grid-cols-4 md:grid-rows-2 justify-center items-center animation-fade-in">
      <img
        src={reactlogo}
        className="w-2/3 hover:opacity-50 duration-100 justify-self-center"
        alt=""
      />
      <img
        src={awslogo}
        className="w-2/3 hover:opacity-50 duration-100 justify-self-center"
        alt=""
      />
      <img
        src={csslogo}
        className="w-2/3 hover:opacity-50 duration-100 justify-self-center"
        alt=""
      />
      <img
        src={dockerlogo}
        className="w-2/3 hover:opacity-50 duration-100 justify-self-center"
        alt=""
      />
      <img
        src={htmllogo}
        className="w-2/3 hover:opacity-50 duration-100 justify-self-center"
        alt=""
      />
      <img
        src={javascriptlogo}
        className="w-2/3 hover:opacity-50 duration-100 justify-self-center"
        alt=""
      />
      <img
        src={postmanlogo}
        className="w-2/3 hover:opacity-50 duration-100 justify-self-center"
        alt=""
      />
      <img
        src={githublogo}
        className="w-2/3 hover:opacity-50 duration-100 justify-self-center"
        alt=""
      />
    </div>
  );
};

export default Skill;
