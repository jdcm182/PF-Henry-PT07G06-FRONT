import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@mui/material/Button';
//import Container from '@material-ui/core/Container';
import axios from 'axios';
import { API_URL_BACKEND } from '../../api/apiRoute.js';



const parseDate = (str) => {
    //console.log(str);
    //console.log(str.slice(0, 10))
    return str.slice(0, 10).split('-').reverse().join('/');
}


const handleProductSent = async (e, setClicked, clicked) => {
    console.log('handleProductSent > setClicked: ', setClicked)
    const response = await axios.put(`${API_URL_BACKEND}transactions/${e.target.value}`, { state: "sent" });
    console.log('💣 handleProductReceived > response: ', response)
    setClicked(!clicked);
}

function Row(props) {
    const { row, clicked, setClicked } = props;
    const [open, setOpen] = React.useState(false);
    console.log('UserPurchasesTable > Row > props: ', props)
    //const classes = useRowStyles();
    return (
        <React.Fragment>
            <TableRow /* className={classes.root} */>
                {/* <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell> */}

                {/* <TableCell component="th" scope="row" align="center">
                    {row.id}
                </TableCell> */}

                {/* <TableCell align="right">{parseDate(row.createdAt)}</TableCell>
                <TableCell align="center">{row.state}</TableCell>
                <TableCell align="right">{row.total.toLocaleString('de-DE')}</TableCell>
                <TableCell align="center">{row.paymentReceived ? 'Si' : 'No'}</TableCell>
                <TableCell align="center">{row.merchant_id}</TableCell> */}

                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.price.toLocaleString('de-DE')}</TableCell>
                <TableCell align="center">{row.ownerId}</TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            {/* <Typography style={{ color: 'var(--primaryColor)' }} variant="h7" gutterBottom component="div">
                                Transacciones
                            </Typography> */}
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>

                                        {/*Subtable > Transactions */}
                                        <TableCell align="center">Id</TableCell>
                                        <TableCell align="left">Nombre</TableCell>
                                        <TableCell align="right">Estado</TableCell>
                                        <TableCell align="right">Precio</TableCell>
                                        <TableCell align="center">Owner Id</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.transactionList?.map((transactionRow) => (
                                        <TableRow key={transactionRow.id}>

                                            {/* <TableCell>
                                                <Button value={transactionRow.id} variant="contained"
                                                    onClick={(e) => handleProductSent(e, setClicked, clicked)}>Ya envié el producto</Button>
                                            </TableCell> */}
                                            <TableCell component="th" scope="row" >
                                                {transactionRow.id}
                                            </TableCell>
                                            <TableCell>{transactionRow.name}</TableCell>
                                            <TableCell>{transactionRow.status}</TableCell>
                                            <TableCell align="right">
                                                {transactionRow.price.toLocaleString('de-DE')}
                                            </TableCell>
                                            <TableCell align="center">{transactionRow.ownerId}</TableCell>
                                            {/* <TableCell align="center">{transactionRow.sellerId}</TableCell>
                                            <TableCell align="right">{parseDate(transactionRow.createdAt)}</TableCell>
                                            <TableCell align="center">{transactionRow.productId}</TableCell>
                                            <TableCell align="center">{transactionRow.shoppingOrderId}</TableCell> */}

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment >
    );
}
Row.propTypes = {
    row: PropTypes.shape({

        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        ownerId: PropTypes.number.isRequired,
    }).isRequired,
};


function createData(id, name, status, price, ownerId) {
    return {
        id,
        name,
        status,
        price,
        ownerId,
    };
}

let myProducts = [];
/* myProducts = [
    { id: 1, createdAt: '2022-09-30 08:23', state: 'pending', total: 1000, paymentReceived: true, merchant_id: 9, transactionList: [] },
    { id: 2, createdAt: '2022-10-15 10:23', state: 'pending', total: 2500, paymentReceived: false, merchant_id: 9, transactionList: [] },
    { id: 3, createdAt: '2022-11-05 14:23', state: 'pending', total: 3600, paymentReceived: false, merchant_id: 9, transactionList: [] },
]; */
let rows = []
//rows = myProducts.map(s => createData(s.id, s.createdAt, s.state, s.total, s.paymentReceived, s.merchant_id, s.transactionList));



export default function UserProductsTable(props) {

    try {

        const { list } = props;
        myProducts = list;

        console.log('myProducts: ', myProducts)

        console.log('UserProductsTable > props: ', props)
        const { clicked, setClicked } = props;
        //console.log('myProducts: ', myProducts)
        /* if (!myProducts) {
            myProducts = [
                { id: 1, createdAt: '2022-09-30 08:23', state: 'pending', total: 1000, paymentReceived: true, merchant_id: 9, transactionList: [] },
                { id: 2, createdAt: '2022-10-15 10:23', state: 'pending', total: 2500, paymentReceived: false, merchant_id: 9, transactionList: [] },
                { id: 3, createdAt: '2022-11-05 14:23', state: 'pending', total: 3600, paymentReceived: false, merchant_id: 9, transactionList: [] },
            ];
        } */
        console.log('myProducts: ', myProducts)
        //rows = myProducts.map(s => createData(s.id, s.createdAt, s.state, s.total, s.paymentReceived, s.merchant_id, s.transactionList));
        rows = myProducts.map(s => createData(s.id, s.name, s.status, s.price, s.ownerId));
        console.log(rows)

        return (

            /* !rows || rows.length <= 0 ? "No hay transacciones para mostrar" : */

            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="center">Id</TableCell>
                            <TableCell align="left">Nombre</TableCell>
                            <TableCell align="center">Estado</TableCell>
                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="center">Owner Id</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            rows.map((transactionRow) => (
                                <TableRow key={transactionRow.id}>

                                    {/* <TableCell>
                                        {transactionRow && transactionRow.state && transactionRow.state === 'pending'
                                            && transactionRow.paymentReceived
                                            ? <Button value={transactionRow.id} variant="contained"
                                                onClick={(e) => handleProductSent(e, setClicked, clicked)}>Ya envié el producto</Button>
                                            : null
                                        }
                                    </TableCell> */}
                                    {/* <TableCell component="th" scope="row" >
                                        {transactionRow.id}
                                    </TableCell>
                                    <TableCell>{transactionRow.state}</TableCell>
                                    <TableCell align="center">{transactionRow.sellerId}</TableCell>
                                    <TableCell align="right">
                                        {transactionRow.total.toLocaleString('de-DE')}
                                    </TableCell>
                                    <TableCell align="right">{parseDate(transactionRow.createdAt)}</TableCell>
                                    <TableCell align="center">{transactionRow.productId}</TableCell>
                                    <TableCell align="center">{transactionRow.shoppingOrderId}</TableCell>
                                    <TableCell align="center">{transactionRow.buyerId}</TableCell>
                                    <TableCell align="center">{transactionRow.paymentReceived ? 'Si' : 'No'}</TableCell> */}

                                    <TableCell align="center" component="th" scope="row" >
                                        {transactionRow.id}
                                    </TableCell>
                                    <TableCell>{transactionRow.name}</TableCell>
                                    <TableCell align="center">{transactionRow.status}</TableCell>
                                    <TableCell align="right">
                                        {transactionRow.price.toLocaleString('de-DE')}
                                    </TableCell>
                                    <TableCell align="center">{transactionRow.ownerId}</TableCell>
                                </TableRow>
                            ))}

                    </TableBody>
                </Table>
            </TableContainer >

        );
    } catch (e) {
        console.log(e);
    }
}
