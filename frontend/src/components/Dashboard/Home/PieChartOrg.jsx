import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function PieChartOrg({props}) {

  console.log(props);

  const data = {
    labels: props.map((item) => item.organizationName),
    datasets: [
      {
        label: "Bugs per organization",
        data: props.map((item) => item.totalBugs),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(10, 13, 86)",
          "rgb(255, 20, 86)",
          'rgb(125, 67, 210)',
          'rgb(40, 189, 132)',
          'rgb(93, 14, 188)',
          'rgb(231, 87, 49)',
       '  rgb(97, 22, 165)',
        ' rgb(252, 162, 45)',
          // Add more colors as needed
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Pie
      data={data}
      options={{ responsive: true, maintainAspectRatio: false }}
    />
  );
}
