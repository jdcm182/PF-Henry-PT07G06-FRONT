import React from "react";
import { BarChart, Bar, Legend, YAxis, Tooltip } from "recharts";
import axios from "axios";
import { API_URL_BACKEND } from "../../../api/apiRoute";


export default function ProductsChart() {
    const [products, setProducts] = React.useState([])
    let resp = []
    axios.get(`${API_URL_BACKEND}products`)
    .then(response => resp = response.data)
    .then(() => !products.length && setProducts(resp))

    let totalProducts = products.length
    let activeProducts = 0
    let pausedProducts = 0
    let deletedProducts = 0
    
    products.forEach( product => {
      if (product.status === 'Publicado') activeProducts += 1
      if (product.status === 'En pausa') pausedProducts += 1
      else if (product.status === 'Eliminado') deletedProducts += 1
    })

    const data = [
        {
          name: "Activos",
          Activos: activeProducts,
          Pausados: pausedProducts,
          Eliminados: deletedProducts,
        },
      ];
  return (
    <BarChart width={400} height={300} data={data}>
        <YAxis />
        <Tooltip/>
      <Bar dataKey="Activos" fill="#82ca9d" />
      <Bar dataKey="Pausados" fill="#8884d8" />
      <Bar dataKey="Eliminados" fill="#ffc658" />
      <Legend/>
    </BarChart>
  );
}
