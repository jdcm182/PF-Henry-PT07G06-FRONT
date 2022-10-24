import { Container, maxWidth,Box } from '@mui/system'
import React from 'react'
import { removeToFavorites } from "../../redux/actions/products.actions";
import { useDispatch } from "react-redux";
import {useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { pink } from "@mui/material/colors";
import { IconButton } from "@mui/material";


export default function FavoriteDetail(props) {
    // id={p.id} price={p.price} name={p.name} image={p.image}

    const dispatch = useDispatch();
    let history = useHistory();
    
    function viewDetail(p) {
      history.push(`/juira/${p}`);
    }
    
    function handleRemoveFavorite(p) {
      dispatch(removeToFavorites (p));
    }

  return (
    <Container sx={{m:1}}>
        <ListItem alignItems="flex-start">
        <ListItem sx={{ width: 0.1, height: 0.4 }}>
        <Button sx={{ alignSelf:'flex-start' }}>
                      <IconButton onClick={() => handleRemoveFavorite(props.id)}>
                        <HighlightOffIcon sx={{ color: pink[500] }} />
                      </IconButton>
            </Button>
          <img alt="Product" src={props.image} onClick={() =>viewDetail(props.id)} />
        </ListItem>
        <ListItemText
          primary={props.name}
          sx={{fontSize:5,ml:12, fontWeight: 'bold'}}
          secondary={
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="var(--btnActiveColor)"
              >
                ${props.price}
              </Typography>
          }>
          
          </ListItemText>
      </ListItem>
     
    
            <Divider variant="inset" component="li" />
    </Container>
  )
}

