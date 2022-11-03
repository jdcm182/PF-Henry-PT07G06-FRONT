import React from 'react';
import Container from '@mui/material/Container';
import UserDashTable from './UserDashTable';



export default function UserDashPurchases(props) {

    //console.log('UserDashPurchases > props: ', props)

    return (
        <Container component={'span'}
            sx={{
                width: "85%", height: "100%",
                boxShadow: '0 8px 15px 5px #cccccc55', padding: '2rem', borderRadius: '.8rem'
            }} >


            <UserDashTable title="Compras" list={props.list} />


        </Container>
    )
}
