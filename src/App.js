import React from 'react';
import './App.css';
import logo from './assets/line.png'
import Routes from './routes';

function App() {

  return (
    <div className="containter">
      <a href="/">
        <img src={logo} alt="AirCnC"/>
      </a>
      <div className="content">
        <Routes/>
      </div>
    </div>
  );
}

export default App;
