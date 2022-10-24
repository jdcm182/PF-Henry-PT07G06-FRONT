import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Container } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { pink } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import { removeToCart } from "../../redux/actions/products.actions";
import { useHistory } from "react-router-dom";
import { API_URL_BACKEND } from "../../api/apiRoute";
import axios from "axios";
import { useState } from "react";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.productsReducer.cart);
  const [redirect, setRedirect] = useState("");
  let history = useHistory();

  useEffect(() => {
    if (redirect !== "") window.open(redirect,"_blank","popup=true");
  }, [redirect]);

  let amount = 0;
  items && items.forEach((p) => (amount += Number(p.price)));
  const cartId = 1;
  

  const handlePayment = async () => {
    try {
      await axios.delete(`${API_URL_BACKEND}cart/clearCart/${cartId}`);

      const serverPut = items.map((element) =>
        axios.put(
          `${API_URL_BACKEND}cart/addProductToCart/${cartId}/${element.id}`
        )
      );
      Promise.all(serverPut)
        .then((response) => {
          console.log("response", response);
          return response;
        })
        .then(() => axios.post(`${API_URL_BACKEND}shoppingOrders/${cartId}`))
        .then((response) => {
          console.log("response1", response);
          return response;
        })
        .then((response) =>
          axios.get(`${API_URL_BACKEND}payment?id=${response.data.id}`)
        )
        .then((response) => setRedirect(response.data.init_point))
        .catch((error) => console.log("error del promiseall", error));
    } catch (error) {
      console.log("error", error);
    }
  };

  function viewDetail(p) {
    history.push(`/juira/${p}`);
  }

  function handleRemoveinCart(p) {
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
                    <TableCell
                      align="left"
                      onClick={() => {
                        viewDetail(row.id);
                      }}
                    >
                      <img
                        src={`${row.image}`}
                        style={{ maxHeight: "50px" }}
                      ></img>
                    </TableCell>
                    <TableCell
                      align="left"
                      onClick={() => {
                        viewDetail(row.id);
                      }}
                    >
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
      <Button
        variant="contained"
        endIcon={<PaidIcon />}
        onClick={handlePayment}
      >
        Pagar
      </Button>
    </Container>
  );
}
