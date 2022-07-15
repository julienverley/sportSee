import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import ScoreLabel from "./ScoreLabel";
import PropTypes from "prop-types";
import axios from "axios";

// API call to get user data
const baseURL = "http://localhost:3100/user/12";

const Score = () => {
  const [apiUserData, setApiUserData] = useState(null);
  useEffect(() => {
    // User data from API
    axios.get(baseURL).then((response) => {
      setApiUserData(response.data);
    });
  }, []);
  if (!apiUserData) return null;
 
  // Key from API, "todayScore" or "score" 
  const score =
    apiUserData.data.score * 100 || apiUserData.data.todayScore * 100;

  // create dataObject for params Rechart component
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
  console.log(data);

  return (
    <>
      <ScoreLabel />
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={800} height={400}>
          <Pie
            data={data}
            startAngle={80}
            endAngle={450}
            innerRadius={88}
            outerRadius={100}
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

// A revoir
// Score.propTypes = {
//   score: PropTypes.number.isRequired,
// };
// Score.defaultProps = {
//   score: "",
// };

export default Score;
