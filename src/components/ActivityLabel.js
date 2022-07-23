import React from "react";
import diskgrey from "../assets/icons/diskgrey.svg";
import diskred from "../assets/icons/diskred.svg";

/**
 * Display activity label informations
 * @returns JSX
 */
const ActivityLabel = () => {
  return (
    <div className="dashboard-main-activity-header">
      <div className="dashboard-main-activity-header-title">
        Activité quotidienne
      </div>
      <div className="dashboard-main-activity-header-right">
        <div className="dashboard-main-activity-header-kg">
          <div className="dashboard-main-activity-header-kg-icon">
            <img src={diskgrey} alt="grey disk icon" />
          </div>
          <div className="dashboard-main-activity-header-legend">
            Poids (kg)
          </div>
        </div>
        <div className="dashboard-main-activity-header-kcal">
          <div className="dashboard-main-activity-header-kcal-icon">
            <img src={diskred} alt="red disk icon" />
          </div>
          <div className="dashboard-main-activity-header-legend">
            Calories brûlées (kCal)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLabel;
