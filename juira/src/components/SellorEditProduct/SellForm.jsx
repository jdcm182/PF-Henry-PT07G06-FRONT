import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";


export default function SellForm(prodEditar) {

  const[data, setData]=React.useState({
    name:'',
    description:'',
    price: 0,
    image:'',
    categories:[],
  })
    

const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <>
    <Box sx={{
        m:3,
        p:1,
        width:0.8,
        position: 'relative',
        top: 40,
        left: '10%',
        background: 'linear-gradient(45deg, white, #66bb6a 50%, white)',
        }}>
      <Typography sx={{ fontSize: 32 }} color="text.secondary" gutterBottom>
      Un paso mas cerca de sacarlo JUIRA!
      </Typography>
    </Box>
    <Box
      sx={{
        m:3,
        position: 'relative',
        top: 50,
        left: '20%',
        width: 0.60,
        height: 'auto',
        backgroundColor: '#66bb6a',
        '&:hover': {
          backgroundColor: '#81c784',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    > 
<div>
        <TextField
          id="filled-multiline-flexible"
          label="Nombre del Producto"
          placeholder="Placeholder"
          multiline
          maxRows={4}
          value={data.name}
          onChange={handleChange}
          variant="filled"
        />

        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
      </div>
    </Box>
    
    </>
    
  );
}


