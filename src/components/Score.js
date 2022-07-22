import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

/**
 *
 * @param {score}
 * @returns API user score or todayScore data
 */
const Score = ({ score }) => {
  // data creates useable data array of objects for Score pie chart
  const data = [
    {
      name: "score-passed",
      value: score,
      id: "rechartradial-bar__score",
    },
    {
      name: "score-reference",
      value: 100 - score,
      id: "rechartradial-bar__ref",
      fill: "transparent",
    },
  ];

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={800} height={400}>
          <Pie
            data={data}
            startAngle={80}
            endAngle={450}
            innerRadius={78}
            outerRadius={90}
            cornerRadius={10}
            dataKey="value"
          >
            <Cell fill={"#e60000"} />
            <Cell fill={"transparent"} stroke={"transparent"} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

Score.propTypes = {
  score: PropTypes.number,
};
Score.defaultProps = {
  score: "",
};

export default Score;
