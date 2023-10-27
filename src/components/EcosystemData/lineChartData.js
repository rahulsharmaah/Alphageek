const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    title: {
      display: true,
      text: "Engagement Metrics",
      font: {
        color: "#00495F",
        textAlign: "center",
        family: "Roboto",
        size: "18px",
        weight: 500,
      }
    },
  },
  layout: {
    padding: {
      top: 0, // Adjust top padding as needed
      right: 0, // Adjust right padding as needed
      bottom: 0, // Adjust bottom padding as needed
      left: 0, // Adjust left padding as needed
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      ticks:{
        color: "#007C84",
        fontWeight:500,
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return `${value}k`;
        },
        color: "#007C84",
      },
    },
  },
  maintainAspectRatio: false, // Prevent the canvas from maintaining the aspect ratio
};
const data = {
  labels: ["September", "October", "November"],
  datasets: [
    {
      label: "Orignal Fans",
      data: [5, 18, 25,23,45],
      fill: false,
      borderColor: "#007C84", // Green
      pointBackgroundColor: "#FF0097", // Match legend color
      borderWidth: 2,
      pointRadius: 1,
      tension: 0.9, // Set the tension for smooth curves
      BackgroundColor:"#007C84"
    },
  ],
};
export { options, data };
