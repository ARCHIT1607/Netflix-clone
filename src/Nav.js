import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="../Images/Netflix-Logo.png"
        alt="netflix logo"
      />

      <img
        className="nav__avatar"
        src="https://i.pinimg.com/474x/a6/5a/75/a65a75c4bc10fd9e86c10a1e776ae1a9.jpg"
        alt="netflix logo"
      />
    </div>
  );
}

export default Nav;
