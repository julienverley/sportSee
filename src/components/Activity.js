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

  // Tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="activity-custom-tooltip">
          <p className="kg">
            {data.USER_ACTIVITY[0].sessions[0].kilogram}
            {"kg"}
          </p>
          <p className="kcal">
            {data.USER_ACTIVITY[0].sessions[0].calories}
            {"Kcal"}
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data.USER_ACTIVITY[0].sessions}
        barGap={8}
        margin={{
          top: 5,
          right: 29,
          left: 43,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" vertical={false} />
        <XAxis
          dataKey="day"
          dy={15}
          stroke="#9B9EAC"
          tickLine={{ stroke: "" }}
          // Modify date "2020-07-01" etc. to 1 etc. // Faire une factory ?
          tickFormatter={(date) => new Date(date).getDate()}
        />
        <YAxis
          yAxisId="kilogram"
          dataKey="kilogram"
          orientation="right"
          dx={25}
          stroke="#9B9EAC"
          axisLine={false}
          tickLine={{ stroke: "" }}
          tickCount="3"
        />
        <YAxis
          yAxisId="calories"
          dataKey="calories"
          type="number"
          hide={true}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          yAxisId="kilogram"
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[20, 20, 0, 0]}
        />
        <Bar
          yAxisId="calories"
          dataKey="calories"
          fill="#FF0101"
          barSize={7}
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Activity;
