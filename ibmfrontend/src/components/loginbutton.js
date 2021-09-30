import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import '../styles/login-button.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button className="Twitter-button" variant="contained" onClick={() => loginWithRedirect()} endIcon={<TwitterIcon/>}>Log In w/ Twitter</Button>;

};

export default LoginButton;