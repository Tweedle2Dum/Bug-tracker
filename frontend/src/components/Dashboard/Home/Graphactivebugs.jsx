import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function Graphactivebugs({ props }) {
  function countBugsBySeverity(bugsArray) {
    // Initialize counters for each severity level
    let highCount = 0;
    let mediumCount = 0;
    let lowCount = 0;

    // Iterate over each object in the array
    for (let i = 0; i < bugsArray.length; i++) {
      const bug = bugsArray[i];

      // Check the severity of the bug and increment the respective counter
      if (bug.severity === "High") {
        highCount++;
      } else if (bug.severity === "Medium") {
        mediumCount++;
      } else if (bug.severity === "Low") {
        lowCount++;
      }
    }

    // Return an object with the counts for each severity level
    return {
      High: highCount,
      Medium: mediumCount,
      Low: lowCount,
    };
  }



  const bugCounts = countBugsBySeverity(props);
  console.log(bugCounts);

  console.log(props);

  const data = {
    labels: ["Low Priority", "Medium Priority", "High Priority"],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "No of bugs on the basis of priority",
        data: [bugCounts.Low, bugCounts.Medium, bugCounts.High],
        // you can set indiviual colors for each bar
        backgroundColor: ["lightpink", "lightgreen", "lightblue"],

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
