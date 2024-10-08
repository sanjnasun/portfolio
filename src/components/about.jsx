import React from "react";
import { createTheme, ThemeProvider, Typography, Container, Box, Grid } from "@mui/material";
import aapa from '../images/aapa.png';
import "./projects.css";





const theme = createTheme({
  typography: {
      fontFamily: [
          '"Schibsted Grotesk"',
          'sans-serif',
      ].join(','),
      h1: {
          '@media (min-width:300px)': {
              fontSize: '3rem',
          },
          '@media (min-width:600px)': {
              fontSize: '5rem',
          },
          '@media (min-width:900px)': {
              fontSize: '7rem',
          },
      },
      h2: {
          '@media (min-width:300px)': {
              fontSize: '1,5rem',
          },
          '@media (min-width:600px)': {
              fontSize: '2rem',
          },
          '@media (min-width:900px)': {
              fontSize: '2.5rem',
          },
      },
      h3: {
          '@media (min-width:300px)': {
              fontSize: '1.2rem',
          },
          '@media (min-width:600px)': {
              fontSize: '1.5rem',
          },
          '@media (min-width:900px)': {
              fontSize: '2.4rem',
          },
      },
  },
});




const belowTheme = createTheme({
  typography: {
    fontFamily: [
      '"Manrope"',
      'sans-serif',
    ].join(','),
    h1: {
      '@media (min-width:300px)': {
          fontSize: '2rem',
      },
      '@media (min-width:600px)': {
          fontSize: '5rem',
      },
      '@media (min-width:900px)': {
          fontSize: '7rem',
      },
  },
  h2: {
      '@media (min-width:300px)': {
          fontSize: '1,5rem',
      },
      '@media (min-width:600px)': {
          fontSize: '2rem',
      },
      '@media (min-width:900px)': {
          fontSize: '2.5rem',
      },
  },
  h3: {
      '@media (min-width:300px)': {
          fontSize: '1.2rem',
      },
      '@media (min-width:600px)': {
          fontSize: '1.5rem',
      },
      '@media (min-width:900px)': {
          fontSize: '2.4rem',
      },
  },

  h4: {
    '@media (min-width:300px)': {
        fontSize: '1.2rem',
    },
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    '@media (min-width:900px)': {
        fontSize: '2.4rem',
    },
},
  },
});





const About = () => {
  return (
    <Box className="header-container" sx={{ py: 4 , marginTop: '5%'}}>
      <Container maxWidth="lg">
      
      <ThemeProvider theme={theme}>
        <Typography variant='h1' component='h1'className="mainTitle" gutterBottom >
          About
        </Typography>
      </ThemeProvider>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} sx={{ padding: { xs: "16px", md: "32px" } }}>
          <ThemeProvider theme={belowTheme}>
            <Typography variant='h4' gutterBottom className="aboutTitle">
              Hi! I'm Sanjna, a third year Computer Science student at the University of Southern California. 
              My academic interests revolve around full-stack web development, AI/ML, and large scale algorithm and low-latency design. Beyond
              what I study, I'm involved in Society of Women Engineers at USC, rock-climbing, skateboarding, and I love to run!
            </Typography>
          </ThemeProvider>
          
          </Grid>

          <Grid item xs={12} md={6}>
            <img src={aapa} alt="AAPA" className="aapa" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
