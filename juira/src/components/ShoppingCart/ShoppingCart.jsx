import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Container } from '@mui/material';


export default function ShoppingCart() {

    const dispatch = useDispatch()
    const items = useSelector( state => state.productsReducer.productsToDisplay)

    console.log(items)

    return (
        <Container>
            <Typography variant='h4'> Carrito de compras </Typography>
            {
                !items.length ? <Container><Typography variant='h5'> Tu carrito está vacío. </Typography></Container> :
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell> # </TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">Descripción</TableCell>
                    <TableCell align="center">Precio</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {items.map((row, i) => (
                    <TableRow
                    key={row.i + 1}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {i + 1}
                    </TableCell>
                    <TableCell align="left"><img src={`${row.image}`}></img></TableCell>
                    <TableCell align="left"><strong>{row.name}</strong><br></br><small>{row.description}</small></TableCell>
                    <TableCell align="left">{row.price}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            }
        </Container>
      );
    }
