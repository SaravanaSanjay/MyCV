import React from "react";
import "./Projects.css";
import Miniproject from "./../../assets/MiniProject.png";
import Finalproject from "./../../assets/Finalproject.png";
import Landingpage from "./../../assets/Landingpage.png";
import Portfolio from "./../../assets/portfolio.png";
import Portfolio_2 from "./../../assets/Portfolio_2.jpeg";
import Companysite from "./../../assets/Companysite.jpeg";
import { FaReact} from "react-icons/fa";
import {
  SiHtml5,
  SiBootstrap,
  SiNodedotjs,
  SiPhp
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { GiMining } from "react-icons/gi";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={Miniproject} alt="Miniproject"/>
                </div>
              </div>
              <div className="project_information">
                <h2>Mini Project</h2>
                <p>
                  Creating a free slot timetable management system using PHP involves developing a web-based application that allows users to schedule and manage available time slots for various activities.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <SiPhp />
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Finalproject}
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Final Yr Project</h2>
                <p>
                  Patient risk identification using data mining involves the application of data mining techniques to healthcare data to identify patterns, trends, and associations that can help predict or assess the risk of certain health outcomes for individual patients.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <GiMining />
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={Landingpage} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>LandingPage</h2>
                <p>
                  Designing an effective landing page for a company involves creating a webpage that captures visitors' attention, communicates the company's value proposition, and encourages them to take a specific action, such as signing up, making a purchase, or contacting the company.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiBootstrap />
                </div>
                <div>
                  <a
                    href="https://saravanasanjay.github.io/FigmaToWeb/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/SaravanaSanjay/FigmaToWeb.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Portfolio}
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Portfolio</h2>
                <p>
                  Certainly! A portfolio is a curated collection of work and achievements that showcases your skills, experience, and expertise. It serves as a personal or professional presentation to demonstrate your capabilities to potential employers, clients, or collaborators. 
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiBootstrap />
                  <SiNodedotjs />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://saravanasanjay.github.io/React/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/SaravanaSanjay/React.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Portfolio_2}
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Portfolio</h2>
                <p>
                  Absolutely! A portfolio functions as a carefully curated compilation of your accomplishments, showcasing your skills, experience, and expertise. Whether for personal or professional purposes, it acts as a visual and informational representation, allowing you to effectively communicate your abilities to prospective employers, clients, or collaborators.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiNodedotjs />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://saravanasanjay.github.io/MyCV/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/SaravanaSanjay/MyCV"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Companysite}
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Company Landing Page</h2>
                <p>
                  Crafted with HTML, CSS, Bootstrap, and React.js, our company's website seamlessly blends sleek design with cutting-edge technology. Explore for a visually appealing and engaging user experience. 
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiBootstrap />
                  <SiNodedotjs />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://saravanasanjay.github.io/React/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/SaravanaSanjay/OnFleek_Web"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
