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
import { useState, useMemo } from "react";
import { createRoot } from "react-dom/client";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

import ControlPanel from "./ControlPanel";
import Pin from "./Pin";

import CITIES from "./cities.json";

const TOKEN =
  "pk.eyJ1IjoibWVuZHNhbGJlcnQiLCJhIjoiY2x1NjloMmh2MDZjdDJrbXUzajQ2cW96dyJ9.DlO7KoEVjfnmCSKLSAPUjQ";
export default function App() {
  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );

  return (
    <>
      <div className="w-screen h-screen rounded-lg border border-[#E2E8F0] overflow-hidden">
        <Map
          initialViewState={{
            latitude: 40,
            longitude: -100,
            zoom: 3.5,
            bearing: 0,
            pitch: 0,
          }}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxAccessToken={TOKEN}
        >
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />

          {/* {pins} */}
          <Marker longitude={-100} latitude={40} anchor="bottom">
            <Pin />
          </Marker>
          {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              onClose={() => setPopupInfo(null)}
            >
              <div>
                {popupInfo.city}, {popupInfo.state} |{" "}
                <a
                  target="_new"
                  href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
                >
                  Wikipedia
                </a>
              </div>
              <img width="100%" src={popupInfo.image} />
            </Popup>
          )}
        </Map>
        <p>dfsf</p>
        <ControlPanel />
      </div>
    </>
  );
}

export function renderToDom(container) {
  createRoot(container).render(<App />);
}
