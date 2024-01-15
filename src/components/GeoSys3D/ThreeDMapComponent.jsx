// src/components/ThreeDMapComponent.jsx
import React, { useEffect } from "react";
import { loadModules } from "esri-loader";

const ThreeDMapComponent = () => {
  useEffect(() => {
    loadModules(["esri/Map", "esri/views/SceneView"], { css: true }).then(
      ([Map, SceneView]) => {
        const map = new Map({
          basemap: "streets",
        });

        const view = new SceneView({
          container: "map-3d",
          map,
          zoom: 4,
          center: [-98, 40], // Specify the initial center point
        });
      }
    );
  }, []);

  return <div id="map-3d" style={{ width: "100%", height: "400px" }} />;
};

export default ThreeDMapComponent;
