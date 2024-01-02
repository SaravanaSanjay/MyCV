import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Image from "./../../assets/S-logo.png";
// import App from "../../App";


export const Navbar = ({ onEditButtonClick }) => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    if (id === "edit") {
      onEditButtonClick();
      setShowNavList(false);
    } else {
      var element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
      setShowNavList(!showNavList);
    }
  };
  return (
    <>
    <nav className="nav">
      <div className="navbrand">
        <a href="#home" className="link">
          <img src={Image} alt="logo" />
          <span className="brandname">Sanjay</span>
        </a>
      </div>
      <div className="center menulist nav">
        <ul
          style={{ display: showNavList ? "flex" : null}}
          className="nav__list "
        >
          <li className="nav__list-item">
            <a
              href="#home"
              onClick={() => toggleNavList("#home")}
              className="link link--nav"
            >
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#aboutme"
              onClick={() => toggleNavList("#about")}
              className="link link--nav"
            >
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={() => toggleNavList("#projects")}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={() => toggleNavList("#contact")}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="https://drive.google.com/file/d/1hcHGywW86sB4sP1E_P1zZdUmgavsqXG0/view"
              onClick={toggleNavList}
              className="link link--nav"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li className="nav__list-item">
          <button
            onClick={() => {
              toggleNavList("edit");
              onEditButtonClick();
            }}
            className="link link--nav"
          >
            Edit
          </button>
        </li>
        </ul>
        <div className="actionbutton">
        <button
            type="button"
            onClick={toggeltheme}
            className="btn btn--icon nav__theme"
            aria-label="toggle theme"
            style={{ backgroundColor: "inherit" }}
          >
            {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
          </button>
          <button
            type="button"
            onClick={toggleNavList}
            className="btn btn--icon nav__hamburger"
            aria-label="toggle navigation"
          >
            {showNavList ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </nav>
    </>
  );
};
