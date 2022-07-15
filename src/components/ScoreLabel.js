import React, { useState, useEffect } from "react";
import data from "../data";
import axios from "axios";

const dataScore = [
  {
    name: "score",
    score: data.USER_MAIN_DATA[0].todayScore,
  },
];

const baseURL = "http://localhost:3100/user/18";

const ScoreLabel = () => {
  const [apiUserData, setApiUserData] = useState(null);
  useEffect(() => {
    // User data from API
    axios.get(baseURL).then((response) => {
      setApiUserData(response.data);
    });
  }, []);
  if (!apiUserData) return null;

  return (
    <div>
      <div className="dashboard-main-3charts-score-title">Score</div>
      <div className="dashboard-main-3charts-score-result">
        <div className="dashboard-main-3charts-score-result-percent">
          {/* {dataScore[0].score * 100}% */}
          {apiUserData.data.score * 100}%
        </div>
        <div className="dashboard-main-3charts-score-result-text-up">
          de votre
        </div>
        <div className="dashboard-main-3charts-score-result-text-down">
          objectif
        </div>
      </div>
    </div>
  );
};

export default ScoreLabel;
