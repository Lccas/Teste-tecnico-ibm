import React from 'react';
// import { Container } from '@material-ui/core';
import { Box, Paper } from '@material-ui/core';
import '../styles/container.css';

export default function Homepage(){ 
    return (
        <Box p={{ xs: 2, sm:2, md:5}} className="Container-box">
            <Paper className="Container-paper">
            </Paper>
        </Box>
    );
}