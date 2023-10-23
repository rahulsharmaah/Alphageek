import React from "react";
import { Bubble } from "react-chartjs-2";
import "chart.js/auto";
const chartData1 = {
  datasets: [
    {
      label: "Newsletter",
      data: [{ x: 9.8101, y: 13.012, r: 50 }],
      backgroundColor: "#F09609",
    },
    {
      label: "Website",
      data: [{ x: 12, y: 13, r: 78 }],

      // backgroundColor: "rgba(0, 171, 169, 0.67)", // Adjusted fill and opacity
      borderColor: "1 px solid black", // Hide border
      hoverBackgroundColor: "rgba(0, 171, 169, 0.67)", // Adjusted fill for hover
      hoverBorderColor: "transparent", // Hide border on hover
      hoverRadius: 12, // Adjusted hover radius
      pointHoverRadius: 12, // Adjusted point hover radius
      pointStyle: "circle", // Use a circle point style
      pointBorderColor: "transparent", // Hide point border
      pointBackgroundColor: "rgba(0, 171, 169, 0.67)", // Adjusted point fill
    },
    {
      label: "Mobile",
      data: [
        { x: 9.9101, y: 12.6, r: 42 },
        { x: 1, y: 13.6, r: 0 },
        { x: 12.9101, y: 12.6, r: 0 },
      ],
      backgroundColor: "#FF0097",
    },
  ],
};
const options = {
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
    annotation: {
      //
    },
  },
  responsive: true,
};
const BubbleChartNew = () => {
  return <Bubble data={chartData1} options={options} plugins={true} />;
};

export default BubbleChartNew;
