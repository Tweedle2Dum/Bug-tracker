import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function TimeSpanGraph() {
  const labels = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (

    <Line data={data}
    options={{ responsive: true, maintainAspectRatio: false }}
    ></Line>
  );
}
