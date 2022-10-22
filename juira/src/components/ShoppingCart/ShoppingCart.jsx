import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Container } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { pink } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import { removeToCart } from "../../redux/actions/products.actions";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.productsReducer.cart);
  console.log(items);
  let amount = 0;
  items && items.forEach((p) => (amount += Number(p.price)));



  function handleRemoveinCart(p) {
    console.log(p);
    dispatch(removeToCart(p));
  }

  return (
    <Container>
      <Typography variant="h4"> Carrito de compras </Typography>
      {!items.length ? (
        <Container>
          <Typography variant="h5"> Tu carrito está vacío. </Typography>
        </Container>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell> </TableCell>
                <TableCell> # </TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">Descripción</TableCell>
                <TableCell align="center">Precio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items &&
                items.map((row, i) => (
                  <TableRow
                    key={i + 1}
                    // sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                    size="small"
                  >
                    <TableCell onClick={() => handleRemoveinCart(row.id)}>
                      <IconButton>
                        <HighlightOffIcon sx={{ color: pink[500] }} />
                      </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell align="left">
                      <img
                        src={`${row.image}`}
                        style={{ maxHeight: "50px" }}
                      ></img>
                    </TableCell>
                    <TableCell align="left">
                      <strong>{row.name}</strong>
                      <br></br>
                      <small>{row.description}</small>
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                  </TableRow>
                ))}
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">
                  <strong>Total</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>{amount}</strong>
                </TableCell>
              </TableRow>
              <TableRow></TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Button variant="contained" endIcon={<PaidIcon />}>
        Pagar
      </Button>
    </Container>
  );
}
