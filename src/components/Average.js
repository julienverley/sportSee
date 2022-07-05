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
} from "recharts";

//console.log(data.USER_AVERAGE_SESSIONS[1].sessions);

const Average = () => {
  return (
    <LineChart width={263} height={258} data={data.USER_AVERAGE_SESSIONS[0].sessions}>
      <CartesianGrid strokeDasharray="3 3" />
      {/* <XAxis dataKey="name" padding={{ left: 0, right: 0 }} /> */}
      <XAxis dataKey="day" padding={{ left: 0, right: 0 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="#ffffff"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default Average;
