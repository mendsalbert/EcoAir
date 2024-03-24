"use client";

import { useEffect, useState } from "react";
// import jsVectorMap from "jsvectormap";
// import "jsvectormap/dist/maps/world.js";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
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
  //     const markers = locations.map((location) => ({
  //       name: location.name,
  //       coords: [location.coordinates.latitude, location.coordinates.longitude],
  //     }));

  //     const newMap = new jsVectorMap({
  //       map: "world",
  //       selector: "#world-map",
  //       markers: markers, // Use the markers from state
  //       markerStyle: {
  //         initial: {
  //           fill: "#22C55E",
  //           r: 8,
  //         },
  //       },
  //       draggable: true,
  //       zoomButtons: false,
  //       zoomOnScroll: true,
  //       zoomOnScrollSpeed: 3,
  //       zoomMax: 12,
  //       zoomMin: 1,
  //       zoomAnimate: true,
  //       showTooltip: true,
  //       zoomStep: 0.2,
  //       bindTouchEvents: true,
  //       regionStyle: {
  //         // Region style

  //         hover: {
  //           fillOpacity: 0.7,
  //           cursor: "pointer",
  //           fill: "#22C55E",
  //         },
  //         selected: {
  //           fill: "#000",
  //         },
  //         selectedHover: {},
  //       },

  //       // ... other map options
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

  const defaultProps = {
    zoom: 14,
  };

  return (
    // <div
    //   id="world-map"
    //   className="w-full h-screen rounded-lg border border-[#E2E8F0] overflow-hidden"
    // ></div>
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
