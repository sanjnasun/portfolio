import React from "react";
import { createTheme, ThemeProvider, Box, Container, Stack, Link, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion"; 
import "./projects.css";

const theme = createTheme({
  typography: {
    fontFamily: ['"Schibsted Grotesk"', "sans-serif"].join(","),
    h1: {
      "@media (min-width:300px)": { fontSize: "3rem" },
      "@media (min-width:600px)": { fontSize: "5rem" },
      "@media (min-width:900px)": { fontSize: "7rem" },
    },
    h3: {
      "@media (min-width:300px)": { fontSize: "1.2rem" },
      "@media (min-width:600px)": { fontSize: "1.5rem" },
      "@media (min-width:900px)": { fontSize: "2.4rem" },
    },
  },
});

const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <Box>
      <Container>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Stack direction="row" gap={3}>
              <Link
                component="button"
                onClick={() => handleScroll("home")}
                sx={{ color: "white", fontSize: "1.2rem" }}
              >
                Home
              </Link>
              <Link
                component="button"
                onClick={() => handleScroll("projects")}
                sx={{ color: "white", fontSize: "1.2rem" }}
              >
                Projects
              </Link>
              <Link
                component="button"
                onClick={() => handleScroll("experience")}
                sx={{ color: "white", fontSize: "1.2rem" }}
              >
                Experience
              </Link>
              <Link
                component="button"
                onClick={() => handleScroll("about")}
                sx={{ color: "white", fontSize: "1.2rem" }}
              >
                About
              </Link>
              <Link
                component="button"
                onClick={() => handleScroll("contact")}
                sx={{ color: "white", fontSize: "1.2rem" }}
              >
                Contact
              </Link>
            </Stack>
          </Stack>
        </Toolbar>

        <Box className="header-container">
          <Container>
            <ThemeProvider theme={theme}>
             
                <Typography
                  variant="h1"
                  align="center"
                  gutterBottom
                  className="mainTitle"
                >
                  Hi, I'm Sanjna
                </Typography>
              

              
                <Typography
                  variant="h3"
                  align="center"
                  gutterBottom
                  className="mainTitle"
                >
                  welcome to my website
                </Typography>
              
            </ThemeProvider>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
