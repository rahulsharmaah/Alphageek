import React from "react";
import { Bubble } from "react-chartjs-2";
import "chart.js/auto";

const CustomBubbleChart = ({ data, options, usePlugins }) => {
  return <Bubble data={data} options={options} plugins={usePlugins} />;
};

export default CustomBubbleChart;
