import React from "react";
import { Bar } from "react-chartjs-2";

const options = {
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
      ticks: {
        borderWidth: 10,
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
  labels: ["September (Total)", "October (Current)", "November (Expected)"],
  datasets: [
    {
      label: "Videoes",
      data: [5000, 15000, 20000],
      backgroundColor: "#00ABA9", // Darker shade of red
      borderWidth: 1,
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      borderRadius: 50,
    },
    {
      label: "Games",
      data: [8000, 12000, 18000],
      backgroundColor: "#5DDDEF", // Darker shade of blue
      borderWidth: 1,
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      borderRadius: 50,
    },
    {
      label: "Stories",
      data: [12000, 18000, 22000],
      backgroundColor: "#F09609", // Darker shade of orange
      borderWidth: 1,
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      borderRadius: 50,
    },
    {
      label: "Quizes",
      data: [7000, 17000, 21000],
      backgroundColor: "#5D5FEF", // Darker shade of teal
      borderWidth: 1,
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      borderRadius: 50,
    },
  ],
};

const BarChart = () => {
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChart;
