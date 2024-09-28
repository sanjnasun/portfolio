import React from "react";
import { createTheme, ThemeProvider, Typography, Container, Box } from "@mui/material";
import NewCard from "./exCards";
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


  const experiences = [
    {
        name: 'Sharada Research Group', 
        description: 'Collaborated with two PhD candidates and an interdisciplinary team to normalize scaling and illustrate Daubechies wavelets for matrix completion algorithms, enhancing research methodologies and outcomes.',
        stack: 'Undergraduate Student Researcher'
    },
    {
        name: 'LabCorp', 
        description: 'Served as a Software Engineering Intern, focusing on client-side applications. Developed a full-stack project using Angular, TypeScript, Spring Boot, Java, S3, AWS, and PostgreSQL. Led collaborative initiatives with fellow interns, employing CI/CD methodologies and utilizing tools such as Jira, Bitbucket, and Jenkins for efficient project management.',
        stack: 'Software Engineer'
    },
    {
        name: 'Annenberg Media', 
        description: 'Functioned as a Software Engineer at USC Annenberg, where I designed and collaborated with a diverse team of over 30 students and colleagues. Played a key role in developing and updating the Annenberg website and contributed to an AI safety project aimed at enhancing campus security for students.',
        stack: 'Software Engineer'
    },
    {
        name: 'SpatialSC', 
        description: 'Contributed as a developer on a spatial development team at USC, collaborating with five members using agile methodologies. Developed a photo editing app for Meta Quest 3, leveraging skills in C#, Unity, MySQL, and C++ to create an immersive user experience.',
        stack: 'AR/VR Developer'
    }
];


const Experience = () => {
    return (
        <Box className="header-container" sx={{marginTop: '10%'}}>
            <Container maxWidth="lg">
            <ThemeProvider theme={theme}>
                <Typography variant='h1' component='h1' className="mainTitle" gutterBottom >
                    Experience
                </Typography>
               </ThemeProvider>
                {experiences.map((exp) => (
                <NewCard 
                    name={exp.name}
                    description={exp.description}
                    stack={exp.stack}
                />
            ))}
            
            </Container>
        </Box>
    );
}

export default Experience;
