import React from "react";
import { Breadcrumbs, Container } from '@mui/material';
import './projects.css';
import { HashLink as Link } from "react-router-hash-link";

const Navigation = () => {
    return (
        <Container maxWidth="sm" sx={{ height: '5vh', display: 'flex', alignItems: 'center' }}>
            
            <Breadcrumbs aria-label="navigation">
                <Link underline="hover" color="black" to="#contact">
                    Contact
                </Link>
                {/* You can add other links here as needed */}
            </Breadcrumbs>
        </Container>
    );
}

export default Navigation;
