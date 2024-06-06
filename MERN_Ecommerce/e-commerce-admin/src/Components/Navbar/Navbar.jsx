import React from "react";
import "./Navbar.css";
import navlogo from "../Assets/nav-logo.svg";
import navprofileIcon from "../Assets/nav-profile.svg";
import vibe_logo from "../Assets/vibe_logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={vibe_logo} className="nav-logo" alt="" />
      <img src={navprofileIcon} className="nav-profile" alt="" />
    </div>
  );
};

export default Navbar;
