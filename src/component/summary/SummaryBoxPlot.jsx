"use client";
import { useContext } from "react";
import LineChart from "../chart/LineChart";
import DateFilter from "../forms/DateFilter";
import { useRef } from "react";
import { useEffect } from "react";
import { ThemeContext } from "@/app/layout";
import Histogram from "../chart/Histogram";
import BoxPlot from "../chart/CorrelationHeatmap.jsx";
import CorrelationHeatmap from "../chart/CorrelationHeatmap.jsx";

const createGradient = (ctx) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 450);
  gradient.addColorStop(0, "rgba(34, 197, 94,0.41)");
  gradient.addColorStop(0.6, "rgba(255, 255, 255, 0)");
  return gradient;
};

function SummaryHeatMap() {
  const { theme } = useContext(ThemeContext);
  const chartRef = useRef(null);

  useEffect(() => {
    // // Get canvas context and create gradient
    const ctx = chartRef?.current?.getContext("2d")?.chart.ctx;

    if (ctx) {
      const gradient = createGradient(ctx);
      // Update chart data and options
      chartRef.current.data.datasets[0].backgroundColor = gradient;
      chartRef.current.update();
    }
  }, []);
  let month = ["2020", "2021", "2022", "2023", "2024"];

  const plugins = [
    {
      beforeDatasetsDraw(chart) {
        chart.ctx.shadowColor = "rgba(37, 99, 235, 0.14)";
        chart.ctx.shadowBlur = 8;
      },
      afterDatasetsDraw(chart) {
        chart.ctx.shadowColor = "rgba(0, 0, 0, 0)";
        chart.ctx.shadowBlur = 0;
      },
    },
  ];

  const min1 = 10,
    Q1_1 = 20,
    median1 = 30,
    Q3_1 = 40,
    max1 = 50;
  const min2 = 15,
    Q1_2 = 25,
    median2 = 35,
    Q3_2 = 45,
    max2 = 55;
  const min3 = 20,
    Q1_3 = 30,
    median3 = 40,
    Q3_3 = 50,
    max3 = 60;

  const data = {
    labels: ["Category 1", "Category 2", "Category 3"],
    datasets: [
      {
        label: "Box Plot",
        data: [
          [Q1_1, median1, median1, Q3_1, max1], // Floating bar for Q1 to Q3, median as a point
          [Q1_2, median2, median2, Q3_2, max2],
          [Q1_3, median3, median3, Q3_3, max3],
        ],
        // Configuration for how the box plot looks
        backgroundColor: "rgba(0, 123, 255, 0.5)",
        borderColor: "rgba(0, 123, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    // Plugin to draw the lines for min, max and median
    plugins: {
      autocolors: false,
      annotation: {
        annotations: {
          line1: {
            type: "line",
            yMin: median1,
            yMax: median1,
            borderColor: "black",
            borderWidth: 1,
            // ...additional line configuration
          },
          // ...more lines for other medians and whiskers
        },
      },
    },
  };

  return (
    <div className=" w-full bg-white dark:bg-darkblack-600 flex flex-col justify-between rounded-lg px-6 py-3">
      <div className="flex justify-between items-center pb-2 mb-2 border-b border-bgray-300">
        <h3 className="text-bgray-900 dark:text-white sm:text-2xl text-xl font-bold">
          Global
        </h3>
        <div className="sm:flex hidden space-x-[28px] items-center">
          {/* <div className="flex space-x-2 items-center">
            <div className="w-3 h-3 bg-orange rounded-full"></div>
            <span className="text-bgray-700 dark:text-bgray-50 text-sm font-medium">
              Lost
            </span>
          </div> */}
        </div>
        <DateFilter
          options={[
            "PM2.5",
            "PM10",
            "NO₂",
            "CO",
            "so2",
            "pressure",
            "relativehumidity",
          ]}
        />
        <DateFilter
          options={[
            "PM2.5",
            "PM10",
            "NO₂",
            "CO",
            "so2",
            "pressure",
            "relativehumidity",
          ]}
        />

        <DateFilter options={["Year", "Monthly", "Weekly", "Hourly"]} />
      </div>
      <div className="w-full ">
        {/* <canvas id="revenueFlowLine" height="255"></canvas> */}
        {/* <LineChart
          plugins={plugins}
          dataSet={data}
          option={options}
          refer={chartRef}
        /> */}
        {/* <Histogram data={data} options={options} /> */}
        <CorrelationHeatmap />
      </div>
    </div>
  );
}

export default SummaryHeatMap;
