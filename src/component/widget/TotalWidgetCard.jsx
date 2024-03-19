"use client";
import ProtoTypes from "prop-types";
import LineChart from "../chart/LineChart";
import { useEffect } from "react";
import { useRef } from "react";
import Image from "next/image";

const createGradient = (ctx) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 450);
  gradient.addColorStop(0, "rgba(34, 197, 94,0.41)");
  gradient.addColorStop(0.2, "rgba(255, 255, 255, 0)");
  return gradient;
};

function TotalWidgetCard({
  title,
  amount,
  groth,
  memberImg,
  totalEarnImg,
  graphColor,
  isPrev,
}) {
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

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },

    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Visitor: 2k",
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Afril",
    "May",
    "Jan",
    "Feb",
    "Mar",
    "Afril",
    "May",
    "Feb",
    "Mar",
    "Afril",
    "May",
  ];

  const data = {
    labels,
    datasets: [
      {
        data: [0, 10, 0, 65, 0, 25, 0, 35, 20, 100, 40, 75, 50, 85, 60],
        label: "Visitor",
        borderColor: "#22C55E",
        pointRadius: 0,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#22C55E",
        borderWidth: 1,
        fill: true,
        fillColor: "#fff",
        tension: 0.4,
      },
    ],
  };
  return (
    <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center space-x-[7px]">
          <div className="icon">
            <span>
              <Image
                priority={true}
                height={totalEarnImg.height}
                width={totalEarnImg.width}
                src={totalEarnImg.src}
                alt="icon"
              />
            </span>
          </div>
          <span className="text-lg font-semibold text-bgray-900 dark:text-white">
            {title}
          </span>
        </div>
        <div>
          {/* <Image
            priority={true}
            height={memberImg.height}
            width={memberImg.width}
            src={memberImg.src}
            alt="members"
          /> */}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex-1">
          <p className="text-3xl font-bold leading-[48px] text-bgray-900 dark:text-white">
            {amount}
          </p>
          <div className="flex items-center space-x-1">
            <span className="text-sm font-medium text-success-300">
              {groth}
            </span>
            <span className="text-sm font-medium text-bgray-700 dark:text-bgray-50">
              {isPrev ? "from last week" : ""}
            </span>
          </div>
        </div>
        <div className="w-[106px] h-[68px]">
          <LineChart option={options} dataSet={data} refer={chartRef} />
        </div>
      </div>
    </div>
  );
}

TotalWidgetCard.propTypes = {
  title: ProtoTypes.string,
  amount: ProtoTypes.string,
  groth: ProtoTypes.string,
  memberImg: ProtoTypes.object,
  totalEarnImg: ProtoTypes.object,
};

export default TotalWidgetCard;
