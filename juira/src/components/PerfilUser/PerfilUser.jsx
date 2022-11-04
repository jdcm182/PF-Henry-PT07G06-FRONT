import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {
    Avatar,
    TextField,
    Button,
    Typography,
  } from "@mui/material";
import { styled } from '@mui/material/styles';
import { getAuth, signOut } from "firebase/auth";
import {logoOutAction, getUser} from '../../redux/actions/app.actions'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from 'react';
import Rating from '@mui/material/Rating';





export default function PerfilUser() {
    const history = useHistory();
    const auth = getAuth();
    const user = auth.currentUser;
    const dispatch=useDispatch()
    const { id } = useParams();


useEffect(()=>{
  dispatch(getUser(id))
})

let u = /*useSelector((state) => state.appReducer.user)||*/
{name: 'marian',
 image: 'https://res.cloudinary.com/duq1tcwjw/image/upload/v1667528158/DB_PF_USERS/WIN_20221004_19_35_55_Pro_bdshf1.jpg',
 emailAddress: "marisalez@juira.com",
 rating:3,
 homeAddress:"Sarmiento 603",
 city: "La Falda",
 region: "Córdoba",
 phoneNumber : "5493513170851",

};

    const handleLogOut=async()=>{
        await signOut(auth)
        .then(result=>console.log('has salido'))
        .catch(error=> console.log(`Error ${error.code}: ${error.message}`))

        dispatch(logoOutAction())
        history.push(`/juira/login`)

    }
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  return (
    <div>
         <Card sx={{ maxWidth: 1, my:3,mx:8, p:3, alignContent:'center', justifyContent: 'center'}}>
      <CardHeader
        avatar={
          <Avatar sx={{width:150, height:150}} aria-label="User">
            <img src={u.image&&u.image}/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <EditIcon />
          </IconButton>
        }
        title={<Typography sx={{fontSize: 45, ml:5}}>{(u.name).toUpperCase()}</Typography>}
        subheader={<Rating sx={{ml: 5}} name="read-only" value={u.rating} readOnly />}
      />

<Typography paragraph align='left' sx={{m:5, fontSize:20, textDecoration: 'underline' }}>
          Mis Datos Personales:
        </Typography>
<CardContent sx={{m:2, display:'flex', justifyContent: 'space-around', textAlign: 'center'}}>
        <Box>
          <Typography paragraph sx={{mb:4}}>
           Dirección: {u.emailAddress&&u.emailAddress}
          </Typography>
          <Typography paragraph>
           Teléfono:{u.phoneNumber&&u.phoneNumber}
          </Typography>

        </Box>
        <Box>
        <Typography paragraph sx={{mb:4}}>
           Ciudad:{u.city&&u.city} 
          </Typography>
          <Typography>
          Region:{u.region&&u.region} 
          </Typography>
        </Box>
        </CardContent>
    <Box sx={{display: 'flex', justifyContent:'space-around', mt:5}}>
      <Button onClick={ handleLogOut}>Salir</Button>
      <Button> Save Changes</Button>

    </Box>
      
    </Card>
     
    </div>
  )
}
