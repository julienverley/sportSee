import React from "react";
import data from "../data";
import { PieChart, Pie } from "recharts";

const Score = () => {
  console.log(data.USER_MAIN_DATA[0].todayScore);
  // if [0] todayScore
  // if [1] score
  return (
    // <div>{data.USER_MAIN_DATA[0].todayScore}</div>
    <PieChart width={400} height={400}>
      <Pie
        data={data.USER_MAIN_DATA[0].todayScore}
        dataKey="todayScore"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
      {/* <Pie
        data={data02}
        dataKey="value"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      /> */}
    </PieChart>
  );
};

export default Score;
