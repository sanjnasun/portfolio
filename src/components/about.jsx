import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import aapa from '../images/aapa.png';
import "./projects.css";


const About = () => {
  return (
    <Box id='about'
      sx={{
        maxWidth: 'lg',
        height: '100%',
        marginTop: '10%',
        marginLeft: '12%',
        marginBottom: '3%',
      }}
    >
      <Typography variant='h1' component='h2' className="mainTitle">
       <div className='mainTitle'>About</div>
      </Typography>
      <br></br>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} sx={{marginRight:'8%'}} >
          <Typography variant='h5' component='h5' className='belowClass'>
          <div className='belowTitle'> Hi, I'm Sanjna Sunil! I'm a junior at the University of Southern California,
            studying Computer Engineering and Computer Science. My academic passions revolve around AI/ML, 
            dynamic client-side interfaces, and the intersection of business and technology. 
            Beyond the classroom, I actively engage in the USC community, contributing to the 
            USC Women in Computing, Society of Women Engineers, and Spatial Computing Club. </div>
             
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src={aapa} alt='aapa riding in the sky'/>    
        </Grid>
      </Grid>
      <br></br>
    </Box>
    
  );
}

export default About;
