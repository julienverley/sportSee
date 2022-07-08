import React from "react";

const KeyData = ({ icon, keydata, unit, type }) => {
  return (
    <div className="dashboard-keydata-box">
      <img src={icon} alt="icon" />
      <div className="dashboard-keydata-right">
        <div className="dashboard-keydata-right-keydata">
          {keydata}
          {unit}
        </div>
        <div className="dashboard-keydata-right-type">{type}</div>
      </div>
    </div>
  );
};

export default KeyData;
