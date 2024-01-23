// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";
import "./Styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <FaMapMarker size={30} />
        <span>GeoSpy Intelligence</span>
      </div>
      <nav>
        <NavLink to="/" activeclassname="active" end>
          {" "}
          {/* Added "end" to ensure exact match */}
          Home
        </NavLink>
        <NavLink to="/services" activeclassname="active">
          Services
        </NavLink>
        <NavLink to="/process" activeclassname="active">
          Process
        </NavLink>
        <NavLink to="/portfolio" activeclassname="active">
          Portfolio
        </NavLink>
        <NavLink to="/pricing" activeclassname="active">
          Pricing
        </NavLink>
        <NavLink to="/contact" activeclassname="active">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
