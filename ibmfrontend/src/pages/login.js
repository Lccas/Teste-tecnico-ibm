import React from 'react';
// import { Container } from '@material-ui/core';
import { Box, Paper } from '@material-ui/core';
import '../styles/container.css';
import '../styles/login-button.css'
import LoginButton from '../components/loginbutton';

export default function LoginPage(){ 
    return (
        <Box p={{ xs: 2, sm:2, md:5}} className="Container-box">
            <Paper className="Container-paper">
                <div className="button-teste">
                    <h1 className="Container-header">Login</h1>
                    <LoginButton className="Twitter-button"/>
                </div>
            </Paper>
        </Box>
    );
}