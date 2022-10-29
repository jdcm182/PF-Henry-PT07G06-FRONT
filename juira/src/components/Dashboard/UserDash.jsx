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







export default function Dashboard() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const totalAmount = 0;
    const productsTotalQuantity = 0;

    const totalAmountPublished = 0;
    const productsPublishedQuantity = 0;


    return (
        <Container sx={{ boxShadow: '0 0 15px 5px #cccccc55', padding: 5, width: '100' }}>

            <Typography sx={{ marginTop: '0', fontSize: '1.5rem', width: 1, borderBottom: "solid var(--primaryColor)" }} color="var(--primaryColor)" gutterBottom>
                DASHBOARD DE USUARIO
            </Typography>


            <Container sx={{ display: "Flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap" }}>

                <DashCard title="Mis Compras" value={totalAmount} info1={productsTotalQuantity} info2={`de ${productsTotalQuantity}`} />

                <DashCard title="Mis Ventas" value={totalAmountPublished} info1={productsPublishedQuantity} info2={`de ${productsTotalQuantity}`} />

            </Container>


            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'var(--primaryColor)' }}>
                    <Tabs value={value}
                        textColor="var(--primaryColor)"
                        indicatorColor="primary"//"#23c197"
                        onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Mis Compras" {...a11yProps(0)} sx={{ color: 'var(--primaryColor)' }} />
                        <Tab label="Mis Ventas" {...a11yProps(1)} sx={{ color: 'var(--primaryColor)' }} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Mis Compras
                    <UserDashPurchases />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Mis Ventas
                    <UserDashSales />
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
                    <Typography>{children}</Typography>
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