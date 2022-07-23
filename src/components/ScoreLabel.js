import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {score}
 * @returns API user score or todayScore data
 */
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

ScoreLabel.propTypes = {
  score: PropTypes.number,
};
ScoreLabel.defaultProps = {
  score: 0,
};

export default ScoreLabel;
