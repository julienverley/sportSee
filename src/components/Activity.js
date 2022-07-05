import React from "react";
import data from "../data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Activity = () => {
  //console.log(data.USER_ACTIVITY[0].sessions[0].day);

  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        width={835}
        height={320}
        data={data.USER_ACTIVITY[0].sessions}
        // data={dataBarchart}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* Modify date "2020-07-01" etc. to 1 etc. */}
        <XAxis
          dataKey="day"
          tick={{ stroke: "red" }}
          tickFormatter={(date) => new Date(date).getDate()}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* Modify bar's width and radius */}
        <Bar
          dataKey="calories"
          fill="#FF0101"
          barSize={7}
          radius={[20, 20, 0, 0]}
        />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Activity;
