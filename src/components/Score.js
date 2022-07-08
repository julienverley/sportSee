import React from "react";
import data from "../data";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const dataScore = [
  {
    name: "score",
    score: data.USER_MAIN_DATA[0].todayScore * 100,
  },
];
console.log(dataScore[0].score);

const Score = (score) => {
  console.log(score);
  // if [0] todayScore
  // if [1] score

  // create dataObject to params Rechart component
  const data = [
    // {
    //   name: "score-reference",
    //   uv: 100,
    //   id: "rechartradial-bar__ref",
    //   fill: "transparent",
    // },
    {
      name: "score-passed",
      uv: score,
      id: "rechartradial-bar__score",
      // fill: "#FF0101",
      fill: "blue",
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        width={263}
        height={258}
        cx="50%"
        cy="50%"
        innerRadius="65%"
        barSize={10}
        data={data}
        // data={dataScore}
        // data={[
        //   {
        //     fill: "none",
        //   },
        // ]}
        startAngle={70}
        endAngle={250}
        // background={{ fill: "#FF0101" }}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={true} // false
        />
        <RadialBar
          // minAngle={300}
          background={{ fill: "#FF0101" }}
          Clockwise={false}
          // dataKey={dataScore[0].score}
          dataKey={"uv"}
          cornerRadius={10}
          max={100}
          circle
          cx="50%"
          cy="50%"
          r="80px"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default Score;
