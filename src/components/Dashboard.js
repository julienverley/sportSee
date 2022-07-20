import React, { useState, useEffect } from "react";
import Activity from "./Activity";
import Average from "./Average";
import Activities from "./Activities";
import Score from "./Score";
import KeyDatas from "./KeyDatas";
import axios from "axios";
import ScoreLabel from "./ScoreLabel";

// API call to get user data
const baseURL = "http://localhost:3100/user/12";
// const baseURLPerformance = "http://localhost:3100/user/12/performance";
console.log(baseURL);
// console.log(baseURLPerformance);

/**
 * Display dashboard informations.
 * @returns JSX
 */
const Dashboard = () => {
  const [apiUserData, setApiUserData] = useState(null);

  useEffect(() => {
    // User data from API
    axios.get(baseURL).then((response) => {
      setApiUserData(response.data);
    });
    // axios.get(baseURLPerformance).then((response) => {
    //   setApiUserData(response.data);
    // });
  }, []);
  if (!apiUserData) return null;

  // console.log(apiUserData);

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
          {/* Up : Activity */}
          <div className="dashboard-main-activity">
            <Activity />
          </div>
          {/* Down : 3 charts */}
          <div className="dashboard-main-3charts">
            {/* Sessions average length */}
            <div className="dashboard-main-3charts-average">
              <Average />
            </div>
            {/* Activities performance radar */}
            <div className="dashboard-main-3charts-activities">
              <Activities />
              {/* <Activities performance={apiUserData.performance} /> */}
              {/* console.log(apiUserData.data.performance); */}
            </div>
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
        {/* Key datas element */}
        <KeyDatas keydatas={apiUserData.data.keyData} />{" "}
      </div>
    </div>
  );
};

export default Dashboard;
