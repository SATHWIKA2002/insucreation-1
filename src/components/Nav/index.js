import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const Nav = () => {
  const location = useLocation();
  const { pathname } = location;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${scrolled ? "scrolled" : ""}`}>
      <Link to="/">
        <span className={pathname === "/" ? "active-route" : "route"}>
          Home
        </span>
      </Link>
      <Link to="/about-us">
        <span className={pathname === "/about-us" ? "active-route" : "route"}>
          About Us
        </span>
      </Link>
      <Link to="/features">
        <span className={pathname === "/features" ? "active-route" : "route"}>
          Features
        </span>
      </Link>
      <Link to="/contact">
        <span className={pathname === "/contact" ? "active-route" : "route"}>
          Contact
        </span>
      </Link>
    </div>
  );
};

export default Nav;
