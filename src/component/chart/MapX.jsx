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
import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { createRoot } from "react-dom/client";
import MapGL, { Source, Layer } from "react-map-gl";
// import ControlPanel from './control-panel';
// import {heatmapLayer} from './map-style';
import ControlPanel from "./MapControlPanel";
import { heatmapLayer } from "./MapStyle";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWVuZHNhbGJlcnQiLCJhIjoiY2x1NjloMmh2MDZjdDJrbXUzajQ2cW96dyJ9.DlO7KoEVjfnmCSKLSAPUjQ"; // Set your mapbox token here

function filterFeaturesByDay(featureCollection, time) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const features = featureCollection.features.filter((feature) => {
    const featureDate = new Date(feature.properties.time);
    return (
      featureDate.getFullYear() === year &&
      featureDate.getMonth() === month &&
      featureDate.getDate() === day
    );
  });
  return { type: "FeatureCollection", features };
}

export default function App() {
  const [allDays, useAllDays] = useState(true);
  const [timeRange, setTimeRange] = useState([0, 0]);
  const [selectedTime, selectTime] = useState(0);
  const [earthquakes, setEarthQuakes] = useState(null);

  useEffect(() => {
    /* global fetch */
    fetch("https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson")
      .then((resp) => resp.json())
      .then((json) => {
        // Note: In a real application you would do a validation of JSON data before doing anything with it,
        // but for demonstration purposes we ingore this part here and just trying to select needed data...
        console.log(json);
        const features = json.features;
        const endTime = features[0].properties.time;
        const startTime = features[features.length - 1].properties.time;

        setTimeRange([startTime, endTime]);
        setEarthQuakes(json);
        selectTime(endTime);
      })
      .catch((err) => console.error("Could not load data", err)); // eslint-disable-line
  }, []);

  const data = useMemo(() => {
    return allDays
      ? earthquakes
      : filterFeaturesByDay(earthquakes, selectedTime);
  }, [earthquakes, allDays, selectedTime]);

  console.log(data);
  return (
    <>
      <div className="w-screen h-screen rounded-lg border border-[#E2E8F0] overflow-hidden">
        <MapGL
          initialViewState={
            {
              // latitude: 40,
              // longitude: -100,
              // zoom: 3,
            }
          }
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          {data && (
            <Source type="geojson" data={data}>
              <Layer {...heatmapLayer} />
            </Source>
          )}
        </MapGL>
        {/* <ControlPanel
          startTime={timeRange[0]}
          endTime={timeRange[1]}
          selectedTime={selectedTime}
          allDays={allDays}
          onChangeTime={selectTime}
          onChangeAllDays={useAllDays}
        /> */}
      </div>
    </>
  );
}

export function renderToDom(container) {
  createRoot(container).render(<App />);
}
