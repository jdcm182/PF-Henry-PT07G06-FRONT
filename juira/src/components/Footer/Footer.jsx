import React from 'react';
import {Container, Grid, Box} from '@mui/material' 
import {Link} from 'react-router-dom'


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
                            <Link to="/" style={{color: 'white'}}>
                                Registrarse
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" style={{color: 'white'}}>
                                Administrar mi cuenta
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/juira/sell" style={{color: 'white'}}>
                                Vender un producto
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/juira/shoppingCart" style={{color: 'white'}}>
                                Mi carrito
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/juira/favorites" style={{color: 'white'}}>
                                Favoritos
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Ayuda</Box>
                        <Box>
                            <Link to="/" style={{color: 'white'}}>
                                Contacto: juiraMarket@gmail.com
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" style={{color: 'white'}}>
                                Soporte
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" style={{color: 'white'}}>
                                Terminos y condiciones
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" style={{color: 'white'}}>
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
