import React from "react";
import data from "../data";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Activities = () => {
  // Format kind of activities
  const formatAngleAxis = (value) => {
    const kinds = [
      "Intensité",
      "Vitesse",
      "Force",
      "Endurance",
      "Energie",
      "Cardio",
    ];
    return kinds[value - 1];
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="60%"
        width="50%"
        height="50%"
        data={data.USER_PERFORMANCE[0].data}
        className="dashboard-main-3charts-activities-radarchart"
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          axisLine={false}
          tickFormatter={formatAngleAxis}
          stroke="#ffffff"
        />
        <PolarRadiusAxis axisLine={false} tick={false} />
        <Radar
          // name="Mike"
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Activities;
