import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";
import "./BarChart.css";

// Register required Chart.js components
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const BarChart = ({ title, dataLabels, dataValues }) => {
  const data = {
    labels: dataLabels, // Labels for the X-axis
    datasets: [
      {
        data: dataValues, // Data points
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: false, // Hides the title above the chart (if any)
      },
    },
    maintainAspectRatio: false, // Ensures proper scaling
    scales: {
      x: {
        title: {
          display: true,
          text: "Categories", // Customize X-axis title
        },
      },
      y: {
        title: {
          display: true,
          text: "Values", // Customize Y-axis title
        },
        beginAtZero: true, // Start Y-axis at 0
      },
    },
  };

  return (
    <div className="chart-container" style={{ height: "400px", width: "100%" }}>
      <h3>{title}</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;