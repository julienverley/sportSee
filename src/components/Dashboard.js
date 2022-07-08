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
import diskgrey from "../assets/icons/diskgrey.svg";
import diskred from "../assets/icons/diskred.svg";

const dataScore = [
  {
    name: "score",
    score: data.USER_MAIN_DATA[0].todayScore,
  },
];
console.log(dataScore[0].score * 100);

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
          {/* Activity element */}
          <div className="dashboard-main-activity">
            <div className="dashboard-main-activity-header">
              <div className="dashboard-main-activity-header-title">
                Activité quotidienne
              </div>
              <div className="dashboard-main-activity-header-right">
                <div className="dashboard-main-activity-header-kg">
                  <div className="dashboard-main-activity-header-kg-icon">
                    <img src={diskgrey} />
                  </div>
                  <div className="dashboard-main-activity-header-legend">
                    Poids (kg)
                  </div>
                </div>
                <div className="dashboard-main-activity-header-kcal">
                  <div className="dashboard-main-activity-header-kcal-icon">
                    <img src={diskred} />
                  </div>
                  <div className="dashboard-main-activity-header-legend">
                    Calories brûlées (kCal)
                  </div>
                </div>
              </div>
            </div>
            <Activity />
          </div>

          <div className="dashboard-main-3charts">
            {/* Average session length element */}
            <div className="dashboard-main-3charts-average">
              <div className="dashboard-main-3charts-average-title">
                Durée moyenne des sessions
              </div>
              <Average />
            </div>
            {/* Activities performance radar element */}
            <div className="dashboard-main-3charts-activities">
              <Activities />
            </div>
            {/* Score element */}
            <div className="dashboard-main-3charts-score">
              <div className="dashboard-main-3charts-score-title">Score</div>
              <div className="dashboard-main-3charts-score-result">
                <div className="dashboard-main-3charts-score-result-percent">
                  {dataScore[0].score * 100}%
                </div>
                <div className="dashboard-main-3charts-score-result-text-up">
                  de votre
                </div>
                <div className="dashboard-main-3charts-score-result-text-down">
                  objectif
                </div>
              </div>
              <Score score={data.USER_MAIN_DATA[0].todayScore * 100} />
            </div>
          </div>
        </div>
        {/* Key datas element */}
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
