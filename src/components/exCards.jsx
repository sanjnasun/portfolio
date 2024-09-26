import React from "react";
import { Card, CardContent, Typography, CardActions } from '@mui/material';
import './projects.css';

const NewCard = ({ name, description, stack }) => {
    return (
        <Card variant="outlined" className="exCard" >
            <CardContent>
                <Typography variant='h3' component='div' sx={{ marginBottom: '0.5rem' }}>
                <div className='belowTitle'>  {name} </div>
                </Typography>
                <Typography variant="h5" color="text.secondary" component="div" sx={{ marginBottom: '0.5rem' }}>
                <div className='belowTitle'>  {stack} </div>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '1rem' }}>
                <div className='belowTitle'>   {description} </div>
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end', padding: '0 1rem 1rem 0' }}>
                
            </CardActions>
        </Card>
    );
}

export default NewCard;
