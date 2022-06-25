import React from "react";
import data from "../data";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-top">
            <div>Bonjour</div>
            <div className="dashboard-header-top-firstname">{data.USER_MAIN_DATA[1].userInfos.firstName}</div>
        </div>
        <div className="dashboard-header-bottom">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </div>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-main-left">
          <div className="dashboard-main-left-top"></div>
          <div className="dashboard-main-left-bottom"></div>
        </div>
        <div className="dashboard-main-right"></div>
      </div>
    </div>
  );
};

export default Dashboard;
