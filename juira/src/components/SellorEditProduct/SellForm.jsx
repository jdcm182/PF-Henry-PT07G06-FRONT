import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import axios from 'axios';
import { useState } from 'react'


export default function SellForm(prodEditar) {


  const[data, setData]=React.useState({
    name:'',
    description:'',
    price: 0,
    image:'',
    categories:[],
  })

  //Handle Image with Cloudinary

  const [selectedImage, setSelectedImage]=useState('')
  const [previewSource, setPreviewSource]= useState()

  let handleFileInputChange=(e)=>{
    const file=e.target.files[0]
    setSelectedImage(file)
    previewFile(file)
  }
  
  const previewFile=(file)=>{
    const reader= new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend=()=>{
      setPreviewSource(reader.result)
    }
  }
  
  // let handleImage=async(e)=>{
  //   e.preventDefault();
  //   const formData=new FormData()
  //   formData.append('file', selectedImage)
  //   formData.append("upload_preset",'DB_PF_JUIRA' )
  //   await axios.post('https://api.cloudinary.com/v1_1/duq1tcwjw/image/upload', 
  //   formData).then((response)=>{setData({...data, image: response.data.secure_url})})

  // }
   



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
        p:5,
        position: 'relative',
        top: 50,
        left: '20%',
        width: 0.60,
        height: 'auto',
        backgroundColor: '#66bb6a',
        '&:hover': {
          backgroundColor: '#81c784',
          
        },
      }}
    > 

        <TextField
          id="filled-multiline-flexible"
          label="Nombre del Producto"
          placeholder="Placeholder"
          multiline
          maxRows={4}
          value={data.name}
          onChange={handleChange}
          variant="filled"
          sx={{m:2,
          width:1,}}
        />

       
        <TextField
          id="filled-multiline-static"
          label="Descripcion"
          multiline
          rows={4}
          value={data.description}
          variant="filled"
        />

        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={data.categories}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

        <div>
        <input  id="upload_widget" onChange={handleFileInputChange} type='file' name='image'/>
        {previewSource?(
          <img src={previewSource} alt='chosenOne' style={{height:'250px', margin: '10px', width: '250px', border:'solid black'
        }}/>
        ):<div style={{height:'250px', margin: '10px', width: '250px', border:'solid black'}}>Preview</div>}
        {/* <button onClick={handleImage}>Upload Image</button> */}
        </div>
  
    </Box>
    
    </>
    
  );
}


