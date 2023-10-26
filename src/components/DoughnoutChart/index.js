import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnoutChart = ({ data, options }) => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnoutChart;
