import React, { useState, useEffect } from "react";
// import data from "../data";
import KeyData from "./KeyData";
import calories from "../assets/icons/calories.svg";
import protein from "../assets/icons/protein.svg";
import carbs from "../assets/icons/carbs.svg";
import fat from "../assets/icons/fat.svg";
import axios from "axios";

const baseURL = "http://localhost:3100/user/18";

const KeyDatas = () => {
  const [apiUserData, setApiUserData] = useState(null);
  useEffect(() => {
    // User data from API
    axios.get(baseURL).then((response) => {
      setApiUserData(response.data);
    });
  }, []);
  if (!apiUserData) return null;

  return (
    <div className="dashboard-keydatas">
      <KeyData
        icon={calories}
        keydata={apiUserData.data.keyData.calorieCount}
        unit={"KCal"}
        type={"Calories"}
      />
      <KeyData
        icon={protein}
        keydata={apiUserData.data.keyData.proteinCount}
        unit={"g"}
        type={"Protéines"}
      />
      <KeyData
        icon={carbs}
        keydata={apiUserData.data.keyData.carbohydrateCount}
        unit={"g"}
        type={"Glucides"}
      />
      <KeyData
        icon={fat}
        keydata={apiUserData.data.keyData.lipidCount}
        unit={"g"}
        type={"Lipides"}
      />
    </div>
  );
};

export default KeyDatas;
