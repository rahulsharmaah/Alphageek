import React from "react";
import { Line } from "react-chartjs-2";

const options = {
  responsive: true,
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return `${value}k`;
        },
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    title: {
      display: true,
      text: "Engagement Metrics",
    },
  },
};

const data = {
  labels: ["September Total", "October Current", "November Expected"],
  datasets: [
    {
      label: "Website",
      data: [5000, 15000, 20000],
      fill: false,
      borderColor: "#FF0097", // Pink
      pointBackgroundColor: "#FF0097", // Match legend color
      borderWidth: 2,
      pointRadius: 5,
    },
    {
      label: "Mobile",
      data: [8000, 12000, 18000],
      fill: false,
      borderColor: "#00ABA9", // Blue
      pointBackgroundColor: "#00ABA9", // Match legend color
      borderWidth: 2,
      pointRadius: 5,
    },
    {
      label: "Newsletter",
      data: [12000, 18000, 22000],
      fill: false,
      borderColor: "#F09609", // Orange
      pointBackgroundColor: "#F09609", // Match legend color
      borderWidth: 2,
      pointRadius: 5,
    },
  ],
};

const LineChart = () => {
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
