const chartData = {
  datasets: [
    {
      label: "Newsletter",
      data: [{ x: 9.8101, y: 13.012, r: 50 }],
      backgroundColor: "#F09609",
      annotations: [
        {
          type: "number",
          x: 9.8101,
          y: 13.012,
          r:60,
          content: "30%",
          fontSize: 42, // Change the font size here
          backgroundColor: "rgba(255, 0, 0, 0.5)", // Background color
          borderColor: "red", // Border color
        },
      ],
    },
    {
      label: "Website",
      enabled:true,
      data: [{ x: 12, y: 13, r: 78 }],
      borderColor: "1 px solid black",
      hoverBackgroundColor: "rgba(0, 171, 169, 0.67)",
      hoverBorderColor: "transparent",
      hoverRadius: 12,
      pointHoverRadius: 28,
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
      position: "left",
      title: {
        FontFace: "Poppins",
        fontWeight: "500",
        color: "blue !Important", // Change the color here
        fontSize: 16,
        borderWidth:5, // Change the font size here
      },
    },
    title: {
      display: false,
      text: "Activity by Channel",
      position: "top",
      textAlign: "right",
      FontFace: "Poppins",
      fontWeight: "500",
      color: "green", // Change the color here
      fontSize: 25, // Change the font size here
    },
    annotation: {
      //
    },
  },
  responsive: {
    height: 800,
    width: 800,
    maintainAspectRatio: true,
  },
  maintainAspectRatio: true,
};

const usePlugins = true;

export { chartData, chartOptions, usePlugins };
