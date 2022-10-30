
import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { loginAction } from "../../redux/actions/app.actions";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";


export default function Login() {
  const dispatch = useDispatch();

  const [userLog, setUserLog]=React.useState({
    email: ' ',
    password: ' '

})

const handleChange=(e)=>{
    setUserLog({...userLog,
        [e.target.name]:e.target.value})
}


    const auth = getAuth();
    const user = auth.currentUser;


onAuthStateChanged(auth,(user)=>{
            if(user){
                console.log('el usuaio esta loguado')
                console.log(user)
                //aca va el dispathc al back y al redux con la rta
            }
            else{

             console.log('el usuaio esta desloguado')
            }
        })
    

    const login= async()=>{
        await signInWithEmailAndPassword(auth,userLog.email, userLog.password)
    }

    const handleGoogleSignIn=async()=>{
        const provider= new auth().GoogleAeuthProvider()

        await auth().signInWithPopup(provider)
        .then(result=>console.log(`${result.user.email} ha iniciado sesion`))
        .catch(error=> console.log(`Error ${error.code}: ${error.message}`))
    }

    const handleLogOut=async()=>{
        await auth().signOut()
        .then(result=>console.log(`${result.user.email} ha salido`))
        .catch(error=> console.log(`Error ${error.code}: ${error.message}`))

    }
  
  
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 350,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const txtstyle = {
    margin: "10px 0",
    fontFamily: "nunito",
    color: "var(--primaryColor)",
  };
  return (
  
    user?
        <div>
            PERFIL DEL USUARIO
            <Button onClick={handleLogOut}>Salir </Button>
        </div>:
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center" style={{ marginBottom: "20px" }}>
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2 onClick={login}>Iniciar Sesión</h2>
        </Grid>
        {/* <TextField label='Nombre y Apellido' placeholder='Nombre y Apellido' style={txtstyle} fullWidth required/> */}
        {/* <TextField label='Mail' placeholder='Mail' style={txtstyle} fullWidth required/> */}
        <TextField
          label="Usuario"
          name="email"
          placeholder="Usuario"
          onClick={handleChange}
          style={txtstyle}
          fullWidth
          required
        />
        <TextField
          label="Password"
          name="password"
          onClick={handleChange}
          placeholder="Password"
          style={txtstyle}
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              style={{ color: "var(--primaryColor)" }}
              name="checkedB"
              color="primary"
            />
          }
          label="Recuérdame"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          sx={{
            backgroundColor: "#23c197",
            "&:hover": { backgroundColor: "#138f6e" },
          }}
        >
          Iniciar Sesión
        </Button>
        {/* <Typography >


                     <Link to="#" >
                        Olvidaste tu contraseña?
                </Link>
                </Typography> */}

<Button onClick={handleGoogleSignIn}>Login con Google</Button>
        <Typography>
          {" "}
          Todavía no estás registrado?
          <Link to="/juira/register">Regístrate</Link>
        </Typography>
      </Paper>
      <Button
        onClick={() => {
          dispatch(loginAction("user"));
        }}
      >
        Usuario
      </Button>
      <Button
        onClick={() => {
          dispatch(loginAction(""));
        }}
      >
        Guest
      </Button>
      <Button
        onClick={() => {
          dispatch(loginAction("admin"));
        }}
      >
        Admin
      </Button>
    </Grid>
  );

}
