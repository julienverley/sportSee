import React from "react";
import PropTypes from "prop-types";

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
  icon: PropTypes.string.isRequired,
  keydata: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

// KeyData.defaultProps = {
//   unit: '',
// }

export default KeyData;
