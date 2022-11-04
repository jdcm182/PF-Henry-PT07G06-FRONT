import React, { useState } from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
import axios from "axios";
import { API_URL_BACKEND } from "../../../api/apiRoute";



const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

export default function UsersChart() {
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
        Cantidad: bannedUsers,
        // pv: 2400,
        fill: "#8884d8"
      },
      {
        name: "Eliminados",
        Cantidad: deletedUsers,
        // pv: 3908,
        fill: "#ffc658"
      },
      {
        name: "Activos",
        Cantidad: activeUsers,
        // pv: 9800,
        fill: "#82ca9d"
      },
      {
        name: "Total",
        Cantidad: totalUsers,
        // pv: 9800,
        fill: "#8dd1e1"
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
      <Tooltip/>
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="Cantidad"
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
