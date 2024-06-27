import React from "react";
import { Box, Container } from "@mui/material";
import ball1 from "../images/ball1.png";
import ball2 from "../images/ball2.png";
import "./projects.css";
import ball3 from "../images/ball3.png";


const Header = () => {
    return (
        <Box sx={{ height: '130', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '25rem' }}>
             
            <Container>
                <div style={{ marginTop: '11rem', fontSize: 100, textAlign: "center", marginBottom: 20 }} id='info' className="mainTitle">Hi, I'm Sanjna.</div>
                <div style={{ fontSize: 40, textAlign: "center" }} className= 'mainTitle' id='info'>welcome to my website</div>

                <div className="ball1">
                    <img src={ball1} alt="floating ball 1" width="200" height="200"></img>
                </div>
                <div className="ball2">
                    <img src={ball2} alt="Floating ball 2" width="200" height="200"></img>
                </div>

                <div className="ball3">
                    <img src={ball3} alt="Floating ball 2" width="200" height="200"></img>
                </div>

            </Container>
        </Box>
    );
}

export default Header;
