import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/cv_pic.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Saravana Sanjay </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Tuticorin, TamilNadu (India)
                </span>
                . I have completed my graduation in BE (Computer Science. Engineering)
                from{" "}
                <span className="different">
                  National Engineering College, Kovilpatti (TN)
                </span>
                . Then I joined full stack development Trainee at{" "}
                <span className="different">On-Fleek</span> Media and Technologies Pvt. Ltd.(TN)
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Full Stack Developer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Event Organizer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Athlete{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Gamer{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
