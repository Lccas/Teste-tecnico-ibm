import React from "react";
import { AppBar, Toolbar } from '@material-ui/core';
import logo from '../images/logo.png';
import '../styles/header.css';

export default function Header() {
    return (
      <AppBar
        elevation={0}
      >
        <Toolbar className="Header">
          <a href="/"><img src={logo} alt="logo" className="Logo"/></a>
          <span className="Title">Hashtag Search</span>          
        </Toolbar>
      </AppBar>
    );
  }