import React from 'react';
// import { Container } from '@material-ui/core';
import { Box, Paper } from '@material-ui/core';
import '../styles/container.css';

export default function ContainerBody(){ 
    return (
        <Box p={{ xs: 2, sm:2, md:5}} className="Container-box">
            <Paper className="Container-paper">
                <h1>teste</h1>
            </Paper>
        </Box>
    );
}