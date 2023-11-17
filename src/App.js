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
        <a href='#s'>Masseges --- 01 </a>
        <a href='#s'>Masseges --- 02 </a>
        <a href='#s'>Masseges --- 03 </a>
        <a href='#s'>Settings</a>
      </nav>
      <div className="content">
        Main Content
      </div>  
    </div>
  );
}

//это тестовый текст

export default App;
