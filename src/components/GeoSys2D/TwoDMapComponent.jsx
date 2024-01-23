// src/components/TwoDMapComponent.jsx
import React, { useState, useEffect } from "react";
import { loadModules } from "esri-loader";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";

const TwoDMapComponent = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  useEffect(() => {
    loadModules(
      [
        "esri/Map",
        "esri/views/MapView",
        "esri/widgets/BasemapToggle",
        "esri/widgets/Legend",
        "esri/widgets/Sketch",
        "esri/layers/GraphicsLayer",
        // "esri/layers/GeoJSONLayer",
        // "esri/widgets/FileInput",
        // "esri/renderers/SimpleRenderer",
      ],
      { css: true }
    ).then(
      ([
        Map,
        MapView,
        BasemapToggle,
        Legend,
        Sketch,
        GraphicsLayer,
        // GeoJSONLayer,
        // FileInput,
        // SimpleRenderer,
      ]) => {
        const map = new Map({
          basemap: "streets",
        });

        const view = new MapView({
          container: "map-2d",
          map,
          zoom: 4,
          center: [-98, 40], // Specify the initial center point
        });
        // Add BasemapToggle widget
        const basemapToggle = new BasemapToggle({
          view: view,
          nextBasemap: "hybrid", // The next basemap to toggle to
        });
        view.ui.add(basemapToggle, "top-right");

        // Add Legend widget
        const legend = new Legend({
          view: view,
        });
        view.ui.add(legend, "bottom-right");

        // Create a new graphics layer
        const graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);

        // Add Sketch widget
        const sketch = new Sketch({
          view: view,
          layer: graphicsLayer,
        });
        view.ui.add(sketch, "top-right");

        /* // Add FileInput widget
        const fileInput = new FileInput({
          view: view,
          container: "uploadForm",
        });
        // Define a simple renderer for the GeoJSONLayer
        const renderer = new SimpleRenderer({
          symbol: {
            type: "simple-fill",
            color: [51, 51, 204, 0.9], // blue color with 0.9 transparency
            outline: {
              color: [255, 255, 255],
              width: 1,
            },
          },
        });
        fileInput.on("load", function (event) {
          const geojsonLayer = new GeoJSONLayer({
            data: event.item,
            renderer: renderer,
          });
          map.add(geojsonLayer);
        }); */
      }
    );
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, bottom: 0, right: 0, left: 0 }}>
      <h1 style={{ textAlign: "center", padding: "10px 0" }}>
        GeoSpy Intelligence Web GIS Solutions
      </h1>
      <div id="map-2d" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default TwoDMapComponent;
