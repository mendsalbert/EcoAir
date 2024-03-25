"use client";

// import { useEffect, useState } from "react";
// import jsVectorMap from "jsvectormap";
// import "jsvectormap/dist/maps/world";
// function Map() {
//   const [locations, setLocations] = useState([]);
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     // Fetch locations when the component mounts
//     fetchLocations();
//   }, []);

//   useEffect(() => {
//     // Initialize or update the map whenever locations change
//     if (locations.length && !map) {
//       initMap();
//     }
//   }, [locations, map]); // Depend on locations state and map instance

//   const fetchLocations = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:8001/api/v1/locations/get-locations"
//       );
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }
//       const data = await response.json();
//       setLocations(data); // Assuming data is an array of locations
//     } catch (error) {
//       console.error("Failed to fetch locations:", error.message);
//     }
//   };

//   const initMap = () => {
//     const markers = locations.map((location, index) => ({
//       name: location.name,
//       coords: [location.coordinates.latitude, location.coordinates.longitude],
//       index,
//     }));

//     console.log("====makers====", markers[0]);

//     const newMap = new jsVectorMap({
//       map: "world",
//       selector: "#world-map",
//       markers: [
//         { name: "Egypt", coords: [26.8206, 30.8025] },
//         { name: "United Kingdom", coords: [55.3781, 3.436] },
//         {
//           name: "United States",
//           coords: [37.0902, -95.7129],
//           // Add style for this particular marker
//           // Keep in mind `style` object is merged with `markerStyle.initial`
//           style: { fill: "red" },
//         },
//       ],
//       onRegionTooltipShow(event, tooltip, code) {
//         tooltip.text(
//           `<h5>${tooltip.text()} - Country</h5>` +
//             `<p class="text-xs">This message is gonna appear when hovering over every single region.</p>`,
//           true // Enables HTML
//         );
//       },
//       // Use the markers from state
//       //   markerStyle: {
//       //     initial: {
//       //       fill: "#22C55E",
//       //       r: 8,
//       //     },
//       //   },
//       //   draggable: true,
//       //   zoomButtons: true,
//       //   zoomOnScroll: true,
//       //   zoomOnScrollSpeed: 3,
//       //   zoomMax: 60,
//       //   zoomMin: 1,
//       //   zoomAnimate: true,
//       //   showTooltip: true,
//       //   zoomStep: 0.2,
//       //   bindTouchEvents: true,
//       //   regionStyle: {
//       //     // Region style

//       //     hover: {
//       //       fillOpacity: 0.7,
//       //       cursor: "pointer",
//       //       fill: "#22C55E",
//       //     },
//       //     selected: {
//       //       fill: "#000",
//       //     },
//       //     selectedHover: {},
//       //   },

//       // ... other map options

//       //   onMarkerTipShow: function (e, label, markerIndex) {
//       //     // Use the index from the markersData array to find the right location
//       //     const marker = markersData.find((m) => m.index === markerIndex);
//       //     if (marker) {
//       //       label.html(marker.name);
//       //     }
//       //   },
//     });

//     setMap(newMap); // Save the map instance in the state
//   };

//   // Cleanup map on component unmount
//   useEffect(() => {
//     return () => {
//       if (map) {
//         map?.remove();
//       }
//     };
//   }, [map]);

//   return (
//     <div
//       id="world-map"
//       className="w-full h-screen rounded-lg border border-[#E2E8F0] overflow-hidden"
//     ></div>
//   );
// }

// export default Map;

import React, { useState } from "react";
import MapGL, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapWithHeatmap = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.061,
    longitude: 19.938,
    zoom: 6,
  });

  // Your heatmap data points
  const data = {
    type: "FeatureCollection",
    features: [
      // Replace this with your actual data points
      {
        type: "Feature",
        properties: { value: 1 },
        geometry: { type: "Point", coordinates: [19.938, 50.061] },
      },
      // ... more data points
    ],
  };

  // Heatmap layer style
  const heatmapLayer = {
    id: "heatmapLayer",
    type: "heatmap",
    maxzoom: 9,
    paint: {
      // Increase the heatmap weight based on frequency and property magnitude
      "heatmap-weight": {
        property: "value",
        type: "exponential",
        stops: [
          [0, 0],
          [6, 1],
        ],
      },
      // Increase the heatmap color weight weight by zoom level
      // heatmap-intensity is a multiplier on top of heatmap-weight
      "heatmap-intensity": {
        stops: [
          [0, 1],
          [9, 3],
        ],
      },
      // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
      // Begin color ramp at 0-stop with a 0-transparency color
      // to create a blur-like effect.
      "heatmap-color": [
        "interpolate",
        ["linear"],
        ["heatmap-density"],
        0,
        "rgba(33,102,172,0)",
        0.2,
        "blue",
        0.4,
        "cyan",
        0.6,
        "lime",
        0.8,
        "yellow",
        1,
        "red",
      ],
      // Adjust the heatmap radius by zoom level
      "heatmap-radius": {
        stops: [
          [0, 2],
          [9, 20],
        ],
      },
      // Transition from heatmap to circle layer by zoom level
      "heatmap-opacity": {
        default: 1,
        stops: [
          [7, 1],
          [9, 0],
        ],
      },
    },
  };

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/light-v10"
      onViewportChange={setViewport}
      mapboxApiAccessToken={
        "pk.eyJ1IjoibWVuZHNhbGJlcnQiLCJhIjoiY2x1NjloMmh2MDZjdDJrbXUzajQ2cW96dyJ9.DlO7KoEVjfnmCSKLSAPUjQ"
      } // Set your mapbox token here
    >
      <Source type="geojson" data={data}>
        <Layer {...heatmapLayer} />
      </Source>
    </MapGL>
  );
};

export default MapWithHeatmap;
