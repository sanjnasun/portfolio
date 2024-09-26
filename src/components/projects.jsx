import React from "react";
import { createTheme, ThemeProvider, Typography, Container, Box } from '@mui/material';
import "./projects.css";
import TempCard from "./newCard";



const theme = createTheme({
    typography: {
      fontFamily: [
        '"Schibsted Grotesk"',
        'sans-serif',
      ].join(','),
    },
  });






const Project = () => {
    const projects = [
        {
            title: "USC Annenberg Media Chrome Extension",
            description: "Custom Chrome Extension for USC Annenberg media, created utilizing React, MaterialUI, FastAPI, API Gateway, MySQL.",
            link: "https://github.com/sanjnasun/chromeExtension"
        },
        {
            title: "HeartBeatz - iOS App",
            description: "Developed on Windows using Oracle VirtualBox VM and Big Sur iso. Utilized SwiftUI frontend, HealthKit and Apple Music API to create catered music recommendations for users.",
            link: "https://github.com/sanjnasun/"
        },
        {
            title: "Black Scholes and Monte Carlo Simulation C++",
            description: "C++ model for Black Scholes and Monte Carlo Simlation using CMD User input and File upload.",
            link: "https://github.com/sanjnasun/"
        },
        {
            title: "ML Stock Visualizer",
            description: "Demonstrated a full stack Financial Data model using SciKit Learn, NumPy, Pandas. Utilized Flask and SQLite for API and light database to hold data.",
            link: "https://github.com/sanjnasun/"
        }
    ];

    return (
        <Box className="header-container">
            <Container maxWidth="lg">

            <ThemeProvider theme={theme}>
                <Typography variant='h1' component='h1' className="mainTitle" gutterBottom>
                    Projects
                </Typography>
            </ThemeProvider>

                <Box className="projectDisplay" sx={{ display: 'flex', gap: 15, flexWrap: 'wrap', marginTop: '5%'}}>
                    {projects.map((item, index) => (
                        <TempCard 
                            key={index} 
                            link={item.link} 
                            description={item.description} 
                            title={item.title} 
                        />
                    ))}
                </Box>

                <br />
            </Container>
        </Box>
    );
};

export default Project;
