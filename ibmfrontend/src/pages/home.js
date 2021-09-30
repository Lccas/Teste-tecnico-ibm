import React from 'react';
import { Box, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import '../styles/container.css';

export default function Homepage(){ 
    return (
        <Box p={{ xs: 2, sm:2, md:5}} className="Container-box">
            <Paper className="Container-map">
                <TextField className="Container-search" label="Search Hashtag" variant="filled" />
            </Paper>
        </Box>
    );
}