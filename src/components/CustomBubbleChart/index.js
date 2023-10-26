import React from "react";
import { Bubble } from "react-chartjs-2";
import "chart.js/auto";
import "chartjs-plugin-annotation"; // Import the annotation plugin
const CustomBubbleChart = ({ data, options, usePlugins }) => {
  return <Bubble data={data} options={options} plugins={usePlugins} />;
};

export default CustomBubbleChart;
