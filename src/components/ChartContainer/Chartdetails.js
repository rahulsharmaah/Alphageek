const chartData = {
  datasets: [
    {
      label: "Newsletter",
      data: [{ x: 9.8101, y: 13.012, r: 50 }],
      backgroundColor: "#F09609",
    },
    {
      label: "Website",
      data: [{ x: 12, y: 13, r: 78 }],
      borderColor: "1 px solid black",
      hoverBackgroundColor: "rgba(0, 171, 169, 0.67)",
      hoverBorderColor: "transparent",
      hoverRadius: 12,
      pointHoverRadius: 12,
      pointStyle: "circle",
      pointBorderColor: "transparent",
      pointBackgroundColor: "rgba(0, 171, 169, 0.67)",
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

const chartOptions = {
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
  maintainAspectRatio: true,
};

const usePlugins = true;

export { chartData, chartOptions, usePlugins };
