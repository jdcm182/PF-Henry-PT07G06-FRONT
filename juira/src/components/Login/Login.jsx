import React from 'react';
import {Link} from 'react-router-dom'
import { Grid,Paper, Avatar, TextField, Button, Typography, Container } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default  function Login() {
    const paperStyle={padding :'45px 20', height:'fit-content'/* '70vh' */,width:350, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const txtstyle = { margin: '10px 0', fontFamily: 'nunito', color: 'var(--primaryColor)'}
    return(
        <Container sx={ {boxShadow: '0 0 15px 5px #cccccc55', padding: 5}}>
          <Typography sx={{ marginTop: '0', fontSize: '1.5rem', width:1,  borderBottom: "solid var(--primaryColor)" /* 'solid green'   */,
          opacity: "30%" }} color="var(--primaryColor)" gutterBottom>
                INICIO DE SESIÓN
          </Typography>
          <Grid>
            <Paper elevation={10} style={paperStyle} sx={{padding:'40px 20px', height:'fitContent'}} >
                <Grid align='center' style={{marginBottom:'20px'}}>
                     <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h2>Iniciar Sesión</h2>
                </Grid>
                {/* <TextField label='Nombre y Apellido' placeholder='Nombre y Apellido' style={txtstyle} fullWidth required/> */}
                {/* <TextField label='Mail' placeholder='Mail' style={txtstyle} fullWidth required/> */}
                <TextField label='Usuario' placeholder='Usuario' style={txtstyle} fullWidth required/>
                <TextField label='Password' placeholder='Password' style={txtstyle} type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox style={{ color: 'var(--primaryColor)' }}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Recuérdame"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth sx={
            {/* backgroundColor: '#23c197', '&:hover': {backgroundColor: '#138f6e'} */}
          }>Iniciar Sesión</Button>
                {/* <Typography >
                     <Link to="#" >
                        Olvidaste tu contraseña?
                </Link>
                </Typography> */}
                <Typography > Todavía no estás registrado?
                     <Link to="/juira/register" >
                        Regístrate 
                </Link>
                </Typography>
            </Paper>
          </Grid>
        </Container>
    )
}
