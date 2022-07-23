import React from "react";
import PropTypes from "prop-types";

/**
 * Each keyData element
 * @param {icon}
 * * @returns matching icon
 * @param {keydata}
 * * @returns API user corresponding keydata
 * @param {unit}
 * * @returns appropriate unit
 * @param {type}
 * * @returns relevant type
 * @returns
 */
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

KeyData.propTypes = {
  icon: PropTypes.string,
  keydata: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  unit: PropTypes.string,
  type: PropTypes.string,
};

KeyData.defaultProps = {
  icon: "",
  keydata: 0,
  unit: "",
  type: "",
};

export default KeyData;
