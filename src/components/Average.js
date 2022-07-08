import React from "react";
import data from "../data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

//console.log(data.USER_AVERAGE_SESSIONS[1].sessions);

const Average = () => {
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

  // Format date
  const formatXaxis = (value) => {
    const labels = ["L", "M", "M", "J", "V", "S", "D"];
    return labels[value - 1];
  };

  return (
    <ResponsiveContainer width="100%" height="60%">
      <LineChart
        margin={{
          top: 30,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        stroke="#ffffff"
        fillOpacity={0.5}
        data={data.USER_AVERAGE_SESSIONS[0].sessions}
      >
        <XAxis
          dataKey="day"
          dy={10}
          // dx={0}
          padding={{ left: 10, right: 10 }}
          axisLine={false}
          tickLine={false}
          stroke="#ffffff"
          fillOpacity={0.5}
          tickFormatter={formatXaxis}
        />
        <YAxis hide={true} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="#ffffff"
          activeDot={{ r: 8 }}
          // onMouseMove={(e) => {
          //   if (e.isTooltipActive === true) {
          //     let div = document.querySelector(
          //       ".dashboard-main-3charts-average"
          //     );
          //     let windowWidth = div.clientWidth;
          //     let mouseXpercentage = Math.round(
          //       (e.activeCoordinate.x / windowWidth) * 100
          //     );
          //     div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
          //   }
          // }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Average;
