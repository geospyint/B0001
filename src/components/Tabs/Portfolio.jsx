// src/components/Portfolio.jsx
import React from "react";
import { NavLink, Route, Routes, Link } from "react-router-dom";
import Geoportal from "./Geoportal";

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <>
        <div className="subheading-buttons">
          <NavLink to="/portal" activeClassName="active">
            GeoPortal
          </NavLink>
        </div>
        <Routes>
          <Route path="/portal" element={<Geoportal />} />
        </Routes>
      </>
      <p>
        Here are some examples of successful GIS projects I have undertaken:
      </p>
      <ul>
        <li>
          <strong>Project 1: ePlanner (https://eplanner.gov.sg/)</strong>
          <p>
            Development of ePlanner GIS application using Openlayers JS and
            ArcGIS JavaScript 2D and 3D.
          </p>
        </li>
        <li>
          <strong>Project 2: Samuday GIS (http://samudaygis.hcl.com/)</strong>
          <p>
            Development of Samuday GIS application using Openlayers JS and PHP
            Laravel MVC framework.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
