import React from 'react';
import {Link} from 'react-router-dom';
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import firebase from 'firebase';
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default  function Login() {
    const auth=getAuth()

    const [user, setUser]=React.useState(null)

    React.useEffect(()=>{
        auth.onAuthStateChanged(auth,(user)=>{
            setUser(user)
        })
    },[])

    const handleGoogleSignIn=()=>{
        const provider= new auth.GoogleAeuthProvider()

        auth.signInWithPopup(provider)
        .then(result=>console.log(`${result.user.email} ha iniciado sesion`))
        .catch(error=> console.log(`Error ${error.code}: ${error.message}`))
    }

    const handleLogOut=()=>{
        auth().signOut()
        .then(result=>console.log(`${result.user.email} ha salido`))
        .catch(error=> console.log(`Error ${error.code}: ${error.message}`))

    }

    const paperStyle={padding :20,height:'70vh',width:350, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const txtstyle = { margin: '10px 0', fontFamily: 'nunito', color: 'var(--primaryColor)'}
    return(
        user?
        <div>
            PERFIL DEL USUARIO
            <Button onClick={handleLogOut}>Salir </Button>
        </div>:
        <Grid>
            <Paper elevation={10} style={paperStyle} >
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
            {backgroundColor: '#23c197', '&:hover': {backgroundColor: '#138f6e'}}
          }>Iniciar Sesión</Button>
                {/* <Typography >
                     <Link to="#" >
                        Olvidaste tu contraseña?
                </Link>
                </Typography> */}
                <Button onClick={handleGoogleSignIn}>Login con Google</Button>
                <Typography > Todavía no estás registrado?
                     <Link to="/juira/register" >
                        Regístrate 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
