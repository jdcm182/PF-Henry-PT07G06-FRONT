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
import {logoOutAction} from '../../redux/actions/app.actions'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));






export default function PerfilUser() {
    const history = useHistory();
    const auth = getAuth();
    const user = auth.currentUser;
    const dispacth=useDispatch()

    const handleLogOut=async()=>{
        await signOut(auth)
        .then(result=>console.log('has salido'))
        .catch(error=> console.log(`Error ${error.code}: ${error.message}`))

        dispacth(logoOutAction())
        history.push(`/juira/login`)

    }
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  return (
    <div>
         <Card sx={{ maxWidth: 0.9, ml:8, alignContent:'center', justifyContent: 'space-around'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            U
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Bienvenido {user.displayName}!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Mis Datos:</Typography>
          <Typography paragraph>
           Direccion
          </Typography>
          <Typography paragraph>
           Telefono
          </Typography>
          <Typography paragraph>
           
          </Typography>
          <Typography>
         
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
     
    </div>
  )
}
