import React from "react";
import data from "../data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Activity = () => {
  // Comment faire pour modifier la date '2020-07-01' en 1 ? 
  // .substr(0, 9) sur day : garder le dernier chiffre ?
  // .length : position du tableau ? 
  
  console.log(data.USER_ACTIVITY[0].sessions[0]);

  return (
    // <div>
    //   {data.USER_ACTIVITY[0].sessions.map((session, index) => (
    //     <div key={index}>
    //       <div>{session.day}</div>
    //       <div>{session.kilogram}</div>
    //       <div>{session.calories}</div>
    //     </div>
    //   ))}
    //   </div>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          width={835}
          height={320}
          data={data.USER_ACTIVITY[0].sessions}
          // data={dataBarchart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" tick={{ stroke: "red" }} />
          {/* <XAxis dataKey="name" /> */}
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="pv" fill="#8884d1" /> */}
          <Bar dataKey="calories" fill="#8884d1" />
          {/* <Bar dataKey={calories} fill="#8884d1" /> */}
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          <Bar dataKey="kilogram" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    
  );
};

export default Activity;
