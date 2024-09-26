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
