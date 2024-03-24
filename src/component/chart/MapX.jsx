"use client";

import { useEffect, useState } from "react";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world";
function Map() {
  const [locations, setLocations] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Fetch locations when the component mounts
    fetchLocations();
  }, []);

  useEffect(() => {
    // Initialize or update the map whenever locations change
    if (locations.length && !map) {
      initMap();
    }
  }, [locations, map]); // Depend on locations state and map instance

  const fetchLocations = async () => {
    try {
      const response = await fetch(
        "http://localhost:8001/api/v1/locations/get-locations"
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setLocations(data); // Assuming data is an array of locations
    } catch (error) {
      console.error("Failed to fetch locations:", error.message);
    }
  };

  const initMap = () => {
    const markers = locations.map((location, index) => ({
      name: location.name,
      coords: [location.coordinates.latitude, location.coordinates.longitude],
      index,
    }));

    console.log("====makers====", markers[0]);

    const map = new jsVectorMap({
      map: "world",
      selector: "#map",
      markers: [
        { name: "Egypt", coords: [26.8206, 30.8025] },
        { name: "United Kingdom", coords: [55.3781, 3.436] },
        {
          name: "United States",
          coords: [37.0902, -95.7129],
          // Add style for this particular marker
          // Keep in mind `style` object is merged with `markerStyle.initial`
          style: { fill: "red" },
        },
      ],
      // Use the markers from state
      //   markerStyle: {
      //     initial: {
      //       fill: "#22C55E",
      //       r: 8,
      //     },
      //   },
      //   draggable: true,
      //   zoomButtons: true,
      //   zoomOnScroll: true,
      //   zoomOnScrollSpeed: 3,
      //   zoomMax: 60,
      //   zoomMin: 1,
      //   zoomAnimate: true,
      //   showTooltip: true,
      //   zoomStep: 0.2,
      //   bindTouchEvents: true,
      //   regionStyle: {
      //     // Region style

      //     hover: {
      //       fillOpacity: 0.7,
      //       cursor: "pointer",
      //       fill: "#22C55E",
      //     },
      //     selected: {
      //       fill: "#000",
      //     },
      //     selectedHover: {},
      //   },

      // ... other map options

      //   onMarkerTipShow: function (e, label, markerIndex) {
      //     // Use the index from the markersData array to find the right location
      //     const marker = markersData.find((m) => m.index === markerIndex);
      //     if (marker) {
      //       label.html(marker.name);
      //     }
      //   },
    });

    setMap(newMap); // Save the map instance in the state
  };

  // Cleanup map on component unmount
  useEffect(() => {
    return () => {
      if (map) {
        map?.remove();
      }
    };
  }, [map]);

  return (
    <div
      id="world-map"
      className="w-full h-screen rounded-lg border border-[#E2E8F0] overflow-hidden"
    ></div>
  );
}

export default Map;
