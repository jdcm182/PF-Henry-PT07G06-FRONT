import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import UserDashCard from './UserDashCard.jsx';
import UserDashSales from './UserDashSales'
import UserDashPurchases from './UserDashPurchases'
import UserChart from './UserDashChart'





export default function Dashboard() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const myPurchases = [
        { id: 1, Producto: 'Biblioteca', Precio: 11000, Estado: 'Usado', Contraparte: 'jdcm' },
        { id: 2, Producto: 'Cafetera', Precio: 15000, Estado: 'Usado', Contraparte: 'jdcm' },
        { id: 3, Producto: 'Cartuchera', Precio: 1400, Estado: 'Usado', Contraparte: 'jdcm' },
        { id: 7, Producto: 'Lampara', Precio: 4000, Estado: 'Usado', Contraparte: 'jdcm' },
    ]
    const mySales = [
        { id: 4, Producto: 'Balde', Precio: 2500, Estado: 'Usado', Contraparte: 'jdcm' },
        { id: 5, Producto: 'Cemento', Precio: 1000, Estado: 'Usado', Contraparte: 'jdcm' },
        { id: 6, Producto: 'Cartas', Precio: 3000, Estado: 'Usado', Contraparte: 'jdcm' },
    ]
    console.log(myPurchases, '\n', mySales)



    const totalAmountPurchases = myPurchases.reduce((prev, actual) => prev + actual.Precio, 0);
    const productsQuantityPurchases = myPurchases.length;

    const totalAmountSales = mySales.reduce((prev, actual) => prev + actual.Precio, 0);
    const productsQuantitySales = mySales.length;

    const totalOperations = productsQuantityPurchases + productsQuantitySales;


    const chartData = [
        { name: 'Compras', value: totalAmountPurchases },
        { name: 'Ventas', value: totalAmountSales },
    ];

    //const colorPurchases = 'rgb(255,105,162)' //'255,105,162'; // PinkishRed //"#69c3ff"
    const colorPurchases = getComputedStyle(document.documentElement).getPropertyValue('--colorDashPurchases');

    //const colorSales = 'rgb(105,195,255)' //'105,195,255'; // LightBlue //
    const colorSales = getComputedStyle(document.documentElement).getPropertyValue('--colorDashSales');

    const textColorDash = '#FFFFFF'; // White



    /* const css = `
    #main {
        width: 300px;
        height:200px;
        background-color: #333;
    }
` 

     return (
        <div class="my-element">
            <style>{css}</style>
            some content
        </div>
    ) 

    // Initialize the echarts instance based on the prepared dom
    var myChart = echarts.init(document.getElementById('main'));
 
    // Specify the configuration items and data for the chart
    var option = {
        title: {
            text: 'ECharts Getting Started Example'
        },
        tooltip: {},
        legend: {
            data: ['sales']
        },
        xAxis: {
            data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
        },
        yAxis: {},
        series: [
            {
                name: 'sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    }; */

    // Display the chart using the configuration items and data just specified.
    // myChart.setOption(option);

    return (
        <Container sx={{ boxShadow: '0 0 15px 5px #cccccc55', padding: 5, width: '100' }}>

            <Typography sx={{ marginTop: '0', fontSize: '1.5rem', width: 1, borderBottom: "solid var(--primaryColor)" }} color="var(--primaryColor)" gutterBottom>
                DASHBOARD DE USUARIO
            </Typography>


            <Container sx={{ display: "Flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap" }}>

                <UserDashCard title="Mis Compras" value={totalAmountPurchases} info1={productsQuantityPurchases}
                    info2={`de ${totalOperations} operaciones`} bkColor={colorPurchases} textColor={textColorDash} />

                {/* <PieChart
                  data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                  ]}
                  viewBoxSize={['100','100']}
                */}

                {/* <script src="echarts.js"></script>
                <div id="main">
                    <style>{css}</style>
                </div> */}

                {/* <Chart /> */}
                {/* <ChartDemo /> */}


                {/* <PieChart /> */}
                <UserChart data={chartData} colors={[colorPurchases, colorSales]} />

                <UserDashCard title="Mis Ventas" value={totalAmountSales} info1={productsQuantitySales}
                    info2={`de ${totalOperations} operaciones`} bkColor={colorSales} textColor={textColorDash} />
                {/* "rgb(255,105,162)",//"#69c3ff",//bkColor, */}

            </Container>


            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'var(--primaryColor)' }}>
                    <Tabs value={value}
                        textColor="primary"
                        indicatorColor="primary"//"#23c197"
                        onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Mis Compras" {...a11yProps(0)} sx={{ color: 'var(--primaryColor)' }} />
                        <Tab label="Mis Ventas" {...a11yProps(1)} sx={{ color: 'var(--primaryColor)' }} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {/* Mis Compras */}
                    {<UserDashPurchases list={myPurchases} />}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {/* Mis Ventas */}
                    <UserDashSales list={mySales} />
                </TabPanel>
            </Box>

        </Container>
    );
}









function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Container>{children}</Container>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export function BasicTabs() {
    /* 
    const [value, setValue] = React.useState(0);
 
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
 
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    ); 
    */
}
