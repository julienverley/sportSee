import React, { useState, useEffect } from "react";
import ActivityLabel from "./ActivityLabel";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import axios from "axios";

const baseURL = "http://localhost:3100/user/12/activity";

/**
 *
 * @param {active}
 * @returns hovered information UI with results in kg and kCal
 * @param {payload}
 * @returns API Activity sessions datas
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="activity-custom-tooltip">
        <p className="kg">
          {payload[0].value}
          {"kg"}
        </p>
        <p className="kcal">
          {payload[1].value}
          {"Kcal"}
        </p>
      </div>
    );
  }
  return null;
};

const Activity = () => {
  const [apiUserActivityData, setapiUserActivityData] = useState(null);
  useEffect(() => {
    // User Activity data from API
    axios.get(baseURL).then((response) => {
      setapiUserActivityData(response.data);
    });
  }, []);
  if (!apiUserActivityData) return null;

  return (
    <>
      <ActivityLabel />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={apiUserActivityData.data.sessions}
          barGap={8}
          margin={{
            top: 5,
            right: 29,
            left: 43,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" vertical={false} />
          <XAxis
            dataKey="day"
            dy={15}
            stroke="#9B9EAC"
            tickLine={{ stroke: "" }}
            tickFormatter={(date) => new Date(date).getDate()}
            padding={{
              top: 0,
              right: -45,
              left: -45,
              bottom: 0,
            }}
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            orientation="right"
            dx={25}
            stroke="#9B9EAC"
            axisLine={false}
            tickLine={{ stroke: "" }}
            tickCount="3"
            domain={["dataMin-2", "dataMax+1"]}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            hide={true}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[20, 20, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#FF0101"
            barSize={7}
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

//Proptypes of CustomTooltip
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

// proptypes of Activity
Activity.propTypes = {
  activity: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ),
};

export default Activity;
