"use client";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world.js";
import { useEffect, useState } from "react";

function Map() {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch(
          "http://localhost:8001/api/v1/locations/get-locations"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        // setError(error.message);
      } finally {
        console.log("finally");
      }
    }

    fetchLocations();
  }, []);

  const markers = locations?.map((location) => ({
    name: location.name,
    coords: [location.coordinates.latitude, location.coordinates.longitude],
  }));

  useEffect(() => {
    let map = undefined;
    if (map === undefined) {
      map = new jsVectorMap({
        map: "world",
        selector: "#world-map",
        backgroundColor: "#F7FAFC",

        markerStyle: {
          initial: {
            fill: "#22C55E",
            r: 4,
          },
        },
        markersSelectable: true,
        markers: markers,
        draggable: true,
        zoomButtons: false,
        zoomOnScroll: true,
        zoomOnScrollSpeed: 3,
        zoomMax: 12,
        zoomMin: 1,
        zoomAnimate: true,
        showTooltip: true,
        zoomStep: 0.2,
        bindTouchEvents: true,
        regionStyle: {
          // Region style
          initial: {
            fill: "#DBE7FA",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeOpacity: 1,
          },
          hover: {
            fillOpacity: 0.7,
            cursor: "pointer",
            fill: "#22C55E",
          },
          selected: {
            fill: "#000",
          },
          selectedHover: {},
        },
        visualizeData: {
          scale: ["#22C55E", "#DBEAFE"],
          values: {
            US: 29,
            CA: 190,
          },
        },
      });
    }
  }, []);

  return (
    <div
      id="world-map"
      className="w-full h-[246px] rounded-lg border border-[#E2E8F0] overflow-hidden"
    ></div>
  );
}

export default Map;
