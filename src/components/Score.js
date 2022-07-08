import React from "react";
import data from "../data";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const dataRadialBarChart = [
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];
const style = {
  top: 0,
  left: 350,
  lineHeight: "36px",
};

const dataScore = [
  {
    name: "score",
    score: data.USER_MAIN_DATA[0].todayScore,
  },
];

const Score = () => {
  // console.log(data.USER_MAIN_DATA[0].todayScore);
  // if [0] todayScore
  // if [1] score
  return (
    <ResponsiveContainer>
      <RadialBarChart
        width={263}
        height={258}
        cx="50%"
        cy="50%"
        innerRadius="80%"
        outerRadius="80%"
        barSize={12}
        data={dataScore}
        startAngle={90}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 2]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          minAngle={300}
          label={{ position: "insideStart", fill: "#FF0101" }}
          background={{ fill: "#FF0101" }}
          Clockwise={false} // dataKey="todayScore"
          dataKey="score"
          cornerRadius={10}
          circle
          cx="50%"
          cy="50%"
          r="80px"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default Score;
