import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const Navbar = () => {
  return (
    <div className="center-style">
      <Link to="/" className="title-style">
        Home
      </Link>

      <Link to="/About" className="title-style">
        About
      </Link>

      <Link to="/Works" className="title-style">
        Works
      </Link>

      <Link to="/Testimonials" className="title-style">
        Testimonials
      </Link>

      <Link to="/Contact" className="title-style">
        Contact
      </Link>
    </div>
  );
};
export default Navbar;
