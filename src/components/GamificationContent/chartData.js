const chartData = {
  // labels: ["Chart 1"],
  datasets: [
    {
      label: "Chart 1 Data",
      data: [15, 9],
      backgroundColor: ["#1C2753", "gold"],
      borderColor: ["#fff"],
      borderWidth: 1,
    },
  ],
};
const chartData1 = {
  datasets: [
    {
      label: "Chart 2 Data",
      data: [10, 4],
      backgroundColor: ["#1C2753", "gold"],
      borderColor: ["#fff"],
      borderWidth: 1,
    },
  ],
};
const chartData2 = {
  datasets: [
    {
      label: "Chart 2 Data",
      data: [10, 5],
      backgroundColor: ["#1C2753", "gold"],
      borderColor: ["#fff"],
      borderWidth: 1,
    },
  ],
};
const chartData3 = {
  datasets: [
    {
      label: "Chart 3 Data",
      data: [5, 1],
      backgroundColor: ["#1C2753", "gold"],
      borderColor: ["#fff"],
      borderWidth: 1,
    },
  ],
};
const options = {
  responsive: true,
  plugins: {
    beforeDraw: function (chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 160).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "top";
      var text = "Foo-bar",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  },
};
export { chartData, chartData1, chartData2, chartData3,options };
