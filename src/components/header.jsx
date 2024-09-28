import React from "react";
import { createTheme, ThemeProvider, Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
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




const Header = () => {
    return (
        <Box className="header-container">
            <Container>
            <ThemeProvider theme={theme}>
                <Typography variant="h1" align="center" gutterBottom className="mainTitle">
                    Hi, I'm Sanjna
                </Typography>
                <Typography variant="h3" align="center" gutterBottom className="mainTitle">
                    welcome to my website
                </Typography>
                </ThemeProvider>
            </Container>
        </Box>
    );
}

export default Header;
