import React from 'react';
import Header from './components/header';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <h1>hello world</h1>
      </div>

      <Route path="/" exact component={Login}/>
      <Route path="/home" component={Home}/>
    </Router>
  )
}

export default App;
