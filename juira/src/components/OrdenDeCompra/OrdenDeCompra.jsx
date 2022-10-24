import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";

export default function OrdenDeCompra() {

    //Borrar carrito local una vez que termino el pago-->Use Effect
    function useQuery() {
        const { payment_id,status } = useLocation();
      
        return React.useMemo(() => new URLSearchParams(payment_id,status), [payment_id,status]);
      }
      let query = useQuery();
      console.log(query)
  return (
    <div>OrdenDeCompra</div>
    
  )
}
