import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const LineChart = ({ coasters }) => {
  const data = {
    labels: coasters.map((coaster) => coaster.Name),
    datasets: [
      {
        label: "Drop (ft)",
        data: coasters.map((coaster) => parseInt(coaster.Drop) || 0),
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
      {
        label: "Length (ft)",
        data: coasters.map((coaster) => parseInt(coaster.Length) || 0),
        borderColor: "rgba(153,102,255,1)",
        fill: false,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>Drop vs. Length</h3>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
