// src/components/TwoDMapComponent.jsx
import React, { useEffect } from "react";
import { loadModules } from "esri-loader";

const TwoDMapComponent = () => {
  useEffect(() => {
    loadModules(["esri/Map", "esri/views/MapView"], { css: true }).then(
      ([Map, MapView]) => {
        const map = new Map({
          basemap: "streets",
        });

        const view = new MapView({
          container: "map-2d",
          map,
          zoom: 4,
          center: [-98, 40], // Specify the initial center point
        });
      }
    );
  }, []);

  return <div id="map-2d" style={{ width: "100%", height: "400px" }} />;
};

export default TwoDMapComponent;
