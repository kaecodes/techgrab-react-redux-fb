import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/techgrablogo.png";
import Navbar from "./Navbar";
import Links from "./Links";

const logo = (
  <div>
    <NavLink to="/">
      <img className="logo" src={Logo} alt="Tech Grab Logo" />
    </NavLink>
  </div>
);

const Header = () => {
  return (
    <header>
      {logo}
      <Navbar />
      <Links />
    </header>
  );
};

export default Header;
