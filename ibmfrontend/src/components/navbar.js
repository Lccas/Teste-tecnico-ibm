import React from "react";
import { AppBar, Toolbar } from '@material-ui/core';
import logo from '../images/logo.png';
import '../styles/navbar.css';

export default function Navbar() {
    return (
      <AppBar
        elevation={0}
      >
        <Toolbar className="Navbar">
          <a href="/"><img src={logo} alt="logo" className="Logo"/></a>
          <span className="Title">Hashtag Search</span>          
        </Toolbar>
      </AppBar>
    );
  }