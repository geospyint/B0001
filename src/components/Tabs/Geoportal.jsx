import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { FaMap, FaMapMarkedAlt, FaMapMarker } from "react-icons/fa";
import TwoDMapComponent from "../GeoSys2D/TwoDMapComponent";
import ThreeDMapComponent from "../GeoSys3D/ThreeDMapComponent";
import "../Styles/Geoportal.css";

const Geoportal = () => {
  return (
    <div className="logo">
      <Link to="/">
        <FaMapMarker size={30} />
        <span>GeoSpy Intelligence</span>
      </Link>
      <div className="geoportal-container">
        <h2>Welcome to GeoSpy GeoPortal</h2>
        <div className="subheading-buttons">
          <NavLink to="/2d" activeClassName="active">
            <FaMap size={20} />
            2D Maps
          </NavLink>
          <NavLink to="/3d" activeClassName="active">
            <FaMapMarkedAlt size={20} />
            3D Maps
          </NavLink>
        </div>
        <Routes>
          <Route path="2d" element={<TwoDMapComponent />} />
          <Route path="3d" element={<ThreeDMapComponent />} />
        </Routes>
      </div>
    </div>
  );
};

export default Geoportal;
