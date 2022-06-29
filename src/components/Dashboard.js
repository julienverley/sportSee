import React from "react";
import data from "../data";
import KeyData from "./KeyData";
import calories from "../assets/icons/calories.svg";
import protein from "../assets/icons/protein.svg";
import carbs from "../assets/icons/carbs.svg";
import fat from "../assets/icons/fat.svg";
import Activity from "./Activity";
import Average from "./Average";
import Activities from "./Activities";
import Score from "./Score";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-top">
          <div>Bonjour</div>
          <div className="dashboard-header-top-firstname">
            {data.USER_MAIN_DATA[0].userInfos.firstName}
          </div>
        </div>
        <div className="dashboard-header-bottom">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </div>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-main">
          <div className="dashboard-main-activity">
            <Activity />
          </div>

          <div className="dashboard-main-3charts">
            <div className="dashboard-main-3charts-average">
              <Average />
            </div>
            <div className="dashboard-main-3charts-activities">
              <Activities />
            </div>
            <div className="dashboard-main-3charts-score">
              <Score />
            </div>
          </div>
        </div>
        <div className="dashboard-keydatas">
          <KeyData
            icon={calories}
            keydata={data.USER_MAIN_DATA[1].keyData.calorieCount}
            unit={"KCal"}
            type={"Calories"}
          />
          <KeyData
            icon={protein}
            keydata={data.USER_MAIN_DATA[1].keyData.proteinCount}
            unit={"g"}
            type={"Protéines"}
          />
          <KeyData
            icon={carbs}
            keydata={data.USER_MAIN_DATA[1].keyData.carbohydrateCount}
            unit={"g"}
            type={"Glucides"}
          />
          <KeyData
            icon={fat}
            keydata={data.USER_MAIN_DATA[1].keyData.lipidCount}
            unit={"g"}
            type={"Lipides"}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
