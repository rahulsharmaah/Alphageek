import { Typography } from "@mui/material";
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
      title: {
        FontFace: "Poppins",
        fontWeight: "600",
        color: "blue !Important", // Change the color here
        fontSize: 16, // Change the font size here
      },
    },
    title: {
      display: true,
      text: "Growth by Channel",
      position: "top",
      textAlign: "right",
      FontFace: "Poppins",
      fontWeight: "600",
      color: "#1C2753", // Change the color here
      fontSize: 25, // Change the font size here
    },
    annotation: {
      //
    },
  },
};

const data = {
  labels: ["September Total", "October Current", "November Expected"],
  datasets: [
    {
      label: "Website",
      data: [5, 15, 20],
      fill: false,
      borderColor: "#FF0097", // Pink
      pointBackgroundColor: "#FF0097", // Match legend color
      borderWidth: 2,
      pointRadius: 5,
    },
    {
      label: "Mobile",
      data: [8, 12, 18],
      fill: false,
      borderColor: "#00ABA9", // Blue
      pointBackgroundColor: "#00ABA9", // Match legend color
      borderWidth: 2,
      pointRadius: 5,
    },
    {
      label: "Newsletter",
      data: [12, 18, 22],
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
      <Typography variant="h3" gutterBottom>
        {options.plugins.title.text}
      </Typography>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
