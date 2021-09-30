import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain="dev-1g3c28ud.us.auth0.com"
    clientId="Yl1SLQB15SJAO7YYhVvKl9p5f5D21oXd"
    redirect_uri={'https://teste-tecnico-ibm.vercel.app/home'}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);
