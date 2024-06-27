import React from "react";
import { Typography, Container, Grid, Box } from '@mui/material';
import CustomCard from "./cards";
import "./projects.css";
import annenberg from "../images/annenberg.png";
import schole from "../images/scholes.png";
import heartbeat from "../images/heartbeats.png";
import reactN from "../images/react.png";

const Projects = () => {
    return (
        <Box sx={{ marginTop: '15%', marginBottom: '15rem' }} className='proj'>
            <Container maxWidth="lg">
            <Typography variant='h1' component='h1' gutterBottom sx={{marginBottom: '7%'}} className="mainTitle">
                <div className='mainTitle'> Projects </div>
                </Typography>

                <Grid container spacing={3} sx={{ marginBottom: '3rem' }}>
                    <Grid item xs={12} md={6}>
                        <CustomCard
                        maxwidth={'100%'}
                        maxheight={'35rem'}
                            name="News Recommender: Chrome Extension" 
                            url = {annenberg}
                            imgheight={'36%'}
                            const description= <p>Spearheaded a group of 3 software engineers to <strong>develop, architect, test, and deploy </strong> 
                             custom chrome extension for USC Annenberg Media. Utilized <strong>ReactJs, MaterialUI, Python API, and MySQL backend. </strong> 
                            Created recommendation algorithm to customize and display user's interested news articles, live events, and notifications from 
                            interested news media sites.</p>
                            page="https://github.com"  
  
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <CustomCard
                        maxwidth={'100%'}
                        maxheight={'35rem'}
                            name="iOS App: HeartBeats Audio"
                            url={heartbeat}
                            imgheight={'36%'}
                            description={
                                <p>
                                    Developed and released an iOS app to the Apple Store, leveraging Apple APIs including <strong>AudioKit</strong> and <strong>HealthKit</strong>. The application integrates with user health data, generating personalized audio albums tailored to breathing patterns, heart rate, and blood pressure levels. Additionally, for diabetic users, the app offers <strong>music alerts</strong>, enhancing their experience and promoting well-being.
                                </p>
                            }
                            page="https://github.com/sanjnasun"
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <CustomCard
                        maxwidth={'100%'}
                        maxheight={'35rem'}
                            name="C++ Black Scholes"
                            url={schole}
                            description={
                                <p>
                                    Developed a C++ project implementing the Black-Scholes exact formula for option pricing in quantitative finance. Leveraging <strong>object-oriented programming principles,</strong> designed classes to model financial instruments and <strong>implemented algorithms</strong> to accurately compute option prices, taking into account factors such as volatility and time to expiration.
                                </p>
                            }
                            imgheight={'36%'}
                            page="https://github.com/sanjnasun"
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <CustomCard
                        maxwidth={'100%'}
                        maxheight={'35rem'}
                            name="RateMyDiningHall: React Native App"
                            url={reactN}
                            description={
                                <p>
                                    Developed and deployed fullstack React Native app, CollegeFind, used by college students to find all services (tutoring, art, commissions, etc.) in the local area based on budget. Utilized <strong>React Native, NodeJS API, and MySQL Backend.</strong> Deployed onto the Android app store.
                                    Allows college students to review, rate, and share opinions of dining halls on various campuses
                                    allergies, and inclusion. 
                                    
                                </p>
                            }
                            imgheight={'36%'}
                            page="https://github.com/sanjnasun"
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Projects;

