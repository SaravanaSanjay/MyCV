import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Header.css";
import { Navbar } from "../Navbar/Navbar";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <Navbar/>
      </header>
    </>
  );
};
