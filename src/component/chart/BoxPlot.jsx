import React from "react";
import Plot from "react-plotly.js";

function CorrelationHeatmap() {
  // This is a placeholder for your correlation matrix data
  // The matrix should be symmetric and typically has a diagonal of ones
  const correlationMatrix = [
    [1, 0.5, -0.2, 0.3],
    [0.5, 1, -0.3, 0.4],
    [-0.2, -0.3, 1, 0.1],
    [0.3, 0.4, 0.1, 1],
  ];

  // Labels for your variables (e.g., 'Revenue', 'Customer Satisfaction', etc.)
  const labels = ["Variable 1", "Variable 2", "Variable 3", "Variable 4"];

  return (
    <Plot
      data={[
        {
          type: "heatmap",
          z: correlationMatrix,
          x: labels,
          y: labels,
          colorscale: "Viridis", // This is one of many color scales
          // To center the color scale around zero, you can use a diverging color scale:
          // colorscale: [[0, 'blue'], [0.5, 'white'], [1, 'red']],
          reversescale: true, // Reverses the color scale if needed
          showscale: true, // Shows color scale
        },
      ]}
      layout={{
        title: "Correlation Matrix Heatmap",
        xaxis: { side: "bottom" },
        yaxis: { autorange: "reversed" }, // This ensures that the y-axis starts from the top
        margin: { t: 25, r: 0, l: 150 }, // Adjust the margin if needed
      }}
    />
  );
}

export default CorrelationHeatmap;
