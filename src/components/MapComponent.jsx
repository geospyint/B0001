import React, { useEffect } from "react";
import "ol/ol.css"; // Import OpenLayers styles
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { loadModules } from "esri-loader"; // Import esri-loader to dynamically load ArcGIS modules

const MapComponent = () => {
  useEffect(() => {
    // Load ArcGIS 2D and 3D modules using esri-loader
    loadModules(["esri/Map", "esri/views/MapView", "esri/views/SceneView"], {
      css: true,
    })
      .then(([ArcGISMap, MapView, SceneView]) => {
        // Create an OpenLayers map
        const olMap = new Map({
          layers: [new TileLayer({ source: new OSM() })],
          view: new View({
            center: [0, 0],
            zoom: 2,
          }),
        });

        // Create an ArcGIS 2D map view
        const mapView = new MapView({
          container: "map-2d",
          map: new ArcGISMap({ basemap: "streets" }),
        });

        // Create an ArcGIS 3D scene view
        const sceneView = new SceneView({
          container: "map-3d",
          map: new ArcGISMap({ basemap: "streets" }),
        });

        // Add the OpenLayers map to the 'map' div
        olMap.setTarget("map");

        // Add an event listener to update the ArcGIS views when the OpenLayers map changes
        olMap.on("moveend", () => {
          const center = olMap.getView().getCenter();
          const zoom = olMap.getView().getZoom();

          // Update the ArcGIS 2D view
          mapView.center = [center[0], center[1]];
          mapView.zoom = zoom;

          // Update the ArcGIS 3D view
          sceneView.center = [center[0], center[1]];
          sceneView.zoom = zoom;
        });
      })
      .catch((err) => console.error("Error loading ArcGIS modules:", err));
  }, []);

  return (
    <div>
      {/* OpenLayers map */}
      {/* <div id="map" style={{ width: "100%", height: "400px" }} /> */}

      {/* ArcGIS 2D map */}
      {/* <div id="map-2d" style={{ width: "100%", height: "400px" }} /> */}

      {/* ArcGIS 3D map */}
      <div id="map-3d" style={{ width: "100%", height: "400px" }} />
    </div>
  );
};

export default MapComponent;
