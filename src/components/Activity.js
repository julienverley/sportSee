import React, { useState, useEffect } from "react";
import data from "../data";
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

// Red rectangle information on hover
const CustomTooltip = ({ active, payload }) => {
  // const [apiUserActivityData, setapiUserActivityData] = useState(null);
  // useEffect(() => {
  //   // User Activity data from API
  //   axios.get(baseURL).then((response) => {
  //     setapiUserActivityData(response.data);
  //   });
  // }, []);
  // if (!apiUserActivityData) return null;

  if (active && payload && payload.length) {
    return (
      <div className="activity-custom-tooltip">
        <p className="kg">
          {/* A revoir pour des données dynamiques depuis l'API */}
          {data.USER_ACTIVITY[0].sessions[2].kilogram}
          {/* ? Comment appeler ces données ? */}
          {/* {apiUserActivityData.data.sessions.kilogram} */}
          {"kg"}
        </p>
        <p className="kcal">
          {/* A revoir pour des données dynamiques depuis l'API */}
          {data.USER_ACTIVITY[0].sessions[2].calories}
          {/* ? Comment appeler ces données ? */}
          {/* {apiUserActivityData.data.sessions.calories} */}
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
          // data={data.USER_ACTIVITY[0].sessions}
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
            // Modify date "2020-07-01" etc. to 1 etc. // Faire une factory ?
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

// Proptypes of CustomTooltip
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
