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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function PerfilUser() {
    const auth = getAuth();
    const user = auth.currentUser;
    const dispacth=useDispatch()

    const handleLogOut=async()=>{
        await signOut(auth)
        .then(result=>console.log('has salido'))
        .catch(error=> console.log(`Error ${error.code}: ${error.message}`))

        dispacth(logoOutAction())

    }

  return (
    <div>
        <Typography>Bienvenido {user.displayName}! </Typography>
        <Stack spacing={2}>
  <Item>
    <img src={user.img} alt="avatarUser"/>
    <TextField>{user.name&&user.name}</TextField> 
  </Item>
  <Item>Item 2</Item>
  <Item>
    <Button onClick={handleLogOut}>Salir </Button>
  </Item>
</Stack>

    </div>
  )
}
