import React from "react";
import { Typography, Grid, Link, Box } from '@mui/material';
import './projects.css'; // Import CSS file for styling
import git from "../images/git.png";
import linkedin from "../images/linkedin.png";
import email from "../images/email.png";


const Contact = () => {
    return (
        <Box className='contact-container'  id='mainTitle'>
            <br></br>
            <Typography variant='h2' component='h2' className="contact-heading" sx={{marginLeft: '33%', marginBottom: '7%'}} id = 'mainTitle'>
                Wanna Connect?
            </Typography>


            
            <Grid sx={{marginLeft:'42%'}}>
                        <Grid item>
                            <Typography variant="h3"><strong> <div className='belowTitle'> Reach Out! </div></strong></Typography>
                        </Grid>
                        <br></br>
                        <br></br>
                        <Grid item container spacing={1} alignItems="center" sx={{padding: '2%'}}>
                            <Grid item>
                            <Link href="mailto:sanjnasu@usc.edu">
                                <img src={email} alt="Email" className = "icon" style={{ width: '50px', height: '50px', marginRight: '1.5rem' }} />
                            </Link>
                            </Grid>
                            
                            <Link href="https://github.com/sanjnasun">
                            <Grid item>
                                <img src={git} alt="GitHub" className = "icon"  style={{ width: '50px', height: '50px', marginRight: '1.5rem' }} />
                            </Grid>
                            </Link>

                            <Link href="https://www.linkedin.com/in/sanjna-sunil26/"> 
                            <Grid item>
                                <img src={linkedin} alt="Linkedin" className = "icon"  style={{ width: '50px', height: '50px' }} />
                            </Grid>
                            </Link>
                        </Grid>
                    </Grid>

        </Box>
    );
};

export default Contact;

