import React from "react";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './projects.css';

const CustomCard = ({ maxwidth, maxheight, imgheight, url, name, description, page }) => {
    return (
        <a href={page} target="_blank" rel="noopener noreferrer" className="card-link">
        <Card sx={{ width: maxwidth, height: maxheight, borderRadius: '20%' }} className='cardsZZ'>
            <Typography variant='h5' component='div' sx={{marginLeft: '12%', marginTop: '8%', marginRight: '10%'}}>
                <div className='belowTitle'> {name}</div>
            </Typography>

            <CardMedia
                sx={{ height: imgheight, marginLeft:'20%', marginRight:'20%', marginTop:'5%' }}
                image={url}  
            />

            <CardContent>
                <Typography variant='body2' color='text.secondary' sx={{marginLeft: '10%',marginRight: '10%'}}>
                <div className='belowTitle'> {description} </div>
                </Typography>

            </CardContent>
        </Card>
        </a>
    );
}

export default CustomCard;
