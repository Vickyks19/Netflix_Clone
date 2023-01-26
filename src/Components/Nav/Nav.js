import "./Nav.css";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  });

  return (
    <div className={`nav ${show && "nav__black"} `}>
      <div className="nav__contents">
        <Link to="/">
          <img
            className="nav__logo"
            src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
            alt=""
          />
        </Link>
        <Link to="/profile">
          <img
            className="nav__avatar"
            src="https://lucid-benz-6af4ca.netlify.app/netflix-avatar.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
