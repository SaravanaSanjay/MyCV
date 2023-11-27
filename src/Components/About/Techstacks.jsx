import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaCloudsmith } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiPhp, SiMongodb, SiPython } from "react-icons/si";
import { BsBootstrap, BsGlobe } from "react-icons/bs";
import { GiMining } from "react-icons/gi";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiPython />
            <h5>Python</h5>
          </div>
          <div>
            <GiMining />
            <h5>Data Mining</h5>
          </div>
          <div>
            <SiPhp />
            <h5>PHP</h5>
          </div>
          <div>
            <FaCloudsmith />
            <h5>IoT</h5>
          </div>
          <div>
            <SiMongodb />
            <h5>MongoDB</h5>
          </div>
          <div>
            <BsGlobe />
            <h5>ASP .Net</h5>
          </div>
        </div>
      </div>
    </>
  );
};
