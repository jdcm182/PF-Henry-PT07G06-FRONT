import React from 'react';
import styles from './Footer.module.css';
import {Container, Grid, Box, Link} from '@mui/material' 


export default function Footer() {
    return ( 
    <footer>
        <Box px={{xs: 3, sm:10}} py={{xs: 3, sm: 5}} bgcolor="text.secondary" color='white'>
            <Container maxWidth = 'lg'>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Desarrolladores</Box>
                        <Box>Eric Lehmann</Box>
                        <Box>Mariana Ines Salez</Box>
                        <Box>Arturo Sebastian Urgel</Box>
                        <Box>Jonatan Levi Piedra Palencia</Box>
                        <Box>Camilo  Hurtado Herrera</Box>
                        <Box>Pedro Agustín Morán</Box>
                        <Box>Jeronimo Daniel Cardozo</Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Usuario</Box>
                        <Box>
                            <Link href="/" color = "inherit">
                                Registrarse
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color = "inherit">
                                Administart mi cuenta
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/juira/sell" color = "inherit">
                                Vender un producto
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color = "inherit">
                                Mi carrito
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Ayuda</Box>
                        <Box>
                            <Link href="/" color = "inherit">
                                Contacto: juiraMarket@gmail.com
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color = "inherit">
                                Soporte
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color = "inherit">
                                Terminos y condiciones
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color = "inherit">
                                Politica de privacidad
                            </Link>
                        </Box>
                    </Grid>   
                </Grid>
                <Box textAlign= "center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0}}>
                    JUIRA&trade; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>

    </footer>
        
    )
}