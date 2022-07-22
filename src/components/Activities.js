import React, { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import axios from "axios";

/**
 *
 * @param {value} any
 * @returns formated labels from numbers to strings
 */
const formatAngleAxis = (value) => {
  const kinds = [
    "Cardio",
    "Energie",
    "Endurance",
    "Force",
    "Vitesse",
    "Intensité",
  ];
  return kinds[value - 1];
};

const baseURL = "http://localhost:3100/user/12/performance";

// const Activities = ({ performance }) => {
const Activities = () => {
  const [apiUserPerformanceData, setapiUserPerformanceData] = useState(null);
  useEffect(() => {
    // User Performance data from API
    axios.get(baseURL).then((response) => {
      setapiUserPerformanceData(response.data);
    });
  }, []);
  if (!apiUserPerformanceData) return null;

  // console.log(performance);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="65%"
        width="50%"
        height="50%"
        data={apiUserPerformanceData.data.data}
        // data={performance}
        className="dashboard-main-3charts-activities-radarchart"
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          axisLine={false}
          tickFormatter={formatAngleAxis}
          stroke="#ffffff"
          tick={{ dy: 4 }}
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

// Proptypes formatAngleAxis
formatAngleAxis.propTypes = {
  value: PropTypes.number,
};

export default Activities;
