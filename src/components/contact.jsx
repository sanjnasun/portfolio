import React from "react";
import { createTheme, ThemeProvider, Typography, Grid, Link, Box, Container } from '@mui/material';
import './projects.css'; // Import CSS file for styling
import git from "../images/git.png";
import linkedin from "../images/linkedin.png";
import email from "../images/email.png";

// Create the theme
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



const Contact = () => {
    return (
        <section id="contact">
            <Box className='header-container'>
                <Container maxWidth="lg">
                    <ThemeProvider theme={theme}>
                        <Typography variant='h2' component='h2' className="mainTitle" align="center">
                            Wanna Connect?
                        </Typography>
                        <Grid item>
                            <Typography variant="h3" align="center" sx={{ color: 'white' }}>
                                <strong>
                                    <div>
                                        Reach Out!
                                    </div>
                                </strong>
                            </Typography>
                        </Grid>
                        <br />
                        <br />
                        <Grid item container spacing={1} alignItems="center" justifyContent="center" className="mainTitle" sx={{ padding: '2%' }}>
                            <Grid item>
                                <Link href="mailto:sanjnasu@usc.edu">
                                    <img src={email} alt="Email" className="icon" target="_blank" rel="noreferrer" style={{ width: '50px', height: '50px', marginRight: '1.5rem' }} />
                                </Link>
                            </Grid>

                            <Link href="https://github.com/sanjnasun">
                                <Grid item>
                                    <img src={git} alt="GitHub" className="icon" target="_blank" rel="noreferrer" style={{ width: '50px', height: '50px', marginRight: '1.5rem' }} />
                                </Grid>
                            </Link>

                            <Link href="https://www.linkedin.com/in/sanjna-sunil26/">
                                <Grid item>
                                    <img src={linkedin} alt="Linkedin" className="icon" target="_blank" rel="noreferrer" style={{ width: '50px', height: '50px' }} />
                                </Grid>
                            </Link>
                        </Grid>
                    </ThemeProvider>
                </Container>
            </Box>
        </section>
    );
};

export default Contact;
