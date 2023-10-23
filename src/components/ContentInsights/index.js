import React from "react";
import Accordion from "../../components/Accordion";
import BarChartContainer from "../../components/BarChartContainer";
// import BubbleChart from "../../components/BubbleChart";

const ChannelInsights = () => {
  const chartData1 = {
    datasets: [
      {
        label: "Newsletter",
        data: [{ x: 1.8, y: 10.01, r: 20 }],
        backgroundColor: "#F09609",
      },
      {
        label: "Website",
        data: [{ x: 1.81, y: 10, r: 12 }],
        backgroundColor: "rgba(0, 171, 169, 0.67)", // Adjusted fill and opacity
        borderColor: "transparent", // Hide border
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
        data: [{ x: .81, y: 10.02, r: 22 }],
        backgroundColor: "#FF0097",
      },
    ],
  };
  const chartData2 = {
    datasets: [
      {
        label: "Red dataset",
        data: [{ x: 0, y: 10, r: 20 }],
        backgroundColor: "#F09609",
      },
      {
        label: "Blue dataset",
        data: [{ x: -2.5, y: 10, r: 12 }],
        backgroundColor: "rgba(0, 171, 169, 0.67)", // Adjusted fill and opacity
        borderColor: "transparent", // Hide border
        hoverBackgroundColor: "rgba(0, 171, 169, 0.67)", // Adjusted fill for hover
        hoverBorderColor: "transparent", // Hide border on hover
        hoverRadius: 12, // Adjusted hover radius
        pointHoverRadius: 12, // Adjusted point hover radius
        pointStyle: "circle", // Use a circle point style
        pointBorderColor: "transparent", // Hide point border
        pointBackgroundColor: "rgba(0, 171, 169, 0.67)", // Adjusted point fill
      },
      {
        label: "Pink dataset",
        data: [{ x: 2.5, y: 10, r: 12 }],
        backgroundColor: "#FF0097",
      },
    ],
  };
  return (
    // <h1 style={{ justifyContent: "center" }}>ChannelEngagement</h1>
    <Accordion title={"Content insights"}>
      <hii></hii>
      <BarChartContainer chartData1={chartData1} chartData2={chartData2} />
    </Accordion>
  );
};

export default ChannelInsights;
