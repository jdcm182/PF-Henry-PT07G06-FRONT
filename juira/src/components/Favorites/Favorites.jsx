

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Container } from "@mui/material";
import FavoriteDetail from "./FavoriteDetail";

export default function Favorites() {

  const items = useSelector((state) => state.productsReducer.favorites);


  return (
    <Container sx={{m:2}}>
      <Typography variant="h4"> Favoritos </Typography>
      {!items.length ? (
        <Container>
          <Typography variant="h5"> No tienes favoritos aún </Typography>
        </Container>
      ) : (
       <Container>
        {items.map(p => (
                    <FavoriteDetail key={p.id}
                        id={p.id} price={p.price} name={p.name} image={p.image} />
                ))}
       </Container>
  )
}
</Container>
)}
