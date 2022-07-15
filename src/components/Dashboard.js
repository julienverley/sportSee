import React, { useState, useEffect } from "react";
// import data from "../data";
import Activity from "./Activity";
import Average from "./Average";
import Activities from "./Activities";
import Score from "./Score";
import KeyDatas from "./KeyDatas";
import axios from "axios";
// import { getUserData } from "../utils/API";

// API call to get user data
const baseURL = "http://localhost:3100/user/12";

const Dashboard = () => {
  const [apiUserData, setApiUserData] = useState(null);
  useEffect(() => {
    // User data from API
    axios.get(baseURL).then((response) => {
      setApiUserData(response.data);
    });
  }, []);
  if (!apiUserData) return null;

  /* const [apiData, setApiData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserData();
      const json = await response.json();
      console.log(response);
      setApiData(response);
    };
    fetchData().catch(console.error);
  }, []); */

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-top">
          <div>Bonjour</div>
          {/* <div className="dashboard-header-top-firstname">
            {data.USER_MAIN_DATA[0].userInfos.firstName}
          </div> */}
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
            </div>
            {/* Score */}
            <div className="dashboard-main-3charts-score">
              {/* <Score score={data.USER_MAIN_DATA[0].todayScore * 100} /> */}
              <Score
              // score={
              //   apiUserData.data.score * 100 ||
              //   apiUserData.data.todayScore * 100
              // }
              />
            </div>
          </div>
        </div>
        {/* Key datas element */}
        <KeyDatas />
      </div>
    </div>
  );
};

export default Dashboard;
