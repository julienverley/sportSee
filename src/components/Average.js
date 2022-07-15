import React, { useState, useEffect } from "react";
// import data from "../data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AverageLabel from "./AverageLabel";
import PropTypes from "prop-types";
import axios from "axios";

// Format date from numbers to strings
const formatXaxis = (value) => {
  const labels = ["L", "M", "M", "J", "V", "S", "D"];
  return labels[value - 1];
};
// White rectangle information on hover
const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <div className="average-custom-tooltip">
        <p className="label">
          {payload[0].value}
          <span> min</span>
        </p>
      </div>
    );
  }
  return null;
};
// Background on hover
const CustomHover = ({ points }) => {
  // console.log(points);
  return (
    <rect
      className="average-custom-hover"
      x={points[0].x}
      y={0}
      height="100%"
      width="100%"
      fill="rgba(0, 0, 0, 0.2)"
    />
  );
};

const baseURL = "http://localhost:3100/user/18/average-sessions";

const Average = () => {
  const [apiUserAverageData, setApiUserAverageData] = useState(null);
  useEffect(() => {
    // User Average data from API
    axios.get(baseURL).then((response) => {
      setApiUserAverageData(response.data);
    });
  }, []);
  if (!apiUserAverageData) return null;

  return (
    <>
      <AverageLabel />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          margin={{
            top: 60,
            left: 0,
            right: 0,
            bottom: 40,
          }}
          stroke="#ffffff"
          fillOpacity={0.5}
          // data={data.USER_AVERAGE_SESSIONS[0].sessions}
          data={apiUserAverageData.data.sessions}
        >
          <XAxis
            dataKey="day"
            dy={10}
            padding={{ left: 12, right: 12 }}
            axisLine={false}
            tickLine={false}
            stroke="#ffffff"
            fillOpacity={0.5}
            tickFormatter={formatXaxis}
          />
          {/* <CartesianAxis width="50%" /> */}
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} cursor={<CustomHover />} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#ffffff"
            activeDot={{ r: 1 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

// PropTypes formatXaxis
formatXaxis.propTypes = {
  value: PropTypes.string.isRequired,
};

// Proptypes customTooltip
CustomTooltip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool,
};

export default Average;
