import React from "react";
import { Typography, Container, Box } from "@mui/material";
import NewCard from "./exCards";
import "./projects.css";


const Experience = () => {
    return (
        <Box sx={{ marginTop: '10%', marginBottom: '10%' }} className='belowClass'>
            <Container maxWidth="lg">
                <Typography variant='h1' component='h2' gutterBottom sx={{marginBottom: '10%'}} className="mainTitle">
                <div className='mainTitle'>Experience</div>
                </Typography>
                
                <NewCard 
                    maxwidth={600}
                    maxheight={300}
                    name={'LabCorp '}
                    description={'Software engineering itern, focusing on client-side applications. Developed full stack project using Angular, Typescript, Springboot, Java, S3 Bucket, Amazon AWS service, and POSTGRE SQL. Collaborated and spearheaded projects with other interns, used CI/CD methodology for DevOps, as well as Jira, BitBucket, and Jenkins. '}
                    stack={'Software Engineering Intern'}
                />
                
                <br/>
                <br/>
                <NewCard 
                    maxwidth={600}
                    maxheight={300}
                    name={'Annenberg Media '}
                    description={'I worked as a software engineer for USC Annenberg, where I desinged, collaborated, with over 30+ students and co-workers. Developed and updated Annenberg Website, as well AI safety project for the Department of Public Safety at USC, making campus safer students.'}
                    stack={'Software Engineer'}
                />
                <br/>
                <br/>
                <NewCard 
                    maxwidth={600}
                    maxheight={300}
                    name={'SpatialSc '}
                    description={'Collaborated as a developer on a spatial development team at USC. Worked with 5 other members using agile methology to develop photo editing app for Meta Quest 3. Used C#, Unity, MySQL, and C++'}
                    stack={'AR/VR Developer'}
                />
            </Container>
        </Box>
    );
}

export default Experience;
