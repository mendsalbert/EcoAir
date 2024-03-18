import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Histogram({ options, data }) {
  // Adjust the options for the histogram
  const histogramOptions = {
    ...options,
    scales: {
      x: {
        ...options.scales.x,
        // Assuming 'options' already has a 'scales' property
        barThickness: "flex", // This can be a number or 'flex'
        maxBarThickness: 1, // This sets the maximum bar thickness
        categoryPercentage: 1.0,
        barPercentage: 1.0,
      },
      y: {
        ...options.scales.y,
        // Assuming 'options' already has a 'y' property
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Typically histograms don't have a legend
      },
    },
  };

  return <Bar options={histogramOptions} data={data} />;
}

export default Histogram;
