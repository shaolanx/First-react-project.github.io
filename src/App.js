import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Header from './Header';
// import Technologies from './Technologies';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img className='App-logo' src={logo} alt='123'></img>
      </header>
      <nav className="nav">
        <a href='#s'>Profile</a>
        <a href='#s'>Masseges</a>
        <a href='#s'>Masseges</a>
        <a href='#s'>Masseges</a>
        <a href='#s'>Masseges</a>
      </nav>
      <div className="content">
        Main Content
      </div>  
    </div>
  );
}

export default App;
