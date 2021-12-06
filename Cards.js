import React from 'react'

//import { createTheme, ThemeProvider, styled, alpha } from '@mui/material/styles'

import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import Rate from './Rate'

import Seb from '../img/Seb.png'


  
  const card = (
    <React.Fragment>
      <CardActionArea>
      <CardContent sx={{ display: 'flex' }}>
      <CardMedia
          component="img"
          image={Seb}
          alt="Sebastian Stan"
          sx={{ border: 1, borderColor: "white", borderRadius: 2, height: 45, width: 45 }}
        />
        
        <Box sx={{ display: 'flex', flexDirection: 'column', ml:1.5, justify: "left" }}>
        <Typography sx={{ fontSize: 14, fontWeight: "normal", textAlign: "left" }} color="#D1D4C9" gutterBottom>
         {/* {Nickname} */}
         Seabass
        </Typography>
        <Typography sx={{ mb: 1.5, textAlign: "left" }} color="#62666D">
          {/* {ReviewNo} */}
          30 Reviews
        </Typography>
        <Rate />
        </Box>

        </CardContent>
      </CardActionArea>
    </React.Fragment>
  );  

export default function Cards() {

    return (
        
        <Box sx={{ mt: 0, ml: 3, maxWidth: 210, maxHeight: 100}}>
      <Card variant="outlined" style={{borderColor: "#303336", borderRadius: 8, backgroundColor: "#1E1F20"}}>{card}</Card>
    </Box>

    );
}
