import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import DashCard from './DashCard.jsx';
import UserDashSales from './UserDashSales'
import UserDashPurchases from './UserDashPurchases'

//import ChartDemo from './ChartDemo';

// import { PieChart } from 'react-minimal-pie-chart';

// import * as echarts from 'echarts';




export default function Dashboard() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const totalAmount = 0;
    const productsTotalQuantity = 0;

    const totalAmountPublished = 0;
    const productsPublishedQuantity = 0;



    const myPurchases = [
        { id: 1, Producto: 'Biblioteca', Precio: 11000, Estado: 'Usado', Contraparte: 'jdcm' },
        { id: 2, Producto: 'Cafetera', Precio: 15000, Estado: 'Usado', Contraparte: 'jdcm' },
        { id: 3, Producto: 'Cartuchera', Precio: 1400, Estado: 'Usado', Contraparte: 'jdcm' },
    ]
    const mySales = [
        { id: 4, Producto: 'Biblioteca', Precio: 11000, Estado: 'Usado', Contraparte: 'jdcm' },
        { id: 5, Producto: 'Cafetera', Precio: 15000, Estado: 'Usado', Contraparte: 'jdcm' },
        { id: 6, Producto: 'Cartuchera', Precio: 1400, Estado: 'Usado', Contraparte: 'jdcm' },
    ]
    console.log(myPurchases, '\n', mySales)

    /* const css = `
    #main {
        width: 300px;
        height:200px;
        background-color: #333;
    }
` */

    /* return (
        <div class="my-element">
            <style>{css}</style>
            some content
        </div>
    ) */

    // Initialize the echarts instance based on the prepared dom
    /* var myChart = echarts.init(document.getElementById('main'));
 
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

                <DashCard title="Mis Compras" value={totalAmount} info1={productsTotalQuantity} info2={`de ${productsTotalQuantity}`} />

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

                <DashCard title="Mis Ventas" value={totalAmountPublished} info1={productsPublishedQuantity} info2={`de ${productsTotalQuantity}`} />

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
                    Mis Ventas
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