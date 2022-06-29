import React from "react";
import data from "../data";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const Activities = () => {
  console.log(data.USER_PERFORMANCE[1].data[0]);
  return (
    // <div>
    //   {data.USER_PERFORMANCE[1].data.map((performance, index) => (
    //     <div key={index}>
    //       <div>{performance.kind}</div>
    //       <div>{performance.value}</div>
    //     </div>
    //   ))}
    // </div>
    <RadarChart
      cx={150}
      cy={150}
      outerRadius={150}
      width={500}
      height={500}
      data={data.USER_PERFORMANCE[1].data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};

export default Activities;
