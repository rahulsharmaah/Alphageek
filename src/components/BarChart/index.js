import { Typography } from "@mui/material";
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
      display: false,
      text: "Engagement Metrics",
    },
  },
};
const data = {
  labels: ["September (Total)", "October (Current)", "November (Expected)"],
  datasets: [
    {
      label: "Videoes",
      data: [5, 15, 20, 25],
      backgroundColor: "#00ABA9", // Darker shade of red
      borderWidth: 1,
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      borderRadius: 50,
    },
    {
      label: "Games",
      data: [22, 15, 21, 25],
      backgroundColor: "#5DDDEF", // Darker shade of blue
      borderWidth: 1,
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      borderRadius: 50,
    },
    {
      label: "Stories",
      data: [13, 17, 20, 30],
      backgroundColor: "#F09609", // Darker shade of orange
      borderWidth: 1,
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      borderRadius: 50,
    },
    {
      label: "Quizes",
      data: [18, 15, 24, 25],
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
      <Typography variant="h3" gutterBottom>
        {options.plugins.title.text}
      </Typography>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChart;
