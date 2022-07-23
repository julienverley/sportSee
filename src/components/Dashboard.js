import React, { useState, useEffect } from "react";
import Activity from "./Activity";
import Average from "./Average";
import Performance from "./Performance";
import Score from "./Score";
import KeyDatas from "./KeyDatas";
import ScoreLabel from "./ScoreLabel";
import { getUserData } from "../service/API";

/**
 * Display dashboard informations
 * @returns JSX
 */
const Dashboard = () => {
  const [apiUserData, setApiUserData] = useState(null);
  useEffect(() => {
    getUserData().then((response) => {
      setApiUserData(response.data);
    });
  }, []);
  if (!apiUserData) return null;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-top">
          <div>Bonjour</div>
          <div className="dashboard-header-top-firstname">
            {apiUserData.data.userInfos.firstName}
          </div>
        </div>
        <div className="dashboard-header-bottom">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </div>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-main">
          {/* Top : Activity */}
          <div className="dashboard-main-activity">
            <Activity />
          </div>
          {/* Down : 3 charts */}
          <div className="dashboard-main-3charts">
            {/* Average graph */}
            <div className="dashboard-main-3charts-average">
              <Average />
            </div>
            {/* Radar graph */}
            <div className="dashboard-main-3charts-performance">
              <Performance />
            </div>
            {/* Pie graph */}
            <div className="dashboard-main-3charts-score">
              <div className="dashboard-main-3charts-score-title">Score</div>
              <Score
                score={
                  apiUserData.data.score * 100 ||
                  apiUserData.data.todayScore * 100
                }
              />
              <ScoreLabel
                score={
                  apiUserData.data.score * 100 ||
                  apiUserData.data.todayScore * 100
                }
              />
            </div>
          </div>
        </div>
        {/* Vertical right element */}
        <KeyDatas keydatas={apiUserData.data.keyData} />
      </div>
    </div>
  );
};

export default Dashboard;
