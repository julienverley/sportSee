import React from "react";
import yoga from "../assets/icons/yoga.svg";
import pool from "../assets/icons/pool.svg";
import bike from "../assets/icons/bike.svg";
import weight from "../assets/icons/weight.svg";

const Vertical = () => {
  return (
    <div className="vertical">
      <div className="icons">
        <img src={yoga} alt="yoga icon" />
        <img src={pool} alt="pool icon" />
        <img src={bike} alt="bike icon" />
        <img src={weight} alt="weight icon" />
      </div>
      <div className="copyright">Copyright, SportSee 2020</div>
    </div>
  );
};

export default Vertical;
