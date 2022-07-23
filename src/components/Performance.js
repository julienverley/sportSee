import React, { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { getUserDataPerformance } from "../service/API.js";

/**
 * Display performance informations
 * @param {value} any
 * @returns formated labels from numbers to strings
 */
const Performance = () => {
  const [apiUserPerformanceData, setapiUserPerformanceData] = useState(null);
  useEffect(() => {
    getUserDataPerformance().then((response) => {
      setapiUserPerformanceData(response);
    });
  }, []);
  if (!apiUserPerformanceData) return null;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="65%"
        width="50%"
        height="50%"
        data={apiUserPerformanceData}
        className="dashboard-main-3charts-performance-radarchart"
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          axisLine={false}
          stroke="#ffffff"
          tick={{ dy: 4 }}
        />
        <PolarRadiusAxis axisLine={false} tick={false} />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Performance;
