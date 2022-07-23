import React from "react";
import KeyData from "./KeyData";
import calories from "../assets/icons/calories.svg";
import protein from "../assets/icons/protein.svg";
import carbs from "../assets/icons/carbs.svg";
import fat from "../assets/icons/fat.svg";
import PropTypes from "prop-types";

/**
 * Display keyDatas elements
 * @param {keydatas}
 * @returns API user keydata object with calorieCount, proteinCount, carbohydrateCount and lipidCount
 */
const KeyDatas = ({ keydatas }) => {
  return (
    <div className="dashboard-keydatas">
      <KeyData
        icon={calories}
        keydata={keydatas.calorieCount.toLocaleString("en-US")} // Add a "," to kCal number
        unit={"kCal"}
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

KeyDatas.propTypes = {
  keydatas: PropTypes.object,
};

export default KeyDatas;
