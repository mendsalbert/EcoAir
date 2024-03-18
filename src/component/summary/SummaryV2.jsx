"use client";
import { useContext } from "react";
import LineChart from "../chart/LineChart";
import DateFilter from "../forms/DateFilter";
import { useRef } from "react";
import { useEffect } from "react";
import { ThemeContext } from "@/app/layout";
import Histogram from "../chart/Histogram";

const createGradient = (ctx) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 450);
  gradient.addColorStop(0, "rgba(34, 197, 94,0.41)");
  gradient.addColorStop(0.6, "rgba(255, 255, 255, 0)");
  return gradient;
};

function SummaryV2() {
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
  const data = {
    labels: month,
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 75, 65, 55, 75],
        borderColor: "#22C55E",
        pointBorderColor: "#ffffff",
        pointBackgroundColor: "#22C55E",
        pointBorderWidth: 4,
        borderWidth: 2,
        fill: true,
        fillColor: "#fff",
        tension: 0.4,
      },
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#ff6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",

        pointBorderWidth: 4,
        borderWidth: 2,
        fill: true,
        fillColor: "#fff",
        tension: 0.4,
      },
      {
        label: "Dataset 2",
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: "#36a2eb",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        pointBorderWidth: 4,
        borderWidth: 2,
        fill: true,
        fillColor: "#fff",
        tension: 0.4,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Years",
        },
        ticks: {
          color: theme === "" ? "black" : "white",
        },
        grid: {
          color: theme === "" ? "rgba(243 ,246, 255 ,1)" : "rgba(34,38,46,1)",
        },
        gridLines: {
          zeroLineColor: "transparent",
        },
      },
      y: {
        beginAtZero: true,
        border: { dash: [5, 5] },
        grid: {
          color: theme === "" ? "rgba(243 ,246, 255 ,1)" : "rgba(34,38,46,1)",
          borderDashOffset: 2,
        },
        gridLines: {
          zeroLineColor: "transparent",
        },
        ticks: {
          color: theme === "" ? "black" : "white",
          callback(value) {
            return `${value} `;
          },
        },
        title: {
          display: true,
          text: "PM2.5/µg/m³",
        },
      },
    },

    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "Visitor: 2k",
      },
      tooltip: {
        enabled: true,
      },
    },
    elements: {
      point: {
        radius: 3, // This sets a default radius for all points
        hoverRadius: 6,
      },
    },
  };
  const data_ = {
    labels: ["0-5", "5-10", "10-15", "15-20"], // Replace these with your actual bin ranges
    datasets: [
      {
        data: [5, 10, 15, 20], // Replace these with your actual frequency counts
        backgroundColor: "rgba(0, 123, 255, 0.5)",
        // ...other dataset properties
      },
    ],
  };

  return (
    <div className="xl:w-66 w-full bg-white dark:bg-darkblack-600 flex flex-col justify-between rounded-lg px-6 py-3">
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
      <div className="w-full h-[255px]">
        {/* <canvas id="revenueFlowLine" height="255"></canvas> */}
        {/* <LineChart
          plugins={plugins}
          dataSet={data}
          option={options}
          refer={chartRef}
        /> */}

        <Histogram data={data_} options={options} />
      </div>
    </div>
  );
}

export default SummaryV2;
