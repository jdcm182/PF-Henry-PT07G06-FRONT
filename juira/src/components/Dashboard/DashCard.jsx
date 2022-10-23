import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/system';
import { Paper } from '@mui/material';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

export default function DashCard(props) {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 60,
        lineHeight: '60px',
      }));
    
  return (
    <ThemeProvider theme={theme}>
      
                  
      <Box
        sx={{
          bgcolor: 'background.paper',
          /* boxShadow: 1, */
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          border: "1px solid #ccc",
          boxShadow: "0 0 5px 5px #cccccc55",
          margin: "1rem",
        }}
      >
        
        <Box elevation="12">
          <Box sx={{ color: 'text.secondary' }}> {props.title} </Box>
          <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
            {props.value}
          </Box>
          <Box
            sx={{
              color: 'success.dark',
              display: 'inline',
              fontWeight: 'bold',
              mx: 0.5,
              fontSize: 14,
              userSelect: 'none'
            }}
          >
            {props.info1}
          </Box>
          <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14, userSelect: 'none' }}>
            {props.info2}
          </Box>
         </Box>
        </Box>
      
    </ThemeProvider>
  );
}