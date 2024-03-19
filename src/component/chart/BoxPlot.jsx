import React from "react";
import Plot from "react-plotly.js";

function BoxPlot() {
  // This example assumes you have 5 time periods with data for each.
  // Replace these arrays with your actual data.
  const timePeriods = ["2020", "2021", "2022", "2023", "2024"];
  const data = timePeriods.map((year, i) => ({
    y: [
      /* Your data for this year */
    ],
    type: "box",
    name: year,
    boxpoints: "all",
    jitter: 0.5,
    whiskerwidth: 0.2,
    fillcolor: "cls",
    marker: {
      size: 2,
    },
    line: {
      width: 1,
    },
  }));

  return (
    <Plot
      data={data}
      layout={{
        title: "Time Series Box Plot",
        xaxis: {
          title: "Year",
        },
        yaxis: {
          title: "Data Value",
          autorange: true,
        },
      }}
    />
  );
}

export default BoxPlot;
