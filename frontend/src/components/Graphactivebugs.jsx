import React from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';

export default function Graphactivebugs() {

  const data = {
    labels: ["Red", "Orange", "Blue"],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "Popularity of colours",
        data: [55, 23, 96],
        // you can set indiviual colors for each bar
        backgroundColor: [
          "red",
          "green",
          "blue",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Bar data={data} options = {{ responsive:true,maintainAspectRatio:false}}  width={"100%"} />
    </>
  );
}
