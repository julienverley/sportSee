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
  //console.log(data.USER_PERFORMANCE[1].data[0]);
  return (
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
        stroke="#FF0101"
        fill="#FF0101"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};

export default Activities;
