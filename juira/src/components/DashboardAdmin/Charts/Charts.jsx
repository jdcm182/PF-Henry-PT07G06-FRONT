import React, { useState } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import axios from "axios";
import { API_URL_BACKEND } from "../../../api/apiRoute";


const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

export default function App() {
  const [users, setUsers] = useState([])

  let resp = []
    axios.get(`${API_URL_BACKEND}users`)
    .then(response => resp = response.data)
    .then(() => !users.length && setUsers(resp))


    let totalUsers = users.length
    let activeUsers = 0
    let bannedUsers = 0
    let deletedUsers = 0
    
    users.forEach( user => {
      if (user.status === 'active') activeUsers += 1
      else if (user.status === 'banned') bannedUsers += 1
      else if (user.status === 'deleted') deletedUsers += 1
    })


    const data = [
      {
        name: "Baneados",
        uv: bannedUsers,
        // pv: 2400,
        fill: "#8884d8"
      },
      {
        name: "Eliminados",
        uv: deletedUsers,
        // pv: 3908,
        fill: "#ffc658"
      },
      {
        name: "Activos",
        uv: activeUsers,
        // pv: 9800,
        fill: "#82ca9d"
      },
    ];
    


  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={30}
      outerRadius={140}
      barSize={45}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={15}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
}
