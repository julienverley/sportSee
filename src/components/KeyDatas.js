import React from "react";
import KeyData from "./KeyData";
import calories from "../assets/icons/calories.svg";
import protein from "../assets/icons/protein.svg";
import carbs from "../assets/icons/carbs.svg";
import fat from "../assets/icons/fat.svg";

const KeyDatas = ({ keydatas }) => {
  return (
    <div className="dashboard-keydatas">
      <KeyData
        icon={calories}
        // keydata={apiUserData.data.keyData.calorieCount}
        keydata={keydatas.calorieCount}
        unit={"KCal"}
        type={"Calories"}
      />
      <KeyData
        icon={protein}
        keydata={keydatas.proteinCount}
        unit={"g"}
        type={"Protéines"}
      />
      <KeyData
        icon={carbs}
        keydata={keydatas.carbohydrateCount}
        unit={"g"}
        type={"Glucides"}
      />
      <KeyData
        icon={fat}
        keydata={keydatas.lipidCount}
        unit={"g"}
        type={"Lipides"}
      />
    </div>
  );
};

export default KeyDatas;
