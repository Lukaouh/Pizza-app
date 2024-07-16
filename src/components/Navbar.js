import React, { useState } from "react";
import Logo from "../assests/pizzaLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const togleBtn = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <button style={buttonStyle.navbarBtn}>
            <img src={Logo} id={showLinks ? "hide" : "show"}></img>
          </button>
        </Link>
        <div className="hiddenLinks" id={showLinks ? "open" : "close"}>
          <Link to="/">
            <a>Home</a>
          </Link>
          <Link to="/menu">
            <a>Menu</a>
          </Link>
          <Link to="/about">
            <a>About</a>
          </Link>
          <Link to="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
      <div className="right">
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/menu">
          <a>Menu</a>
        </Link>
        <Link to="/about">
          <a>About</a>
        </Link>
        <Link to="/contact">
          <a>Contact</a>
        </Link>
      </div>
      <div className="navbar_btn">
        <button onClick={togleBtn}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

let buttonStyle = {
  navbarBtn: {
    cursor: "pointer",
    background: "none",
    border: "none",
  },
};
