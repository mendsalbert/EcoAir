import React from "react";
import Plot from "react-plotly.js";

function BoxPlot() {
  return (
    <Plot
      data={[
        {
          type: "box",
          y: [1, 2, 3, 4, 5], // replace with your y data array
          boxpoints: "all", // display the original data points
          jitter: 0.3, // add some jitter to the data points to avoid overlap
          pointpos: -1.8, // offset the data points from the box
        },
      ]}
      layout={{ width: 700, height: 400, title: "Box Plot" }}
    />
  );
}

export default BoxPlot;
