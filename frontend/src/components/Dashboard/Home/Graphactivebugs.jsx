import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function Graphactivebugs() {
  const data = {
    labels: ["Low Priority", "Medium Priority","High Priority"],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "No of bugs on the basis of priority",
        data: [55, 23, 96],
        // you can set indiviual colors for each bar
        backgroundColor: ["lightpink", "lightgreen", "lightblue"],

        borderWidth: 3,
        borderColor: "black",
        borderRadius: 5,
      },
    ],
  };
  return (
    <>
      <Bar
        data={data}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
    </>
  );
}
