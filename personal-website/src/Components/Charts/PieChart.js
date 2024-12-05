import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ title, dataLabels, dataValues }) => {
  const data = {
    labels: dataLabels,
    datasets: [
      {
        data: dataValues,
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
    },
    maintainAspectRatio: false, // Ensures proper scaling
  };

  return (
    <div className="chart-container">
      <h3>{title}</h3>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
