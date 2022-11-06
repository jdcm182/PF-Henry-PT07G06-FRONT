import * as React from 'react';
//import { ThemeProvider, createTheme } from '@mui/system';
import { Paper } from '@mui/material';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { indexOf } from 'lodash';


export default function UserDashCard(props) {

    const { title, value, info1, info2, bkColor, textColor } = props;

    /*   const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 60,
        lineHeight: '60px',
      })); */

    //console.log(bkColor)

    // 'rgb(255,105,162)' --> '255,105,162' --> 'rgba(255,105,162, 1)' & 'rgba(255,105,162, .5)'
    const getRGBcoords = (str) => {
        //str = 'rgb(255,105,162)';
        //const i1 = str.indexOf('(');
        //const i2 = str.indexOf(')');
        //const substring = str.substring(i1 + 1, i2);
        //console.log(substring);
        return str.substring(str.indexOf('(') + 1, str.indexOf(')'));
    }


    return (

        <Box
            sx={{
                /* bgcolor: 'background.paper', */
                //bgColor: "rgb(130,114,255)",
                bgColor: `rgb(${bkColor})`,//"#69c3ff",//bkColor,
                background: `linear-gradient(90deg, rgba(${getRGBcoords(bkColor)},1) 0%, rgba(${getRGBcoords(bkColor)},.5) 100%)`,
                /* background: "linear-gradient(90deg, rgba(130,114,255,1) 0%, rgba(21,230,210,1) 100%)", */
                //background: "linear-gradient(360deg, rgb(49 255 201) 0%, rgb(212 251 240) 100%)",
                /* boxShadow: 1, */
                borderRadius: 2,
                p: 2,
                minWidth: 300,
                /* border: "1px solid #ccc", */
                /* boxShadow: "0 0 5px 5px #cccccc55", */
                boxShadow: "0 2px 10px 2px #cccccc55",
                margin: "1rem",
                userSelect: 'none',
            }}
        >

            <Box elevation="12">
                <Box sx={{ color: textColor }}> {title} </Box>
                <Box sx={{ color: textColor/* '#378d3e' *//* 'text.primary' */, fontSize: 34, fontWeight: 'medium' }}>
                    {'$ ' + (value).toLocaleString('de-DE')}
                </Box>
                <Box
                    sx={{
                        color: textColor,//'success.dark',
                        display: 'inline',
                        fontWeight: 'bold',
                        mx: 0.5,
                        fontSize: 14,
                        userSelect: 'none'
                    }}
                >
                    {info1}
                </Box>
                <Box sx={{ color: textColor, /* 'text.secondary' ,*/ display: 'inline', fontSize: 14, userSelect: 'none' }}>
                    {info2}
                </Box>
            </Box>
        </Box>

    );
}