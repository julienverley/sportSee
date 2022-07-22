import React, { useState, useEffect } from "react";
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

/**
 * Format date
 * @param {value} any
 * @returns formated date from numbers to strings
 */
const formatXaxis = (value) => {
  const labels = ["L", "M", "M", "J", "V", "S", "D"];
  return labels[value - 1];
};

/**
 * Hover point informations
 * @param {payload}
 * @returns API Average sessions datas
 * @param {active}
 * @returns hovered information UI with sessionLength in minute unit
 */
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

/**
 * Hover line background
 * @param {points}
 * @returns data points of line chart
 */
const CustomHover = ({ points }) => {
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
          data={apiUserAverageData.data.sessions}
        >
          <XAxis
            dataKey="day"
            dy={10}
            padding={{ left: 0, right: 0 }}
            axisLine={false}
            tickLine={false}
            stroke="#ffffff"
            fillOpacity={0.5}
            tickFormatter={formatXaxis}
            interval={0} //
            style={{ transform: "scale(0.93)", transformOrigin: "bottom" }}
          />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} cursor={<CustomHover />} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#ffffff"
            dot={false}
            activeDot={{ r: 1 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

// PropTypes formatXaxis
formatXaxis.propTypes = {
  value: PropTypes.string,
};

// Proptypes customTooltip
CustomTooltip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool,
};

// Proptypes customHover
CustomHover.propTypes = {
  points: PropTypes.array,
};

export default Average;
