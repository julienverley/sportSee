import React, { useState, useEffect } from "react";
// import data from "../data";
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

// Format from numbers to strings
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

const baseURL = "http://localhost:3100/user/18/performance";

const Activities = () => {
  const [apiUserPerformanceData, setapiUserPerformanceData] = useState(null);
  useEffect(() => {
    // User Performance data from API
    axios.get(baseURL).then((response) => {
      setapiUserPerformanceData(response.data);
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
        // data={data.USER_PERFORMANCE[1].data}
        data={apiUserPerformanceData.data.data}
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
  value: PropTypes.number.isRequired,
};

export default Activities;
