// src/components/HomePage.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import TwoDMapComponent from "./GeoSys2D/TwoDMapComponent";
import ThreeDMapComponent from "./GeoSys3D/ThreeDMapComponent";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Welcome to GeoSpy GIS Portal</h1>
      {/* Display 2D map component */}
      <TwoDMapComponent />
      <Router>
        <Routes>
          <Route path="/3d-map" element={<ThreeDMapComponent />} />
          <Link to="/3d-map">
            <button className="explore-button">Explore in 3D</button>
          </Link>
          {/* <Route path="/" element={<HomePage />} /> */}
        </Routes>
      </Router>
      <Link to="/3d-map">
        <button className="explore-button">Explore in 3D</button>
      </Link>
    </div>
  );
};

export default HomePage;
