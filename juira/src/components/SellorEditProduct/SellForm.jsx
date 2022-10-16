import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import axios from 'axios';
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';




function validate(data) {
  let errores={}
  if(!data.name)errores.name='Cual es el nombre del producto?'

  if(!data.price) errores.price='Cuanto vale?'

  if(!data.description)errores.description=`Que tamaño tiene? Contanos un poco del producto`

  if(!data.condition) errores.condition='En que estado se encuentra?'

  if(data.categories.length===0) errores.categories='Seleccione una categoría'
  
  if(!data.image) errores.image='Ingrese imagen del producto'
  
  return errores}




export default function SellForm() {

  const categories= useSelector(state=>state.categories)
  const dispatch=useDispatch()

  const [error, setError]=useState({})
  const[data, setData]=React.useState({
    name:'',
    price: 0,
    description:'',
    condition:'',
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
  
  let handleImage=async(e)=>{
    e.preventDefault();
    const formData=new FormData()
    formData.append('file', selectedImage)
    formData.append("upload_preset",'DB_PF_JUIRA' )
    await axios.post('https://api.cloudinary.com/v1_1/duq1tcwjw/image/upload', 
    formData).then((response)=>{setData({...data, image: response.data.secure_url})})

  }
   


  const handleOnChange=(e)=>{
    setData({...data,
      [e.target.name]:e.target.value})
   
      setError(
        validate({...data,
          [e.target.name]:e.target.value})

      )
  }



  let handleOnSubmit=(e)=> {
    // dispatch(publishProd(data))
    setData({
      name:'',
    price: 0,
    description:'',
    condition:'',
    image:'',
    categories:[],
    })
  alert('Tu producto sera Publicado!')
  }

  function handleOnSubmitButton(e) {
    e.preventDefault();
    if (Object.values(error).length > 0 || data.name.length===0)  document.getElementById("myBtn").disabled = true;
    else document.getElementById("myBtn").disabled = false;
    
    }

  return (
  
    <Container sx={{background: 'linear-gradient( 90deg, white, #b6deb8 10%, #b6deb8 90%, white )', display:'flex', flexDirection: 'column', width: 1, my:0}} onChange={handleOnSubmitButton}>
    <Box sx={{
        my:0.8,
        p:1,
        width:0.8,
        position: 'relative',
        top: 20,
        left: '10%',
        background: 'linear-gradient(45deg, white, #66bb6a 50%, white)',
        height: 'fit-content',
        boxShadow: 1,
        }}>
      <Typography sx={{ fontSize: 32 }} color="black" gutterBottom>
      Un paso mas cerca de sacarlo JUIRA!
      </Typography>
    </Box>
    <Box
      sx={{
        m:3,
        mb:5,
        p:3,
        position: 'relative',
        top: 20,
        width: 0.90,
        height: 'fit-content',
        backgroundColor: '#66bb6a',
        '&:hover': {
          backgroundColor: '#81c784',
          boxShadow: 3,
        },
      }}
    > 

    <Typography sx={{ fontSize: 25, width:1, borderBottom: 'solid green' }} color="text.secondary" gutterBottom>
      FORMULARIO DE VENTA
    </Typography>

<Stack direction="row" alignItems="center" spacing={1} sx={{width:1, justifyContent:'space-around'}}>

{/*Nombre y descripcion */}

<Stack direction="column" alignItems="center" spacing={2}  sx={{width:0.45}}>
      <TextField
          id="filled-multiline-flexible"
          label="Nombre del Producto"
          placeholder="Placeholder"
          multiline
          maxRows={4}
          value={data.name}
          onChange={handleOnChange}
          variant="filled"
          sx={{width:1,}}
        />

  <TextField
          id="filled-multiline-static"
          label="Descripcion"
          multiline
          rows={5}
          onChange={handleOnChange}
          value={data.description}
          variant="filled"
          sx={{width:1}}
        />
     
      </Stack>

{/*Precio Categoria y estado */}
<Stack direction="Column" alignItems="center" spacing={2} sx={{justifyContent:'space-evenly'}}>

<TextField
          id="filled-multiline-flexible"
          label="Precio"
          placeholder="Placeholder"
          multiline
          maxRows={4}
          value={data.name}
          onChange={handleOnChange}
          variant="filled"
          sx={{width:140, mb:3,}}
        />
       
      <FormControl variant="filled" sx={{ minWidth: 140, pb:3 }}>
        <InputLabel id="demo-simple-select-filled-label">Categoría</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={data.categories}
          onChange={handleOnChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="filled" sx={{  minWidth: 140 }}>
        <InputLabel id="demo-simple-select-filled-label">Estado</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={data.condition}
          onChange={handleOnChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Como nuevo'}> Como Nuevo</MenuItem>
          <MenuItem value={'Usado'}>Usado</MenuItem>
          <MenuItem value={'Claros signos de uso'}>Claros signos de uso</MenuItem>
        </Select>
      </FormControl>
      </Stack>

{/*Imagen */}
   <Stack direction="row" alignItems="center" spacing={2}>

   <div>
      {previewSource?(
          <img src={previewSource} alt='chosenOne' style={{height:'250px', margin: '10px', width: '250px', border:'2px dashed green'
        }}/>
        ):<div style={{height:'250px', margin: '10px', width: '250px', border:'2px dashed grey'}}></div>}
      
      
      <Stack direction="row" alignItems="center" spacing={2} sx={{justifyContent: 'center'}}>
      <Button onClick={handleImage} variant="contained" component="label" color="success">
      <Typography sx={{ fontSize: 14, width:1 }}  color="text.secondary" >
      Subir Imagen
      </Typography>
        
        <input hidden accept="image/*" multiple type="file" color="success" />
      </Button>
      <IconButton color="success" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" id="upload_widget" onChange={handleFileInputChange} />
        <AddAPhotoIcon />
      </IconButton>
    </Stack>
      </div>
     

   </Stack>
</Stack>
    
   <Button variant="contained" color="success" sx={{ mt:5 }}  onClick={handleOnSubmit}>
   <Typography sx={{ fontSize: 20, width:1 }} color="black" gutterBottom>
      PUBLICAR JUIRA
    </Typography>
        
  </Button>
      
  
    </Box>

    </Container>
  
    
  );
}


