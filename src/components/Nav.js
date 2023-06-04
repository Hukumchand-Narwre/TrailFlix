import { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  });
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="/images/Netflix-Logo.wine.svg"
        alt="Netflix-logo"
      />
      <img
        className="nav__avatar"
        src="/images/avatar.svg"
        alt="Netflix-logo"
      />
    </div>
  );
};

export default Nav;
