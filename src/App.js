// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Geoportal from "./components/Tabs/Geoportal"; // Import Geoportal

import "./App.css";
import TwoDMapComponent from "./components/GeoSys2D/TwoDMapComponent";
import ThreeDMapComponent from "./components/GeoSys3D/ThreeDMapComponent";

const App = () => {
  // function refreshPage() {
  //   window.location.reload(true);
  // }
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/portal" element={<Geoportal />} />
          <Route path="/2D" element={<TwoDMapComponent />} />
          <Route
            path="/3D"
            element={<ThreeDMapComponent />}
            ThreeDMapComponent
          />
        </Routes>
      </Router>
      {/* <button onClick={refreshPage}>Reload to Homepage</button> */}
    </>
  );
};

export default App;
