import type { HeatmapLayer } from "react-map-gl";

const MAX_ZOOM_LEVEL = 9;

export const heatmapLayer: HeatmapLayer = {
  id: "heatmap",
  maxzoom: MAX_ZOOM_LEVEL,
  type: "heatmap",
  paint: {
    // Increase the heatmap weight based on frequency and property magnitude
    "heatmap-weight": ["interpolate", ["linear"], ["get", "mag"], 0, 0, 6, 1],
    // Increase the heatmap color weight weight by zoom level
    // heatmap-intensity is a multiplier on top of heatmap-weight
    "heatmap-intensity": [
      "interpolate",
      ["linear"],
      ["zoom"],
      0,
      1,
      MAX_ZOOM_LEVEL,
      3,
    ],
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    "heatmap-color": [
      "interpolate",
      ["linear"],
      ["heatmap-density"],
      0,
      "rgba(255, 255, 255, 0)", // White, transparent (the lowest intensity)
      0.2,
      "rgb(176, 212, 243)", // Light blue
      0.4,
      "rgb(128, 186, 236)", // Blue
      0.6,
      "rgb(79, 155, 232)", // Strong blue
      0.8,
      "rgb(251, 128, 114)", // Red-orange
      1,
      "rgb(255, 200, 55)", // Orange (the highest intensity)
    ],

    // Adjust the heatmap radius by zoom level
    "heatmap-radius": [
      "interpolate",
      ["linear"],
      ["zoom"],
      0,
      2,
      MAX_ZOOM_LEVEL,
      20,
    ],
    // Transition from heatmap to circle layer by zoom level
    "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 7, 1, 9, 0],
  },
};
