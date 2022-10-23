import * as React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import Loading from "../Loading/Loading";

import { useSelector } from "react-redux";
import {
  getProductDetails,
  addToCart,
} from "../../redux/actions/products.actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  height: 500,
});

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  let p = useSelector((state) => state.productsReducer.productDetails);

  function handleAddToCart(p) {
    dispatch(addToCart(p));
  }



  return (
    p && Object.keys(p).length !== 0 ? (
      <Loading/>
    ) : 
    <Container

      sx={{
        backgroundImage: `url(https://res.cloudinary.com/duq1tcwjw/image/upload/v1666132260/PF-JUIRA/patthern_oplhdn.jpg)`,
        backgroundSize: "cover",
        mt: 2,
        width: 1,
        height: 1,
        p: 5,
      }}
    >
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          flexGrow: 1,
          height: "auto",
        }}
      >
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <ButtonBase xs={12} sx={{ boxShadow: 2, mr: 1 }}>
              <Img alt="complex" src={p.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid
              item
              xs
              container
              direction="column"
              spacing={15}
              sx={{ mr: 2 }}
            >
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  sx={{ fontWeight: "bold", fontSize: 24, mb: 6 }}
                >
                  {p.name}
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ fontSize: 16 }}>
                  {p.description}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleAddToCart(p);
                  }}
                >
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    Agregar al Carrito
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontWeight: "bold", fontSize: 24, mt: 2, color: "green" }}
              >
                ${p.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
