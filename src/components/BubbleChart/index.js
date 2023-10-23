import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import "chartjs-plugin-annotation"; // Import the annotation plugin

const BubbleChart = ({ chartData }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && chartData) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(canvasRef.current, {
        type: "bubble",
        data: chartData,
        options: {
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
              // Add annotation label above the "Blue dataset" bubble
              annotations: [
                {
                  type: "line",
                  mode: "vertical",
                  scaleID: "x",
                  // value: 0, // x-value of the "Blue dataset" bubble
                  borderColor: "rgba(0, 0, 0, 0)", // Transparent border
                  label: {
                    content: "51%", // Label text
                    enabled: true,
                    position: "right", // Position it above the bubble
                    backgroundColor: "transparent",
                    font: {
                      size: 14, // Font size
                    },
                  },
                },
              ],
            },
          },
          responsive: true,
        },
      });
    }
  }, [chartData]);

  return <canvas ref={canvasRef} style={{ width: "100px", height: "150px" }} />;
};

export default BubbleChart;
