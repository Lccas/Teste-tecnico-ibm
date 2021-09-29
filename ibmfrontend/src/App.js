import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import ContainerBody from './components/container';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import '../src/styles/container.css';

function App() {
  return (
    <Router>
      <div className="App" overflow="hidden">
        <Header/>
        <ContainerBody/>
        <Footer/>
      </div>

      <Route path="/" exact component={Login}/>
      <Route path="/home" component={Home}/>
    </Router>
  )
}

export default App;
