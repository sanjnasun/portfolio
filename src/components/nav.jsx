import React from "react";
import { Breadcrumbs, Link, Container } from '@mui/material';
import './projects.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Navigation = () => {
    return (
        <Container maxWidth="sm" sx={{ height: '5vh'}}>
            
                <Breadcrumbs aria-label="navigation" sx={{ fontSize: "1.35rem" }} className='belowTitle'>
                    <Link underline="hover" color="black" to="/header" id="h" >
                        <div className='belowTitle'> Home </div>
                    </Link>
                    <Link underline="hover" color="black" to="/projects">
                    <div className='belowTitle'>Projects </div>
                    </Link>
                    <Link underline="hover" color="black" to="/experience">
                    <div className='belowTitle'>Experience</div>
                    </Link>
                    <Link underline="hover" color="black" to="/about">
                    <div className='belowTitle'>About</div>
                    </Link>
                    <Link underline="hover" color="black" to="/contact">
                    <div className='belowTitle'> Contact</div>
                    </Link>
                </Breadcrumbs>
            </Container>
        
    );
}

export default Navigation;
