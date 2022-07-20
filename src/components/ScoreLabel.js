import React from "react";

const ScoreLabel = ({ score }) => {
  return (
    <div>
      <div className="dashboard-main-3charts-score-result">
        <div className="dashboard-main-3charts-score-result-percent">
          {score}%
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
